import { derived, readable, writable, type Readable, type Writable } from "svelte/store";
import type { Age } from "../models/Age";
import type { Color } from "../models/Color";
import type { Pattern } from "../models/Pattern";
import { Profile } from "../models/Profile";

export const ages: Readable<Age[]> = readable([
    { value: 0, description: "Brand new!" },
    { value: 1, description: "Regular use" },
    { value: 2, description: "Some quite kilometers at the clock" },
    { value: 3, description: "Holed all over" }
]);

export const patterns: Readable<Pattern[]> = readable([
    { name: 'Striped' },
    { name: 'Plain' },
    { name: 'Polka-Dot' },
    { name: 'Chevron' }
]);

export const colors: Readable<Color[]> = readable([
    { name: 'Red', code: '#F06060' },//#F26469 red
    { name: 'Yellow', code: '#F3B562' },//#9085BA purple
    { name: 'Blue', code: '#8CBEB2' }, //#3B889A blue
    { name: 'White', code: '#F2EBBF' },//#76B479 green
    { name: 'Gray', code: '#5C4B51' }
]);

const profileA: Profile = new Profile(
    '1',
    'John',
    'Doe',
    "Je déteste les salles de bains, on finit toujours mouillé !",
    'Tiroir de gauche',
    37,
    [{ name: 'Red', code: '#F06060' }, { name: 'Yellow', code: '#F3B562' }],
    3,
    'Striped',
    [],
    { name: 'Success', code: 'success-500' }
);

const profileB: Profile = new Profile(
    '2',
    'Joe',
    'Doe',
    "Ma partenaire a été perdue dans une piscine à boules. Cela a été un terrible évènement pour moi, une disparition brutale! Peut-être qu'une bonne paire en laine me donnera du réconfort...",
    'Tiroir de droite',
    38,
    [{ name: 'Blue', code: '#8CBEB2' }, { name: 'White', code: '#F2EBBF' }],
    0,
    'Striped',
    [],
    { name: 'Secondary', code: 'secondary-500' }
);

const profileC: Profile = new Profile(
    '3',
    'Doe',
    'Doe',
    "J'ai perdu ma paire lors de mon passage dans la machine a laver. Je recherche celle qui m'accompagnera toute la vie",
    'Tiroir de gauche',
    38,
    [{ name: 'Gray', code: '#5C4B51' }, { name: 'Red', code: '#F06060' }],
    1,
    'Polka-Dot',
    [],
    { name: 'Tertiary', code: 'tertiary-500' }
);

export interface WritableProfiles extends Readable<Profile[]> {
    updatePairsOfProfile(toUpdate: Profile): void;
    updateProfile(toUpdate: Profile): void;
}
function createProfiles(initialValue: Profile[]): WritableProfiles {
    const { subscribe, update }: Writable<Profile[]> = writable(initialValue);

    return {
        subscribe,
        updatePairsOfProfile: (toUpdate: Profile) => update(profiles => {
            const found = profiles.find(p => p.id == toUpdate.id);
            if (found) {
                found.favoriteProfiles = toUpdate.favoriteProfiles;
            }

            return profiles;
        }),
        updateProfile: (toUpdate: Profile) => update(profiles => {
            const found = profiles.find(p => p.id == toUpdate.id);
            if (found) {
                found.firstname = toUpdate.firstname;
                found.lastname = toUpdate.lastname;
                found.age = toUpdate.age;
                found.city = toUpdate.city;
                found.abstract = toUpdate.abstract;
                found.size = toUpdate.size;
                found.pattern = toUpdate.pattern;
                found.colors = toUpdate.colors;
            }

            return profiles;
        })
    };
}

export const profiles: WritableProfiles = createProfiles([
    profileA, profileB, profileC
]);

export const currentProfile: Writable<Profile> = writable(profileA);
export const pairsOfCurrentProfile: Readable<Profile[]> = derived([currentProfile, profiles], ([currentProfile, profiles]) => {
    return profiles.filter(profile => currentProfile.favoriteProfiles.includes(profile.id));
});
export const profilesToExplore: Readable<Profile[]> = derived([currentProfile, profiles], ([currentProfile, profiles]) => {
    return profiles.filter(profile => currentProfile.id != profile.id);
});