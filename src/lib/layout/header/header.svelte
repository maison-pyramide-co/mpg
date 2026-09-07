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
			padding-top: 20rem;
		}
	}
	a {
		position: absolute;
		width: 60rem;
		@media (width < 770px) {
			width: 35rem;
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
	}
	button span {
		width: 35rem;
		height: 2rem;
		background: white;
		transform-origin: center;
	}
	button.open span:first-of-type {
		animation: top 0.4s linear both;
	}
	button.open span:last-of-type {
		animation: bottom 0.4s linear both;
	}

	button .y {
		display: block;
	}
	@keyframes top {
		0% {
			transform: translateY(0) rotate(0);
		}
		50% {
			transform: translateY(4px) rotate(0);
		}
		100% {
			transform: translateY(4px) rotate(-25deg);
		}
	}
	@keyframes bottom {
		0% {
			transform: translateY(0) rotate(0);
		}
		50% {
			transform: translateY(-4px) rotate(0);
		}
		100% {
			transform: translateY(-4px) rotate(35deg);
		}
	}
</style>
