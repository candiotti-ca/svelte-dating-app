<script lang="ts">
	import { AppBar, AppRail, AppRailAnchor, AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import { page } from '$app/stores';
	import SearchBar from '../components/search-bar/SearchBar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar slotDefault="place-self-center">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Sock Dating App</strong>
			</svelte:fragment>

			<SearchBar />
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
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
