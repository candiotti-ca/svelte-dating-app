<script lang="ts">
	import { onDestroy } from 'svelte';
	import ProfilePicture from '../../components/profile-picture/ProfilePicture.svelte';
	import type { Color } from '../../models/Color';
	import { ages, colors, currentProfile, patterns, profiles, themeColors } from '../../store/store';

	let profile = $currentProfile;

	function toggleColor(color: Color): void {
		const index = profile.colors.indexOf(color);
		if (index > -1) {
			profile.colors.splice(index);
		} else {
			profile.colors.push(color);
		}
		profile.colors = [...profile.colors];
	}

	onDestroy(() => profiles.updateProfile(profile));
</script>

<div class="flex flex-col items-center mb-10">
	<div
		style="clip-path: circle(50% at center);"
		class="flex justify-center items-center h-[230px] w-[230px] bg-{profile.bgColor.code}"
	>
		<ProfilePicture {profile} --bottom="80px" --right="33px" />
	</div>
</div>

<div class="flex space-x-10 justify-center mb-5">
	<label class="label w-[19vw]">
		<span>First name</span>
		<input class="input" type="text" placeholder="John" bind:value={profile.firstname} />
	</label>

	<label class="label w-[19vw]">
		<span>Last name</span>
		<input class="input" type="text" placeholder="Doe" bind:value={profile.lastname} />
	</label>
</div>

<div class="flex space-x-10 justify-center mb-5">
	<label class="label w-[19vw]">
		<span>Age</span>
		<select class="select" bind:value={profile.age}>
			{#each $ages as age}
				<option value={age.value}>{age.description}</option>
			{/each}
		</select>
	</label>

	<label class="label w-[19vw]">
		<span>City</span>
		<input class="input" type="text" placeholder="Paris" bind:value={profile.city} />
	</label>
</div>

<div class="flex justify-center mb-5">
	<label class="label w-[40vw]">
		<span>Abstract</span>
		<textarea
			class="textarea"
			rows="4"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			bind:value={profile.abstract}
		/>
	</label>
</div>

<div class="flex space-x-10 justify-center mb-5">
	<label class="label w-[19vw]">
		<span>Size</span>
		<input class="input" type="number" min="25" max="50" bind:value={profile.size} />
	</label>

	<label class="label w-[19vw]">
		<span>Pattern</span>
		<select class="select" bind:value={profile.pattern}>
			{#each $patterns as pattern}
				<option value={pattern.name}>{pattern.name}</option>
			{/each}
		</select>
	</label>
</div>

<div class="flex justify-center mb-5">
	<label class="label w-[40vw]">
		<span>Colors</span>
		<div class="flex space-x-5">
			{#each $colors as color}
				<label class="flex items-center space-x-1">
					<input
						class="checkbox"
						type="checkbox"
						checked={profile.colors.includes(color)}
						on:change={() => toggleColor(color)}
					/>
					<p>{color.name}</p>
				</label>
			{/each}
		</div>
	</label>
</div>

<div class="flex space-x-10 justify-center">
	<label class="label w-[19vw]">
		<span>Background picture color</span>
		<select class="select" bind:value={profile.bgColor}>
			{#each $themeColors as color}
				<option value={color}>{color.name}</option>
			{/each}
		</select>
	</label>

	<div class="w-[19vw]" />
</div>
