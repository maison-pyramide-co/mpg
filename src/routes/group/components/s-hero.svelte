<script lang="ts">
	import groupBan from '$lib/assets/images/group-ban.png';
</script>

<section id="s-hero">
	<figure>
		<img src={groupBan} alt="MPG" />
	</figure>
	<div>
		<h1>BUILT ON DIFFERENT PERSPECTIVES. UNITED BY SHARED AMBITION.</h1>

		<p>
			Maison Pyramide Group operates across EMEA, connecting brand communications with commercial
			development and talent management.
		</p>
	</div>
</section>

<style>
	section {
		height: 100vh;
		height: 100dvh;
		position: relative;
	}
	figure {
		width: 100%;
		height: 100%;
	}
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* width: 930rem; */
		color: #f2f0e6;

		@media (width < 770px) {
			top: 55%;
			width: 305rem;
			transform: translate(-50%, -30%);
		}
	}
	h1 {
		width: 800rem;
		margin-inline: auto;
		font-family: 'gt';
		font-size: 40rem;
		line-height: 1;
		text-transform: uppercase;
		text-align: center;
		@media (width < 770px) {
			width: unset;
			font-size: 30rem;
		}
	}
	p {
		width: 1150rem;
		margin-top: 30rem;
		text-align: center;
		/* font-size: 30rem; */
		font-size: 24rem;
		line-height: 1;
		font-weight: 300;
		@media (width < 770px) {
			width: unset;
			font-size: 20rem;
		}
	}
</style>
