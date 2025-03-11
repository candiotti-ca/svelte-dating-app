<script lang="ts">
	import ProfilePreview from '../../components/profile-preview/ProfilePreview.svelte';
	import type { SearchProfiles } from '../../models/SearchProfiles';
	import { colors, profiles, searchProfiles } from '../../store/store';

	let areFiltersVisible = $state(false);
	let sortPreference = $state<SearchProfiles>({});
	let colorPreference = $state<string[]>([]);
	const sortOptions = [
		{ value: { sortDirection: 'asc', sortField: 'age' }, label: 'By age asc' },
		{ value: { sortDirection: 'desc', sortField: 'age' }, label: 'By age desc' }
	];

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
			{#each $colors as color}
				<option value={color.name}>{color.name}</option>
			{/each}
		</select>
	</label>
{/if}

<div class="flex space-x-4">
	{#each $profiles as profile}
		<ProfilePreview {profile} />
	{/each}
</div>
