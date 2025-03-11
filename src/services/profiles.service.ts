import { Profile, type ProfileParams } from "../models/Profile";
import type { SearchProfiles } from "../models/SearchProfiles";

export class ProfilesService {
    static getCurrentProfile(fetchEvent: any): Promise<Profile> {
        return fetchEvent('/profile')
            .then((response: Response) => response.json())
            .then((profile: ProfileParams) => new Profile(profile));
    }

    static updateCurrentProfile(update: Partial<ProfileParams>): Promise<Profile> {
        return fetch('/profile', { body: JSON.stringify(update), method: 'PATCH' })
            .then((response: Response) => response.json())
            .then((profile: ProfileParams) => new Profile(profile));
    }

    static searchProfiles(params: SearchProfiles): Promise<Profile[]> {
        const queryParams = Object.entries(params)
            .filter(([_, value]) => value)
            .map(([key, value]) => {
                if (value instanceof Array) {
                    return value.map(v => `${key}=${v}`).join('&');
                }
                return `${key}=${value}`;
            })
            .join('&');

        const query = `/explore${params ? '?' : ''}${queryParams}`;

        return fetch(query)
            .then((response: Response) => response.json())
            .then((profiles: ProfileParams[]) => profiles.map(profile => new Profile(profile)));
    }
}