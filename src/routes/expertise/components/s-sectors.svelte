<script>
	import sectorsI from '$lib/assets/images/expertise/sectors.png';
</script>

<section>
	<figure>
		<img src={sectorsI} alt="MPG" />
	</figure>
	<div>
		<p>OUR WORK</p>
		<h2>
			We partner with ambitious brands, destinations and institutions to create work with lasting
			relevance and impact.
		</h2>
		<p>
			Different briefs.
			<br />One standard.
		</p>
	</div>
</section>

<style>
	section {
		height: 100vh;
		height: 100dvh;
		display: flex;
		background: #bfb2a5;
	}
	figure {
		flex: 1 1 0;
	}
	div {
		flex: 1 1 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 80rem;
	}

	h2 {
		font-size: 40rem;
		line-height: 1;
		font-family: 'gt';
		max-width: 570rem;
		margin-inline: auto;
		text-align: center;
	}
	p {
		font-size: 20rem;
		font-weight: 300;
		text-align: center;
	}
</style>
