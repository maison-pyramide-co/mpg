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
		class={menuOpened ? 'y_ open' : 'y_'}
		onclick={() => {
			menuOpened = !menuOpened;
		}}
		aria-label="menu"
	>
		<span class="y"></span>
		<span class="y"></span>
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
		justify-content: center;
		align-items: center;
		mix-blend-mode: difference;
		@media (width < 770px) {
			justify-content: space-between;
			padding-top: 20rem;
		}
	}

	a {
		position: absolute;
		width: 60rem;
		@media (width < 770px) {
			position: unset;
			width: 40rem;
		}
	}
	button {
		position: absolute;
		top: 50%;
		right: var(--p-i);
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		gap: 8rem;
		overflow: visible !important;
		--line-h: 2rem;
		--gap: 8rem;
		@media (width < 770px) {
			position: relative;
			right: 0;
		}
	}

	button .y {
		display: block;
		width: 34rem;
		height: 2rem;
		background: white;
		transform-origin: center;
		transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
	}
	button.open .y:first-of-type {
		transform: translateY(calc(var(--gap) / 2 + var(--line-h) / 2)) rotate(35deg);
	}
	button.open .y:last-of-type {
		transform: translateY(calc(-1 * (var(--gap) / 2 + var(--line-h) / 2))) rotate(-35deg);
	}
</style>
