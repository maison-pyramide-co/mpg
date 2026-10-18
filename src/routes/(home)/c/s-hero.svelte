<script>
	import poster from '$lib/assets/images/home-ban.webp';
	import logoI from '$lib/assets/images/log.png';
	import vd from '$lib/assets/videos/v.mp4';

	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
	import { MediaQuery } from 'svelte/reactivity';

	const isMobile = new MediaQuery('max-width: 770px');

	const currentSrc = $derived(isMobile.current && vd ? vd : vd);
	const currentPoster = $derived(isMobile.current && vd ? poster : poster);
</script>

<section class="s-hero">
	<figure>
		<!-- <img src={poster} alt="MPG" /> -->
		<video
			src={currentSrc}
			poster={currentPoster}
			autoplay
			muted
			loop
			playsinline
			preload="metadata"
		></video>
	</figure>
	<div class="logo d-o">
		<img src={logoI} alt="MPG Logo" />
	</div>
</section>

<style>
	section {
		height: 100vh;
		height: 100dvh;
	}
	figure {
		width: 100%;
		height: 100%;
	}
	div {
		position: fixed;
		width: 190rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 999;
	}
</style>
