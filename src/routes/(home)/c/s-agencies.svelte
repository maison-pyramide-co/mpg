<script>
	import indBanI from '$lib/assets/images/ind-ban.png';
	import indBanMI from '$lib/assets/images/ind-ban-m.png';
	import agencies from '$lib/data/agencies';
</script>

<section class="s-agn">
	<h2 data-ga="tr">CONNECTING CREATIVITY, COMMERCE, AND CULTURE TO BUILD WHAT MATTERS NEXT.</h2>
	<div class="h">
		<h3>our agencies</h3>
		<a href="/group">EXPLORE THE GROUP</a>
	</div>
	<div class="agencies">
		<figure>
			<picture>
				<source srcset={indBanI} media="(min-width: 770px)" />
				<img src={indBanMI} width="auto" height="auto" alt="logo" />
			</picture>
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

<style>
	section {
		padding-top: 64rem;
		position: relative;

		@media (width < 770px) {
		}
	}
	h2 {
		font-family: 'gt';
		font-size: 40rem;
		line-height: 1;
		width: 1100rem;
		margin-inline: auto;
		text-align: center;
		font-weight: 400;
		@media (width < 770px) {
			font-size: 25rem;
			width: 320rem;
		}
	}
	.h {
		margin-top: 144rem;
		padding-inline: var(--p-i);
		display: flex;
		justify-content: space-between;
		@media (width < 770px) {
			flex-direction: column;
			margin-top: 80rem;
			align-items: center;
			gap: 40rem;
		}
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
		padding-block: 160rem;
		overflow: hidden;
		@media (width < 770px) {
			padding-block: 120rem;
		}
	}
	.agencies figure {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	ul {
		width: 100%;
		padding-inline: 72rem;
		display: flex;
		justify-content: space-between;
		color: white;
		position: relative;
		z-index: 2;
		@media (width < 770px) {
			padding-inline: var(--p-i);
			flex-direction: column;
			gap: 80rem;
		}
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
</style>
