<script lang="ts">
	import projects from '$lib/data/work';
	import Project from './project.svelte';

	const categories = [
		'arts & culture',
		'beauty & wellness',
		'fashion & luxury',
		'real estate',
		'retail'
	];

	let activeCategory = $state(null);
	let activeProj = $state(null);

	const toggleActiveProj = (i: any) => {
		activeProj = activeProj === i ? null : i;
	};
	const toggleActiveCategory = (cat: any) => {
		activeCategory = activeCategory === cat ? null : cat;
	};
	let filteredProjects = $derived(
		activeCategory ? projects.filter((p) => p.category === activeCategory) : projects
	);
</script>

<section>
	<nav>
		{#each categories as cat}
			<button onclick={() => toggleActiveCategory(cat)} class:active={activeCategory === cat}>
				{cat}
			</button>
		{/each}
	</nav>
	<ul>
		{#each filteredProjects as proj, i}
			<li>
				<Project {proj} open={activeProj == i} toggle={() => toggleActiveProj(i)} />
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding-bottom: 80rem;
	}
	nav {
		padding-block: 64rem;
		display: flex;
		gap: 32rem;
		justify-content: center;
	}
	button {
		width: 190rem;
		padding-block: 6rem;
		border: 1px solid black;
		border-radius: 100rem;
		text-transform: uppercase;
		&:hover {
			background-color: black;
			color: white;
		}
	}
	button.active {
		background-color: black;
		color: white;
	}
	ul {
		padding-inline: 25rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20rem;
	}
</style>
