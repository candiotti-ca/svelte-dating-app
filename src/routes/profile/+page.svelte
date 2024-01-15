<script lang="ts">
	import ProfilePicture from '../../components/profile-picture/ProfilePicture.svelte';
    const PATTERNS = [
    { name: "Striped" },
    { name: "Plain" },
    { name: "Polka-dot" },
    { name: "Custom" },
    { name: "Rhombus" },
    { name: "ZigZag" },
    { name: "Cross" }
];

 const AGES= [
    { value: 0, description: "Brand new!" },
    { value: 1, description: "Barely worn" },
    { value: 2, description: "Regular use" },
    { value: 3, description: "Used by life" },
    { value: 4, description: "Holed all over" }
];

 const COLORS = [
    { name: "Red", code: "#F00" },
    { name: "Yellow", code: "#0FF" },
    { name: "Blue", code: "#00F" },
    { name: "Green", code: "#0F0" }
];

const profile = {
    firstname: "John",
    lastname: "Doe",
    age: AGES[0],
    abstract: "J'ai perdu ma partenaire lors de mon passage dans la machine a laver. Je cherche ma paire pour la vie",
    city: "Tiroir de gauche",
    size: 37,
    colors: [],
    pattern: PATTERNS[0]
}
</script>

<div class="flex justify-center mb-10">
    <ProfilePicture />
</div>

<div class="flex space-x-10 justify-center mb-5">
    <label class="label w-[19vw]">
        <span>First name</span>
        <input class="input" type="text" placeholder="John" value={profile.firstname}/>
    </label>

    <label class="label w-[19vw]">
        <span>Last name</span>
        <input class="input" type="text" placeholder="Doe" value={profile.lastname} />
    </label>
</div>

<div class="flex space-x-10 justify-center mb-5">
    <label class="label w-[19vw]">
        <span>Age</span>
        <select class="select" value={profile.age} >
            {#each AGES as age}
                <option value={age}>{age.description}</option>
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
        <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." value={profile.abstract}/>
    </label>
</div>

<div class="flex space-x-10 justify-center mb-5">
    <label class="label w-[19vw]">
        <span>Size</span>
        <input class="input" type="number" min=25 max=50 value={profile.size}/>
    </label>

    <label class="label w-[19vw]">
        <span>Pattern</span>
        <select class="select" value={profile.pattern}>
            {#each PATTERNS as pattern}
                <option value={pattern}>{pattern.name}</option>
            {/each}
        </select>
    </label>
</div>

<div class="flex justify-center mb-5">
    <label class="label w-[40vw]">
        <span>Colors</span>
        <div class="flex space-x-5">
            {#each COLORS as color}
                <label class="flex items-center space-x-1">
                    <input class="checkbox" type="checkbox" />
                    <p>{color.name}</p>
                </label>
            {/each}
        </div>
    </label>
</div>