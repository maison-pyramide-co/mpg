<script lang="ts">
	import { onMount } from 'svelte';
	import SHero from './components/s-hero.svelte';
	import SIntro from './components/s-intro.svelte';
	import SAgencies from './components/s-agencies.svelte';
	import SLeadership from './components/s-leadership.svelte';
	import SCulture from './components/s-culture.svelte';
	import SCsr from './components/s-csr.svelte';
	import SNetwork from './components/s-network.svelte';
	import SPrtnr from './components/s-prtnr.svelte';
	import animation from './_a';

	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<SHero />
	<SIntro />
	<SAgencies />
	<SLeadership />
	<SCulture />
	<SCsr />
	<SPrtnr />
	<SNetwork />
</main>

<style lang="scss">
	main {
		/* padding-block: 80rem; */
		/* padding-inline: var(--p-i); */
		@media (width < 770px) {
			/* padding-block: 48rem; */
		}
		.indx {
			font-size: 20rem;
			font-weight: 500;
			line-height: 1;
			@media (width < 770px) {
				font-size: 14rem;
			}
		}
		.ti {
			font-size: 80rem;
			line-height: 1;
			font-weight: bold;
			@media (width < 770px) {
				font-size: 32rem;
			}
		}
	}
	.ind {
		display: none;
		margin-top: 140rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			margin-top: 80rem;
		}
		.ind_list {
			margin-top: 60rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 24rem;
				flex-direction: column;
			}
		}
		.ind_i {
			flex: 1;
			height: 458rem;
			overflow: hidden;
			@media (width < 770px) {
				/* flex: unset;
			height: 505rem; */
			}
		}
		.ind_i :global(h3) {
			font-size: 24rem;
			font-weight: 500;
		}
		.ind_i :global(span) {
			font-weight: 300;
		}
		.ind_i p {
			font-size: 16rem;
			line-height: 1.2;
			font-weight: 500;
		}
		.ind_i ul {
			margin-top: 24rem;
			padding-bottom: 24rem;
		}
		.ind_i li {
			font-size: 16rem;
			line-height: 1;
			padding-block: 12rem;
			border-bottom: 1px solid black;
			text-transform: capitalize;
		}
		.ind_i figure {
			aspect-ratio: 5/6;
			transition: all 0.2s ease-out;
		}
	}
	.ha_b {
		width: 286rem;
		padding-right: 20rem;
		ul {
			margin-top: 24rem;
			/* width: 100%; */
		}
		p {
			font-weight: 500;
		}
		li {
			margin-top: 10rem;
			padding-bottom: 8rem;
			border-bottom: 1px solid black;
			text-transform: capitalize;
			&:first-child {
				margin-top: 0;
			}
		}
	}

	.s-off {
		margin-top: 140rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			margin-top: 64rem;
		}
		.off_co {
			margin-top: 48rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 24rem;
				flex-direction: column-reverse;
				gap: 40rem;
			}
		}
		figure {
			margin-left: calc(var(--p-i) * -1);
			flex-basis: 100%;
			@media (width < 770px) {
				margin-inline: calc(-1 * var(--p-i));
			}
		}
		.off_co div {
			width: 480rem;
			flex-shrink: 0;
			@media (width < 770px) {
				width: unset;
			}
		}

		.off_co h3 {
			font-size: 25rem;
			line-height: 120%;
			font-weight: 500;
			@media (width < 770px) {
				font-size: 20rem;
			}
		}
		.off_co p {
			margin-top: 24rem;
			font-size: 20rem;
			line-height: 1.2;
			@media (width < 770px) {
				font-size: 15rem;
			}
		}
		ul {
			margin-top: 64rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 40rem;
				flex-wrap: wrap;
			}
		}
		li {
			width: calc((100% - 24rem) / 2);
			&:last-child p {
				max-width: 150rem;
			}
		}

		li h4 {
			font-size: 25rem;
			font-weight: bold;
			@media (width < 770px) {
				font-size: 16rem;
			}
		}
		li p {
			max-width: 140rem;
			margin-top: 16rem;
			font-size: 15rem;
			line-height: 140%;
			@media (width < 770px) {
				max-width: 135rem;
				margin-top: 8rem;
				font-size: 14rem;
			}
		}
	}
</style>
