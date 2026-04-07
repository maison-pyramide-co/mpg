<script>
	import news from '$lib/data/news';
</script>

<main>
	<div class="l">
		<h2>KEEP UP WITH OUR LATEST NEWS</h2>
		<p>
			As a 3D visualizer, you will play a crucial role in transforming architects' concepts into
			vibrant reality. Your responsibilities will involve interpreting plans, architectural
			illustrations, and
		</p>
	</div>
	<div class="r">
		<ul>
			{#each news as article}
				<li>
					<figure>
						<img src={article.image} alt="" />
					</figure>
					<h4>{article.title}</h4>
					<span>{article.date}</span>
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
	span {
		display: block;
		margin-top: 16rem;
		font-size: 12rem;
		text-transform: uppercase;

		@media (width < 770px) {
			opacity: 0.7;
		}
	}
</style>
