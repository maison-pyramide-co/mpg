<script lang="ts">
	import heroBan from '$lib/assets/images/home-ban.png';
	import logoI from '$lib/assets/images/log.png';
	import indBan from '$lib/assets/images/ind-ban.png';
	import agencies from '$lib/data/agencies';
	import { onMount } from 'svelte';
	import animation from './_a';
	// import Test from './test.svelte';
	import SSectors from '../test/sectors.svelte';
	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<section class="s-hero">
		<figure>
			<img src={heroBan} alt="MPG" />
		</figure>
		<div class="logo">
			<img src={logoI} alt="MPG" />
		</div>
	</section>
	<div class="s-intro_">
		<section class="s-intro">
			<div>
				<div class="t">MAISON PYRAMIDE GROUP</div>
				<h1>
					We bring strategy, creativity, and commercial thinking together in a culture-first
					ecosystem.
				</h1>
			</div>
			<div class="b">
				<p>
					We transform insight into stories,<br />
					stories into experiences,<br />
					and experiences into measurable value.
				</p>
				<a href="/group"> EXPLORE THE GROUP </a>
			</div>
		</section>
	</div>

	<!-- <Test /> -->
	<SSectors />

	<section class="s-agn">
		<h2 data-ga="tr">CONNECTING CREATIVITY, COMMERCE, AND CULTURE TO BUILD WHAT MATTERS NEXT.</h2>
		<div class="h">
			<h3>our agencies</h3>
			<a href="/group">EXPLORE THE GROUP</a>
		</div>
		<div class="agencies">
			<figure>
				<img src={indBan} alt="" />
			</figure>
			<ul>
				{#each agencies as agency}
					<li>
						<img src={agency.logo} alt="" />
						<p>{@html agency.bio}</p>
						<a href={agency.link}>DISCOVER</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>

<style lang="scss">
	.s-hero {
		height: 100vh;
		height: 100dvh;
		figure {
			width: 100%;
			height: 100%;
		}
		div {
			position: fixed;
			width: 190rem;
			top: 50%;
			left: 50%;
			/* transform: translate3d(-50%, -50%, 0); */
			transform: translate(-50%, -50%);
			/* width: 60rem;
			top: 24rem;
			left: 50%;
			transform: translateX(-50%); */
			z-index: 999;
		}
	}
	.s-intro_ {
		height: 200vh;
		height: 200dvh;
	}
	.s-intro {
		height: 100vh;
		height: 100dvh;
		background-color: #3f4018;
		color: #f0e9cd;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		& > div:first-child {
			position: relative;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.t {
			position: absolute;
			left: 50%;
			transform: translate(-50%, -100%);
			font-size: 16rem;
			line-height: 1;
			top: -28rem;
		}
		h1 {
			/* width: 666rem; */
			width: 700rem;
			font-size: 40rem;
			font-family: 'gt';
			line-height: 100%;
			text-transform: uppercase;
			text-align: center;
			font-kerning: none;
			text-rendering: optimizeSpeed;
		}
		.b {
			position: absolute;
			bottom: 96rem;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			padding-inline: 96rem 112rem;
			p {
				font-size: 20rem;
				line-height: 1;
			}
			a {
				display: block;
				padding: 12rem 48rem;
				text-transform: uppercase;
				border: 1px solid #f0e9cd;
				color: inherit;
				border-radius: 100rem;
			}
		}
	}
	.s-agn {
		padding-top: 64rem;
		position: relative;
		h2 {
			font-family: 'gt';
			font-size: 40rem;
			line-height: 1;
			width: 1100rem;
			margin-inline: auto;
			text-align: center;
			font-weight: 400;
		}
		.h {
			margin-top: 144rem;
			padding-inline: var(--p-i);
			display: flex;
			justify-content: space-between;
		}
		h3 {
			font-size: 30rem;
			font-weight: 600;
			text-transform: uppercase;
		}
		.h a {
			display: block;
			padding: 12rem 48rem;
			text-transform: uppercase;
			border: 1px solid black;
			color: black;
			border-radius: 100rem;
		}
		.agencies {
			margin-top: 48rem;
			position: relative;
		}
		.agencies figure {
			width: 100%;
		}
		ul {
			width: 100%;
			padding-inline: 72rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			justify-content: space-between;
			color: white;
		}
		li {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30rem;
		}
		ul img {
			width: auto;
			height: 24rem;
		}
		ul p {
			font-size: 15rem;
			line-height: 1;
			text-align: center;
		}
		ul a {
			padding: 8rem 14rem;
			border: 1px solid white;
			border-radius: 50rem;
			font-size: 14rem;
		}
	}
</style>
