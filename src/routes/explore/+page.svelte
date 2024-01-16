<script lang="ts">
	import ProfilePreview from '../../components/profile-preview/ProfilePreview.svelte';
	import { profilesToExplore } from '../../store/store';
</script>

<div class="flex space-x-4">
	{#each $profilesToExplore as profile}
		<ProfilePreview {profile} />
	{/each}
</div>
