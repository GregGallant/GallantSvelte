<script>
	import { page } from '$app/stores';
	import Navmenu from './Navmenu.svelte';
	import github from '$lib/images/github.svg';
</script>

<header>
	<Navmenu />
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}


	@font-face {
		font-family: Arvil;
		src: url("$lib/fonts/Arvil/Arvil_Sans.ttf"), url("$lib/fonts/Arvil/Arvil_Sans.woff");
	}
	@font-face {
		font-style: normal;
		font-family: Anton;
		src: url("$lib/fonts/Anton/Anton-Regular.ttf"), url("$lib/fonts/Anton/Anton-Regular.woff");
	}
	@font-face {
		font-family: Lora;
		src: url("$lib/fonts/Lora/Lora-Regular.ttf"), url("$lib/fonts/Lora/Lora-Regular.woff");
	}
	@font-face {
		font-style: normal;
		font-weight: normal;
		font-family: Lowvetica;
		src: url("$lib/fonts/Lowvetica/Lowvetica.ttf") format("opentype"), url("$lib/fonts/Lowvetica/Lowvetica.woff");
	}
	@font-face {
		font-style: normal;
		font-weight: normal;
		font-family: Viga;
		src: url("$lib/fonts/Viga/Viga-Regular.ttf") format("opentype"), url("$lib/fonts/Viga/Viga-Regular.woff");
	}
	@font-face {
		font-style: normal;
		font-weight: normal;
		font-family: Tenor_Sans;
		src: url("$lib/fonts/Tenor_Sans/TenorSans-Regular.ttf") format("opentype"), url("$lib/fonts/Tenor_Sans/TenorSans-Regular.woff");
	}
	@font-face {
		font-style: normal;
		font-weight: normal;
		font-family: Gudea;
		src: url("$lib/fonts/Gudea/Gudea-Regular.ttf") format("opentype"), url("$lib/fonts/Gudea/Gudea-Regular.woff");
	}
	@font-face {
		font-style: normal;
		font-weight: normal;
		font-family: GudeaBold;
		src: url("$lib/fonts/Gudea/Gudea-Bold.ttf") format("opentype"), url("$lib/fonts/Gudea/Gudea-Bold.woff");
	}
	@font-face {
		font-style: normal;
		font-weight: normal;
		font-family: FjallaOne;
		src: url("$lib/fonts/Fjalla_One/FjallaOne-Regular.ttf") format("opentype"), url("$lib/fonts/Fjalla_One/FjallaOne-Regular.woff");
	}
</style>
