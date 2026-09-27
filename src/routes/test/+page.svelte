<script lang="ts">
	import industries from '$lib/data/industries';
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';
	import Inds from '../(home)/c/s-sectors.svelte';
	import Test from './test.svelte';
	import Logos from './logos.svelte';
	import Accordion from './test-acc.svelte';

	let openIndex = $state<number | null>(null);
	const items = [
		{ title: 'Question one', sTitle: 'Extra label', body: 'Answer one...' },
		{ title: 'Question two', sTitle: null, body: 'Answer two...' }
	];
</script>

<Logos />

{#each items as item, i}
	<Accordion open={openIndex === i} toggle={() => (openIndex = openIndex === i ? null : i)}>
		{#snippet header()}
			<div class="acc">
				{#if item.sTitle}
					<div class="sub">{item.sTitle}</div>
				{/if}
			</div>
		{/snippet}

		<p>{item.body}</p>
	</Accordion>
{/each}

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
	.sub {
		position: absolute;
		left: 520rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 14rem;
		font-weight: normal;

		@media (width < 770px) {
			display: none;
		}
	}
</style>
