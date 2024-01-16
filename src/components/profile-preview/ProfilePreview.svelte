<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { Profile } from '../../models/Profile';
	import { currentProfile } from '../../store/store';

	export let profile: Profile;

	$: initials =
		profile.firstname.charAt(0).toUpperCase() + profile.lastname.charAt(0).toUpperCase();
</script>

<a class="card card-hover overflow-scroll max-w-[20vw] max-h-[50vh]" href="/">
	<header>
		<img
			src="https://cdn.pixabay.com/photo/2024/01/07/16/27/chinese-reed-8493547_1280.jpg"
			class="bg-black/50 w-full aspect-[21/9]"
			alt="Post"
		/>
		<Avatar
			src="https://cdn.pixabay.com/photo/2016/07/04/04/32/sock-1495920_1280.jpg"
			border="border-4 border-surface-800"
			class="relative top-[-30px] left-[38%]"
			{initials}
		/>
	</header>

	<div class="p-4 text-center">
		<h3 class="h3">{profile.firstname}</h3>
		<h6 class="h6">{$currentProfile.similarityRate(profile)}% similar</h6>
	</div>
</a>
