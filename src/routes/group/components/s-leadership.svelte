<script lang="ts">
	import partners from '$lib/data/leadership';
</script>

<section id="s-leadership">
	<h2>LEADERSHIP<br />TEAM</h2>
	<div>
		<p>
			Attention is earned. Impact is intentional. We create brands that turn attention into action,
			and action into growth. Every great brand starts with a story.
		</p>
		<ul>
			{#each partners as prt}
				<li>
					<figure data-ga="ir">
						<img src={prt.image} alt={prt.name} />
					</figure>
					<h3 data-ga="tr">{prt.name}</h3>
					<h4 data-ga="tr">{prt.title}</h4>
					<p data-ga="tr">{prt.company}</p>
					{#if prt.t2}
						<h4 data-ga="tr">{prt.t2}</h4>
						<p data-ga="tr">{prt.c2}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	section {
		padding-block: 80rem 64rem;

		@media (width < 770px) {
		}
	}
	h2 {
		text-align: right;
		margin-left: auto;
		margin-right: 24rem;
		font-size: 50rem;
		line-height: 1;
		font-weight: 500;
		@media (width < 770px) {
			text-align: center;
			font-size: 40rem;
			margin: 0;
		}
	}
	section > div {
		margin-top: 80rem;
		padding-left: 80rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		position: relative;
		@media (width < 770px) {
			margin-top: 40rem;
			padding-inline: var(--p-i);
			flex-direction: column;
		}
	}
	section > div > p {
		width: 315rem;
		font-size: 20rem;
		line-height: 1;
		padding-top: 275rem;
		position: sticky;
		top: 300rem;
		@media (width < 770px) {
			text-align: center;
			margin-inline: auto;
			padding-top: 0;
			position: static;
		}
	}
	ul {
		width: 900rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 32rem 28rem;
		@media (width < 770px) {
			width: 240rem;
			margin-top: 64rem;
			margin-inline: auto;
			gap: 40rem;
		}
	}
	figure {
		width: 275rem;
		@media (width < 770px) {
			width: 100%;
		}
	}
	h3 {
		margin-top: 10rem;
		font-size: 20rem;
		font-weight: 400;
		line-height: 1;
		text-transform: uppercase;
		@media (width < 770px) {
			text-align: center;
			margin-top: 16rem;
			font-size: 20rem;
		}
	}
	li h4 {
		font-size: 15rem;
		font-weight: 300;
		&:nth-of-type(2) {
			margin-top: 10rem;
		}
	}
	li p {
		font-size: 12rem;
		font-weight: 300;
		@media (width < 770px) {
			margin-top: 0;
			text-align: center;
			font-size: 16rem;
			margin-inline: auto;
		}
	}
	/* li p {
		width: 200rem;
	} */
	/* li:nth-child(1) p,
	li:nth-child(2) p,
	li:nth-child(3) p {
		width: 200rem;
	} */
	/* li:nth-child(3) p {
		width: 280rem;
	} */
</style>
