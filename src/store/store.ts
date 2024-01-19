import { derived, readable, writable, type Readable, type Writable } from "svelte/store";
import type { Age } from "../models/Age";
import type { Color } from "../models/Color";
import type { Pattern } from "../models/Pattern";
import { Profile } from "../models/Profile";

export const ages: Readable<Age[]> = readable([
    { value: 0, description: "Brand new!" },
    { value: 1, description: "Barely worn" },
    { value: 2, description: "Regular use" },
    { value: 3, description: "Used by life" },
    { value: 4, description: "Holed all over" }
]);

export const patterns: Readable<Pattern[]> = readable([
    { name: 'Striped' },
    { name: 'Plain' },
    { name: 'Polka-dot' },
    { name: 'Custom' },
    { name: 'Rhombus' },
    { name: 'ZigZag' },
    { name: 'Cross' }
]);

export const colors: Readable<Color[]> = readable([
    { name: 'Red', code: '#F00' },
    { name: 'Yellow', code: '#0FF' },
    { name: 'Blue', code: '#00F' },
    { name: 'Green', code: '#0F0' }
]);


const profileA: Profile = new Profile(
    '1',
    'John',
    'Doe',
    "J'ai perdu ma partenaire lors de mon passage dans la machine a laver. Je cherche ma paire pour la vie",
    'Tiroir de gauche',
    37,
    [],
    0,
    'Striped',
    []
);

const profileB: Profile = new Profile(
    '2',
    'Joe',
    'Doe',
    "",
    'Tiroir de droite',
    38,
    [],
    0,
    'Striped'
);

const profileC: Profile = new Profile(
    '3',
    'Doe',
    'Doe',
    "",
    'Tiroir de gauche',
    38,
    [],
    1,
    'Polka-Dot'
);

export interface WritableProfiles extends Readable<Profile[]> {
    updatePairsOfProfile(toUpdate: Profile): void;
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