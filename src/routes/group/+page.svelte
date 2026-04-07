<script lang="ts">
	import indI from '$lib/assets/images/ind.png';
	import Accordion from '$lib/components/accordion.svelte';
	import agencies from '$lib/data/agencies';
	import industries from '$lib/data/industries';
	import partners from '$lib/data/partners';
	import mapI from '$lib/assets/images/map.png';
	import offices from '$lib/data/offices';

	import { onMount } from 'svelte';
	import animation from './_animation';
	onMount(() => {
		animation();
	});

	let activeIndustry = $state(null);
	const toggleActiveIndustry = (i: any) => {
		activeIndustry = activeIndustry === i ? null : i;
	};
</script>

<main id="p" style:opacity="0">
	<section class="he">
		<div class="l">
			<h1>
				<span class="g-numb">300</span>+
			</h1>
			<span>EVENTS</span>
			<p data-ga="tr">
				Maison Pyramide Group is an international platform supporting the pace of innovation and
				growth of young emerging and established entities looking to speak the millennial language
				and grow internationally.
			</p>
		</div>
		<div class="r">
			<figure data-ga="ir">
				<img src={indI} alt="MPG" />
			</figure>
		</div>
	</section>
	<section class="ind">
		<span data-ga="tr" class="indx">01.</span>
		<h2 data-ga="tr" class="ti">OUR<br />INDUSTRIES</h2>
		<ul class="ind_list">
			{#each industries as ind, i}
				<li class="ind_i">
					<Accordion
						title={ind.title}
						open={activeIndustry == i}
						toggle={() => toggleActiveIndustry(i)}
					>
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
			<span data-ga="tr" class="indx">02.</span>
			<h2 data-ga="tr" class="ti">MPG</h2>
			<p data-ga="tr">
				We unite advisory, creative, and commercial expertise into one culture-first ecosystem. By
				connecting insight, narrative, experience, and distribution, we move audiences and drive
				value.
			</p>
		</div>
		<div class="r">
			<h2 data-ga="tr" class="ti">AGENCIES</h2>
			<ul>
				{#each agencies as agency}
					<li data-gs="agen">
						<div>
							<h3>{agency.name}</h3>
							<p>{agency.description}</p>
						</div>
						<a href={agency.link} target="_blank">DISCOVER</a>
						<div class="line"></div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
	<section class="prt">
		<span data-ga="tr" class="indx">03.</span>
		<h2 data-ga="tr" class="ti">LEADERSHIP<br />TEAM</h2>
		<ul>
			{#each partners as prt}
				<li>
					<figure data-ga="ir">
						<img src={prt.image} alt={prt.name} />
					</figure>
					<h3 data-ga="tr">{prt.name}</h3>
					<p data-ga="tr">{prt.title}</p>
				</li>
			{/each}
		</ul>
	</section>
	<section class="s-cult">
		<span data-gs="tr" class="indx">04.</span>
		<h2 data-ga="tr" class="ti">CULTURE</h2>

		<div>
			<span data-ga="tr">COUNTRY</span>
			<figure data-ga="ir">
				<img src="" alt="" />
			</figure>
			<p data-ga="tr">
				Maison Pyramide Group is an international platform supporting the pace of innovation and
				growth of young emerging and established entities looking to speak the millennial language
				and grow internationally.
			</p>
		</div>
	</section>
	<section class="s-imp">
		<span data-ga="tr" class="indx">05.</span>
		<h2 data-ga="tr" class="ti">IMPACT &<br />RESPONSIBILITY</h2>
		<div>
			<div class="l">
				<h3 data-ga="tr">Values and Giving</h3>
				<p data-ga="tr">
					We value individuality - and unity. Each person's unique input is important, but
					collaboration is how we accomplish more, and make things bigger, better, extraordinary. We
					carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify
					their reach at international showrooms and events. We also support several philanthropic
					projects directly, often by donating proceeds from sales at events and pop-ups. One such
					cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for
					children in local communities in Italy and Egypt.
				</p>
			</div>
			<div class="r"></div>
		</div>
	</section>
	<section class="s-off">
		<span data-ga="tr" class="indx">06.</span>
		<h2 data-ga="tr" class="ti">OFFICE NETWORK</h2>
		<div class="off_co">
			<figure data-ga="ir">
				<img src={mapI} alt="" />
			</figure>
			<div>
				<h3 data-ga="tr">
					Our extensive office and showroom network connects regional strength with global
					opportunity.
				</h3>
				<p data-ga="tr">
					From our flagship launch in Cairo in 2016 and Beirut in 2019, to the establishment of our
					Dubai headquarters in 2021 and Riyadh in 2023, we offer clients decisive coverage across
					MENA.
					<br />
					<br />
					In Paris, our permanent Sales & PR Showroom, supported by a digital E-Showroom, opens doors
					to international buyers and media, turning regional ambition into global scale.
				</p>
			</div>
		</div>
		<ul>
			{#each offices as off}
				<li>
					<h4 data-ga="tr">{off.city}</h4>
					<p data-ga="tr">{off.address}</p>
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

	.indx {
		font-size: 20rem;
		font-weight: 500;
		line-height: 1;
	}
	.ti {
		font-size: 80rem;
		line-height: 1;
	}
	.he {
		padding-inline: var(--p-i);
		display: flex;
		gap: 30rem;
		.l {
			flex: 3;
		}
		h1 {
			font-size: 80rem;
		}

		.l > span {
			margin-top: -13rem;
			font-size: 30rem;
			font-weight: normal;
			display: block;
		}
		p {
			max-width: 350rem;
			margin-inline: auto;
			margin-top: 88rem;
			font-size: 20rem;
			line-height: 24rem;
			letter-spacing: 0.5rem;
		}
		.r {
			flex: 5;
			padding-top: 30rem;
		}
		figure {
			aspect-ratio: 4/2.5;
			background-color: #ededed;
		}
	}

	.ind {
		margin-top: 140rem;
		padding-inline: var(--p-i);
		.ind_list {
			margin-top: 60rem;
			display: flex;
			gap: 24rem;
		}
		.ind_i {
			flex: 1;
		}
		.ind_i :global(h3) {
			font-size: 24rem;
		}
		.ind_i p {
			font-size: 16rem;
			line-height: 1.2;
			font-weight: 500;
		}
		.ind_i ul {
			margin-top: 24rem;
			padding-bottom: 24rem;
		}
		.ind_i li {
			font-size: 16rem;
			line-height: 1;
			padding-block: 12rem;
			border-bottom: 1px solid black;
		}
		.ind_i figure {
			aspect-ratio: 5/6;
		}
	}

	.agn {
		margin-top: 140rem;
		padding-block: 120rem;
		padding-inline: var(--p-i);
		background-color: black;
		display: flex;
		color: white;
		justify-content: space-between;
		.l {
			width: 318rem;
		}
		.l p,
		.r ul {
			margin-top: 64rem;
		}
		p {
			font-size: 20rem;
			line-height: 140%;
		}
		.r {
			padding-top: 25.5rem;
			width: 839rem;
		}
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-block: 32rem;
			/* border-bottom: 1px solid white; */
			position: relative;
			&:first-child {
				padding-top: 0;
			}
		}
		li .line {
			position: absolute;
			background-color: white;
			height: 1px;
			width: 100%;
			bottom: 0;
			left: 0;
		}
		h3 {
			font-size: 30rem;
			line-height: 110%;
			font-weight: 600;
		}
		a {
			border: 1px solid white;
			font-size: 16rem;
			padding: 12rem 32rem;
			border-radius: 50rem;
		}
	}

	.prt {
		padding-inline: var(--p-i);
		margin-top: 140rem;
		span {
			display: block;
			text-align: right;
		}
		h2 {
			text-align: right;
		}
		ul {
			margin-top: 60rem;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			gap: 80rem;
		}
		li {
			width: 318rem;
			flex-shrink: 0;
		}
		h3 {
			margin-top: 24rem;
			font-size: 24rem;
			font-weight: 400;
		}
		p {
			margin-top: 6rem;
			font-size: 18rem;
			opacity: 70%;
		}
	}
	.s-cult {
		margin-top: 120rem;
		padding-inline: var(--p-i);
		div {
			margin-top: 48rem;
			display: flex;
			gap: 24rem;
		}
		span {
			display: block;
			flex: 1;
			font-size: 20rem;
		}
		figure {
			aspect-ratio: 1;
			flex: 4;
			background-color: #ddd;
		}
		p {
			flex: 3;
			align-self: center;
			font-size: 35rem;
			line-height: 40rem;
		}
	}

	.s-imp {
		margin-top: 120rem;
		padding-block: 64rem 72rem;
		padding-left: var(--p-i);
		background-color: black;
		color: white;
		& > div {
			display: flex;
			gap: 24rem;
			align-items: flex-end;
		}
		.l {
			flex: 1;
		}
		.l h3 {
			font-size: 32rem;
			font-weight: 300;
		}
		.l p {
			margin-top: 24rem;
			max-width: 520rem;
			font-size: 18rem;
			line-height: 1.4;
		}

		.r {
			flex: 1;
			height: 600rem;
		}
	}
	.s-off {
		margin-top: 140rem;
		padding-inline: var(--p-i);
		.off_co {
			margin-top: 48rem;
			display: flex;
			gap: 24rem;
		}
		figure {
			margin-left: calc(var(--p-i) * -1);
			flex-basis: 100%;
		}
		.off_co div {
			width: 480rem;
			flex-shrink: 0;
		}

		.off_co h3 {
			font-size: 25rem;
			line-height: 120%;
			font-weight: 500;
		}
		.off_co p {
			margin-top: 24rem;
			font-size: 20rem;
			line-height: 1.2;
		}
		ul {
			margin-top: 64rem;
			display: flex;
			gap: 24rem;
		}
		li {
			flex: 1;
			&:last-child p {
				max-width: 150rem;
			}
		}

		li h4 {
			font-size: 25rem;
		}
		li p {
			max-width: 140rem;
			margin-top: 16rem;
			font-size: 15rem;
			line-height: 140%;
		}
	}
</style>
