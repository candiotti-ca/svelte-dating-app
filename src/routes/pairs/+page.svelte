<script lang="ts">
	import ProfilePreview from '../../components/profile-preview/ProfilePreview.svelte';
	import { pairsOfCurrentProfile } from '../../store/store';
</script>

<div class="flex space-x-4">
	{#each $pairsOfCurrentProfile as profile}
		<ProfilePreview {profile} />
	{/each}
</div>
