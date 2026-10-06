<script lang="ts">
	import cultureI from '$lib/assets/images/culture.png';
</script>

<section id="s-culture">
	<div>
		<h2>COMPANY CULTURE</h2>
		<figure data-ga="ir">
			<img src={cultureI} alt="MPG" />
		</figure>
		<div>
			<h3 data-ga="tr">
				Maison Pyramide fosters a culture where creativity and initiative are valued, and where
				people are encouraged to grow through meaningful work.
			</h3>
			<p data-ga="tr">
				We believe a strong sense of community is essential to how we work, shaping an environment
				defined by mutual respect, collaboration, and care in everything we do.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
		height: 100dvh;
		padding-inline: 56rem 64rem;
		background: black;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* position: relative; */
		@media (width < 770px) {
			padding-inline: var(--p-i);
			height: unset;
			padding-block: 80rem;
		}
	}

	section > div {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (width < 770px) {
			flex-direction: column;
		}
	}

	h2 {
		width: 210rem;
		font-weight: 400;
		font-size: 40rem;
		line-height: 1;
		@media (width < 770px) {
			text-align: center;
			font-size: 30rem;
		}
	}

	figure {
		width: 420rem;
		aspect-ratio: 1;
		@media (width < 770px) {
			margin-top: 40rem;
			width: 240rem;
		}
	}

	div > div {
		width: 320rem;
		align-self: flex-end;
		@media (width < 770px) {
			margin-top: 56rem;
			align-self: unset;
		}
	}

	h3 {
		font-family: 'gt';
		font-size: 25rem;
		line-height: 1;
		font-weight: 400;
		@media (width < 770px) {
			font-size: 20rem;
			text-align: center;
		}
	}

	p {
		margin-top: 40rem;
		width: 305rem;
		font-size: 20rem;
		line-height: 1;
		@media (width < 770px) {
			width: unset;
			font-size: 16rem;
			text-align: center;
		}
	}
</style>
