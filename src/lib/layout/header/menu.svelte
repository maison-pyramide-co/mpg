<script lang="ts">
	import Iarrow from '$lib/assets/icons/diag-arrow.svelte';
	import Iig from '$lib/assets/icons/ig.svelte';
	import Iin from '$lib/assets/icons/in.svelte';
	import agencies from '$lib/data/agencies';
	import { onMount } from 'svelte';
	import animation from './_animation';

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
	onMount(() => {
		animation();
	});
</script>

<div id="menu" class="menu">
	<div class="t">
		<ul>
			{#each agencies as company}
				<li>
					<a href={company.link} target="_blank">
						<div class="y_">
							<Iarrow />
						</div>
						<div class="y_">
							<div>
								{company.name}
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
		<nav>
			{#each menu as item, i}
				<a href={item.link}>
					<div class="y_">
						<div class="ti">{item.title}</div>
					</div>
					<div class="y_">
						<div class="indx">0{i + 1}.</div>
					</div>
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

<style lang="scss">
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
		@media (width < 770px) {
			padding-top: 80rem;
			flex-direction: column;
			align-items: flex-start;
		}
	}

	/* MENU COMPANIES */
	ul {
		display: flex;
		flex-direction: column;
		gap: 20rem;
		@media (width < 770px) {
			order: 2;
		}

		a {
			display: flex;
			align-items: center;
			gap: 12rem;
		}
		a div div {
			font-size: 20rem;
			line-height: 110%;
			font-weight: 600;
		}
		a :global svg {
			width: 10rem;
		}
	}

	/* MENU NAV */
	nav {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 32rem;
		@media (width < 770px) {
			width: 100%;
			align-items: flex-start;
		}

		a {
			display: flex;
			align-items: center;
			gap: 50rem;
			@media (width < 770px) {
				width: 100%;
				gap: unset;
				justify-content: space-between;
			}
		}
		a .ti {
			font-size: 60rem;
			line-height: 1;
			letter-spacing: 10%;
			font-weight: 500;
			text-transform: uppercase;
			@media (width < 770px) {
				font-size: 38rem;
			}
		}
		a .indx {
			text-align: right;
			width: 28rem;
			font-size: 18rem;
			line-height: 1;
			@media (width < 770px) {
				font-size: 14rem;
			}
		}
	}

	/* MENU BOTTOM */
	.b {
		display: flex;
		justify-content: space-between;
		padding-bottom: 32rem;

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
	}
</style>
