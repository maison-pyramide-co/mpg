<script>
	import Accordion from './accordion.svelte';
	const { proj, open, toggle } = $props();
</script>

<figure>
	<img src={proj.image} alt="" />
	<figcaption>{proj.category}</figcaption>
</figure>
<Accordion title={proj.name} {open} {toggle}>
	<ul>
		{#each proj.services as srvc}
			<li>{srvc}</li>
		{/each}
	</ul>

	<p>
		{proj.description}
	</p>
</Accordion>

<style>
	figure {
		aspect-ratio: 4/2.5;
		overflow: hidden;
		position: relative;
	}
	figcaption {
		position: absolute;
		bottom: 24rem;
		right: 24rem;
		border: 1px solid white;
		padding-block: 8rem;
		color: white;
		font-size: 10rem;
		text-transform: uppercase;
		border-radius: 100rem;
		width: 125rem;
		text-align: center;
	}
	ul {
		display: flex;
		gap: 18rem;
		margin-top: 16rem;
	}
	li {
		color: #666666;
		font-size: 12rem;
		text-transform: capitalize;
	}
	p {
		padding-top: 24rem;
	}
</style>
