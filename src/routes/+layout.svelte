<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/layout/footer.svelte';
	import Header from '$lib/layout/header/header.svelte';
	import '$lib/styles/reset.css';
	import '$lib/styles/utils.css';
	import { getLenis, initLenis } from '$lib/utils/lenis';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => initLenis());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>MPG</title>
</svelte:head>

<Header />
<div>
	{@render children()}
</div>
<Footer />

<style>
	div {
		min-height: calc(100vh - var(--f-h));
		min-height: calc(100dvh - var(--f-h));
		background-color: white;
	}
</style>
