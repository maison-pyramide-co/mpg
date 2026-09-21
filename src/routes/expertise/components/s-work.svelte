<script lang="ts">
	// import projects from '$lib/data/work';
	import projects from '$lib/data/case-studies';
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

<section id="s-work">
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
		@media (width < 770px) {
		}
	}
	nav {
		padding-block: 96rem 64rem;
		display: flex;
		gap: 32rem;
		justify-content: center;
		@media (width < 770px) {
			padding-block: 64rem;
			flex-direction: column;
			align-items: center;
		}
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
		@media (width < 770px) {
			padding-inline: var(--p-i);
			grid-template-columns: 1fr;
			gap: 48rem;
		}
	}
</style>
