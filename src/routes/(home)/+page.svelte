<script>
	import pI from '$lib/assets/images/slider.png';
	import Ichev from '$lib/assets/icons/chev.svelte';

</script>

<main>
	<figure>
		<img src={pI} alt="" />
	</figure>
	<div>
		<div class="pg">
			<span>01</span>
			<span>/</span>
			<span>10</span>
		</div>
		<h2>Name of the project</h2>
		<nav>
			<button>
				<Ichev />
			</button>
			<button>
				<Ichev />
			</button>
		</nav>
	</div>
</main>

<style>
	main {
		padding-top: 40rem;
		padding-inline: var(--p-i);
	}
	figure {
		aspect-ratio: 7/3;
		background-color: #ededed;
	}
	main > div {
		margin-top: 22rem;
		position: relative;
		display: flex;
		justify-content: center;
	}

	.pg {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		font-size: 16rem;
		& span:first-child {
			font-size: 32rem;
			line-height: 40rem;
		}
	}

	nav {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		gap: 12rem;
	}

	button:last-child {
		transform: rotate(180deg);
	}
</style>
