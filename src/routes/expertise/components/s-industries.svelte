<script>
	import industries from '$lib/data/industries';
</script>

<section id="s-sectors">
	<div class="h">
		<h2>OUR SECTORS</h2>
		<p>
			We navigate evolving industries with cultural fluency, strategic clarity and bold creative
			thinking
		</p>
	</div>
	<ul class="h-s">
		{#each industries as ind}
			<li>
				<div>{ind.title}</div>
				<figure>
					<img src={ind.image} alt={ind.title} />
				</figure>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding-top: 120rem;
		overflow: hidden;
		@media (width < 770px) {
			padding-top: 80rem;
		}
	}
	.h {
		padding-inline: 24rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (width < 770px) {
			flex-direction: column;
			gap: 40rem;
		}
	}
	h2 {
		font-size: 50rem;
		font-weight: 500;
		@media (width < 770px) {
			font-size: 30rem;
		}
	}
	p {
		text-align: right;
		font-size: 20rem;
		line-height: 1;
		width: 355rem;
		@media (width < 770px) {
			text-align: center;
		}
	}
	ul {
		/* width: max-content; */
		margin-top: 280rem;
		display: flex;
		gap: 24rem;
		align-items: flex-start;
		padding-inline: 24rem;
		width: 100%;
		@media (width < 770px) {
			margin-top: 80rem;
		}
	}
	li {
		flex-shrink: 0;
		width: 370rem;
		@media (width < 770px) {
			width: 300rem;
		}
	}
	li div {
		font-size: 20rem;
		font-weight: 500;
		margin-bottom: 24rem;
	}
</style>
