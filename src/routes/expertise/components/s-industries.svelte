<script lang="ts">
	import Accordion from '$lib/components/accordion.svelte';
	import industries from '$lib/data/industries';

	let openIndex = $state<any>(null);
</script>

<section id="s-sectors">
	<div class="h">
		<h2>OUR SECTORS</h2>
		<p>
			Deep knowledge of each industry allows us to create work that is specific to its market and
			meaningful to its audience.
		</p>
	</div>
	<ul>
		{#each [...industries.slice(1), industries[0]] as ind, i}
			<li>
				<h3>{ind.title}</h3>
				<Accordion open={openIndex === i} toggle={() => (openIndex = openIndex === i ? null : i)}>
					{#snippet header()}
						<div class="acc_h">
							{#if openIndex === i}
								READ LESS
								<span>-</span>
							{:else}
								READ MORE
								<span>+</span>
							{/if}
						</div>
					{/snippet}

					{#snippet body()}
						<div class="acc_b">
							{ind.description}
						</div>
					{/snippet}
				</Accordion>
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
		padding-inline: var(--p-i);
		text-align: right;
		/* font-size: 20rem; */
		font-size: 18rem;
		line-height: 1;
		width: 410rem;
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
		/* flex-shrink: 0;
		width: 370rem; */
		/* height: 420rem; */
		width: 100%;
		height: 370rem;
		overflow: hidden;
		@media (width < 770px) {
			width: 300rem;
			height: 340rem;
		}
	}
	li h3 {
		font-size: 20rem;
		font-weight: 500;
	}
	.acc_h {
		padding-top: 8rem;
		font-size: 12rem;
		display: flex;
		gap: 16rem;
	}

	.acc_b {
		padding-block: 24rem;
	}
	figure {
		margin-top: 16rem;
	}
</style>
