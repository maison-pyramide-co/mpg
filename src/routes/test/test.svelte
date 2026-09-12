<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	onMount(() => {
		var IMAGES = [
			'https://picsum.photos/seed/frame-a1/900/1200',
			'https://picsum.photos/seed/frame-a2/900/1200',
			'https://picsum.photos/seed/frame-a3/900/1200',
			'https://picsum.photos/seed/frame-a4/900/1200',
			'https://picsum.photos/seed/frame-a5/900/1200',
			'https://picsum.photos/seed/frame-a6/900/1200'
		];
		var N = IMAGES.length;

		var stage = document.getElementById('stage');
		var ghostSmall = document.getElementById('ghostSmall');
		var ghostLarge = document.getElementById('ghostLarge');
		var prevBtn = document.getElementById('prevBtn');
		var nextBtn = document.getElementById('nextBtn');
		var counterCurrent = document.getElementById('counterCurrent');
		var counterTotal = document.getElementById('counterTotal');
		var liveRegion = document.getElementById('liveRegion');

		var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		var DUR = reduceMotion ? 0.3 : 0.85;
		var EASE = 'power3.inOut';

		var currentIndex = 1; // index currently shown in the large slot
		var isAnimating = false;
		var smallEl, largeEl;

		counterTotal.textContent = pad(N);

		function pad(n) {
			return String(n).padStart(2, '0');
		}
		function mod(n, m) {
			return ((n % m) + m) % m;
		}

		// ghost slots never move, so this always returns the true target rects
		function measureRects() {
			var stageRect = stage.getBoundingClientRect();
			var s = ghostSmall.getBoundingClientRect();
			var l = ghostLarge.getBoundingClientRect();
			var gapPx = l.left - (s.left + s.width);
			return {
				stageW: stageRect.width,
				small: { x: s.left - stageRect.left, y: s.top - stageRect.top, w: s.width, h: s.height },
				large: { x: l.left - stageRect.left, y: l.top - stageRect.top, w: l.width, h: l.height },
				gap: gapPx
			};
		}

		function createFrame(src, rect) {
			var frame = document.createElement('div');
			frame.className = 'frame';
			frame.style.left = rect.x + 'px';
			frame.style.top = rect.y + 'px';
			frame.style.width = rect.w + 'px';
			frame.style.height = rect.h + 'px';
			var img = document.createElement('img');
			img.src = src;
			img.alt = '';
			img.draggable = false;
			frame.appendChild(img);
			stage.appendChild(frame);
			return frame;
		}

		function setButtonsDisabled(disabled) {
			prevBtn.disabled = disabled;
			nextBtn.disabled = disabled;
		}

		function updateCounter() {
			counterCurrent.textContent = pad(currentIndex + 1);
		}

		function announce() {
			liveRegion.textContent = 'Image ' + (currentIndex + 1) + ' of ' + N;
		}

		function init() {
			var r = measureRects();
			smallEl = createFrame(IMAGES[0], r.small);
			largeEl = createFrame(IMAGES[1], r.large);
			gsap.set([smallEl, largeEl], { opacity: 0 });
			gsap.to(smallEl, { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.05 });
			gsap.to(largeEl, { opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.18 });
			updateCounter();
			announce();
		}

		function goNext() {
			if (isAnimating) return;
			isAnimating = true;
			setButtonsDisabled(true);

			var r = measureRects();
			var nextIndex = mod(currentIndex + 1, N);

			var exitLeft = { x: r.small.x - r.small.w - r.gap, y: r.small.y, w: r.small.w, h: r.small.h };
			var enterRight = { x: r.stageW + 40, y: r.large.y, w: r.large.w, h: r.large.h };

			var exitingSmall = smallEl;
			var shrinkingLarge = largeEl;
			var enteringLarge = createFrame(IMAGES[nextIndex], enterRight);

			exitingSmall.style.zIndex = 1;
			shrinkingLarge.style.zIndex = 2;
			enteringLarge.style.zIndex = 3;

			gsap
				.timeline({
					defaults: { duration: DUR, ease: EASE },
					onComplete: function () {
						exitingSmall.remove();
						smallEl = shrinkingLarge;
						largeEl = enteringLarge;
						currentIndex = nextIndex;
						isAnimating = false;
						setButtonsDisabled(false);
						updateCounter();
						announce();
					}
				})
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
			setButtonsDisabled(true);

			var r = measureRects();
			var newSmallIndex = mod(currentIndex - 2, N);
			var newLargeIndex = mod(currentIndex - 1, N);

			var enterLeft = {
				x: r.small.x - r.small.w - r.gap,
				y: r.small.y,
				w: r.small.w,
				h: r.small.h
			};
			var exitRight = { x: r.stageW + 40, y: r.large.y, w: r.large.w, h: r.large.h };

			var exitingLarge = largeEl;
			var growingSmall = smallEl;
			var enteringSmall = createFrame(IMAGES[newSmallIndex], enterLeft);

			enteringSmall.style.zIndex = 3;
			growingSmall.style.zIndex = 2;
			exitingLarge.style.zIndex = 1;

			gsap
				.timeline({
					defaults: { duration: DUR, ease: EASE },
					onComplete: function () {
						exitingLarge.remove();
						largeEl = growingSmall;
						smallEl = enteringSmall;
						currentIndex = newLargeIndex;
						isAnimating = false;
						setButtonsDisabled(false);
						updateCounter();
						announce();
					}
				})
				.to(exitingLarge, { left: exitRight.x, opacity: 0 }, 0)
				.to(
					growingSmall,
					{ left: r.large.x, top: r.large.y, width: r.large.w, height: r.large.h },
					0
				)
				.to(enteringSmall, { left: r.small.x }, 0);
		}

		function syncStatic() {
			if (isAnimating) return;
			var r = measureRects();
			gsap.set(smallEl, { left: r.small.x, top: r.small.y, width: r.small.w, height: r.small.h });
			gsap.set(largeEl, { left: r.large.x, top: r.large.y, width: r.large.w, height: r.large.h });
		}

		var resizeT;
		window.addEventListener('resize', function () {
			clearTimeout(resizeT);
			resizeT = setTimeout(syncStatic, 120);
		});

		prevBtn.addEventListener('click', goPrev);
		nextBtn.addEventListener('click', goNext);

		window.addEventListener('keydown', function (e) {
			if (e.key === 'ArrowRight') goNext();
			if (e.key === 'ArrowLeft') goPrev();
		});

		var touchStartX = null;
		stage.addEventListener(
			'touchstart',
			function (e) {
				touchStartX = e.touches[0].clientX;
			},
			{ passive: true }
		);
		stage.addEventListener(
			'touchend',
			function (e) {
				if (touchStartX === null) return;
				var dx = e.changedTouches[0].clientX - touchStartX;
				touchStartX = null;
				if (Math.abs(dx) < 40) return;
				if (dx < 0) goNext();
				else goPrev();
			},
			{ passive: true }
		);

		init();
	});
