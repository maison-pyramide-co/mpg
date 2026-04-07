<script lang="ts">
	import srvcBanI from '$lib/assets/images/srvc-ban.png';
	import Accordion from '$lib/components/accordion.svelte';
	import services from '$lib/data/services';
	let activeService = $state(null);
	const toggleActiveService = (i) => {
		activeService = activeService === i ? null : i;
	};
</script>

<main>
	<div class="he">
		<figure>
			<img src={srvcBanI} alt="" />
		</figure>
	</div>

	<ul>
		{#each services as srvc, i}
			<li class="srvc">
				<Accordion
					title={srvc.name}
					open={activeService == i}
					toggle={() => toggleActiveService(i)}
				>
					<div class="acc_b">
						<figure>
							<img src={srvc.image} alt="" />
						</figure>
						<p>
							{srvc.description}
						</p>
						<ul>
							{#each srvc.sow as item, i}
								<li>
									<span>0{i + 1}.</span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</Accordion>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		padding-top: 40rem;
		padding-bottom: 80rem;
	}
	.he {
		padding-inline: var(--p-i);

		figure {
			aspect-ratio: 100/35;
			background-color: #ededed;
			@media (width < 770px) {
				aspect-ratio: 3.5/2;
			}
		}
	}
	main > ul {
		margin-top: 120rem;
		padding-inline: 214rem var(--p-i);
		@media (width < 770px) {
			margin-top: 40rem;
			padding-inline: var(--p-i);
		}
	}
	.srvc {
		border-top: 1px solid black;
		&:last-of-type {
			border-bottom: 1px solid black;
		}
	}
	.srvc :global(button) {
		font-size: 30rem;
		@media (width < 770px) {
			font-size: 16rem;
			text-align: left;
			padding-block: 16rem;
		}
	}
	.acc_b {
		padding-top: 20rem;
		padding-bottom: 30rem;
		/* padding-inline: 32rem; */
		display: flex;
		gap: 30rem;
		@media (width < 770px) {
			flex-direction: column;
		
		}

		figure {
			flex: 2;
			aspect-ratio: 5/4;
			background-color: #ededed;
		}
		p {
			flex: 2;
			font-size: 18rem;
			line-height: 120%;
		}
		ul {
			flex: 3;
			display: flex;
			flex-direction: column;
			gap: 16rem;
			padding-left: 24rem;
		}
		li {
			font-size: 20rem;
			font-weight: 600;
			display: flex;
			align-items: center;
			gap: 14rem;
		}
		li span {
			display: block;
			font-size: 16rem;
			font-weight: 400;
		}
	}
</style>
