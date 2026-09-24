<script>
	import agencies from '$lib/data/agencies';
	import Iarrow from '$lib/assets/icons/diag-arrow.svelte';
	import { onMount } from 'svelte';
	import animation from './_a';

	onMount(() => {
		animation();
	});
</script>

<main id="p" style:opacity="0">
	<h1>GET IN TOUCH</h1>
	<div>
		<ul>
			{#each agencies as agn}
				<li>
					<a href={agn.link} target="_blank">
						<Iarrow />
						<span>
							{agn.name}
						</span>
					</a>
				</li>
			{/each}
		</ul>
		<div class="r">
			<form>
				<input type="text" placeholder="Subject" />
				<input type="text" placeholder="Name" />
				<input type="email" placeholder="Email Address" />
				<textarea name="Message" placeholder="Message"></textarea>
				<button type="submit">SEND</button>
			</form>
		</div>
	</div>
</main>

<style>
	main {
		padding-block: 194rem 80rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			padding-top: 120rem;
		}
	}
	h1 {
		font-size: 60rem;
		margin-left: 360rem;
		font-weight: 500;
		@media (width < 770px) {
			font-size: 40rem;
			margin-left: 0;
			text-align: center;
		}
	}
	main > div {
		margin-top: 64rem;
		display: flex;
		gap: 150rem;
		@media (width < 770px) {
			gap: 60rem;
			flex-direction: column;
		}
	}
	ul {
		width: 210rem;
		display: flex;
		flex-direction: column;
		gap: 20rem;
		flex-shrink: 0;
		@media (width < 770px) {
			order: 2;
		}
	}
	ul a {
		display: flex;
		gap: 12rem;
	}
	ul a span {
		font-size: 20rem;
		line-height: 110%;
		font-weight: 600;
	}
	ul a :global svg {
		width: 10rem;
	}
	.r {
		flex-basis: 100%;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 40rem;
	}
	input {
		width: 100%;
		padding-bottom: 16rem;
		border-bottom: 1px solid black;
		font-size: 20rem;
		&::placeholder {
			font-size: inherit;
			/* font-weight: 300; */
			opacity: 0.7;
		}
		@media (width < 770px) {
			font-size: 16rem;
		}
	}
	textarea {
		font-size: 20rem;
		font-weight: 300;
		font-family: 's';
		width: 100%;
		border: none;
		border-bottom: 1px solid black;
		height: 160rem;
		resize: none;
		@media (width < 770px) {
			font-size: 16rem;
		}
	}
	button {
		margin-top: 32rem;
		font-size: 16rem;
		font-weight: 500;
		padding: 10rem 40rem;
		margin-left: auto;
		border: 1px solid black;
		border-radius: 50rem;
		@media (width < 770px) {
			margin-left: unset;
			width: fit-content;
			padding: 12rem 48rem;
			font-size: 14rem;
			margin-top: 24rem;
		}
	}
</style>
