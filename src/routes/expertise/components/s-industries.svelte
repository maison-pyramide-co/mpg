<script>
	import industries from '$lib/data/industries';
</script>

<section>
	<div class="h">
		<h2>OUR SECTORS</h2>
		<p>
			We navigate evolving industries with cultural fluency, strategic clarity and bold creative
			thinking
		</p>
	</div>
	<ul>
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
	}
	.h {
		padding-inline: 24rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	h2 {
		font-size: 50rem;
	}
	p {
		text-align: right;
		font-size: 20rem;
		line-height: 1;
		width: 355rem;
	}
	ul {
        width: max-content;
		margin-top: 280rem;
		display: flex;
		gap: 24rem;
		align-items: flex-start;
	}
	li {
		width: 370rem;
	}
	li div {
		font-size: 20rem;
		font-weight: 500;
        margin-bottom: 24rem;
	}
</style>
