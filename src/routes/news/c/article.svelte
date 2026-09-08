<script>
	import Accordion from './accordion.svelte';

	let { article } = $props();
</script>

<div class="article">
	<figure data-ga="ir">
		<img src={article.image} alt="" />
		<!-- <figcaption>{article.type}</figcaption> -->
	</figure>
	<h4 data-ga="tr">{article.title}</h4>
	{#if article.link}
		<div>
			<span data-ga="tr">{article.date}</span>
			<a target="_blank" href={article.link}>READ FULL ARTICLE</a>
		</div>
	{:else}
		<Accordion date={article.date}>
			<p>{article.description}</p>
		</Accordion>
	{/if}
</div>

<style>
	.article {
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
		margin-bottom: 24rem;

		font-size: 20rem;
		line-height: 1;
		text-transform: uppercase;
		font-weight: 500;

		@media (width < 770px) {
			font-size: 15rem;
		}
	}
	span {
		display: block;
		font-size: 16rem;
		text-transform: uppercase;
	}
	.article > div {
		margin-top: 16rem;
		font-size: 16rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	p {
		padding-top: 24rem;
		font-size: 15rem;
	}
	a {
		padding: 6rem 18rem;
		border: 1px solid black;
		border-radius: 100rem;
		font-size: 14rem;
	}
</style>
