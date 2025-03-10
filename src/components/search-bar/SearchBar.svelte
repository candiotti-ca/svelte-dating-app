<script lang="ts">
	let searchInput: HTMLInputElement;

	function checkPressedKey(event: KeyboardEvent): void {
		if (event.key == 'Enter') {
			search();
		}
	}

	function search(): void {
		console.log(searchInput.value);
		//TODO goto('/explore')
	}

	function clear(): void {
		console.log('clear');
	}	
</script>

<div class="flex">
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] w-[25vw]">
		<button class="input-group-shim" on:click={search}>
			<i class="fa-solid fa-magnifying-glass" />
		</button>
		
		<input
		type="search"
		placeholder="Chercher bonheur"
		on:keydown={checkPressedKey}
		bind:this={searchInput}
		/>
		
		{#if searchInput?.value}
		<button class="input-group-shim" on:click={clear}>
			<i class="fa fa-times" />
		</button>
		{/if}
	</div>
</div>