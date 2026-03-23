<script>
	import Iig from '$lib/assets/icons/ig.svelte';
	import Iin from '$lib/assets/icons/in.svelte';
</script>

<footer>
	<p>2025 ALL RIGHTS RESERVED</p>
	<div>
		<a href="https://www.linkedin.com/company/maison-pyramide" target="_blank">
			<Iin />
		</a>
		<a href="https://www.instagram.com/maisonpyramideshowroom" target="_blank">
			<Iig />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		padding-inline: var(--p-i);
		padding-bottom: 32rem;
	}
	p {
		font-size: 10rem;
		font-weight: 500;
	}
	div {
		display: flex;
		gap: 16rem;
	}
	a {
		width: 16rem;
	}
</style>
