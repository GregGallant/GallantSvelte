<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	import '../styles/gm.scss';
	import { page } from '$app/stores';
	import {invalidateAll} from '$app/navigation';

	$: user = $page.data.user;
</script>

<div class="app">
	<Header />
	{#if user}
		Logged in as: {user.name}
		<br/>
		<button on:click={ async () => {
			const response = await fetch('/api/logout', {method: 'POST'});
			if (response.ok) {
				invalidateAll();
			}
		}}>Logout</button>
	{/if}
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		/*max-width: 64rem;*/
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
