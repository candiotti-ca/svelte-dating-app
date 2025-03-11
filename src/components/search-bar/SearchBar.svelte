<script lang="ts">
	import { goto } from '$app/navigation';
	import { searchProfiles } from '../../store/store';

	let searchInput = $state('');

	function checkPressedKey(event: KeyboardEvent): void {
		if (event.key == 'Enter') {
			search();
		}
	}

	function search(): void {
		searchProfiles.update((params) => ({ ...params, firstname: searchInput }));
		goto('/explore');
	}

	function clear(): void {
		searchInput = '';
		searchProfiles.update((params) => ({ ...params, firstname: undefined }));
	}
</script>

<div class="flex">
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-[25vw]">
		<button class="input-group-shim text-surface-900" onclick={search} aria-label="search">
			<i class="fa-solid fa-magnifying-glass" />
		</button>

		<input
			type="text"
			placeholder="Seek happiness"
			onkeydown={checkPressedKey}
			bind:value={searchInput}
		/>

		{#if searchInput}
			<button onclick={clear} class="text-surface-900" aria-label="clear">
				<i class="fa fa-times" />
			</button>
		{/if}
	</div>
</div>
