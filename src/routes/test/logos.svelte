<script lang="ts">
	import industries from '$lib/data/industries';
	import { gsap } from 'gsap';

	// Assumes each item in `industries` has: image, title, description.
	// Add a `description` field to your data if it isn't there yet.

	let currentIndex = $state(0);
	let expanded = $state(false);
	let isAnimating = $state(false);

	const total = industries.length;

	let slideWrap: HTMLDivElement;
	let metaEl: HTMLDivElement;
	let metaInner: HTMLDivElement;

	function goTo(target: number, dir: 1 | -1) {
		if (isAnimating) return;
		isAnimating = true;

		const idx = ((target % total) + total) % total;
		const tl = gsap.timeline({
			onComplete: () => {
				isAnimating = false;
			}
		});

		// if the current slide's info panel is open, close it first
		if (expanded) {
			tl.to(metaEl, { height: 0, duration: 0.3, ease: 'power2.in' });
		}

		tl.to(
			slideWrap,
			{ autoAlpha: 0, x: dir * -30, duration: 0.3, ease: 'power2.in' },
			expanded ? '-=0.05' : 0
		)
			.call(() => {
				// swapping the data only happens once the old slide is fully hidden,
				// and `expanded` resets here — this is what guarantees the old
				// slide's text can never still be showing on the new slide
				currentIndex = idx;
				expanded = false;
			})
			.set(slideWrap, { x: dir * 30 })
			.to(slideWrap, { autoAlpha: 1, x: 0, duration: 0.4, ease: 'power2.out' });
	}

	function next() {
		goTo(currentIndex + 1, 1);
	}

	function prev() {
		goTo(currentIndex - 1, -1);
	}

	function toggleInfo() {
		if (!metaEl) return;

		if (!expanded) {
			expanded = true;
			// wait a frame so the meta content is in the DOM before we measure it
			requestAnimationFrame(() => {
				const h = metaInner.scrollHeight;
				gsap.fromTo(
					metaEl,
					{ height: 0 },
					{
						height: h,
						duration: 0.45,
						ease: 'power2.out',
						onComplete: () => gsap.set(metaEl, { height: 'auto' })
					}
				);
			});
		} else {
			gsap.to(metaEl, {
				height: 0,
				duration: 0.35,
				ease: 'power2.in',
				onComplete: () => {
					expanded = false;
				}
			});
		}
	}
</script>

<section id="s-sectors">
	<div class="slide" bind:this={slideWrap}>
		<figure class="media" class:expanded>
			<img src={industries[currentIndex].image} alt={industries[currentIndex].title} />

			{#if !expanded}
				<div class="overlay">
					<h3>{industries[currentIndex].title}</h3>
					<button type="button" onclick={toggleInfo}>READ MORE</button>
				</div>
			{/if}
		</figure>

		<div class="meta" bind:this={metaEl}>
			<div class="meta-inner" bind:this={metaInner}>
				<h3>{industries[currentIndex].title}</h3>
				<p>{industries[currentIndex].description}</p>
				<button type="button" onclick={toggleInfo}>READ LESS</button>
			</div>
		</div>
	</div>

	<div class="controls">
		<button
			type="button"
			class="nav-btn nav-prev"
			onclick={prev}
			disabled={isAnimating}
			aria-label="Previous sector"
		>
			‹
		</button>
		<button
			type="button"
			class="nav-btn nav-next"
			onclick={next}
			disabled={isAnimating}
			aria-label="Next sector"
		>
			›
		</button>
	</div>
</section>

<style>
	#s-sectors {
		max-width: 600rem;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	.slide {
		width: 100%;
	}

	.media {
		position: relative;
		width: 100%;
		aspect-ratio: 4 / 3.6;
		overflow: hidden;
		border-radius: 4px;
	}

	.media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.media.expanded {
		border: 1px solid #111;
	}

	.overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		gap: 20rem;
		align-items: center;
		justify-content: flex-end;
		text-align: center;
		padding-bottom: 16rem;
	}

	.overlay h3 {
		color: #fff;
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	.overlay button,
	.meta button {
		padding: 6rem 24rem;
		border-radius: 999px;
		background: transparent;
		font-size: 12rem;
		cursor: pointer;
	}

	.overlay button {
		border: 1px solid #fff;
		color: #fff;
	}

	.overlay button:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.meta {
		height: 0;
		overflow: hidden;
	}

	.meta-inner {
		padding-top: 24rem;
		text-align: center;
	}

	.meta-inner h3 {
		font-size: 16rem;
		font-weight: 400;
		text-transform: uppercase;
	}

	.meta-inner p {
		line-height: 1.6;
		color: #333;
	}

	.meta button {
		margin-top: 24rem;
		margin-inline: auto;
		border: 1px solid #111;
		color: #111;
	}

	.meta button:hover {
		background: rgba(0, 0, 0, 0.05);
	}

	.controls {
		display: flex;
		justify-content: center;
		gap: 16rem;
		margin-top: 24rem;
	}

	.nav-btn {
		width: 40rem;
		height: 40rem;
		border-radius: 999px;
		border: 1px solid #111;
		background: transparent;
		font-size: 12rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-btn:disabled {
		opacity: 0.4;
		cursor: default;
	}

	.nav-btn:hover:not(:disabled) {
		background: rgba(0, 0, 0, 0.05);
	}
</style>
