<script>
	import { page } from '$app/state';
	import logoI from '$lib/assets/images/mpg-logo.png';
	import Menu from './menu.svelte';
	let menuOpened = $state(false);
	$effect(() => {
		if (page.url.pathname) menuOpened = false;
	});
</script>

<header>
	<a href="/">
		<img src={logoI} alt="MPG Logo" />
	</a>
	<button
		onclick={() => {
			menuOpened = !menuOpened;
		}}
	>
		{menuOpened ? 'CLOSE' : 'MENU'}
	</button>
</header>

{#if menuOpened}
	<Menu />
{/if}

<style>
	header {
		height: var(--h-h);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
		width: 100%;
		padding-inline: var(--p-i);
		padding-top: 32rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	a {
		width: 60rem;
	}
</style>
