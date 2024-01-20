<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { Profile } from '../../models/Profile';
	import { ages, currentProfile } from '../../store/store';

	const modalStore = getModalStore();
	const profile: Profile = $modalStore[0].meta;
	$: age = $ages.find((a) => a.value == profile.age);
</script>

<div class="card min-w-[20vw] min-h-[60vh]">
	<header class="card-header rounded-t-3xl min-h-[20vh] {profile.bgColor.code}"></header>

	<div class="p-4 space-y-4">
		<div class="flex justify-between">
			<h2 class="h2">
				{profile.firstname}
				{profile.lastname}
			</h2>
			<span class="chip variant-filled cursor-default">
				{$currentProfile.formattedSimilarityRate(profile)} similar
			</span>
		</div>

		<article>
			<p title="Location" class="mb-1">
				<i class="fa-solid fa-location-dot text-primary-500 mr-2" />
				{profile.city}
			</p>
			{#if age}
				<p title="Age" class="mb-1">
					<i class="fa-solid fa-cake-candles text-primary-500 mr-2" />
					{age.description}
				</p>
			{/if}
			<p title="Size">
				<i class="fa-solid fa-fingerprint text-primary-500 mr-2" />
				{profile.size}
			</p>

			<h4 class="h4 mt-4">Abstract</h4>
			{#if profile.abstract}
				<p>{profile.abstract}</p>
			{:else}
				<p>This profile has no abstract yet!</p>
			{/if}

			<h4 class="h4 mt-4 mb-1">Keywords</h4>
			<div>
				<span class="chip variant-filled-secondary cursor-default">
					{profile.pattern}
				</span>

				{#each profile.colors as color}
					<span class="chip variant-filled-tertiary cursor-default">
						{color.name}
					</span>
				{/each}
			</div>
		</article>
	</div>
</div>
