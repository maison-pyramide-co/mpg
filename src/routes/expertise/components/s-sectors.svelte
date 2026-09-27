<script>
	import sectorsI from '$lib/assets/images/expertise/sectors.png';
	import sectorsmI from '$lib/assets/images/expertise/sectors-m.png';
</script>

<section>
	<picture>
		<source srcset={sectorsI} media="(min-width: 770px)" />
		<img src={sectorsmI} width="auto" height="auto" alt="logo" />
	</picture>
	<div>
		<p>SELECTED WORK</p>
		<h2>
			We partner with ambitious brands, destinations and institutions to create work with lasting
			relevance and impact.
		</h2>
		<p>
			Different contexts.
			<br />
			One standard.
		</p>
	</div>
</section>

<style>
	section {
		height: 100vh;
		height: 100dvh;
		display: flex;
		background: #bfb2a5;
		@media (width < 770px) {
			flex-direction: column;
			height: unset;
		}
	}
	picture {
		flex: 1 1 0;
	}
	div {
		flex: 1 1 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 80rem;

		@media (width < 770px) {
			padding-block: 48rem;
			gap: 32rem;
		}
	}

	h2 {
		font-size: 40rem;
		line-height: 1;
		font-family: 'gt';
		max-width: 570rem;
		margin-inline: auto;
		text-align: center;
		@media (width < 770px) {
			max-width: 360rem;
			font-size: 25rem;
		}
	}
	p {
		font-size: 20rem;
		font-weight: 300;
		text-align: center;
		@media (width < 770px) {
			font-size: 16rem;
		}
	}
</style>
