<script lang="ts">
	import news from '$lib/data/news';
	import { onMount } from 'svelte';
	import animation from './_a';
	import Article from './c/article.svelte';

	// const sorted = news.sort((a, b) => new Date(b.date) - new Date(a.date));
	// console.log(sorted);
	onMount(() => {
		animation();
	});
</script>

<main id="p" style:opacity="0">
	<div class="l">
		<h2 data-ga="tr">KEEP UP WITH OUR LATEST NEWS</h2>
		<nav>
			<button>IN THE PRESS</button>
			<button>COMPANY UPDATES</button>
		</nav>
		<p>
			The latest from Maison Pyramide Group, from company updates to key milestones and industry
			moments.
		</p>
	</div>
	<div class="r">
		<ul>
			{#each news as article}
				<li>
					<Article {article} />
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
	}
	h2 {
		font-size: 80rem;
		line-height: 1;
		font-weight: 500;
		@media (width < 770px) {
			font-size: 32rem;
		}
	}

	nav {
		margin-top: auto;
		max-width: 460rem;
		display: flex;
		justify-content: space-between;
	}
	button {
		width: 170rem;
		padding-block: 8rem;
		text-align: center;
		border: 1px solid black;
		border-radius: 100rem;
	}
	p {
		margin-top: 40rem;
		max-width: 460rem;
		font-size: 20rem;
		line-height: 1;
		font-family: 'gt';
		@media (width < 770px) {
			margin-top: 24rem;
			width: 270rem;
			margin-left: auto;
			margin-right: 16rem;
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

	li > p {
		/* line-height: 110%;
		white-space: pre-line; */
	}
</style>
