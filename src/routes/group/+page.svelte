<script>
	import indI from '$lib/assets/images/ind.png';
	import Accordion from '$lib/components/accordion.svelte';
	import agencies from '$lib/data/agencies';
	import industries from '$lib/data/industries';
	import partners from '$lib/data/partners';
</script>

<main>
	<section class="he">
		<div>
			<h1>
				300 +
				<span>EVENTS</span>
			</h1>
			<p>
				Maison Pyramide Group is an international platform supporting the pace of innovation and
				growth of young emerging and established entities looking to speak the millennial language
				and grow internationally.
			</p>
		</div>
		<figure>
			<img src={indI} alt="MPG" />
		</figure>
	</section>
	<section class="ind">
		<span class="indx">01.</span>
		<h2 class="ti">OUR INDUSTRIES</h2>
		<ul class="ind_li">
			{#each industries as ind}
				<li class="ind_i">
					<Accordion title={ind.title}>
						<p>
							{ind.description}
						</p>

						<ul>
							{#each ind.offerings as off}
								<li>{off}</li>
							{/each}
						</ul>
					</Accordion>
					<figure>
						<img src={ind.image} alt={ind.title} />
					</figure>
				</li>
			{/each}
		</ul>
	</section>
	<section class="agn">
		<div class="l">
			<span class="indx">02.</span>
			<h2 class="ti">MPG</h2>
			<p>
				We unite advisory, creative, and commercial expertise into one culture-first ecosystem. By
				connecting insight, narrative, experience, and distribution, we move audiences and drive
				value.
			</p>
		</div>
		<div class="r">
			<h2 class="ti">AGENCIES</h2>
			<ul>
				{#each agencies as agency}
					<li>
						<div>
							<h3>{agency.name}</h3>
							<p>{agency.description}</p>
						</div>
						<a href={agency.link} target="_blank">DISCOVER</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>
	<section class="prt">
		<span class="indx">03.</span>
		<h2 class="ti">LEADERSHIP<br />TEAM</h2>
		<ul>
			{#each partners as prt}
				<li>
					<figure>
						<img src={prt.image} alt={prt.name} />
					</figure>
					<h3>{prt.name}</h3>
					<p>{prt.title}</p>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style lang="scss">
	main {
		padding-block: 80rem;
		/* padding-inline: var(--p-i); */
	}
	.he {
		padding-inline: var(--p-i);
		display: flex;
		gap: 30rem;
	}
	.he > div {
		flex: 3;
	}
	.he figure {
		flex: 5;
		aspect-ratio: 4/3;
		background-color: #ededed;
	}

	h1 {
		font-size: 80rem;
		& span {
			margin-top: -13rem;
			font-size: 30rem;
			font-weight: normal;
			display: block;
		}
	}
	.he p {
		margin-top: 48rem;
		font-size: 20rem;
		line-height: 24rem;
		letter-spacing: 0.5rem;
	}
	.ind {
		margin-top: 140rem;
		padding-inline: var(--p-i);
	}
	.ind span {
		font-size: 20rem;
		font-weight: 500;
	}
	.ind h2 {
		margin-top: -11rem;
		font-size: 80rem;
	}
	.ind_li {
		margin-top: 60rem;
		display: flex;
		gap: 64rem;
	}
	.ind_i p {
		font-size: 20rem;
		line-height: 24rem;
		letter-spacing: 0.5rem;
		font-weight: 500;
	}
	.ind_i ul {
		margin-top: 24rem;
		padding-bottom: 8rem;
	}
	.ind_i li {
		font-size: 20rem;
		letter-spacing: 0.5rem;
	}
	.ind_i figure {
		margin-top: 16rem;
	}
	.agn {
		margin-top: 140rem;
		padding-block: 120rem;
		padding-inline: var(--p-i);
		background-color: black;
		display: flex;
		color: white;
		justify-content: space-between;
	}
	.agn .l {
		width: 318rem;
	}
	.agn .l p,
	.agn .r ul {
		margin-top: 64rem;
	}
	.agn p {
		font-size: 20rem;
		line-height: 140%;
	}
	.agn .r {
		padding-top: 25.5rem;
		width: 839rem;
	}
	.agn li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 32rem;
		border-bottom: 1px solid white;
		&:first-child {
			padding-top: 0;
		}
	}
	.agn h3 {
		font-size: 30rem;
		line-height: 110%;
		font-weight: 600;
	}
	.agn a {
		border: 1px solid white;
		font-size: 16rem;
		padding: 12rem 32rem;
		border-radius: 50rem;
	}

	.prt {
		padding-inline: var(--p-i);
		margin-top: 140rem;
	}
	.prt h2 {
		line-height: 100%;
	}
	.prt ul {
		margin-top: 60rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 80rem;
	}
	.prt li {
		width: 318rem;
		flex-shrink: 0;
	}
	.prt h3 {
		margin-top: 24rem;
		font-size: 24rem;
		font-weight: 400;
	}
	.prt p {
		margin-top: 6rem;
		font-size: 18rem;
		font-size: 300;
	}

	.indx {
		font-size: 20rem;
		font-weight: 500;
	}
	.ti {
		font-size: 80rem;
		line-height: 100%;
	}
</style>
