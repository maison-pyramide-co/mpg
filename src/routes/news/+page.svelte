<script lang="ts">
	import news from '$lib/data/news';
	import { onMount } from 'svelte';
	import animation from './_animation';

	// const sorted = news.sort((a, b) => new Date(b.date) - new Date(a.date));
	// console.log(sorted);
	onMount(() => {
		animation();
	});
</script>

<main id="p" style:opacity="0">
	<div class="l">
		<h2 data-ga="tr">KEEP UP WITH OUR LATEST NEWS</h2>
		<p data-ga="tr">
		The latest from Maison Pyramide, from company updates to key milestones and industry moments.
		</p>
	</div>
	<div class="r">
		<ul>
			{#each news as article}
				<li>
					<figure data-ga="ir">
						<img src={article.image} alt="" />
						<figcaption>{article.type}</figcaption>
					</figure>
					<h4 data-ga="tr">{article.title}</h4>
					<span data-ga="tr">{article.date}</span>
					<div data-ga="tr">
						{#if !article.link}
							<p data-ga="tr">{article.description}</p>
						{:else}
							<a data-ga="tr" href={article.link} target="_blank"> Read full article </a>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	main {
		@media (width < 770px) {
			padding-inline: var(--p-i);
		}
	}
	.l {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		height: 100vh;
		padding-top: calc(80rem + var(--h-h));
		padding-bottom: 40rem;
		padding-left: var(--p-i);
		background-color: white;
		width: 490rem;

		@media (width < 770px) {
			width: unset;
			position: static;
			height: unset;
			padding-top: 48rem;
			padding-left: unset;
			padding-bottom: 64rem;
		}

		h2 {
			font-size: 80rem;
			line-height: 1;
			font-weight: bold;
			@media (width < 770px) {
				font-size: 32rem;
			}
		}
		p {
			margin-top: auto;
			max-width: 460rem;
			font-size: 16rem;
			line-height: 24rem;
			@media (width < 770px) {
				margin-top: 24rem;
				width: 270rem;
				margin-left: auto;
				margin-right: 16rem;
			}
		}
	}
	.r {
		padding-top: 80rem;
		padding-right: var(--p-i);
		padding-bottom: 40rem;
		@media (width < 770px) {
			padding: 0;
			padding-bottom: 80rem;
		}
	}
	ul {
		margin-left: auto;
		width: 490rem;
		@media (width < 770px) {
			marigin: 0;
			width: unset;
		}
	}
	li {
		margin-top: 64rem;
		&:first-child {
			margin-top: 0;
		}
		@media (width < 770px) {
			margin-top: 48rem;
		}
	}
	figure {
		aspect-ratio: 3/2;
		background-color: #ededed;
		position: relative;
	}
	figcaption {
		position: absolute;
		left: 8rem;
		bottom: 8rem;
		font-size: 12rem;
		font-weight: 500;
		z-index: 1;
		color: white;
		text-transform: uppercase;
		/* mix-blend-mode: difference; */
	}
	h4 {
		margin-top: 24rem;
		font-size: 18rem;
		line-height: 1;
		text-transform: uppercase;
		font-weight: bold;

		@media (width < 770px) {
			font-size: 15rem;
		}
	}
	li > span {
		display: block;
		margin-top: 16rem;
		font-size: 14rem;
		text-transform: uppercase;

		@media (width < 770px) {
			opacity: 0.7;
		}
	}
	div {
		margin-top: 16rem;
		font-size: 16rem;
	}
	a {
		font-size: 12rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid black;
		width: fit-content;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}
	li > p {
		line-height: 110%;
		white-space: pre-line;
	}
</style>
