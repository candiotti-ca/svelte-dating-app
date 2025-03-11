import { Profile, type ProfileParams } from "../models/Profile";
import { currentProfile } from "../store/store";
import { doFetch } from "../utils/utils";

export async function load(loadEvent: any) {
    return await doFetch<ProfileParams>('/profile', loadEvent.fetch)
        .then(profile => currentProfile.set(new Profile(profile)));
}