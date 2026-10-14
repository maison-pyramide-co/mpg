<script lang="ts">
	import { onMount } from 'svelte';

	const { close, position } = $props();
	let name = $state('');
	let email = $state('');
	let cv = $state<File | null>(null);
	let portfolio = $state<File | null>(null);
	let loading = $state(false);
	let message = $state('');
	let success = $state(false);

	const MAX_SIZE = 5 * 1024 * 1024;

	function handleFileChange(event: Event) {
		const input = event.currentTarget as HTMLInputElement;
		const selected = input.files?.[0] ?? null;

		message = '';
		cv = null;
		portfolio = null;
		if (!selected) return;

		const extension = selected.name.split('.').pop()?.toLowerCase();

		if (!['pdf', 'docx'].includes(extension ?? '')) {
			message = 'Please upload a PDF or DOCX file.';
			input.value = '';
			return;
		}

		if (selected.size > MAX_SIZE) {
			message = 'Your file must be 5 MB or smaller.';
			input.value = '';
			return;
		}

		if (input.id === 'cv') {
			cv = selected;
		} else {
			portfolio = selected;
		}
	}

	async function submitApplication(event: SubmitEvent) {
		event.preventDefault();

		if (!cv || loading) return;

		loading = true;
		message = '';

		try {
			const formData = new FormData();
			formData.set('name', name);
			formData.set('email', email);
			formData.set('cv', cv);

			const response = await fetch('/api/apply', {
				method: 'POST',
				body: formData
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.message ?? 'Submission failed.');
			}

			success = true;
			message = 'Your application has been submitted successfully.';
			name = '';
			email = '';
			cv = null;

			const input = document.querySelector<HTMLInputElement>('#cv');
			if (input) input.value = '';
		} catch (error) {
			success = false;
			message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		const h = document.querySelector('header');
		h?.classList.remove('hidden');
	});
</script>

<section data-lenis-prevent>
	<div>
		<div class="l">
			<h2>{position}</h2>
			<button type="button" onclick={close}>Back</button>
		</div>
		<div class="r">
			<form>
				<div class="t">
					<input name="first-name" type="text" placeholder="First Name" />
					<input name="last-name" type="text" placeholder="Last Name" />
					<input name="email" type="email" placeholder="Email Address" />
					<input name="phone" type="text" placeholder="Phone" />
				</div>
				<div class="b">
					<label for="cv" class="upload">Upload CV</label>
					<input
						id="cv"
						class="d-n"
						name="cv"
						type="file"
						accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
						onchange={handleFileChange}
						required
					/>
					{#if cv}
						<p>Selected file: {cv.name}</p>
					{/if}

					<label for="portfolio" class="upload">Upload Portfolio</label>
					<input
						id="portfolio"
						class="d-n"
						name="portfolio"
						type="file"
						accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
						onchange={handleFileChange}
						required
					/>

					{#if portfolio}
						<p>Selected file: {portfolio.name}</p>
					{/if}

					<textarea name="cover-letter" placeholder="Cover Letter"></textarea>
				</div>

				{#if message}
					<p role="status" aria-live="polite">{message}</p>
				{/if}

				<button type="submit" disabled={loading || !cv}>
					{loading ? 'Submitting...' : 'SUBMIT'}
				</button>
			</form>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		padding-inline: var(--p-i);
		width: 100%;
		height: 100%;
		position: fixed;
		overflow: auto;
		top: 0;
		left: 0;
		z-index: 99;
		background: white;
	}
	section > div {
		padding-block: 194rem 80rem;
		overflow: auto;
		display: flex;
		justify-content: space-between;
		gap: 80rem;
		@media (width < 770px) {
			padding-block: 80rem;
			flex-direction: column;
			gap: 40rem;
		}
	}
	section .l {
		width: 500rem;
		flex-shrink: 0;
		padding-top: 24rem;
		display: flex;
		flex-direction: column;
		gap: 40rem;
		align-items: flex-start;
		@media (width < 770px) {
			width: unset;
			/* gap: unset; */
		}
	}
	h2 {
		font-size: 60rem;
		line-height: 70rem;
		font-weight: 450;
		@media (width < 770px) {
			font-size: 40rem;
			line-height: 1;
		}
	}
	.l button {
		padding-bottom: 2rem;
		border-bottom: 1px solid black;
	}
	section .r {
		width: 880rem;
		@media (width < 770px) {
			width: unset;
		}
	}

	form {
		margin-top: 32rem;
	}
	form .t {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40rem 32rem;
		@media (width < 770px) {
			grid-template-columns: 1fr;
		}
	}
	form .b {
		margin-top: 40rem;
		display: flex;
		flex-direction: column;
		gap: 40rem;
	}
	input {
		font-size: 20rem;
		padding-bottom: 16rem;
		border-bottom: 1px solid black;

		&::placeholder {
			/* font-size: 20rem; */
			color: rgba(0, 0, 0, 0.7);
		}
		@media (width < 770px) {
			font-size: 16rem;
		}
	}
	.upload {
		font-size: 20rem;
		text-decoration: underline;
		cursor: pointer;
		width: 100%;
		padding-block: 12rem;
		border: 1px solid black;
		color: rgba(0, 0, 0, 0.6);
		text-align: center;

		@media (width < 770px) {
			font-size: 16rem;
		}
	}
	textarea {
		font-size: 20rem;
		padding: 16rem;
		border: 1px solid black;
		width: 100%;
		min-height: 160rem;
		resize: none;
		&::placeholder {
			color: rgba(0, 0, 0, 0.7);
		}

		@media (width < 770px) {
			font-size: 16rem;
		}
	}
	form button {
		margin-top: 24rem;
		padding: 10rem 24rem;
		border: 1px solid black;
		border-radius: 40rem;
		font-size: 14rem;
		font-weight: 500;
		letter-spacing: 1%;
		@media (width < 770px) {
			margin-top: 24rem;
			padding: 8rem 24rem;
			font-size: 12rem;
		}
	}
</style>
