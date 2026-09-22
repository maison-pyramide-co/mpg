<script lang="ts">
	import industries from '$lib/data/industries';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';
	import Inds from '../(home)/c/s-sectors.svelte';
	import Test from './test.svelte';
	import Logos from './logos.svelte';

	onMount(() => {
		const swiper = new Swiper('.test.swiper', {
			slidesPerView: 2,
			spaceBetween: '24rem',
			speed: 0
		});
	});
</script>

<Logos />

<!-- 
<div class="test swiper">
	<div class="swiper-wrapper">
		{#each industries as ind}
			<div class="swiper-slide">
				<div class="ind">
					<figure>
						<img src={ind.image} alt="" />
					</figure>
				</div>
			</div>
		{/each}
	</div>
</div> -->

<style>
	.swiper {
		height: 600rem;
		border: 1px solid red;
	}
	.swiper-slide {
		border: 3px solid green;
	}
	.ind {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	figure {
		transition: all 2s linear;
	}
	:global(.swiper-slide-active) figure {
		aspect-ratio: 4/3.5;
		width: 400px;
	}
</style>
