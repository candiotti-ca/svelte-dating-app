<script lang="ts">
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { Profile } from '../../models/Profile';
	import { currentProfile, profiles } from '../../store/store';
	import ProfileDetails from '../profile-details/ProfileDetails.svelte';

	const modalStore = getModalStore();
	export let profile: Profile;
	const bgColor = `bg-shadow-${profile.bgColor.code}/100`;
	let loggedInProfile: Profile = $currentProfile;
	$: indexInFavorites = loggedInProfile.favoriteProfiles.indexOf(profile.id);

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

		profiles.updatePairsOfProfile(loggedInProfile);
	}
</script>

<button class="card card-hover {bgColor}" on:click={showDetails} data-testid="profile-preview">
	<div class="p-4 w-[15vw] h-[40vh] overflow-scroll flex flex-col justify-between">
		<div class="flex justify-end">
			<button
				data-testid="pair-sock"
				title="Make a pair!"
				on:click={togglePairing}
				class="btn-icon variant-filled{indexInFavorites > -1 ? '-primary' : ''}"
			>
				<i class="fa-solid fa-socks" />
			</button>
		</div>

		<div class="text-start">
			<h2 class="h2 text-white">
				{profile.firstname}
				{profile.lastname?.charAt(0)?.toUpperCase()}.
			</h2>
			<p class="font-light text-white">
				{$currentProfile.formattedSimilarityRate(profile)} similar
			</p>
		</div>
	</div>
</button>
