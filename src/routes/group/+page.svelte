<script lang="ts">
	import { onMount } from 'svelte';
	import SHero from './components/s-hero.svelte';
	import SIntro from './components/s-intro.svelte';
	import SAgencies from './components/s-agencies.svelte';
	import SLeadership from './components/s-leadership.svelte';
	import SCulture from './components/s-culture.svelte';
	import SCsr from './components/s-csr.svelte';
	import SNetwork from './components/s-network.svelte';
	import SPrtnr from './components/s-prtnr.svelte';
	import animation from './_a';

	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<SHero />
	<SIntro />
	<SAgencies />
	<SLeadership />
	<SCulture />
	<SCsr />
	<SPrtnr />
	<SNetwork />
</main>

<style lang="scss">
	main {
		/* padding-block: 80rem; */
		/* padding-inline: var(--p-i); */
		@media (width < 770px) {
			/* padding-block: 48rem; */
		}
	}
</style>
