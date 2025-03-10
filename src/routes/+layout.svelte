<script lang="ts">
	import { page } from '$app/stores';
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		AppShell,
		Modal,
		initializeStores,
		storePopup
	} from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import SearchBar from '../components/search-bar/SearchBar.svelte';

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Modal />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotDefault="place-self-center" background="bg-surface-500">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Sock Dating App</strong>
			</svelte:fragment>

			<!-- <SearchBar /> -->
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail background="bg-surface-500">
			<AppRailAnchor href="/explore" selected={$page.url.pathname === '/explore'}>
				<svelte:fragment slot="lead"><i class="fa-solid fa-magnifying-glass" /></svelte:fragment>
				<span>Explore</span>
			</AppRailAnchor>

			<AppRailAnchor href="/pairs" selected={$page.url.pathname === '/pairs'}>
				<svelte:fragment slot="lead"><i class="fa-solid fa-socks" /></svelte:fragment>
				<span>Pairs</span>
			</AppRailAnchor>

			<AppRailAnchor href="/profile" selected={$page.url.pathname === '/profile'}>
				<svelte:fragment slot="lead"><i class="fa-solid fa-user" /></svelte:fragment>
				<span>Profile</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>

	<div class="p-20">
		<slot />
	</div>
</AppShell>
