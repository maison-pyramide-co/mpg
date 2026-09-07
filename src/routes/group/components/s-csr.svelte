<script lang="ts">
	import initiatives from '$lib/data/initiatives';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import Accordion from '$lib/components/accordion.svelte';

	// let csrActiveIndex = $state(0);
	let swiperElement: HTMLDivElement;

	onMount(() => {
		const swiper = new Swiper(swiperElement, {
			slidesPerView: 1.5,
			spaceBetween: '24rem',
			loop: true,
			navigation: {
				nextEl: '#swiper-next',
				prevEl: '#swiper-prev'
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
				At Maison Pyramide, we believe in giving back in ways that create lasting impact and feel
				both meaningful and empowering.
			</p>
			<nav>
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

								<!-- <button>view more</button> -->
							</div>
						</div>
					{/each}
				</div>
			</div>
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
	}
	h2 {
		font-size: 40rem;
		font-weight: 500;
	}
	section > div {
		display: flex;
		gap: 24rem;
		@media (width < 770px) {
			gap: 56rem;
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
			padding-bottom: unset;
		}
	}
	.l p {
		margin-top: auto;
		width: 395rem;
		font-size: 20rem;
		line-height: 1;
	}
	nav {
		margin-top: 64rem;
		display: flex;
		gap: 16rem;
		@media (width < 770px) {
		}
	}
	nav button {
		width: 34rem;
		&:last-child :global(svg) {
			transform: rotate(180deg);
		}
		@media (width < 770px) {
			width: 24rem;
		}
	}

	.r {
		width: 692rem;
		@media (width < 770px) {
			width: 100%;
		}
		:global(.swiper) {
			/* margin-right: calc(-1 * var(--p-i)); */
			/* margin-right: -56rem; */
			@media (width < 770px) {
				/* margin-right: 0; */
			}
		}
	}
	figure {
		aspect-ratio: 4/5;
	}
	h3 {
		width: 410rem;
		margin-top: 28rem;
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
	}
	.r p {
		padding-top: 40rem;
		line-height: 1;
		font-size: 16rem;
	}
</style>
