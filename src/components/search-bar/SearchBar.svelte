<script lang="ts">
	let searchInput: HTMLInputElement;

	function checkPressedKey(event: KeyboardEvent): void {
		if (event.key == 'Enter') {
			search();
		}
	}

	function search(): void {
		console.log(searchInput.value);
	}
</script>

<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-[25vw]">
	<button class="input-group-shim" on:click={search}>
		<i class="fa-solid fa-magnifying-glass" />
	</button>
	<input
		type="search"
		placeholder="This search bar is not working for now :)"
		on:keydown={checkPressedKey}
		bind:this={searchInput}
	/>
</div>
