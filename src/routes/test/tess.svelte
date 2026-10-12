<script>
	import { enhance } from '$app/forms';

	let { form } = $props();

	let submitting = $state(false);
	let cvName = $state('');
	let portfolioName = $state('');

	const errors = $derived(form?.errors ?? {});
	const values = $derived(form?.values ?? {});
</script>

<svelte:head>
	<title>Senior PR Executive</title>
	<meta name="description" content="Apply for the Senior PR Executive position." />
</svelte:head>

<main>
	<h1>Senior PR Executive</h1>

	{#if form?.success}
		<p class="success" role="status">Thank you. Your application has been sent.</p>
	{:else}
		<form
			method="POST"
			enctype="multipart/form-data"
			novalidate
			use:enhance={() => {
				submitting = true;
				return async ({ update }) => {
					// keep what the person typed when validation fails
					await update({ reset: false });
					submitting = false;
				};
			}}
		>
			<div class="row">
				<label class="field">
					<input
						name="firstName"
						type="text"
						placeholder="First Name"
						autocomplete="given-name"
						value={values.firstName ?? ''}
						aria-invalid={errors.firstName ? 'true' : undefined}
						required
					/>
					{#if errors.firstName}<span class="error">{errors.firstName}</span>{/if}
				</label>
				<label class="field">
					<input
						name="lastName"
						type="text"
						placeholder="Last Name"
						autocomplete="family-name"
						value={values.lastName ?? ''}
						aria-invalid={errors.lastName ? 'true' : undefined}
						required
					/>
					{#if errors.lastName}<span class="error">{errors.lastName}</span>{/if}
				</label>
			</div>

			<div class="row">
				<label class="field">
					<input
						name="email"
						type="email"
						placeholder="Email Address"
						autocomplete="email"
						value={values.email ?? ''}
						aria-invalid={errors.email ? 'true' : undefined}
						required
					/>
					{#if errors.email}<span class="error">{errors.email}</span>{/if}
				</label>
				<label class="field">
					<input
						name="phone"
						type="tel"
						placeholder="Phone"
						autocomplete="tel"
						value={values.phone ?? ''}
						aria-invalid={errors.phone ? 'true' : undefined}
						required
					/>
					{#if errors.phone}<span class="error">{errors.phone}</span>{/if}
				</label>
			</div>

			<div class="upload-wrap">
				<label class="upload" class:invalid={errors.cv}>
					<span>{cvName || 'Upload CV'}</span>
					<input
						name="cv"
						type="file"
						accept=".pdf,.doc,.docx"
						required
						onchange={(e) => (cvName = e.currentTarget.files?.[0]?.name ?? '')}
					/>
				</label>
				{#if errors.cv}<span class="error">{errors.cv}</span>{/if}
			</div>

			<div class="upload-wrap">
				<label class="upload" class:invalid={errors.portfolio}>
					<span>{portfolioName || 'Upload Portfolio'}</span>
					<input
						name="portfolio"
						type="file"
						accept=".pdf,.ppt,.pptx,.key,.zip"
						required
						onchange={(e) => (portfolioName = e.currentTarget.files?.[0]?.name ?? '')}
					/>
				</label>
				{#if errors.portfolio}<span class="error">{errors.portfolio}</span>{/if}
			</div>

			<div class="upload-wrap">
				<textarea
					name="coverLetter"
					placeholder="Cover Letter"
					rows="7"
					aria-invalid={errors.coverLetter ? 'true' : undefined}
					required>{values.coverLetter ?? ''}</textarea
				>
				{#if errors.coverLetter}<span class="error">{errors.coverLetter}</span>{/if}
			</div>

			<!-- honeypot: hidden from people, bots tend to fill it -->
			<div class="hp" aria-hidden="true">
				<label>Website <input name="website" type="text" tabindex="-1" autocomplete="off" /></label>
			</div>

			{#if errors.form}<p class="error form-error" role="alert">{errors.form}</p>{/if}

			<div class="actions">
				<button type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Submit'}</button>
			</div>
		</form>
	{/if}
</main>

<style>
	:global(html) {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		color: #000;
		background: #fff;
	}
	:global(body) {
		margin: 0;
	}

	main {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 1.875rem 4rem;
	}

	h1 {
		margin: 0 0 4rem;
		font-size: clamp(2.5rem, 7vw, 4.5rem);
		font-weight: 400;
		line-height: 1;
		text-transform: uppercase;
		letter-spacing: -0.01em;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 2.75rem;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.25rem;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'] {
		width: 100%;
		box-sizing: border-box;
		padding: 0.5rem 0 1rem;
		border: 0;
		border-bottom: 1px solid #000;
		border-radius: 0;
		background: transparent;
		font: inherit;
		font-size: 1.25rem;
		color: #000;
		outline: none;
	}
	input::placeholder,
	textarea::placeholder {
		color: #555;
		opacity: 1;
	}
	input[type='text']:focus-visible,
	input[type='email']:focus-visible,
	input[type='tel']:focus-visible {
		border-bottom-width: 2px;
		margin-bottom: -1px;
	}

	.upload-wrap {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-top: -0.75rem;
	}

	.upload {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3.5rem;
		border: 1px solid #000;
		font-size: 1.25rem;
		color: #555;
		text-decoration: underline;
		text-underline-offset: 3px;
		cursor: pointer;
		overflow: hidden;
	}
	.upload span {
		padding: 0 1rem;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	/* real input stays in the DOM (keyboard + required validation) but is visually hidden */
	.upload input {
		position: absolute;
		inset: 0;
		opacity: 0;
		cursor: pointer;
		font-size: 0;
	}
	.upload:focus-within {
		outline: 2px solid #000;
		outline-offset: 2px;
	}

	textarea {
		width: 100%;
		box-sizing: border-box;
		padding: 1rem 1.125rem;
		border: 1px solid #000;
		border-radius: 0;
		background: transparent;
		font: inherit;
		font-size: 1.25rem;
		color: #000;
		resize: vertical;
		min-height: 11.5rem;
		outline: none;
	}
	textarea:focus-visible {
		outline: 2px solid #000;
		outline-offset: 2px;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		margin-top: -2.25rem;
	}

	button {
		padding: 0.55rem 1.5rem;
		border: 1px solid #000;
		border-radius: 999px;
		background: #fff;
		font: inherit;
		font-size: 0.9rem;
		text-transform: uppercase;
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s;
	}
	button:hover:not(:disabled),
	button:focus-visible {
		background: #000;
		color: #fff;
		outline: none;
	}
	button:disabled {
		opacity: 0.5;
		cursor: wait;
	}

	.error {
		color: #b00020;
		font-size: 0.875rem;
	}
	.form-error {
		margin: 0;
	}
	[aria-invalid='true'],
	.invalid {
		border-color: #b00020 !important;
	}

	.success {
		font-size: 1.5rem;
	}

	.hp {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	@media (max-width: 640px) {
		.row {
			grid-template-columns: 1fr;
			gap: 2.75rem;
		}
		h1 {
			margin-bottom: 2.5rem;
		}
	}
</style>
