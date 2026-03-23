<script>
	import Accordion from '$lib/components/accordion.svelte';
	import positions from '$lib/data/positions';
</script>

<main>
	<h1>JOIN THE TEAM</h1>
	<div class="careers">
		<aside>
			<h3>OPEN POSITIONS</h3>
			<p>With all application please ensure to attach your resume and portfolio</p>
		</aside>
		<ul>
			{#each positions as pos}
				<li>
					<Accordion title={pos.title}>
						<div class="acc_b">
							<div class="l">
								<span>{pos.company}</span>
								<p>{pos.description}</p>
							</div>
							<div class="r">
								<span>REQUIREMENTS</span>
								<ul>
									{#each pos.requirements as req}
										<li>{req}</li>
									{/each}
								</ul>
							</div>
						</div>
					</Accordion>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	main {
		padding-block: 80rem;
		padding-inline: var(--p-i);
	}
	h1 {
		font-size: 80rem;
		margin-left: 360rem;
	}
	.careers {
		margin-top: 64rem;
		display: flex;
		gap: 100rem;
	}
	aside {
		width: 260rem;
		flex-shrink: 0;
	}
	h3 {
		font-size: 30rem;
		font-weight: 600;
	}
	aside p {
		margin-top: 16rem;
		font-size: 14rem;
	}
	.careers > ul {
		flex-basis: 100%;
	}
	.careers > ul > li {
		border-top: 1px solid black;
		&:last-child {
			border-bottom: 1px solid black;
		}
	}
	.acc_b {
		padding-block: 20rem 40rem;
		display: flex;
		gap: 40rem;
	}
	.acc_b > div {
		flex-basis: 100%;
	}
	.l span {
		font-size: 20rem;
		line-height: 1;
		text-transform: uppercase;
	}
	.l p {
		margin-top: 20rem;
		font-size: 16rem;
		line-height: 20rem;
	}
	.r span {
		font-size: 16rem;
		line-height: 20rem;
	}
	.r ul {
		margin-top: 18rem;
	}
	.r li {
		font-size: 16rem;
		line-height: 25rem;
		list-style: disc;
	}
</style>
