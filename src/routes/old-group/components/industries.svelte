<script lang="ts">
	import industries from '$lib/data/industries';
	import HAccordion from './HAccordion.svelte';
	import Accordion from '$lib/components/old-accordion.svelte';
	//
	let activeIndustry = $state(null);
	//
	const toggleActiveIndustry = (i: any) => {
		activeIndustry = activeIndustry === i ? null : i;
	};
</script>

<section class="ind">
	<div class="tt">
		<span data-ga="tr" class="indx">01.</span>
		<h2 data-ga="tr" class="ti">OUR<br />INDUSTRIES</h2>
	</div>
	<ul class="ind_list">
		{#each industries as ind, i}
			<li class="m-o">
				<HAccordion
					title={ind.title}
					img={ind.image}
					open={activeIndustry == i}
					toggle={() => toggleActiveIndustry(i)}
					align={i % 2 === 0 ? 'right' : 'left'}
				>
					<div class="ha_b">
						<p>
							{ind.description}
						</p>

						<!-- <ul>
								{#each ind.offerings as off}
									<li>{off}</li>
								{/each}
							</ul> -->
					</div>
				</HAccordion>
			</li>
		{/each}

		<div></div>
		{#each industries as ind, i}
			<li class="ind_i d-o">
				<Accordion
					title={ind.title}
					open={activeIndustry == i}
					toggle={() => toggleActiveIndustry(i)}
				>
					<p>
						{ind.description}
					</p>
					<!-- <ul>
							{#each ind.offerings as off}
								<li>{off}</li>
							{/each}
						</ul> -->
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
		position: relative;
	}
	.tt {
		position: absolute;
		@media (width < 770px) {
			position: unset;
		}
	}
	.indx {
		font-size: 20rem;
		font-weight: 500;
		line-height: 1;
		@media (width < 770px) {
			font-size: 14rem;
		}
	}
	.ti {
		font-size: 80rem;
		line-height: 1;
		font-weight: bold;
		@media (width < 770px) {
			font-size: 32rem;
		}
	}
	ul {
		margin-left: 220rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 98rem;
		@media (width < 770px) {
			margin-left: 0;
			margin-top: 24rem;
			display: flex;
			flex-direction: column;
			gap: 24rem;
		}
	}
	ul > div {
		opacity: 0;
	}
	.ind {
		margin-top: 140rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			margin-top: 80rem;
		}
		/* .ind_list {
			margin-top: 60rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 24rem;
				flex-direction: column;
			}
		} */
		.ind_i {
			flex: 1;
			height: 458rem;
			overflow: hidden;
			@media (width < 770px) {
				/* flex: unset;
			height: 505rem; */
			}
		}
		.ind_i :global(h3) {
			font-size: 20rem;
			font-weight: 500;
		}
		.ind_i :global(span) {
			font-weight: 300;
		}
		.ind_i p {
			font-size: 16rem;
			line-height: 1.2;
			font-weight: 500;
			padding-bottom: 24rem;
		}
		.ind_i ul {
			margin-top: 24rem;
			padding-bottom: 24rem;
		}
		.ind_i li {
			font-size: 16rem;
			line-height: 1;
			padding-block: 12rem;
			border-bottom: 1px solid black;
			text-transform: capitalize;
		}
		.ind_i figure {
			aspect-ratio: 5/6;
			transition: all 0.2s ease-out;
		}
	}
	.ha_b {
		width: 286rem;
		padding-right: 20rem;
		ul {
			margin-top: 24rem;
			/* width: 100%; */
		}
		p {
			font-weight: 500;
		}
		li {
			margin-top: 10rem;
			padding-bottom: 8rem;
			border-bottom: 1px solid black;
			text-transform: capitalize;
			&:first-child {
				margin-top: 0;
			}
		}
	}
</style>
