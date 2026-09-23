<script lang="ts">
	import industries from '$lib/data/industries';
	import Ichev from '$lib/assets/icons/chev.svelte';
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
	<h2>OUR SECTORS</h2>
	<div class="slide" bind:this={slideWrap}>
		<div class="t">
			<figure class:expanded>
				<img src={industries[currentIndex].image} alt={industries[currentIndex].title} />
				{#if !expanded}
					<div class="overlay">
						<h3>{industries[currentIndex].title}</h3>
						<button type="button" onclick={toggleInfo}>READ MORE</button>
					</div>
				{/if}
			</figure>
			<nav>
				<button type="button" onclick={prev} disabled={isAnimating} aria-label="Previous sector">
					<Ichev />
				</button>
				<button type="button" onclick={next} disabled={isAnimating} aria-label="Next sector">
					<Ichev />
				</button>
			</nav>
		</div>

		<div class="info_" bind:this={metaEl}>
			<div class="info" bind:this={metaInner}>
				<h3>{industries[currentIndex].title}</h3>
				<p>{industries[currentIndex].description}</p>
				<button type="button" onclick={toggleInfo}>READ LESS</button>
			</div>
		</div>
	</div>
</section>

<style>
	#s-sectors {
		width: 100%;
		padding-block: 80rem;
		overflow: hidden;
		margin: 0 auto;
	}
	h2 {
		text-align: center;
		font-size: 30rem;
		font-weight: 500;
	}

	.slide {
		margin-top: 40rem;
		width: 100%;
	}
	.t {
		position: relative;
	}

	figure {
		position: relative;
		width: 300rem;
		aspect-ratio: 4 / 3.6;
		overflow: hidden;
		margin-inline: auto;
	}

	.overlay {
		width: 100%;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		gap: 20rem;
		align-items: center;
		text-align: center;
		padding-bottom: 24rem;
	}

	.overlay h3 {
		color: #fff;
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	.overlay button,
	.info button {
		padding: 6rem 24rem;
		border-radius: 999px;
		font-size: 12rem;
	}
	.overlay button {
		color: white;
		border: 1px solid #fff;
	}

	.info_ {
		padding-inline: var(--p-i);
		height: 0;
		overflow: hidden;
	}

	.info {
		padding-top: 40rem;
		text-align: center;
	}

	.info h3 {
		font-size: 16rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	.info p {
		margin-top: 24rem;
		font-size: 15rem;
		line-height: 1;
	}

	.info button {
		margin-top: 24rem;
		margin-inline: auto;
		border: 1px solid #111;
		color: #111;
	}

	nav {
		padding-inline: 8rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 8;
		display: flex;
		width: 100%;
		justify-content: space-between;
		gap: 16rem;
	}

	nav button {
		width: 28rem;
		&:last-child :global(svg) {
			transform: rotate(180deg);
		}
	}

	nav button:disabled {
		opacity: 0.4;
		cursor: default;
	}

	nav button:hover:not(:disabled) {
		background: rgba(0, 0, 0, 0.05);
	}
</style>
