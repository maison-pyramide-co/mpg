<script>
	import logoH from '$lib/assets/images/mpg-logo-h.png';
	import Iig from '$lib/assets/icons/ig.svelte';
	import Iin from '$lib/assets/icons/in.svelte';
</script>

<footer>
	<div class="l">
		<a href="/contact">CONTACT US</a>
		<span class="d-o">I</span>
		<a href="/careers">CAREERS</a>
	</div>

	<div class="c">
		<img src={logoH} alt="" />
	</div>

	<div class="r">
		<p>©MAISON PYRAMIDE GROUP 2026</p>
		<div>
			<a href="https://www.linkedin.com/company/maison-pyramide" target="_blank">
				<Iin />
			</a>
			<a href="https://www.instagram.com/maisonpyramideshowroom" target="_blank">
				<Iig />
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: var(--p-i);
		padding-block: 48rem 32rem;
		border-top: 1px solid #ededed;
		margin-top: 40rem;
		@media (width < 770px) {
			padding-bottom: 16rem;
			flex-wrap: wrap;
		}
	}
	.l {
		flex: 2;
		display: flex;
		gap: 12rem;
		font-size: 13rem;
		line-height: 1;
		font-weight: 500;
		@media (width < 770px) {
			flex: unset;
			flex-direction: column;
			font-size: 10rem;
		}
	}
	.c {
		flex: 4;
		@media (width < 770px) {
			order: -1;
			width: 100%;
			flex-shrink: 0;
			flex: unset;
			margin-bottom: 32rem;
		}
	}
	.c img {
		margin-inline: auto;
		width: 240rem;
		height: auto;
		@media (width < 770px) {
			width: 160rem;
		}
	}

	.r {
		flex: 2;
		display: flex;
		gap: 20rem;
		justify-content: flex-end;

		@media (width < 770px) {
			flex-direction: column-reverse;
			align-items: flex-end;
			flex: unset;
			gap: 16rem;
		}
	}
	.r p {
		@media (width < 770px) {
			font-size: 8rem;
			font-weight: 300;
		}
	}
	.r div {
		display: flex;
		gap: 12rem;
	}
	.r a {
		display: block;
		width: 16rem;
	}
</style>
