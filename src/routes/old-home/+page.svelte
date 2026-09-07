<script lang="ts">
	// import pI from '$lib/assets/images/slider.png';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import projects from '$lib/data/projects';
	import 'swiper/css';
	import Swiper from 'swiper/bundle';
	import { onMount } from 'svelte';
	import { hA } from '$lib/layout/header/_animation';
	import animation from './_animation';
	import { gsap } from 'gsap';

	// let activeIndex = $state(0);

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1,
			loop: true,
			// autoplay: {
			// 	delay: 5000
			// },

			navigation: {
				nextEl: '#swiper-next',
				prevEl: '#swiper-prev'
			},
			pagination: {
				el: '.pg',
				type: 'fraction',
				formatFractionCurrent: (number) => {
					return number < 10 ? `0${number}` : number;
				}
			}
		});

		swiper.on('realIndexChange', function () {
			const activeSlide = this.slides[this.activeIndex];
			const y = activeSlide.querySelectorAll('.y');
			gsap.from(y, {
				y: 100,
				duration: 0.8,
				ease: 'power4.out'
			});
			// console.log('slide changed', activeSlide);
		});

		animation();
		hA();

		// swiper.on('slideChange', function () {
		// 	activeIndex = this.realIndex;
		// });
	});

</script>

<main id="p" style:opacity="0">

	<section class="projects">
		<div class="swiper">
			<div class="swiper-wrapper">
				{#each projects as proj}
					<div class="swiper-slide">
						<figure>
							<picture>
								<source srcset={proj.image} media="(min-width: 770px)" />
								<img src={proj.imageM} width="auto" height="auto" alt="logo" />
							</picture>
						</figure>
						<div class="p_info">
							<h1 class="y_">
								<span class="y">
									{proj.title}
								</span>
							</h1>
							<p class="y_">
								<span class="y">
									{proj.description}
								</span>
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<div>
		<div class="pg"></div>
		<nav>
			<button id="swiper-prev">
				<Ichev />
			</button>
			<button id="swiper-next">
				<Ichev />
			</button>
		</nav>
	</div>

</main>

<style>
	.swiper {
		height: 100%;
	}
	.p_info {
		padding: 24rem 32rem;
		width: 100%;
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		color: white;
		/* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 1%, #000000 120%); */

		background: linear-gradient(0deg, #000000 -156.26%, rgba(0, 0, 0, 0) 100.29%);
		@media (width < 770px) {
			padding: 24rem 16rem;
			flex-direction: column;
			align-items: unset;
			justify-content: unset;
			gap: 16rem;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 1%, #000000 120%);
		}
	}
	.p_info h1 {
		font-size: 60rem;
		line-height: 1;
		font-weight: bold;
		white-space: pre-wrap;
		@media (width < 770px) {
			font-size: 36rem;
			line-height: 40rem;
		}
	}
	.p_info p {
		max-width: 490rem;
		font-size: 20rem;
		line-height: 120%;
		font-weight: 600;
		text-transform: uppercase;
		@media (width < 770px) {
			width: 320rem;
			font-size: 14rem;
			white-space: pre-wrap;
		}
	}
	main {
		padding-block: 40rem 32rem;
		padding-inline: var(--p-i);
		height: calc(100vh - var(--h-h) - var(--f-h));
		overflow: hidden;
		display: flex;
		flex-direction: column;
		@media (width < 770px) {
			padding-block: 32rem 40rem;
		}
	}
	section {
		flex-basis: 100%;
		max-height: 582.8rem;
		overflow: hidden;
		@media (width < 770px) {
			max-height: 640rem;
		}
	}
	figure {
		aspect-ratio: 7/3;
		background-color: #ededed;
		@media (width < 770px) {
			aspect-ratio: 9/16;
		}
	}
	main > div {
		margin-top: 24rem;
		position: relative;
		display: flex;
		justify-content: space-between;
		@media (width < 770px) {
			margin-top: 16rem;
			justify-content: space-between;
			align-items: center;
		}
	}
	.pg {
		font-size: 16rem;
		& :global(span:first-child) {
			font-size: 32rem;
			line-height: 40rem;
		}
		@media (width < 770px) {
			font-size: 12rem;
		}
	}
	nav {
		display: flex;
		gap: 12rem;
		@media (width < 770px) {
		}
	}
	nav button {
		width: 30rem;
		@media (width < 770px) {
			width: 24rem;
		}
	}
	button:last-child {
		transform: rotate(180deg);
	}
</style>
