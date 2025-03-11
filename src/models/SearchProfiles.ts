import type { ProfileParams } from "./Profile";

export type SearchProfiles = {
    firstname?: string;
    sortDirection?: 'asc' | 'desc';
    sortField?: keyof ProfileParams;
    colors?: string[];
};