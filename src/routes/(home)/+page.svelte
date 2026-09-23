<script lang="ts">
	import { onMount } from 'svelte';
	import animation from './_a';
	// import Test from './test.svelte';
	import SSectors from './c/s-sectors.svelte';
	import SAgencies from './c/s-agencies.svelte';
	import SIntro from './c/s-intro.svelte';
	import SHero from './c/s-hero.svelte';
	import SSectorsM from './c/s-sectors-m.svelte';
	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<SHero />
	<SIntro />
	<div class="m-o">
		<SSectorsM />
	</div>
	<div class="d-o">
		<SSectors />
	</div>
	<SAgencies />
</main>

<style lang="scss">
</style>
