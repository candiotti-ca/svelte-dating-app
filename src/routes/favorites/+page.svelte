<script lang="ts">
	import ProfilePreview from '../../components/profile-preview/ProfilePreview.svelte';
	import type { Profile } from '../../models/Profile';

	const mock_favs: Profile[] = [
		{ firstname: 'Joe', lastname: 'sock' },
		{ firstname: 'Jon', lastname: 'sock' },
		{ firstname: 'Doe', lastname: 'sock' }
	];
</script>

<div class="flex gap-4 p-10">
	{#each mock_favs as profile}
		<ProfilePreview {profile} />
	{/each}
</div>
