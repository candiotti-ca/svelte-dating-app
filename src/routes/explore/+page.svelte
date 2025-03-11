<script lang="ts">
	import ProfilePreview from '../../components/profile-preview/ProfilePreview.svelte';
	import type { SearchProfiles } from '../../models/SearchProfiles';
	import { colors, patterns, profiles, searchProfiles } from '../../store/store';

	const sortOptions = [
		{ value: { sortDirection: 'asc', sortField: 'age' }, label: 'Youngest' },
		{ value: { sortDirection: 'desc', sortField: 'age' }, label: 'Oldest' },
		{ value: { sortDirection: 'desc', sortField: 'similarity' }, label: 'Most similar' }
	];

	let areFiltersVisible = $state(false);
	let sortPreference = $state<SearchProfiles>({});
	let colorPreference = $state<string[]>([]);
	let patternPreference = $state<string>();

	function displayFilters(): void {
		areFiltersVisible = !areFiltersVisible;
	}

	function refreshProfiles(preferences: Partial<SearchProfiles>): void {
		searchProfiles.update((search) => ({ ...search, ...preferences }));
	}
</script>

<button onclick={displayFilters}>
	<i class="fa fa-filter" />
</button>
{#if areFiltersVisible}
	<label class="label">
		<span>Sort</span>
		<select
			class="select"
			bind:value={sortPreference}
			onchange={() => refreshProfiles(sortPreference)}
		>
			{#each sortOptions as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
	</label>

	<label class="label">
		<span>Colors</span>
		<select
			class="select"
			bind:value={colorPreference}
			multiple
			onchange={() => refreshProfiles({ colors: colorPreference })}
		>
			{#each $colors as option}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	</label>

	<label class="label">
		<span>Pattern</span>
		<select
			class="select"
			bind:value={patternPreference}
			onchange={() => refreshProfiles({ pattern: patternPreference })}
		>
			<option value={null}>--Select a pattern--</option>
			{#each $patterns as option}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	</label>
{/if}

<div class="flex space-x-4">
	{#each $profiles as profile}
		<ProfilePreview {profile} />
	{/each}
</div>
