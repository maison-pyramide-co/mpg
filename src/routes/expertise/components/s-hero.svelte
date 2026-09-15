<script lang="ts">
	import banI from '$lib/assets/images/expr-ban.png';

	const goToSectors = () => {
		const el = document.querySelector('#s-sectors');
		el!.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
	const goToWork = () => {
		const el = document.querySelector('#s-work');
		el!.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<section>
	<h1>Our expertise spans Media, Public Affairs, Lifestyle.</h1>
	<p>Building relevance. Creating Influence. Driving Growth.</p>
	<figure>
		<img src={banI} alt="MPG Expertise" />
	</figure>
	<nav>
		<button onclick={goToSectors}>OUR SECTORS</button>
		<button onclick={goToWork}>VIEW OUR CASE STUDIES</button>
	</nav>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 100vh;
		height: 100dvh;
		position: relative;
	}
	h1 {
		font-family: 'gt';
		font-weight: normal;
		font-size: 40rem;
		line-height: 1;
		width: 480rem;
		position: absolute;
		top: 330rem;
		left: 40rem;
		color: white;
		z-index: 1;
	}
	p {
		width: 260rem;
		font-weight: 300;
		font-size: 30rem;
		line-height: 1;
		position: absolute;
		text-align: right;
		top: 650rem;
		right: 72rem;
		color: white;
		z-index: 1;
	}

	figure {
		height: 100%;
		overflow: hidden;
	}
	nav {
		padding-block: 24rem;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		gap: 120rem;
	}
	button {
		width: 172rem;
		padding: 8rem 20rem;
		font-size: 10rem;
		border: 1px solid black;
		border-radius: 100rem;
	}
</style>
