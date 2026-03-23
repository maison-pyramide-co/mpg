<script>
	import srvcBanI from '$lib/assets/images/srvc-ban.png';
	import Accordion from '$lib/components/accordion.svelte';
	import services from '$lib/data/services';
</script>

<main>
	<div class="he">
		<figure>
			<img src={srvcBanI} alt="" />
		</figure>
	</div>
	<ul>
		{#each services as srvc}
			<li class="srvc">
				<Accordion title={srvc.name}>
					<div class="acc_b">
						<figure>
							<img src={srvc.image} alt="" />
						</figure>
						<div>
							<p>
								{srvc.description}
							</p>
							<ul>
								{#each srvc.sow as item}
									<li>{item}</li>
								{/each}
							</ul>
						</div>
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
	}
	.he figure {
		aspect-ratio: 100/35;
		background-color: #ededed;
	}
	main > ul {
		margin-top: 120rem;
		padding-inline: var(--p-i);
	}
	.srvc {
		border-top: 1px solid black;
		&:last-of-type {
			border-bottom: 1px solid black;
		}
	}
	.acc_b {
		padding-top: 20rem;
		padding-bottom: 72rem;
		padding-inline: 32rem;
		display: flex;
		align-items: center;
		gap: 80rem;
	}
	.acc_b figure {
		flex-shrink: 0;
		width: 730rem;
		aspect-ratio: 5/4;
		background-color: #ededed;
	}
	.acc_b p {
		font-size: 18rem;
		line-height: 120%;
	}
	.acc_b ul {
		margin-top: 32rem;
		display: flex;
		flex-direction: column;
		gap: 16rem;
	}
	.acc_b li {
		font-size: 20rem;
		font-weight: 600;
	}
</style>
