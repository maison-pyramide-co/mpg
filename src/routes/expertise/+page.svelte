<script lang="ts">
	import { onMount } from 'svelte';
	import SHero from './components/s-hero.svelte';
	import SSectors from './components/s-sectors.svelte';
	import SWork from './components/s-work.svelte';
	import animation from './_a';
	import SClients from './components/s-clients.svelte';
	import SIndustries from './components/s-industries.svelte';

	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<SHero />
	<SIndustries />
	<SClients />
	<SSectors />
	<SWork />
</main>

<style>
</style>
