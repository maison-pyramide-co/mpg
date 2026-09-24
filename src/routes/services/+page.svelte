<script lang="ts">
	import srvcBanI from '$lib/assets/images/services/srvc-ban.png';
	import srvcBanMI from '$lib/assets/images/services/srvc-ban-m.png';
	import Accordion from './components/accordion.svelte';
	import services from '$lib/data/services';
	import { onMount } from 'svelte';
	import animation from './_animation';
	let activeService = $state(null);

	const toggleActiveService = (i) => {
		activeService = activeService === i ? null : i;
	};

	const goToServices = () => {
		const el = document.querySelector('#services');
		el!.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	onMount(() => {
		animation();
	});
</script>

<main id="p" style:opacity="0">
	<section class="s-he">
		<figure>
			<picture>
				<source srcset={srvcBanI} media="(min-width: 770px)" />
				<img src={srvcBanMI} width="auto" height="auto" alt="mpg services" />
			</picture>
		</figure>
		<div>
			<h1>
				We bring together insight, creativity and cultural intelligence to build brands with
				relevance and impact.
			</h1>
			<button onclick={goToServices}>view services</button>
		</div>
	</section>

	<ul id="services">
		{#each services as srvc, i}
			<li class="srvc">
				<span class="line" />
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
	}
	.s-he {
		height: 100vh;
		height: 100dvh;
		position: relative;

		figure {
			width: 100%;
			height: 100%;
			background-color: #ededed;
			@media (width < 770px) {
				aspect-ratio: 3.5/2;
				& img {
					object-position: top left;
				}
			}
		}
		div {
			width: 670rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: white;
			@media (width < 770px) {
				width: 300rem;
			}
		}
		h1 {
			font-family: 'gt';
			text-align: center;
			font-size: 40rem;
			line-height: 1;
			@media (width < 770px) {
				font-size: 30rem;
			}
		}
		button {
			margin-top: 32rem;
			margin-inline: auto;
			padding: 8rem 16rem;
			color: inherit;
			border: 1px solid white;
			border-radius: 50rem;
			font-size: 14rem;
			text-transform: uppercase;

			@media (width < 770px) {
				margin-top: 48rem;
			}
		}
	}
	main > ul {
		padding-top: 120rem;
		padding-inline: 214rem var(--p-i);

		@media (width < 770px) {
			padding-top: 40rem;
			padding-inline: var(--p-i);
		}
	}
	.srvc {
		position: relative;
		/* border-top: 1px solid black; */
		&:last-of-type {
			border-bottom: 1px solid black;
		}
		& > span {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: black;
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
			font-size: 15rem;
			line-height: 120%;
			@media (width < 770px) {
				font-size: 16rem;
			}
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
			font-weight: 500;
			display: flex;
			/* align-items: center; */
			gap: 14rem;
			@media (width < 770px) {
				font-size: 15rem;
			}
		}
		li span {
			display: block;
			font-size: 16rem;
			font-weight: 400;
			padding-top: 2rem;
			@media (width < 770px) {
				font-size: 12rem;
			}
		}
	}
</style>
