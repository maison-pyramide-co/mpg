<script lang="ts">
	import groupBan from '$lib/assets/images/group-ban.png';
</script>

<section id="s-hero">
	<figure>
		<img src={groupBan} alt="MPG" />
	</figure>
	<div>
		<h1>We unite advisory, creative, and commercial expertise into one culture-first ecosystem.</h1>

		<p>
			by connecting insight, narrative, experience, and distribution we move audiences & drive
			value.
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
		width: 930rem;
		color: #f2f0e6;

		@media (width < 770px) {
			width: 305rem;
			transform: translate(-50%, -30%);
		}
	}
	h1 {
		font-family: 'gt';
		font-size: 40rem;
		line-height: 1;
		text-transform: uppercase;
		text-align: center;
		@media (width < 770px) {
			font-size: 30rem;
		}
	}
	p {
		margin-top: 30rem;
		text-align: center;
		font-size: 30rem;
		line-height: 1;
		font-weight: 300;
		@media (width < 770px) {
			font-size: 20rem;
		}
	}
</style>
