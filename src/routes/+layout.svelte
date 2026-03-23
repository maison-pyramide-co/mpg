<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/layout/footer.svelte';
	import Header from '$lib/layout/header.svelte';
	import '$lib/styles/reset.css';
	import '$lib/styles/utils.css';

	let { children } = $props();
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
		padding-top: var(--h-h);
		min-height: calc(100vh - var(--f-h));
		min-height: calc(100dvh - var(--f-h));
	}
</style>
