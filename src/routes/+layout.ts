import { ProfilesService } from "../services/profiles.service";
import { currentProfile } from "../store/store";

export async function load(loadEvent: any) {
    return await ProfilesService.getCurrentProfile(loadEvent.fetch)
        .then(profile => currentProfile.set(profile));
}