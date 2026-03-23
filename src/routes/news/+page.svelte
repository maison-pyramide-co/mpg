<script>
	import newsI from '$lib/assets/images/news.png';
	const news = [
		{
			title: 'EBRD and Maison Pyramide Partner to Support Women-Led Fashion Brands in Egypt',
			date: 'september 2024',
			image: newsI
		},
		{
			title: 'EBRD and Maison Pyramide Partner to Support Women-Led Fashion Brands in Egypt',
			date: 'September 2024',
			image: newsI
		},
		{
			title: 'EBRD and Maison Pyramide Partner to Support Women-Led Fashion Brands in Egypt',
			date: 'September 2024',
			image: newsI
		},
		{
			title: 'EBRD and Maison Pyramide Partner to Support Women-Led Fashion Brands in Egypt',
			date: 'September 2024',
			image: newsI
		}
	];
</script>

<main>
	<h2>KEEP UP WITH OUR LATEST NEWS</h2>
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
</main>

<style>
	main {
		padding-bottom: 80rem;
		padding-top: 88rem;
		padding-inline: var(--p-i);
	}
	h2 {
		text-align: center;
		font-size: 80rem;
	}
	ul {
		margin-top: 64rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 80rem 32rem;
	}
	figure {
		aspect-ratio: 3/2;
		background-color: #ededed;
	}
	h4 {
		margin-top: 40rem;
		font-size: 18rem;
		line-height: 1;
		text-transform: uppercase;
	}
	span {
		display: block;
		margin-top: 16rem;
		font-size: 12rem;
		font-weight: 300;
		text-transform: uppercase;
	}
</style>
