<script lang="ts">
	import Iarrow from '$lib/assets/icons/diag-arrow.svelte';
	import Iig from '$lib/assets/icons/ig.svelte';
	import Iin from '$lib/assets/icons/in.svelte';
	import companies from '$lib/data/companies';

	const menu = [
		{
			title: 'group',
			link: '/group' as const
		},
		{
			title: 'services',
			link: '/services' as const
		},
		{
			title: 'news',
			link: '/news' as const
		},
		{
			title: 'careers',
			link: '/careers' as const
		},
		{
			title: 'contact us',
			link: '/contact' as const
		}
	];
	
</script>

<div class="menu">
	<div class="t">
		<ul>
			{#each companies as company}
				<li>
					<a href={company.link} target="_blank">
						<Iarrow />
						<span>
							{company.name}
						</span>
					</a>
				</li>
			{/each}
		</ul>
		<nav>
			{#each menu as item, i}
				<a href={item.link}>
					<div>{item.title}</div>
					<span>0{i + 1}</span>
				</a>
			{/each}
		</nav>
	</div>
	<div class="b">
		<p>2025 ALL RIGHTS RESERVED</p>
		<div>
			<a href="https://www.linkedin.com/company/maison-pyramide" target="_blank">
				<Iin />
			</a>
			<a href="https://www.instagram.com/maisonpyramideshowroom" target="_blank">
				<Iig />
			</a>
		</div>
	</div>
</div>

<style>
	.menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
		background-color: white;
		padding-inline: var(--p-i);
		padding-top: var(--h-h);
		min-height: 100vh;
		min-height: 100dvh;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 80rem;
	}
	.menu .t {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-basis: 100%;
	}

	/* MENU COMPANIES */
	ul {
		display: flex;
		flex-direction: column;
		gap: 20rem;
	}
	ul a {
		display: flex;
		gap: 12rem;
	}
	ul a span {
		font-size: 20rem;
		line-height: 110%;
		font-weight: 600;
	}
	ul a :global svg {
		width: 10rem;
	}

	/* MENU NAV */
	nav {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 40rem;
	}
	nav a {
		display: flex;
		align-items: center;
		gap: 80rem;
	}
	nav a div {
		font-size: 70rem;
		line-height: 1;
		letter-spacing: 10%;
		font-weight: bold;
		text-transform: uppercase;
	}
	nav a span {
		width: 38rem;
		font-size: 30rem;
		line-height: 1;
	}
	/* MENU BOTTOM */
	.b {
		display: flex;
		justify-content: space-between;
		padding-bottom: 32rem;
	}
	.b p {
		font-size: 10rem;
		font-weight: 500;
	}
	.b div {
		display: flex;
		gap: 16rem;
	}
	.b a {
		width: 16rem;
	}
</style>
