<script lang="ts">
	import Accordion from '$lib/components/accordion.svelte';
	import positions from '$lib/data/positions';

	let activeCareer = $state(null);
	const toggleActiveCareer = (i: any) => {
		activeCareer = activeCareer === i ? null : i;
	};
</script>

<main>
	<h1>JOIN THE TEAM</h1>
	<div class="careers">
		<aside>
			<h3>OPEN POSITIONS</h3>
			<p>With all application please ensure to attach your resume and portfolio</p>
		</aside>
		<ul class="pos-list">
			{#each positions as pos, i}
				<li>
					<Accordion
						title={pos.title}
						open={activeCareer == i}
						toggle={() => toggleActiveCareer(i)}
						sTitle={pos.company}
					>
						<div class="acc_b">
							<div class="l">
								<span>Description</span>
								<p>{pos.description}</p>
								<button class="d-o">APPLY NOW</button>
							</div>
							<div class="r">
								<span>Requirements</span>
								<ul>
									{#each pos.requirements as req}
										<li>{req}</li>
									{/each}
								</ul>
								<button class="m-o">APPLY NOW</button>
							</div>
						</div>
					</Accordion>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	main {
		padding-block: 80rem;
		padding-inline: var(--p-i);
	}

	h1 {
		font-size: 80rem;
		margin-left: 360rem;
		font-weight: 600;
		@media (width < 770px) {
			margin-left: calc(116rem - var(--p-i));
			font-size: 32rem;
		}
	}

	.careers {
		margin-top: 80rem;
		display: flex;
		gap: 30rem;
		@media (width < 770px) {
			margin-top: 24rem;
			flex-direction: column;
		}
	}

	aside {
		width: 318rem;
		flex-shrink: 0;
		padding-top: 24rem;
		@media (width < 770px) {
			width: unset;
		}

		h3 {
			font-size: 16rem;
			font-weight: 600;
			@media (width < 770px) {
				font-size: 14rem;
			}
		}
		p {
			margin-top: 16rem;
			max-width: 260rem;
			font-size: 14rem;
			@media (width < 770px) {
				margin-top: 0;
				max-width: 265rem;
			}
		}

		@media (width < 770px) {
			display: flex;
			justify-content: space-between;
			gap: 20rem;
		}
	}

	.pos-list {
		flex-basis: 100%;
		& > li {
			border-bottom: 1px solid black;
		}

		@media (width < 770px) {
			margin-left: calc(116rem - var(--p-i));
		}
		:global(button) {
			padding-block: 24rem;
			font-weight: normal;

			@media (width < 770px) {
				padding-block: 20rem;
				font-size: 16rem;
				font-weight: 600;
			}
		}
	}

	.acc_b {
		padding-block: 0 40rem;
		display: flex;
		gap: 40rem;
		@media (width < 770px) {
			flex-direction: column;
			gap: 24rem;
		}

		& > div {
			flex-basis: 100%;
		}
		span {
			font-size: 14rem;
			font-weight: 600;
			/* opacity: 0.8; */
		}
		p {
			margin-top: 8rem;
			font-size: 16rem;
			line-height: 25rem;
			@media (width < 770px) {
				font-size: 14rem;
				line-height: 18rem;
			}
		}
		button {
			margin-top: 24rem;
			padding: 12rem 32rem;
			border: 1px solid black;
			border-radius: 40rem;
			font-size: 14rem;
			font-weight: 500;
			letter-spacing: 1%;
			@media (width < 770px) {
				padding: 8rem 24rem;
				font-size: 12rem;
			}
		}
		ul {
			margin-top: 8rem;
		}
		li {
			font-size: 16rem;
			line-height: 25rem;
			list-style: disc;
			@media (width < 770px) {
				font-size: 14rem;
				line-height: 18rem;
			}
		}
	}
</style>
