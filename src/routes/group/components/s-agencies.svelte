<script lang="ts">
	import agencies from '$lib/data/agencies';
</script>

<section>
	{#each agencies as agency}
		<div class="agency">
			<figure>
				<img src={agency.cover} alt="" />
			</figure>
			<div class="agency-info">
				<div>
					<h3>{agency.name}</h3>
					<a href={agency.link} target="_blank" rel="noopener noreferrer">DISCOVER</a>
				</div>
				<p>{agency.description}</p>
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
	}
	.agency {
		flex: 1;
		position: relative;
	}
	.agency figure {
		width: 100%;
		height: auto;
	}
	.agency-info {
		width: 100%;
		position: absolute;
		padding-inline: 24rem;
		bottom: 32rem;
		color: white;
	}
	.agency-info div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h3 {
		font-size: 20rem;
		line-height: 1;
		font-weight: 500;
	}

	a {
		padding: 8rem 14rem;
		border: 1px solid white;
		border-radius: 50rem;
		font-size: 14rem;
	}
	p {
		margin-top: 40rem;
		font-size: 15rem;
		font-weight: 300;
	}
</style>
