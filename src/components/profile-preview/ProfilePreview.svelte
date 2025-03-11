<script lang="ts">
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { Profile } from '../../models/Profile';
	import { ProfilesService } from '../../services/profiles.service';
	import { currentProfile } from '../../store/store';
	import ProfileDetails from '../profile-details/ProfileDetails.svelte';
	import ProfilePicture from '../profile-picture/ProfilePicture.svelte';

	const modalStore = getModalStore();

	/* the socket that is currently displayed. Not the current profile. */
	const { profile }: { profile: Profile } = $props();

	const loggedInProfile: Profile = $currentProfile!;
	let indexInFavorites = $derived(loggedInProfile.favoriteProfiles.indexOf(profile.id));

	function showDetails(): void {
		const component: ModalComponent = { ref: ProfileDetails };
		modalStore.trigger({
			type: 'component',
			component,
			meta: profile
		});
	}

	function togglePairing(event: Event): void {
		event.stopPropagation();

		if (indexInFavorites > -1) {
			loggedInProfile.favoriteProfiles.splice(indexInFavorites);
		} else {
			loggedInProfile.favoriteProfiles.push(profile.id);
		}

		ProfilesService.updateCurrentProfile({
			favoriteProfiles: loggedInProfile.favoriteProfiles
		}).then((updated) => currentProfile.set(updated));
		//TODO fix reactivity
	}
</script>

<article
	class="card card-hover cursor-pointer"
	on:click={showDetails}
	data-testid="profile-preview"
>
	<div class="p-4 w-[20vw] h-[40vh] flex flex-col justify-between">
		<div class="flex justify-end">
			<button
				data-testid="pair-sock"
				title="Make a pair!"
				on:click={togglePairing}
				class="btn-icon variant-filled{indexInFavorites > -1 ? '-primary' : ''} text-white"
			>
				<i class="fa-solid fa-socks" />
			</button>
		</div>

		<div class="flex justify-center items-center">
			<ProfilePicture {profile} --bottom="85px" --right="45px" />
		</div>

		<div class="text-start">
			<h2 class="h2">
				{profile.firstname}
				{profile.lastname?.charAt(0)?.toUpperCase()}.
			</h2>
			<p class="font-light">
				{loggedInProfile.formattedSimilarityRate(profile)} similar
			</p>
		</div>
	</div>
</article>