</script>

<div class="gallery">
	<div class="stage" id="stage">
		<div class="slot slot-small" id="ghostSmall"></div>
		<div class="slot slot-large" id="ghostLarge"></div>
	</div>

	<div class="controls">
		<button class="arrow-btn" id="prevBtn" aria-label="Previous image">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="M15 5 L8 12 L15 19" /></svg
			>
		</button>
		<div class="counter" aria-hidden="true">
			<span class="counter-current" id="counterCurrent">01</span>
			<span class="counter-sep">/</span>
			<span id="counterTotal">06</span>
		</div>
		<button class="arrow-btn" id="nextBtn" aria-label="Next image">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="M9 5 L16 12 L9 19" /></svg
			>
		</button>
	</div>

	<p class="sr-only" id="liveRegion" aria-live="polite"></p>
</div>

<style>
	:root {
		--bg: #171613;
		--fg: #f2efe8;
		--muted: #837e74;
		--accent: #c9a66b;
		--gap: clamp(28px, 6vw, 64px);
		--large-w: clamp(200px, 34vw, 420px);
	}
	* {
		box-sizing: border-box;
	}
	html,
	body {
		margin: 0;
		height: 100%;
	}
	body {
		background: var(--bg);
		color: var(--fg);
		font-family: 'Archivo', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 56px 20px;
		-webkit-tap-highlight-color: transparent;
	}

	.gallery {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 44px;
	}

	.stage {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: var(--gap);
		overflow: hidden;
		padding: 24px 0;
		touch-action: pan-y;
	}

	/* invisible layout anchors used only to measure slot positions/sizes */
	.slot {
		visibility: hidden;
		flex: 0 0 auto;
	}
	.slot-large {
		width: var(--large-w);
		aspect-ratio: 3 / 4;
	}
	.slot-small {
		width: calc(var(--large-w) / 2);
		aspect-ratio: 3 / 4;
	}

	.frame {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		border-radius: 2px;
		box-shadow: 0 30px 60px -25px rgba(0, 0, 0, 0.55);
		will-change: left, top, width, height, opacity;
	}
	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		user-select: none;
		-webkit-user-drag: none;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 28px;
	}
	.arrow-btn {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: 1px solid rgba(242, 239, 232, 0.25);
		background: transparent;
		color: var(--fg);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			border-color 0.25s ease,
			background 0.25s ease,
			transform 0.2s ease;
	}
	.arrow-btn svg {
		width: 18px;
		height: 18px;
	}
	.arrow-btn:hover {
		border-color: var(--accent);
		background: rgba(201, 166, 107, 0.1);
	}
	.arrow-btn:active {
		transform: scale(0.94);
	}
	.arrow-btn:focus-visible {
		outline: 2px solid var(--accent);
		outline-offset: 3px;
	}
	.arrow-btn:disabled {
		opacity: 0.35;
		cursor: default;
	}

	.counter {
		font-size: 13px;
		letter-spacing: 0.04em;
		color: var(--muted);
		display: flex;
		align-items: baseline;
		gap: 6px;
		min-width: 56px;
		justify-content: center;
		font-variant-numeric: tabular-nums;
	}
	.counter-current {
		color: var(--fg);
		font-weight: 600;
	}
	.counter-sep {
		color: var(--accent);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

	@media (max-width: 560px) {
		:root {
			--gap: 20px;
			--large-w: clamp(150px, 46vw, 250px);
		}
		.controls {
			gap: 18px;
		}
	}
</style>
