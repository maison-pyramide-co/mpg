<script lang="ts">
	import { onMount } from 'svelte';
	import partnerships from '$lib/data/partnerships';
	import Swiper from 'swiper/bundle';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import 'swiper/css';

	let swiperElement: HTMLDivElement;
	let prtshActiveIndex = $state(0);

	onMount(() => {
		const swiper = new Swiper(swiperElement, {
			slidesPerView: 2,
			initialSlide: 6,
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
		Beyond client work, MPG develops initiatives and partnerships that support talent, learning, and
		the wider creative ecosystem.
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
		</div>

		<div class="r">
			<h3>{partnerships[prtshActiveIndex + 1].name}</h3>
			<p>
				{partnerships[prtshActiveIndex + 1].body}
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
	</div>
</section>

<style lang="css">
	section {
		position: relative;
		padding-block: 64rem 56rem;
		padding-inline: var(--p-i);
		background-color: #f2f0e6;
	}
	h2 {
		font-size: 40rem;
		text-align: center;
		font-weight: 500;
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
	}
	section > div {
		display: flex;
		margin-top: 48rem;
		@media (width < 770px) {
			gap: 56rem;
			flex-direction: column-reverse;
			margin-top: 40rem;
		}
	}

	.l {
		width: 100%;
		/* width: 668rem; */
		/* width: 478rem; */
		@media (width < 770px) {
			width: 100%;
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
		/* width: 495rem; */
		transition: width 0.6s linear;
		width: 280rem;
		aspect-ratio: 4/5;
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
			width: unset;
			padding-bottom: unset;
		}
	}
	h3 {
		/* width: 465rem;
		margin-inline: auto; */
		margin-top: auto;
		font-size: 16rem;
		line-height: 1;
		text-transform: uppercase;
		font-weight: 500;
		@media (width < 770px) {
			width: unset;
			font-size: 18rem;
			margin-top: 48rem;
			margin-inline: unset;
		}
	}
	.r p {
		margin-top: 20rem;
		/* margin-inline: auto;
		max-width: 465rem; */
		font-size: 14rem;
		line-height: 1;
		@media (width < 770px) {
			font-size: 16rem;
		}
	}
	nav {
		margin-top: 64rem;
		display: flex;
		gap: 16rem;
		@media (width < 770px) {
		}
	}
	button {
		width: 32rem;
		&:last-child :global(svg) {
			transform: rotate(180deg);
		}
		@media (width < 770px) {
			width: 24rem;
		}
	}
</style>
