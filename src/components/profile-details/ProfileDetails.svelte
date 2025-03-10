<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { Profile } from '../../models/Profile';
	import { ages, currentProfile, profiles } from '../../store/store';
	import ProfilePicture from '../profile-picture/ProfilePicture.svelte';

	const modalStore = getModalStore();
	const profile: Profile = $modalStore[0].meta;
	$: age = $ages.find((a) => a.value == profile.age);
	let loggedInProfile: Profile = $currentProfile;
	$: indexInFavorites = loggedInProfile.favoriteProfiles.indexOf(profile.id);

	function togglePairing(event: Event): void {
		event.stopPropagation();

		if (indexInFavorites > -1) {
			loggedInProfile.favoriteProfiles.splice(indexInFavorites);
		} else {
			loggedInProfile.favoriteProfiles.push(profile.id);
		}

		profiles.updatePairsOfProfile(loggedInProfile);
		modalStore.close();
	}
</script>

<div class="card min-w-[20vw] max-w-[20vw] min-h-[60vh]">
	<header class="card-header rounded-t-3xl min-h-[25vh] pt-[5vh] pl-[7vw]">
		<ProfilePicture {profile} />
	</header>

	<div class="p-4 space-y-4">
		<div class="flex justify-between">
			<h2 class="h2">
				{profile.firstname}
				{profile.lastname}
			</h2>
			<span class="chip variant-filled-tertiary text-white cursor-default">
				{$currentProfile.formattedSimilarityRate(profile)} similar
			</span>
		</div>

		<article>
			<p title="Location" class="mb-1">
				<i class="fa-solid fa-location-dot text-tertiary-500 mr-2" />
				{profile.city}
			</p>
			{#if age}
				<p title="Age" class="mb-1">
					<i class="fa-solid fa-cake-candles text-tertiary-500 mr-2" />
					{age.description}
				</p>
			{/if}
			<p title="Size">
				<i class="fa-solid fa-fingerprint text-tertiary-500 mr-2" />
				{profile.size}
			</p>

			<h4 class="h4 mt-4">Abstract</h4>
			{#if profile.abstract}
				<p>{profile.abstract}</p>
			{:else}
				<p>This profile has no abstract yet!</p>
			{/if}

			<div class="flex justify-center">
				<button
					type="button"
					class="btn variant-filled-primary text-white mt-3"
					on:click={togglePairing}
				>
					{indexInFavorites > -1 ? 'Remove from pairs' : 'Make a pair!'}
				</button>
			</div>
		</article>
	</div>
</div>
