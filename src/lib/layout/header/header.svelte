<script>
	import { page } from '$app/state';
	import logoI from '$lib/assets/images/mpg-logo-w.png';
	import Menu from './menu.svelte';
	let menuOpened = $state(false);

	$effect(() => {
		if (page.url.pathname) menuOpened = false;
	});
</script>

<header id="h" style:opacity="0">
	<a href="/" class="y_">
		<img class="y" src={logoI} alt="MPG Logo" />
	</a>
	<button
		class="y_"
		onclick={() => {
			menuOpened = !menuOpened;
		}}
	>
		<span class="y">
			{menuOpened ? 'CLOSE' : 'MENU'}
		</span>
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
		padding-top: 24rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		mix-blend-mode: difference;
		@media (width < 770px) {
			padding-top: 20rem;
		}
	}
	a {
		width: 60rem;
		@media (width < 770px) {
			width: 35rem;
		}
	}
	button {
		font-size: 16rem;
		font-weight: 600;
		letter-spacing: 10%;
		color: white;
		@media (width < 770px) {
			font-size: 14rem;
		}
	}

	button .y {
		display: block;
	}
</style>
