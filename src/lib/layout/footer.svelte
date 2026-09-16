<script>
	import logoH from '$lib/assets/images/mpg-logo-h.png';
	import Iig from '$lib/assets/icons/ig.svelte';
	import Iin from '$lib/assets/icons/in.svelte';
</script>

<footer>
	<div class="l">
		<a href="/contact">CONTACT US</a>
		<span>I</span>
		<a href="/careers">CAREERS</a>
	</div>

	<div class="c">
		<img src={logoH} alt="" />
	</div>

	<div class="r">
		<p>©MAISON PYRAMIDE GROUP 2026</p>
		<a href="https://www.linkedin.com/company/maison-pyramide" target="_blank">
			<Iin />
		</a>
		<a href="https://www.instagram.com/maisonpyramideshowroom" target="_blank">
			<Iig />
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: var(--p-i);
		padding-block: 48rem 32rem;
		/* height: var(--f-h); */
		border-top: 1px solid #ededed;
		margin-top: 40rem;
		@media (width < 770px) {
			padding-bottom: 16rem;
		}
	}
	footer .l {
		flex: 2;
		display: flex;
		gap: 12rem;
		font-size: 13rem;
		line-height: 1;
		font-weight: 500;
	}
	footer .c {
		flex: 4;
		img {
			margin-inline: auto;
			width: 240rem;
			height: auto;
		}
	}
	footer .r {
		flex: 2;
		display: flex;
		gap: 12rem;
		p {
			margin-right: 20rem;
		}
		a {
			display: block;
			width: 16rem;
		}
	}
</style>
