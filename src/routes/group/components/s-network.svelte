<script lang="ts">
	import MapI from '$lib/assets/images/map-mobile.png';
	import Map from '$lib/assets/icons/map.svelte';
	import cities from '$lib/data/network';

	let acitveCity: any = $state(null);

	const changeCity = (city: string) => {
		if (city == null) acitveCity = null;
		else {
			acitveCity = city;
		}
	};
</script>

<section>
	<h2>OUR NETWORK</h2>
	<p>
		Maison Pyramide Group operates through offices in Cairo, Riyadh and Dubai, alongside MP Showroom
		in Paris. Together, our network connects regional market knowledge with international
		opportunity.
	</p>
	<div class="map m-o">
		<figure>
			<img src={MapI} alt="MPG Map" />
		</figure>
	</div>

	<div class="map d-o">
		{#if acitveCity}
			<div class="active-city">
				<h3>{acitveCity}</h3>
				<p>{cities[acitveCity]}</p>
			</div>
		{/if}
		<Map {changeCity} />
	</div>
	<ul class="cities m-o">
		{#each Object.entries(cities) as [name, description]}
			<li>
				<h3>{name}</h3>
				<p>{description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding-top: 80rem;

		@media (width < 770px) {
		}
	}
	h2 {
		font-size: 40rem;
		font-weight: 500;
		text-align: center;
	}
	section > p {
		width: 900rem;
		margin-inline: auto;
		margin-top: 18rem;
		font-family: 'gt';
		font-size: 20rem;
		line-height: 1.1;
		text-align: center;
		/* text-transform: uppercase; */
		@media (width < 770px) {
			width: 340rem;
			margin-top: 24rem;
		}
	}
	.map {
		position: relative;
		margin-top: 40rem;
	}
	.active-city {
		max-width: 300rem;
		position: absolute;
		top: 96rem;
		right: 96rem;
	}
	.active-city h3 {
		font-size: 15rem;
		text-transform: uppercase;
		font-weight: normal;
	}
	.active-city p {
		margin-top: 10rem;
		font-size: 12rem;
		line-height: 1;
		font-weight: 300;
	}
	ul {
		margin-top: 32rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24rem;
		text-align: center;
	}
	li {
		width: 300rem;
	}
	li h3 {
		text-transform: uppercase;
		font-size: 16rem;
		font-weight: 500;
	}

	li p {
		margin-top: 16rem;
		font-size: 14rem;
		font-weight: 300;
		line-height: 1;
	}
</style>
