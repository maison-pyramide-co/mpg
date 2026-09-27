<script lang="ts">
	import Accordion from '$lib/components/old-accordion.svelte';
	import positions from '$lib/data/positions';
	import { onMount } from 'svelte';
	import animation from './_a';

	let activeCareer = $state(null);
	const toggleActiveCareer = (i: any) => {
		activeCareer = activeCareer === i ? null : i;
	};

	onMount(() => {
		animation();
	});
</script>

<main id="p" style:opacity="0">
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
		padding-block: 194rem 80rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			padding-block: 120rem 0;
		}
	}

	h1 {
		font-size: 60rem;
		margin-left: calc(318rem + 30rem);
		font-weight: 600;
		@media (width < 770px) {
			margin-left: 0;
			text-align: center;
			font-size: 40rem;
		}
	}

	.careers {
		margin-top: 80rem;
		display: flex;
		gap: 30rem;
		@media (width < 770px) {
			margin-top: 40rem;
			flex-direction: column;
			gap: 80rem;
		}
	}

	aside {
		width: 318rem;
		flex-shrink: 0;
		padding-top: 24rem;
		@media (width < 770px) {
			width: 270rem;
			margin-inline: auto;
			/* display: flex; */
			/* justify-content: space-between; */
			padding-top: 0;
			text-align: center;
		}
	}
	aside h3 {
		font-size: 16rem;
		font-weight: 600;
		@media (width < 770px) {
			font-size: 18rem;
		}
	}
	aside p {
		font-family: 'gt';
		margin-top: 16rem;
		max-width: 260rem;
		font-size: 14rem;
		@media (width < 770px) {
			font-size: 16rem;
			max-width: 265rem;
			flex-shrink: 0;
		}
	}

	.pos-list {
		flex-basis: 100%;
		& > li {
			border-bottom: 1px solid black;
		}

		@media (width < 770px) {
			/* margin-left: calc(116rem - var(--p-i)); */
		}
	}
	.pos-list :global(button) {
		padding-block: 24rem;
		font-weight: normal;

		@media (width < 770px) {
			padding-block: 20rem;
			font-size: 16rem;
			font-weight: 600;
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

		.l {
			display: flex;
			flex-direction: column;
			/* gap: 24rem; */
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
			padding-bottom: 24rem;
			@media (width < 770px) {
				padding-bottom: 0;
				font-size: 14rem;
				line-height: 18rem;
			}
		}
		button {
			align-self: flex-start;
			/* margin-top: auto; */
			margin-top: 40rem;
			padding: 12rem 32rem;
			border: 1px solid black;
			border-radius: 40rem;
			font-size: 14rem;
			font-weight: 500;
			letter-spacing: 1%;
			@media (width < 770px) {
				margin-top: 24rem;
				padding: 8rem 24rem;
				font-size: 12rem;
			}
		}
		ul {
			margin-top: 8rem;
		}
		li {
			font-size: 16rem;
			line-height: 22rem;
			margin-top: 22rem;
			font-weight: 300;
			&:first-child {
				margin-top: 0;
			}
			@media (width < 770px) {
				margin-top: 18rem;
				font-size: 14rem;
				line-height: 18rem;
			}
		}
	}
</style>
