<script lang="ts">
	import { onMount } from 'svelte';
	import partnerships from '$lib/data/partnerships';
	import Swiper from 'swiper/bundle';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import 'swiper/css';

	let swiperElement: HTMLDivElement;
	let prtshActiveIndex = $state(0);

	const nextPartnership = $derived((prtshActiveIndex + 1) % partnerships.length);

	onMount(() => {
		const swiper = new Swiper(swiperElement, {
			slidesPerView: 1,
			breakpoints: {
				770: {
					slidesPerView: 2
				}
			},
			loop: true,
			navigation: {
				nextEl: '#s-partnerships #swiper-next',
				prevEl: '#s-partnerships #swiper-prev'
			}
		});

		swiper.on('slideChange', function () {
			prtshActiveIndex = swiper.realIndex;
		});

		return () => {
			swiper.destroy();
		};
	});
</script>

<section id="s-partnerships">
	<h2>PARTNERSHIPS</h2>
	<p>
		Beyond client work, Maison Pyramide Group develops initiatives and partnerships that support
		talent, learning, and the wider creative ecosystem.
	</p>

	<div>
		<div class="l">
			<div class="swiper" bind:this={swiperElement}>
				<div class="swiper-wrapper">
					{#each partnerships as psh}
						<div class="swiper-slide">
							<figure data-ga="ir">
								<img src={psh.image} alt="" />
							</figure>
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

		<div class="r">
			<h3>{partnerships[nextPartnership].name}</h3>
			<p>
				{partnerships[nextPartnership].body}
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
	</div>
</section>

<style lang="css">
	section {
		position: relative;
		padding-block: 64rem 56rem;
		padding-inline: var(--p-i);
		background-color: #f2f0e6;
		@media (width < 770px) {
			padding-block: 80rem;
		}
	}
	h2 {
		font-size: 40rem;
		text-align: center;
		font-weight: 500;
		@media (width < 770px) {
		}
	}
	section > p {
		width: 870rem;
		margin-top: 28rem;
		margin-inline: auto;
		text-align: center;
		font-family: 'gt';
		font-size: 20rem;
		line-height: 1;
		/* text-transform: uppercase; */
		@media (width < 770px) {
			width: unset;
			margin-bottom: 32rem;
		}
	}
	section > div {
		display: flex;
		margin-top: 48rem;
		@media (width < 770px) {
			margin-top: 40rem;
			flex-direction: column;
			gap: 40rem;
		}
	}

	.l {
		width: 100%;
		@media (width < 770px) {
			width: 100%;
			position: relative;
		}
	}

	.swiper {
		/* width: 668rem; */
		width: 960rem;
		/* margin-left: calc(-1 * var(--p-i)); */
		/* padding-left: 120rem; */
		@media (width < 770px) {
			width: 100%;
			margin: unset;
			padding: unset;
		}
	}
	.swiper-slide {
		width: 480rem;
		aspect-ratio: 4/5;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	:global(.swiper-slide-next) figure {
		width: 100%;
	}
	figure {
		transition: width 0.6s linear;
		width: 280rem;
		aspect-ratio: 4/5;
		@media (width < 770px) {
			width: 300rem;
		}
	}
	.r {
		flex-shrink: 0;
		align-self: center;
		margin-inline: 72rem 112rem;
		width: 315rem;
		height: 350rem;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		@media (width < 770px) {
			margin-inline: auto;
			height: unset;
			width: 315rem;
			padding-bottom: unset;
		}
	}
	h3 {
		margin-top: auto;
		font-size: 16rem;
		line-height: 1;
		text-transform: uppercase;
		font-weight: 500;
		@media (width < 770px) {
			width: unset;
			font-size: 18rem;
			margin-top: 0;
			margin-inline: unset;
			text-align: center;
		}
	}
	.r p {
		margin-top: 20rem;
		font-size: 14rem;
		line-height: 1;
		@media (width < 770px) {
			font-size: 16rem;
			text-align: center;
		}
	}
	nav {
		margin-top: 64rem;
		display: flex;
		gap: 16rem;
		@media (width < 770px) {
			/* width: 100%; */
			margin-top: 0;
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;
			justify-content: space-between;
			z-index: 2;
			margin-inline: calc(-1 * var(--p-i));
			padding-inline: 8rem;
		}
	}
	button {
		width: 32rem;
		&:last-child :global(svg) {
			transform: rotate(180deg);
		}
		@media (width < 770px) {
			width: 28rem;
		}
	}
</style>
