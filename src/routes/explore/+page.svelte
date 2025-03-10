<script lang="ts">
	import ProfilePreview from '../../components/profile-preview/ProfilePreview.svelte';
	import { profilesToExplore } from '../../store/store';
	
	function displayFilters(): void {
		console.log('display filters');
	}
</script>

<div class="flex space-x-4">
	
	<button  on:click={displayFilters}>
		<i class="fa fa-filter" />
	</button>
	
	<label class="label">
		<span>Sort</span>
		<select class="select">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
		</select>
	</label>
	
	{#each $profilesToExplore as profile}
		<ProfilePreview {profile} />
	{/each}
</div>
