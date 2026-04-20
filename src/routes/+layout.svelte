<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/layout/footer.svelte';
	import Header from '$lib/layout/header/header.svelte';
	import '$lib/styles/reset.css';
	import '$lib/styles/utils.css';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { onMount } from 'svelte';

	let { children } = $props();
	onMount(() => {
		// Initialize a new Lenis instance for smooth scrolling
		const lenis = new Lenis();

		// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
		lenis.on('scroll', ScrollTrigger.update);

		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);

		// const lenis = new Lenis({
		// 	autoRaf: true // Automatically handles the requestAnimationFrame loop
		// });

		return () => {
			lenis.destroy(); // Cleanup on component unmount
		};
	});
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
		background-color: white;
	}
</style>
