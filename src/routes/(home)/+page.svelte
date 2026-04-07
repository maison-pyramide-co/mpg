<script lang="ts">
	// import pI from '$lib/assets/images/slider.png';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import projects from '$lib/data/projects';
	import 'swiper/css';
	import Swiper from 'swiper/bundle';
	import { onMount } from 'svelte';

	let activeIndex = $state(0);

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1,
			navigation: {
				nextEl: '#swiper-next',
				prevEl: '#swiper-prev'
			},
			pagination: {
				el: '.pg',
				type: 'fraction'
			}
		});

		swiper.on('slideChange', function () {
			activeIndex = this.realIndex;
		});
	});
</script>

<main>
	<section class="projects">
		<div class="swiper">
			<div class="swiper-wrapper">
				{#each projects as proj}
					<div class="swiper-slide">
						<figure>
							<img src={proj.image} alt="" />
						</figure>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<div>
		<div class="pg"></div>
		<h2 class="d-o">
			{projects[activeIndex].name}
		</h2>
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
		justify-content: center;
		@media (width < 770px) {
			margin-top: 16rem;
			justify-content: space-between;
			align-items: center;
		}
	}
	.pg {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		font-size: 16rem;
		& :global(span:first-child) {
			font-size: 32rem;
			line-height: 40rem;
		}
		@media (width < 770px) {
			position: static;
			transform: none;
			font-size: 12rem;
		}
	}
	nav {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		gap: 12rem;
		@media (width < 770px) {
			position: static;
			transform: none;
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
