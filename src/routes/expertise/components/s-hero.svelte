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
	<div class="t">
		<div class="intro">
			<h1>Our expertise spans Media, Public Affairs, Lifestyle.</h1>
			<p>Building relevance.<br />Creating Influence.<br />Driving Growth.</p>
		</div>
		<figure>
			<img src={banI} alt="MPG Expertise" />
		</figure>
	</div>
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
	.t {
		position: relative;
		height: 100%;
		overflow: hidden;
	}
	.intro {
		@media (width < 770px) {
			width: 300rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	h1 {
		font-family: 'gt';
		font-weight: normal;
		font-size: 40rem;
		line-height: 1;
		width: 480rem;
		position: absolute;
		top: 40%;
		left: 40rem;
		color: white;
		z-index: 1;
		@media (width < 770px) {
			width: 300rem;
			font-size: 30rem;
			position: static;
			text-align: center;
		}
	}
	p {
		width: 260rem;
		font-weight: 300;
		font-size: 30rem;
		line-height: 1;
		position: absolute;
		text-align: right;
		bottom: 8%;
		right: 72rem;
		color: white;
		z-index: 1;
		text-align: center;

		@media (width < 770px) {
			margin-top: 24rem;
			width: unset;
			font-size: 20rem;
			position: static;
		}
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
		@media (width < 770px) {
			padding-inline: var(--p-i);
			gap: unset;
			justify-content: space-between;
		}
	}
	button {
		width: 172rem;
		padding: 8rem 20rem;
		font-size: 10rem;
		border: 1px solid black;
		border-radius: 100rem;
	}
</style>
