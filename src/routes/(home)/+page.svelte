<script lang="ts">
	// import pI from '$lib/assets/images/slider.png';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import projects from '$lib/data/projects';
	import 'swiper/css';
	import Swiper from 'swiper/bundle';
	import { onMount } from 'svelte';

	// let activeIndex = $state(0);

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1,
			loop: true,
			// autoplay: true,
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

		// swiper.on('slideChange', function () {
		// 	activeIndex = this.realIndex;
		// });
	});
</script>

<main>
	<section class="projects">
		<div class="swiper">
			<div class="swiper-wrapper">
				{#each projects as proj}
					<div class="swiper-slide">
						<h1>{proj.title}</h1>
						<figure>
							<img src={proj.image} alt="" />
						</figure>
						<div class="p_desc">
							<p>{proj.description}</p>
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
	.swiper h1 {
		font-size: 62rem;
		line-height: 1;
		position: absolute;
		left: 32rem;
		top: 55rem;
		font-weight: bold;
		color: white;
		white-space: pre-wrap;
		z-index: 2;
		@media (width < 770px) {
			font-size: 40rem;
			width: 100%;
			left: 0;
			top: 0;
			padding-top: 40rem;
			padding-left: 30rem;
			/* background: linear-gradient(180deg, #000000 120%, rgba(0, 0, 0, 0) -7%); */
		}
	}
	.p_desc {
		width: 100%;
		position: absolute;
		bottom: 0;
		padding-right: 48rem;
		padding-bottom: 48rem;
		z-index: 2;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) -7%, #000000 120%);
		@media (width < 770px) {
		padding-left: 30rem;
		padding-bottom: 20rem;
		}
	}
	.projects p {
		color: white;
		max-width: 450rem;
		margin-left: auto;
		font-size: 20rem;
		line-height: 22rem;
		font-weight: 600;
		text-transform: uppercase;
		@media (width < 770px) {
			width: 320rem;
			font-size: 20rem;
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
