<script>
	let speed = 32;
	let logoHeight = 32;
	import clients from '$lib/data/clients';
</script>

<section>
	<h2>A SELECTION OF OUR CLIENTS</h2>

	<div class="marquee" role="region" aria-label="Clients logos">
		<div>
			<ul>
				{#each clients as client}
					<li>
						<img src={client.logo} alt="mp client" loading="lazy" />
					</li>
				{/each}
			</ul>
			<ul aria-hidden="true">
				{#each clients as client}
					<li>
						<img src={client.logo} alt="mp client" loading="lazy" />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	section {
		padding-block: 120rem;

		@media (width < 770px) {
			padding-block: 80rem;
		}
	}
	h2 {
		font-size: 30rem;
		font-family: 'gt';
		text-align: center;
		font-weight: normal;
	}
	.marquee {
		margin-top: 80rem;
		overflow: hidden;
		@media (width < 770px) {
			margin-top: 40rem;
		}
	}
	.marquee div {
		display: flex;
		width: max-content;
		animation: marquee-scroll 32s linear infinite;
		animation-direction: normal;
	}
	.marquee:hover div {
		animation-play-state: paused;
	}
	ul {
		display: flex;
		align-items: center;
		gap: 64rem;
		&:first-of-type {
			margin-right: 64rem;
		}
	}
	li {
		flex: 0 0 auto;
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee div {
			animation: none;
		}
	}
</style>
