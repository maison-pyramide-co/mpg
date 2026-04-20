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
	import Swiper from 'swiper/bundle';
	import 'swiper/css';
	import initiatives from '$lib/data/initiatives';
	import Ichev from '$lib/assets/icons/chev.svelte';
	import HAccordion from './components/HAccordion.svelte';

	let activeIndex = $state(0);

	const initSwiper = () => {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1.38,
			spaceBetween: '24rem',
			loop: true,
			navigation: {
				nextEl: '#swiper-next',
				prevEl: '#swiper-prev'
			},
			pagination: {
				el: '.pg',
				type: 'fraction',
				formatFractionCurrent: (number) => {
					return number < 10 ? `0${number}` : number;
				}
			}
		});
		swiper.on('slideChange', function () {
			activeIndex = this.realIndex;
		});
	};

	onMount(() => {
		animation();
		initSwiper();
	});

	let activeIndustry = $state(null);
	const toggleActiveIndustry = (i: any) => {
		activeIndustry = activeIndustry === i ? null : i;
	};
</script>

<main id="p" style:opacity="0">

	<section class="he">
		<h1>
			SCALING BRANDS.
			<br />DEFINING GLOBAL RELEVANCE.
		</h1>
		<div>
			<ul>
				<li>
					1000+
					<span>CLIENTS</span>
				</li>
				<li>
					1B+
					<span>CAMPAIGN REACH</span>
				</li>
				<li>
					1500+
					<span>GLOBAL PARTNERS</span>
				</li>
				<li>
					200+
					<span>EXPERIENCES</span>
				</li>
			</ul>

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
				<li class="m-o">
					<HAccordion
						title={ind.title}
						img={ind.image}
						open={activeIndustry == i}
						toggle={() => toggleActiveIndustry(i)}
						align={i % 2 === 0 ? 'right' : 'left'}
					>
						<div class="ha_b">
							<p>
								{ind.description}
							</p>

							<ul>
								{#each ind.offerings as off}
									<li>{off}</li>
								{/each}
							</ul>
						</div>
					</HAccordion>
				</li>
			{/each}

			{#each industries as ind, i}
				<li class="ind_i d-o">
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
			<h2 data-ga="tr" class="ti">
				MPG
				<span class="m-o">AGENCIES</span>
			</h2>
			<p data-ga="tr">
				We unite advisory, creative, and commercial expertise into one culture-first ecosystem. By
				connecting insight, narrative, experience, and distribution, we move audiences and drive
				value.
			</p>
		</div>
		<div class="r">
			<h2 data-ga="tr" class="ti d-o">AGENCIES</h2>
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

			<div class="p_">
				<p data-ga="tr">
					Maison Pyramide Group is an international platform supporting the pace of innovation and
					growth of young emerging and established entities looking to speak the millennial language
					and grow internationally.
				</p>
			</div>
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
			<div class="r">
				<div class="pg"></div>
				<div class="swiper">
					<div class="swiper-wrapper">
						{#each initiatives as initv}
							<div class="swiper-slide">
								<figure>
									<img src={initv.image} alt="" />
								</figure>
							</div>
						{/each}
					</div>
				</div>
				<div class="b">
					<h3>{initiatives[activeIndex].name}</h3>
					<nav>
						<button id="swiper-prev">
							<Ichev />
						</button>
						<button id="swiper-next">
							<Ichev />
						</button>
					</nav>
				</div>
			</div>
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
		@media (width < 770px) {
			padding-block: 48rem;
		}
	}
	.indx {
		font-size: 20rem;
		font-weight: 500;
		line-height: 1;
		@media (width < 770px) {
			font-size: 14rem;
		}
	}
	.ti {
		font-size: 80rem;
		line-height: 1;
		font-weight: bold;
		@media (width < 770px) {
			font-size: 32rem;
		}
	}

	.he {
		padding-inline: var(--p-i);
		h1 {
			font-size: 80rem;
			letter-spacing: 0.5rem;
			line-height: 1;
			font-weight: bold;
			@media (width < 770px) {
				font-size: 32rem;
			}
		}
		> div {
			margin-top: 100rem;
			display: flex;
			gap: 130rem;
			margin-inline: auto;
			align-items: center;
			justify-content: center;
			@media (width < 770px) {
				margin-top: 24rem;
				flex-direction: column-reverse;
				gap: 48rem;
				align-items: unset;
				justify-content: unset;
			}
		}
		ul {
			display: flex;
			flex-direction: column;
			gap: 40rem;
			@media (width < 770px) {
				gap: 20rem;
				flex-wrap: wrap;
				flex-direction: row;
			}
		}
		li {
			font-size: 50rem;
			font-weight: bold;
			@media (width < 770px) {
				font-size: 32rem;
				flex-basis: calc((100% - 20rem) / 2);
			}
			& span {
				display: block;
				font-size: 22rem;
				margin-top: -6rem;
				font-weight: normal;
				@media (width < 770px) {
					font-size: 16rem;
					margin-top: 4rem;
				}
			}
		}

		figure {
			aspect-ratio: 4/2.5;
			background-color: #ededed;
			/* @media (width < 770px) {
				aspect-ratio: 3.5/2;
			} */
		}
	}

	.ind {
		margin-top: 140rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			margin-top: 80rem;
		}
		.ind_list {
			margin-top: 60rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 24rem;
				flex-direction: column;
			}
		}
		.ind_i {
			flex: 1;
			height: 458rem;
			overflow: hidden;
			@media (width < 770px) {
				/* flex: unset;
			height: 505rem; */
			}
		}
		.ind_i :global(h3) {
			font-size: 24rem;
			font-weight: 500;
		}
		.ind_i :global(span) {
			font-weight: 300;
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
			text-transform: capitalize;
		}
		.ind_i figure {
			aspect-ratio: 5/6;
			transition: all 0.2s ease-out;
		}
	}
	.ha_b {
		width: 286rem;
		padding-right: 20rem;
		ul {
			margin-top: 24rem;
			/* width: 100%; */
		}
		p {
			font-weight: 500;
		}
		li {
			margin-top: 10rem;
			padding-bottom: 8rem;
			border-bottom: 1px solid black;
			text-transform: capitalize;
			&:first-child {
				margin-top: 0;
			}
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

		@media (width < 770px) {
			margin-top: 48rem;
			padding-block: 40rem 80rem;
			gap: 20rem;
			flex-direction: column;
		}
		.l {
			width: 318rem;
			@media (width < 770px) {
				width: 100%;
			}
		}
		.l p,
		.r ul {
			margin-top: 64rem;

			@media (width < 770px) {
				margin-top: 40rem;
			}
		}
		p {
			font-size: 20rem;
			line-height: 140%;

			@media (width < 770px) {
				font-size: 16rem;
				line-height: 1;
			}
		}
		.r {
			padding-top: 25.5rem;
			width: 839rem;
			@media (width < 770px) {
				width: 100%;
			}
		}
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-block: 32rem;
			/* border-bottom: 1px solid white; */
			position: relative;
			@media (width < 770px) {
				flex-direction: column;
				align-items: unset;
			}
			& > div {
				@media (width < 770px) {
					display: flex;
					gap: 20rem;
				}
			}
			&:first-child {
				padding-top: 0;
			}

			h3 {
				font-size: 30rem;
				line-height: 110%;
				font-weight: 600;
				@media (width < 770px) {
					flex-basis: 100%;
					font-size: 18rem;
				}
			}
			p {
				@media (width < 770px) {
					flex-basis: 100%;
					font-size: 18rem;
					font-size: 16rem;
				}
			}
			a {
				display: block;
				border: 1px solid white;
				font-size: 16rem;
				padding: 12rem 32rem;
				border-radius: 50rem;
				font-weight: 500;
				width: fit-content;
				@media (width < 770px) {
					margin-top: 20rem;
					padding: 8rem 16rem;
					font-size: 12rem;
					margin-left: calc(210rem - 20rem);
				}
			}
		}
		.line {
			position: absolute;
			background-color: white;
			height: 1px;
			width: 100%;
			bottom: 0;
			left: 0;
		}
	}

	.prt {
		position: relative;
		padding-inline: var(--p-i);
		padding-block: 80rem;
		background: white;
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
			@media (width < 770px) {
				margin-top: 24rem;
				gap: 40rem;
			}
		}
		li {
			width: 318rem;
			flex-shrink: 0;
			@media (width < 770px) {
				width: 100%;
			}
		}
		h3 {
			margin-top: 24rem;
			font-size: 24rem;
			font-weight: 400;
			@media (width < 770px) {
				text-align: center;
				margin-top: 16rem;
				font-size: 20rem;
			}
		}
		p {
			margin-top: 6rem;
			font-size: 18rem;
			opacity: 70%;
			@media (width < 770px) {
				margin-top: 0;
				text-align: center;
				font-size: 16rem;
			}
		}
	}

	.s-cult {
		margin-top: 120rem;
		padding-bottom: 80rem;
		padding-inline: var(--p-i);
		background: white;
		& > div {
			margin-top: 48rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 24rem;
				flex-direction: column-reverse;
			}
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
		.p_ {
			flex: 3;
			align-self: center;
		}

		p {
			max-width: 420rem;
			font-size: 35rem;
			line-height: 40rem;
			@media (width < 770px) {
				font-size: 25rem;
				line-height: 30rem;
			}
		}
	}

	.s-imp {
		position: relative;
		/* margin-top: 120rem; */
		padding-block: 64rem 72rem;
		padding-inline: var(--p-i);
		background-color: black;
		color: white;
		& > div {
			display: flex;
			gap: 24rem;
			align-items: flex-end;
			margin-top: 48rem;
			@media (width < 770px) {
				gap: 56rem;
				flex-direction: column;
				margin-top: 40rem;
			}
		}
		.l {
			width: 668rem;
			flex-shrink: 0;
			padding-bottom: 71rem;
			@media (width < 770px) {
				width: unset;
				padding-bottom: unset;
			}
			h3 {
				font-size: 32rem;
				font-weight: 300;
				@media (width < 770px) {
					font-size: 25rem;
				}
			}
			p {
				margin-top: 24rem;
				max-width: 520rem;
				font-size: 18rem;
				line-height: 1.4;
			}
		}

		.r {
			width: 668rem;
			@media (width < 770px) {
				width: 100%;
			}
			:global(.swiper) {
				margin-top: 24rem;
				margin-right: calc(-1 * var(--p-i));
				@media (width < 770px) {
					/* margin-right: 0; */
				}
			}
			figure {
				/* width: 495rem; */
				aspect-ratio: 4/5;
			}
			h3 {
				font-size: 24rem;
				font-weight: bold;
				@media (width < 770px) {
					font-size: 18rem;
				}
			}
			.b {
				margin-top: 40rem;
				display: flex;
				justify-content: space-between;
				@media (width < 770px) {
					margin-top: 24rem;
				}
			}
			nav {
				display: flex;
				gap: 12rem;
				@media (width < 770px) {
				}
			}
			button {
				width: 24rem;
				&:last-child :global(svg) {
					transform: rotate(180deg);
				}
				@media (width < 770px) {
					width: 24rem;
				}
			}
			:global(svg path) {
				fill: white;
			}
			:global(svg circle) {
				stroke: white;
			}
			.pg {
				width: fit-content;
				margin-left: auto;
				font-size: 18rem;
				@media (width < 770px) {
					font-size: 14rem;
				}
			}
		}
	}

	.s-off {
		margin-top: 140rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			margin-top: 64rem;
		}
		.off_co {
			margin-top: 48rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 24rem;
				flex-direction: column-reverse;
				gap: 40rem;
			}
		}
		figure {
			margin-left: calc(var(--p-i) * -1);
			flex-basis: 100%;
			@media (width < 770px) {
				margin-inline: calc(-1 * var(--p-i));
			}
		}
		.off_co div {
			width: 480rem;
			flex-shrink: 0;
			@media (width < 770px) {
				width: unset;
			}
		}

		.off_co h3 {
			font-size: 25rem;
			line-height: 120%;
			font-weight: 500;
			@media (width < 770px) {
				font-size: 20rem;
			}
		}
		.off_co p {
			margin-top: 24rem;
			font-size: 20rem;
			line-height: 1.2;
			@media (width < 770px) {
				font-size: 15rem;
			}
		}
		ul {
			margin-top: 64rem;
			display: flex;
			gap: 24rem;
			@media (width < 770px) {
				margin-top: 40rem;
				flex-wrap: wrap;
			}
		}
		li {
			width: calc((100% - 24rem) / 2);
			&:last-child p {
				max-width: 150rem;
			}
		}

		li h4 {
			font-size: 25rem;
			font-weight: bold;
			@media (width < 770px) {
				font-size: 16rem;
			}
		}
		li p {
			max-width: 140rem;
			margin-top: 16rem;
			font-size: 15rem;
			line-height: 140%;
			@media (width < 770px) {
				max-width: 135rem;
				margin-top: 8rem;
				font-size: 14rem;
			}
		}
	}
</style>
