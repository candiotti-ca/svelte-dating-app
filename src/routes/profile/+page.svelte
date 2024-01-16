<script lang="ts">
	import ProfilePicture from '../../components/profile-picture/ProfilePicture.svelte';
	import { ages, colors, currentProfile, patterns } from '../../store/store';

	let profile = $currentProfile;
</script>

<div class="flex justify-center mb-10">
	<ProfilePicture />
</div>

<div class="flex space-x-10 justify-center mb-5">
	<label class="label w-[19vw]">
		<span>First name</span>
		<input class="input" type="text" placeholder="John" value={profile.firstname} />
	</label>

	<label class="label w-[19vw]">
		<span>Last name</span>
		<input class="input" type="text" placeholder="Doe" value={profile.lastname} />
	</label>
</div>

<div class="flex space-x-10 justify-center mb-5">
	<label class="label w-[19vw]">
		<span>Age</span>
		<select class="select" value={profile.age}>
			{#each $ages as age}
				<option value={age.value}>{age.description}</option>
			{/each}
		</select>
	</label>

	<label class="label w-[19vw]">
		<span>City</span>
		<input class="input" type="text" placeholder="Paris" value={profile.city} />
	</label>
</div>

<div class="flex justify-center mb-5">
	<label class="label w-[40vw]">
		<span>Abstract</span>
		<textarea
			class="textarea"
			rows="4"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			value={profile.abstract}
		/>
	</label>
</div>

<div class="flex space-x-10 justify-center mb-5">
	<label class="label w-[19vw]">
		<span>Size</span>
		<input class="input" type="number" min="25" max="50" value={profile.size} />
	</label>

	<label class="label w-[19vw]">
		<span>Pattern</span>
		<select class="select" value={profile.pattern}>
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
					<input class="checkbox" type="checkbox" />
					<p>{color.name}</p>
				</label>
			{/each}
		</div>
	</label>
</div>
