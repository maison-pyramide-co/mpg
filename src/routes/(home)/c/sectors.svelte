<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import industries from '$lib/data/industries';
	import Ichev from '$lib/assets/icons/chev.svelte';

	const N = industries.length;
	const EASE = 'power3.inOut';
	const DUR_FULL = 0.85;
	const DUR_REDUCED = 0.3;

	// reactive — drives the text panel + counter
	let currentIndex = $state(1);
	let isAnimating = $state(false);

	// DOM refs
	let stageEl;
	let ghostSmallEl;
	let ghostLargeEl;
	let thumbEl;
	let infoEl;

	// plain (non-reactive) internal bookkeeping
	let smallEl, largeEl;
	let reduceMotion = false;
	let resizeTimer;
	// let touchStartX = null;

	function mod(n, m) {
		return ((n % m) + m) % m;
	}

	function duration() {
		return reduceMotion ? DUR_REDUCED : DUR_FULL;
	}

	// the ghost slots never move, so this always returns the true target rects
	function measureRects() {
		const stageRect = stageEl.getBoundingClientRect();
		const s = ghostSmallEl.getBoundingClientRect();
		const l = ghostLargeEl.getBoundingClientRect();
		const gapPx = l.left - (s.left + s.width);
		return {
			stageW: stageRect.width,
			small: { x: s.left - stageRect.left, y: s.top - stageRect.top, w: s.width, h: s.height },
			large: { x: l.left - stageRect.left, y: l.top - stageRect.top, w: l.width, h: l.height },
			gap: gapPx
		};
	}

	function createFrame(src, rect) {
		const frame = document.createElement('div');
		frame.className = 'frame';
		frame.style.left = rect.x + 'px';
		frame.style.top = rect.y + 'px';
		frame.style.width = rect.w + 'px';
		frame.style.height = rect.h + 'px';
		const img = document.createElement('img');
		img.src = src;
		img.alt = '';
		img.draggable = false;
		frame.appendChild(img);
		// eslint-disable-next-line svelte/no-dom-manipulating
		stageEl.appendChild(frame);
		return frame;
	}

	function goNext() {
		if (isAnimating) return;
		isAnimating = true;
		let content = document.querySelector('.industry') as HTMLElement;

		const r = measureRects();
		const nextIndex = mod(currentIndex + 1, N);

		const exitLeft = { x: r.small.x - r.small.w - r.gap, y: r.small.y, w: r.small.w, h: r.small.h };
		const enterRight = { x: r.stageW + 40, y: r.large.y, w: r.large.w, h: r.large.h };

		const exitingSmall = smallEl;
		const shrinkingLarge = largeEl;
		const enteringLarge = createFrame(industries[nextIndex].image, enterRight);

		exitingSmall.style.zIndex = '1';
		shrinkingLarge.style.zIndex = '2';
		enteringLarge.style.zIndex = '3';

		currentIndex = nextIndex; // text/counter crossfade in parallel with the image move

		gsap
			.timeline({
				defaults: { duration: duration(), ease: EASE },
				onComplete: () => {
					exitingSmall.remove();
					smallEl = shrinkingLarge;
					largeEl = enteringLarge;
					content.style.opacity = '1';
					isAnimating = false;
				}
			})
			.set(content, { opacity: 0 }, 0)
			.to(exitingSmall, { left: exitLeft.x, opacity: 0 }, 0)
			.to(
				shrinkingLarge,
				{ left: r.small.x, top: r.small.y, width: r.small.w, height: r.small.h },
				0
			)
			.to(enteringLarge, { left: r.large.x }, 0);
	}

	function goPrev() {
		if (isAnimating) return;
		isAnimating = true;

		const r = measureRects();
		const newSmallIndex = mod(currentIndex - 2, N);
		const newLargeIndex = mod(currentIndex - 1, N);

		const enterLeft = {
			x: r.small.x - r.small.w - r.gap,
			y: r.small.y,
			w: r.small.w,
			h: r.small.h
		};
		const exitRight = { x: r.stageW + 40, y: r.large.y, w: r.large.w, h: r.large.h };

		const exitingLarge = largeEl;
		const growingSmall = smallEl;
		const enteringSmall = createFrame(industries[newSmallIndex].image, enterLeft);

		enteringSmall.style.zIndex = '3';
		growingSmall.style.zIndex = '2';
		exitingLarge.style.zIndex = '1';

		currentIndex = newLargeIndex;

		gsap
			.timeline({
				defaults: { duration: duration(), ease: EASE },
				onComplete: () => {
					exitingLarge.remove();
					largeEl = growingSmall;
					smallEl = enteringSmall;
					isAnimating = false;
				}
			})
			.to(exitingLarge, { left: exitRight.x, opacity: 0 }, 0)
			.to(growingSmall, { left: r.large.x, top: r.large.y, width: r.large.w, height: r.large.h }, 0)
			.to(enteringSmall, { left: r.small.x }, 0);
	}

	function syncStatic() {
		if (isAnimating || !smallEl || !largeEl) return;
		const r = measureRects();
		gsap.set(smallEl, { left: r.small.x, top: r.small.y, width: r.small.w, height: r.small.h });
		gsap.set(largeEl, { left: r.large.x, top: r.large.y, width: r.large.w, height: r.large.h });
	}

	function onReadMore() {
		// move the largeEl to the left = 0
		// largeEl.style.left = 0;
		// hide the industry thumb
		// thumbEl.style.opacity = 0;

		gsap.to(largeEl, {
			left: 0,
			duration: duration(),
			ease: EASE
		});

		gsap.set(thumbEl, {
			autoAlpha: 0
		});
		gsap.set(infoEl, {
			autoAlpha: 1
		});
		// show the industry content
	}
	function ReadLess() {
		const r = measureRects();
		// move the largeEl to the left = 0
		// largeEl.style.left = r.large.x + 'px';
		// hide the industry thumb
		// thumbEl.style.opacity = 1;

		gsap.to(largeEl, {
			left: r.large.x,
			duration: duration(),
			ease: EASE
		});
		gsap.set(thumbEl, {
			autoAlpha: 1
		});
		gsap.set(infoEl, {
			autoAlpha: 0
		});
		// show the industry content
	}

	function handleResize() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(syncStatic, 120);
	}

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const r = measureRects();
		smallEl = createFrame(industries[0].image, r.small);
		largeEl = createFrame(industries[1].image, r.large);
		gsap.set([smallEl, largeEl], { opacity: 0 });
		gsap.to(smallEl, { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.05 });
		gsap.to(largeEl, { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.18 });
	});

	onDestroy(() => {
		clearTimeout(resizeTimer);
	});
