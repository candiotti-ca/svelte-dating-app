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

const profileA: Profile = new Profile({
    id: '1',
    lastname: 'John',
    firstname: 'Doe',
    abstract: "Je déteste les salles de bains, on finit toujours mouillé !",
    city: 'Tiroir de gauche',
    size: 37,
    colors: [{ name: 'Red', code: '#F06060' }, { name: 'Yellow', code: '#F3B562' }],
    age: 3,
    pattern: 'Striped',
    favoriteProfiles: []
});

const profileB: Profile = new Profile({
    id: '2',
    firstname: 'Joe',
    lastname: 'Doe',
    abstract: "Ma partenaire a été perdue dans une piscine à boules. Cela a été un terrible évènement pour moi, une disparition brutale! Peut-être qu'une bonne paire en laine me donnera du réconfort...",
    city: 'Tiroir de droite',
    size: 38,
    colors: [{ name: 'Blue', code: '#8CBEB2' }, { name: 'White', code: '#F2EBBF' }],
    age: 0,
    pattern: 'Striped',
    favoriteProfiles: []
});

const profileC: Profile = new Profile({
    id: '3',
    firstname: 'Doe',
    lastname: 'Doe',
    abstract: "J'ai perdu ma paire lors de mon passage dans la machine a laver. Je recherche celle qui m'accompagnera toute la vie",
    city: 'Tiroir de gauche',
    size: 38,
    colors: [{ name: 'Gray', code: '#5C4B51' }, { name: 'Red', code: '#F06060' }],
    age: 1,
    pattern: 'Polka-Dot',
    favoriteProfiles: []
});

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