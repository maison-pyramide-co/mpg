<script>
	import heroBan from '$lib/assets/images/home-ban.png';
	import logoI from '$lib/assets/images/log.png';
</script>

<section class="s-hero">
	<figure>
		<img src={heroBan} alt="MPG" />
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
