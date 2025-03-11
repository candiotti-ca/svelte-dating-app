import { Profile, type ProfileParams } from "../models/Profile";

export class ProfilesService {
    static getCurrentProfile(fetchEvent: any): Promise<Profile> {
        return fetchEvent('/profile')
            .then((response: Response) => response.json())
            .then((profile: ProfileParams) => new Profile(profile));
    }
}