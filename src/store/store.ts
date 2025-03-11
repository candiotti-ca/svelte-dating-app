import { derived, readable, writable, type Readable, type Writable } from "svelte/store";
import type { Age } from "../models/Age";
import type { Color } from "../models/Color";
import type { Pattern } from "../models/Pattern";
import { Profile } from "../models/Profile";
import type { SearchProfiles } from "../models/SearchProfiles";
import { ProfilesService } from "../services/profiles.service";

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
    { id: 1, name: 'Red', code: '#F26469' },
    { id: 2, name: 'Yellow', code: '#F3B562' },
    { id: 3, name: 'Blue', code: '#3B889A' },
    { id: 4, name: 'Purple', code: '#9085BA' },
    { id: 5, name: 'Green', code: '#76B479' }
]);

export const currentProfile: Writable<Profile | null> = writable(null);

export const searchProfiles: Writable<SearchProfiles> = writable({});
export const profiles: Readable<Profile[]> = derived(searchProfiles, ($searchProfiles, set) => {
    ProfilesService.searchProfiles($searchProfiles).then(result => set(result));
}, [] as Profile[]);

export const pairsOfCurrentProfile: Readable<Profile[]> = derived([currentProfile, profiles], ([currentProfile, profiles]) => {
    return profiles.filter(profile => currentProfile?.favoriteProfiles.includes(profile.id) ?? []);
});