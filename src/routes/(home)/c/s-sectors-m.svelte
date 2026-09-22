<script lang="ts">
	import industries from '$lib/data/industries';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';

	let swiperElement: HTMLDivElement;
	let activeIndex = $state(0);
	let swiper;

	onMount(() => {
		swiper = new Swiper(swiperElement, {
			slidesPerView: 1,
			spaceBetween: '24rem',
			loop: true,
			navigation: {
				nextEl: '#s-sectors #swiper-next',
				prevEl: '#s-sectors #swiper-prev'
			}
		});

		swiper.on('slideChange', function () {
			activeIndex = swiper.realIndex;
			const activeSlide = swiper.slides[swiper.activeIndex];
			const prevIndex = swiper.previousIndex;
			const prevSlide = swiper.slides[prevIndex];
			const prevSlideInfo = prevSlide.querySelector('.info');
			prevSlideInfo.classList.add('d-n');
			console.log('dd');
		});

		return () => {
			swiper.destroy();
		};
	});

	const handleClick = () => {
		const activeSlide = swiper.slides[swiper.activeIndex];
		const els = activeSlide.querySelector('.info');
		els.classList.toggle('d-n');
	};
</script>

<section id="s-sectors">
	<div class="swiper" bind:this={swiperElement}>
		<div class="swiper-wrapper">
			{#each industries as ind, i}
				<div class="swiper-slide">
					<figure>
						<img src={ind.image} alt="" />
					</figure>
					<div class="info d-n">
						<h3>{ind.title}</h3>
						<p>{ind.description}</p>
					</div>
					<button onclick={handleClick}>READ MORE</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding-inline: 20rem;
	}
	.info {
		max-width: 300rem;
		margin-inline: auto;
	}
	.info h3 {
		font-size: 20rem;
		font-weight: 500;
		text-align: center;
	}
	.info p {
		font-size: 15rem;
		line-height: 1;
		margin-top: 32rem;
		text-align: center;
	}
	button {
		margin-top: 32rem;
		margin-inline: auto;
		display: block;
		width: fit-content;
		padding: 6rem 16rem;
		font-size: 14rem;
		text-transform: uppercase;
		border: 1px solid black;
		color: inherit;
		border-radius: 100rem;
	}
</style>
