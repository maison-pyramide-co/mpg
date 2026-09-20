<script lang="ts">
	import news from '$lib/data/news';
	import { onMount } from 'svelte';
	import animation from './_a';
	import Article from './c/article.svelte';

	let activeFilter = $state(null);
	let filteredNews = $derived(activeFilter ? news.filter((n) => n.type == activeFilter) : news);

	const toggleActiveFilter = (filter: any) => {
		activeFilter = activeFilter === filter ? null : filter;
	};

	onMount(() => {
		animation();
	});
</script>

<main id="p" style:opacity="0">
	<div class="l">
		<h2 data-ga="tr">KEEP UP WITH OUR LATEST NEWS</h2>
		<nav>
			<button
				onclick={() => toggleActiveFilter('in the press')}
				class:active={activeFilter === 'in the press'}>IN THE PRESS</button
			>
			<button
				onclick={() => toggleActiveFilter('company updates')}
				class:active={activeFilter === 'company updates'}
				>COMPANY UPDATES
			</button>
		</nav>
		<p>
			The latest from Maison Pyramide Group, from company updates to key milestones and industry
			moments.
		</p>
	</div>
	<div class="r">
		<ul>
			{#each filteredNews as article}
				<li>
					<Article {article} />
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	main {
		padding-top: 194rem;
		@media (width < 770px) {
			padding-inline: var(--p-i);
			padding-top: 120rem;
		}
	}
	.l {
		position: fixed;
		/* top: 0; */
		top: 194rem;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		/* height: 100vh; */
		/* padding-top: 234rem; */
		/* padding-top: 194rem; */
		padding-bottom: 40rem;
		padding-left: var(--p-i);
		background-color: white;
		width: 490rem;

		@media (width < 770px) {
			width: unset;
			position: static;
			height: unset;
			padding-left: 0;
			padding-bottom: 80rem;
		}
	}
	h2 {
		font-size: 80rem;
		line-height: 1;
		font-weight: 500;
		@media (width < 770px) {
			font-size: 40rem;
			text-align: center;
		}
	}

	nav {
		margin-top: auto;
		max-width: 460rem;
		display: flex;
		justify-content: space-between;
		@media (width < 770px) {
			margin-top: 80rem;
			gap: 16rem;
		}
	}
	button {
		width: 170rem;
		padding-block: 8rem;
		text-align: center;
		border: 1px solid black;
		border-radius: 100rem;
		font-size: 14rem;
		@media (width < 770px) {
			width: unset;
			flex: 1;
			padding-block: 6rem;
		}
	}
	button:hover {
		background-color: black;
		color: white;
	}
	button.active {
		background-color: black;
		color: white;
	}
	p {
		margin-top: 40rem;
		max-width: 460rem;
		font-size: 20rem;
		line-height: 1;
		font-family: 'gt';
		@media (width < 770px) {
			margin-top: 40rem;
			width: 280rem;
			margin-inline: auto;
			text-align: center;
			max-width: unset;
		}
	}
	.r {
		/* padding-top: 194rem; */
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
