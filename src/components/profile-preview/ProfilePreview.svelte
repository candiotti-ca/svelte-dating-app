<script lang="ts">
	import type { Profile } from '../../models/Profile';
	import { currentProfile, profiles } from '../../store/store';

	export let profile: Profile;
	let loggedInProfile: Profile = $currentProfile;

	$: indexInFavorites = loggedInProfile.favoriteProfiles.indexOf(profile.id);

	function goToProfileDetails(): void {
		console.log('go to profile details');
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

<button class="card card-hover bg-red" on:click={goToProfileDetails} data-testid="profile-preview">
	<div class="p-4 w-[20vw] h-[50vh] overflow-scroll flex flex-col justify-between">
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
			<h2 class="h2">
				{profile.firstname}
				{profile.lastname?.charAt(0)?.toUpperCase()}.
			</h2>
			<p class="font-light">{$currentProfile.formattedSimilarityRate(profile)} similar</p>
		</div>
	</div>
</button>
