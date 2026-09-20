<script lang="ts">
	import MapI from '$lib/assets/images/map-mobile.png';
	import Map from '$lib/assets/icons/map.svelte';

	let acitveCity: any = $state(null);
	const cities = {
		dubai:
			'In dubai, our permanent Sales & PR Showroom, supported by a digital E-Showroom, opens doors to international buyers and media, turning regional ambition into global scale.',
		paris:
			'In paris, our permanent Sales & PR Showroom, supported by a digital E-Showroom, opens doors to international buyers and media, turning regional ambition into global scale.',
		cairo:
			'In cairo, our permanent Sales & PR Showroom, supported by a digital E-Showroom, opens doors to international buyers and media, turning regional ambition into global scale.',
		riyadh:
			'In riyadh, our permanent Sales & PR Showroom, supported by a digital E-Showroom, opens doors to international buyers and media, turning regional ambition into global scale.'
	};

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
		Our extensive office and showroom network connects regional strength with global opportunity.
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
</section>

<style>
	.map {
		position: relative;
		margin-top: 40rem;
	}
	.active-city {
		max-width: 258rem;
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
		width: 680rem;
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
	figure {
	}
</style>
