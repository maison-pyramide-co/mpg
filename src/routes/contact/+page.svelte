<script>
	import agencies from '$lib/data/agencies';
	import Iarrow from '$lib/assets/icons/diag-arrow.svelte';
</script>

<main>
	<h1>CONTACT US</h1>
	<div>
		<div class="l">
			<ul>
				{#each agencies as company}
					<li>
						<a href={company.link} target="_blank">
							<Iarrow />
							<span>
								{company.name}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
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
		padding-block: 80rem;
		padding-inline: var(--p-i);
	}
	h1 {
		font-size: 80rem;
		margin-left: 360rem;
	}
	main > div {
		margin-top: 80rem;
		display: flex;
		gap: 150rem;
	}
	ul {
		width: 210rem;
		display: flex;
		flex-direction: column;
		gap: 20rem;
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
	}
	input {
		width: 100%;
		padding-bottom: 32rem;
		border-bottom: 1px solid black;
		margin-top: 16rem;
		font-size: 20rem;
		&:first-of-type {
			margin-top: unset;
		}
		&::placeholder {
			font-size: 20rem;
			font-weight: 300;
		}
	}
	textarea {
		font-size: 20rem;
		font-weight: 300;
		font-family: 's';
		width: 100%;
		border: none;
		margin-top: 16rem;
		border-bottom: 1px solid black;
		height: 160rem;
		resize: none;
	}
	button {
		margin-top: 32rem;
		font-size: 16rem;
		font-weight: 500;
		padding: 10rem 40rem;
		margin-left: auto;
		border: 1px solid black;
		border-radius: 50rem;
	}
</style>
