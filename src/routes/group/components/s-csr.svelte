<script lang="ts">
	import initiatives from '$lib/data/initiatives';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import Accordion from './accordion.svelte';

	// let csrActiveIndex = $state(0);
	let swiperElement: HTMLDivElement;

	onMount(() => {
		const swiper = new Swiper(swiperElement, {
			slidesPerView: 1,
			spaceBetween: '80rem',
			loop: true,
			// autoplay: { delay: 3000 },
			navigation: {
				nextEl: '#swiper-next',
				prevEl: '#swiper-prev'
			},
			breakpoints: {
				770: {
					slidesPerView: 1.5
				}
			}
		});

		return () => {
			swiper.destroy();
		};
	});
</script>

<section id="s-csr">
	<div>
		<div class="l">
			<h2>CSR AND INITIATIVES</h2>
			<p>
				At Maison Pyramide Group, we believe in giving back in ways that create lasting impact and
				feel both meaningful and empowering.
			</p>
			<nav class="d-o">
				<button id="swiper-prev">
					<Ichev />
				</button>
				<button id="swiper-next">
					<Ichev />
				</button>
			</nav>
		</div>
		<div class="r">
			<div class="swiper" bind:this={swiperElement}>
				<div class="swiper-wrapper">
					{#each initiatives as initv}
						<div class="swiper-slide">
							<figure>
								<img src={initv.image} alt="" />
							</figure>
							<div>
								<h3>{initv.name}</h3>

								<Accordion>
									<p>{initv.body}</p>
								</Accordion>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<nav class="m-o">
				<button id="swiper-prev">
					<Ichev />
				</button>
				<button id="swiper-next">
					<Ichev />
				</button>
			</nav>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		padding-block: 96rem 56rem;
		padding-left: 56rem;
		background-color: white;
		min-height: 100vh;
		min-height: 100dvh;
		@media (width < 770px) {
			padding-inline: var(--p-i);
			padding-block: 80rem;
		}
	}
	h2 {
		font-size: 40rem;
		font-weight: 500;
		@media (width < 770px) {
			text-align: center;
			line-height: 1;
		}
	}
	section > div {
		display: flex;
		gap: 24rem;
		justify-content: space-between;
		@media (width < 770px) {
			gap: 48rem;
			flex-direction: column;
		}
	}
	.l {
		width: 668rem;
		height: 673rem;
		flex-shrink: 0;
		padding-bottom: 71rem;
		display: flex;
		flex-direction: column;
		@media (width < 770px) {
			width: unset;
			height: unset;
			padding-bottom: unset;
		}
	}
	.l p {
		margin-top: auto;
		width: 420rem;
		font-size: 20rem;
		line-height: 1;
		@media (width < 770px) {
			margin-top: 40rem;
			margin-inline: auto;
			width: 340rem;
			text-align: center;
		}
	}
	nav {
		margin-top: 64rem;
		display: flex;
		gap: 16rem;

		@media (width < 770px) {
			width: 100%;
			margin-top: 0;
			position: absolute;
			top: 55%;
			justify-content: space-between;
			z-index: 2;
			margin-inline: calc(-1 * var(--p-i));
			padding-inline: 8rem;
		}
	}
	nav button {
		width: 34rem;
		&:last-child :global(svg) {
			transform: rotate(180deg);
		}
		@media (width < 770px) {
			width: 28rem;
		}
	}

	.r {
		/* width: 692rem; */
		width: 600rem;
		@media (width < 770px) {
			width: 100%;
		}
	}
	figure {
		aspect-ratio: 4/5;
		@media (width < 770px) {
			width: 240rem;
			margin-inline: auto;
		}
	}
	h3 {
		width: 410rem;
		margin-top: 28rem;
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
		@media (width < 770px) {
			width: unset;
			font-size: 16rem;
			text-align: center;
		}
	}
	.r p {
		padding-top: 40rem;
		line-height: 1;
		font-size: 16rem;
		@media (width < 770px) {
			text-align: center;
		}
	}
</style>
