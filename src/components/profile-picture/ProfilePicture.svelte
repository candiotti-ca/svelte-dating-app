<script lang="ts">
	import type { Profile } from '../../models/Profile';

	export let profile: Profile;

	$: colorA = profile.colors[0]?.code || '#e0e0fc';
	$: colorB = profile.colors[1]?.code || '#e0e0fc';
	$: sockBody = () => {
		switch (profile.pattern) {
			case 'Striped':
				return `background-image: linear-gradient(0deg, ${colorA} 50%, ${colorB} 50%);`;
			case 'Polka-Dot':
				return `background-image: radial-gradient(${colorB} 2.8px, ${colorA} 0px);`;
			case 'Chevron':
				return `background-image: linear-gradient(135deg, ${colorA} 25%, transparent 25%),
			linear-gradient(225deg, ${colorA} 25%, transparent 25%),
			linear-gradient(45deg, ${colorA} 25%, transparent 25%),
			linear-gradient(315deg, ${colorA} 25%, ${colorB} 25%);`;
			case 'Plain':
				return `background: ${colorB};`;
			default:
				return ``;
		}
	};
</script>

<div id="sock">
	<div
		class="body{profile.isHoled() ? '-holed' : ''} {profile.pattern.toLowerCase()}"
		style={sockBody()}
	>
		<div class="band" style="background: {colorA}" />
		<div class="heel{profile.isHoled() ? '-holed' : ''}" style="background: {colorA}" />
		<div class="point{profile.isHoled() ? '-holed' : ''}" style="background: {colorA}" />
	</div>
	<div id="sock_{profile.getAge()}_outline" />
</div>

<style>
	#sock {
		/* Contient la chaussette et l'outline */
		position: relative;
		bottom: var(--bottom, 0px);
		right: var(--right, 0px);
	}

	.body {
		/* Utilise comme masque l'entiereté de la chaussette. Permet de set la couleur du "body" */
		position: absolute;
		mask-image: url(/src/assets/sock_fill.svg);
		width: 96px;
		height: 161px;
	}

	.body-holed {
		/* Utilise comme masque l'entiereté de la chaussette. Permet de set la couleur du "body" */
		position: absolute;
		mask-image: url(/src/assets/sock_fill_holed.svg);
		width: 96px;
		height: 161px;
	}

	.band {
		/* Bande élastique de la chaussette */
		mask-image: url(/src/assets/band.svg);
		height: 30px;
		width: 60px;
	}

	.heel {
		/* Talon */
		mask-image: url(/src/assets/heel.svg);
		height: 37px;
		width: 32px;
		top: 80px;
		position: absolute;
	}

	.heel-holed {
		/* Talon */
		mask-image: url(/src/assets/heel_holed.svg);
		height: 37px;
		width: 32px;
		top: 80px;
		position: absolute;
	}

	.point {
		/* Pointe */
		mask-image: url(/src/assets/point.svg);
		height: 30px;
		width: 30px;
		top: 127px;
		right: 4px;
		position: absolute;
	}

	.point-holed {
		/* Pointe */
		mask-image: url(/src/assets/point_holed.svg);
		height: 30px;
		width: 30px;
		top: 127px;
		right: 4px;
		position: absolute;
	}

	#sock_new_outline {
		/* Div placée de maniere absolute sur l'autre, doit absolument être en dernier pour passer au dessus. Utilise un SVG de la chaussette avec juste les contours, de cette manière on peut changer la couleur des contours si on le souhaite */
		position: absolute;
		mask-image: url(/src/assets/sock.svg);
		width: 96px;
		height: 161px;
		background: black;
	}

	#sock_used_outline {
		/* Div placée de maniere absolute sur l'autre, doit absolument être en dernier pour passer au dessus. Utilise un SVG de la chaussette avec juste les contours, de cette manière on peut changer la couleur des contours si on le souhaite */
		position: absolute;
		mask-image: url(/src/assets/sock_used.svg);
		width: 96px;
		height: 161px;
		background: black;
	}

	#sock_aged_outline {
		/* Div placée de maniere absolute sur l'autre, doit absolument être en dernier pour passer au dessus. Utilise un SVG de la chaussette avec juste les contours, de cette manière on peut changer la couleur des contours si on le souhaite */
		position: absolute;
		mask-image: url(/src/assets/sock_aged.svg);
		width: 96px;
		height: 161px;
		background: black;
	}

	#sock_holed_outline {
		/* Div placée de maniere absolute sur l'autre, doit absolument être en dernier pour passer au dessus. Utilise un SVG de la chaussette avec juste les contours, de cette manière on peut changer la couleur des contours si on le souhaite */
		position: absolute;
		mask-image: url(/src/assets/sock_holed.svg);
		width: 96px;
		height: 161px;
		background: black;
	}

	.chevron {
		background-position:
			10px 0,
			10px 0,
			0 0,
			0 0;
		background-size: 20px 20px;
		background-repeat: repeat;
	}

	.striped {
		background-size: 10px 10px;
	}

	.polka-dot {
		background-size: 10px 10px;
	}
</style>