</script>

<svelte:window onresize={handleResize} />

<section class="gallery">
	<div class="stage" bind:this={stageEl}>
		<div class="l">
			<h2>OUR SECTORS</h2>
			<div class="slot slot-small" bind:this={ghostSmallEl}></div>
			<div class="controls">
				<button
					class="arrow-btn"
					onclick={goPrev}
					disabled={isAnimating}
					aria-label="Previous industry"
				>
					<Ichev />
				</button>

				<button
					class="arrow-btn"
					onclick={goNext}
					disabled={isAnimating}
					aria-label="Next industry"
				>
					<Ichev />
				</button>
			</div>
		</div>
		<div class="r">
			<div class="industry" bind:this={thumbEl}>
				<h3>{industries[currentIndex].title}</h3>
				<button onclick={onReadMore}>READ MORE</button>
			</div>
			<div class="slot slot-large" bind:this={ghostLargeEl}></div>
			<div class="sector_info" bind:this={infoEl}>
				<h4>{industries[currentIndex].title}</h4>
				<p>{industries[currentIndex].description}</p>
				<button onclick={ReadLess}>READ LESS</button>
			</div>
		</div>
	</div>
</section>

<style>
	.gallery {
		padding-inline: 24rem;
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.stage {
		width: 100%;
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 20rem;
		overflow: hidden;
	}
	.stage .l,
	.stage .r {
		flex: 1;
	}
	.stage .l {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.stage .r {
		position: relative;
	}
	h2 {
		font-size: 40rem;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 40rem;
		font-size: 500;
	}
	.industry {
		position: absolute;
		left: 320rem;
		bottom: 48rem;
		z-index: 9;
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 24rem;
	}
	.industry h3 {
		font-size: 20rem;
		text-transform: uppercase;
		font-weight: 500;
	}
	.industry button {
		display: block;
		padding: 6rem 16rem;
		font-size: 14rem;
		text-transform: uppercase;
		border: 1px solid white;
		color: inherit;
		border-radius: 100rem;
	}

	.sector_info {
		opacity: 0;
		visibility: hidden;
		position: absolute;
		bottom: 0;
		display: flex;
		flex-direction: column;
		gap: 72rem;
		padding-inline: 160rem;
	}
	.sector_info h4 {
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
	}
	.sector_info p {
		font-size: 15rem;
		line-height: 1;
	}

	.sector_info button {
		display: block;
		width: fit-content;
		padding: 6rem 16rem;
		font-size: 14rem;
		text-transform: uppercase;
		border: 1px solid black;
		color: inherit;
		border-radius: 100rem;
	}

	/* invisible layout anchors used only to measure slot positions/sizes */
	.slot {
		visibility: hidden;
		flex: 0 0 auto;
	}
	.slot-large {
		width: 100%;
		aspect-ratio: 4/3.5;
	}
	.slot-small {
		width: 400rem;
		aspect-ratio: 4/3.5;
	}

	:global(.gallery .frame) {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		will-change: left, top, width, height, opacity;
	}
	:global(.gallery .frame img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		user-select: none;
	}

	.controls {
		margin-top: 24rem;
		width: 400rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24rem;
	}
	.arrow-btn {
		width: 32rem;
		&:last-child {
			transform: rotate(180deg);
		}
	}

	.arrow-btn:disabled {
		opacity: 0.35;
		cursor: default;
	}

	@media (max-width: 640px) {
		.gallery {
			--gap: 18px;
			--large-w: clamp(150px, 44vw, 240px);
		}
	}
</style>
