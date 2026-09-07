<script>
	import { onMount, onDestroy } from 'svelte';
	import { scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import Swiper from 'swiper';
	import { EffectCreative } from 'swiper/modules';
	import gsap from 'gsap';
	import partnerships from '$lib/data/partnerships';
	import 'swiper/css';
	import 'swiper/css/effect-creative';
	// const partnerships = [
	// 	{
	// 		id: 'fashion-trust-arabia',
	// 		image: '/images/partnerships/fashion-trust-arabia.jpg',
	// 		thumbKicker: 'Featured',
	// 		thumbTitle: 'Fashion Trust Arabia',
	// 		title: 'Supporting emerging designers with Fashion Trust Arabia',
	// 		description:
	// 			'MP Showroom partnered with Fashion Trust Arabia as an official prize partner, providing winners with showroom representation and PR consultancy to help expand their visibility and access to international markets.'
	// 	},
	// 	{
	// 		id: 'mbfw-madrid',
	// 		image: '/images/partnerships/mbfw-madrid.jpg',
	// 		thumbKicker: 'Inside',
	// 		thumbTitle: 'MBFW Madrid',
	// 		title: 'On the ground at Mercedes-Benz Fashion Week Madrid',
	// 		description:
	// 			'MP Showroom joined MBFW Madrid to scout new talent and connect regional designers with international buyers, deepening ties between the Gulf and European fashion circuits.'
	// 	},
	// 	{
	// 		id: 'design-mentorship',
	// 		image: '/images/partnerships/design-mentorship.jpg',
	// 		thumbKicker: 'Programme',
	// 		thumbTitle: 'Design mentorship',
	// 		title: 'A mentorship track for the next generation of designers',
	// 		description:
	// 			'A season-long mentorship pairing graduate designers with our buying and PR teams, covering everything from collection development to retail strategy.'
	// 	},
	// 	{
	// 		id: 'atelier-residency',
	// 		image: '/images/partnerships/atelier-residency.jpg',
	// 		thumbKicker: 'Residency',
	// 		thumbTitle: 'Atelier residency',
	// 		title: 'An atelier residency built around slow, considered craft',
	// 		description:
	// 			'A shared studio space and stipend for one designer per season, giving independent labels the time and tools to develop a full collection without commercial pressure.'
	// 	}
	// ];

	/** @type {{ slides?: typeof partnerships }} */
	let { slides = partnerships } = $props();

	let total = $derived(slides.length);

	// activeIndex = the slide currently shown large, in the main slot.
	// The left preview always shows the *next* slide in the queue, so that
	// clicking/advancing promotes it into the main slot and a fresh slide
	// takes its place on the left.
	let activeIndex = $state(0);
	let leftIndex = $derived((activeIndex + 1) % total);
	let mainSlide = $derived(slides[activeIndex]);
	let leftSlide = $derived(slides[leftIndex]);

	let mainEl; // swiper container ref
	let thumbEl; // left preview button ref
	let panelEl; // right-hand text panel ref
	let swiperInstance;
	let resizeTimer;
	let handleResize;
	let reduceMotion = $state(false);
	let dragStartX = null;

	function next() {
		swiperInstance ? swiperInstance.slideNext() : (activeIndex = (activeIndex + 1) % total);
	}
	function prev() {
		swiperInstance ? swiperInstance.slidePrev() : (activeIndex = (activeIndex - 1 + total) % total);
	}

	// Measures the left preview card against the main slide so the "next"
	// slide's resting transform starts exactly where the thumb sits — that's
	// what sells the "small card grows into the main slide" illusion.
	function creativeEffectFromThumb() {
		const mainRect = mainEl.getBoundingClientRect();
		const thumbRect = thumbEl.getBoundingClientRect();
		return {
			prev: { translate: [0, 0, -1], opacity: 0.4 },
			next: {
				translate: [thumbRect.left - mainRect.left, thumbRect.top - mainRect.top, 0],
				scale: thumbRect.width / mainRect.width,
				opacity: 0.5
			}
		};
	}

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		swiperInstance = new Swiper(mainEl, {
			modules: [EffectCreative],
			effect: 'creative',
			speed: reduceMotion ? 0 : 700,
			loop: true,
			grabCursor: true,
			creativeEffect: creativeEffectFromThumb(),
			on: {
				slideChange(sw) {
					activeIndex = sw.realIndex;
				}
			}
		});

		// re-measure on resize, since the thumb/main sizes are fluid (clamp())
		handleResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				if (!swiperInstance) return;
				swiperInstance.params.creativeEffect = creativeEffectFromThumb();
				swiperInstance.update();
			}, 150);
		};
		window.addEventListener('resize', handleResize);
	});

	onDestroy(() => {
		clearTimeout(resizeTimer);
		if (handleResize) window.removeEventListener('resize', handleResize);
		swiperInstance?.destroy(true, true);
	});

	// Crossfade the right-hand panel's text whenever the active slide changes.
	$effect(() => {
		void mainSlide;
		if (!panelEl || reduceMotion) return;
		gsap.fromTo(
			panelEl.querySelectorAll('[data-panel-fade]'),
			{ autoAlpha: 0, y: 10 },
			{ autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.05 }
		);
	});
</script>

<section class="partnerships">
	<header class="partnerships__intro">
		<h2 class="partnerships__heading">Partnerships</h2>
		<p class="partnerships__subheading">
			Beyond client work, MPG develops initiatives and partnerships that support talent, learning,
			and the wider creative ecosystem.
		</p>
	</header>

	<div class="partnerships__row">
		<div class="partnerships__stage">
			<button type="button" class="partnerships__thumb" bind:this={thumbEl} onclick={next}>
				{#key leftSlide.id}
					<img
						src={leftSlide.image}
						loading="lazy"
						in:scale={{ duration: reduceMotion ? 0 : 420, start: 0.88, easing: cubicOut }}
					/>
				{/key}
				<span class="partnerships__thumb-caption">
					<small>{leftSlide.thumbKicker}</small>
					<strong>{leftSlide.thumbTitle}</strong>
				</span>
			</button>

			<div
				class="partnerships__main swiper"
				role="group"
				aria-label="Featured partnership image, drag to browse"
				bind:this={mainEl}
			>
				<div class="swiper-wrapper">
					{#each slides as slide (slide.id)}
						<div class="swiper-slide partnerships__main-slide">
							<img src={slide.image} alt={slide.title} loading="lazy" />
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="partnerships__panel" bind:this={panelEl}>
			<h3 class="partnerships__panel-title" data-panel-fade>{mainSlide.title}</h3>
			<p class="partnerships__panel-desc" data-panel-fade>{mainSlide.description}</p>
			<div class="partnerships__nav" role="group" aria-label="Partnership stories">
				<button
					type="button"
					class="partnerships__nav-btn"
					onclick={prev}
					aria-label="Previous partnership"
				>
					<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
						<path
							d="M15 5l-7 7 7 7"
							fill="none"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
				<button
					type="button"
					class="partnerships__nav-btn"
					onclick={next}
					aria-label="Next partnership"
				>
					<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
						<path
							d="M9 5l7 7-7 7"
							fill="none"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	.partnerships {
		--p-bg: #efeae0;
		--p-ink: #17140f;
		--p-ink-soft: #55503f;
		--p-line: rgba(23, 20, 15, 0.2);
		--font-display: 'Neue Haas Grotesk Display', 'Helvetica Neue', Arial, sans-serif;
		--font-serif: 'GT Sectra', Georgia, 'Times New Roman', serif;
		--font-body: 'Neue Haas Grotesk Text', 'Helvetica Neue', Arial, sans-serif;

		background: var(--p-bg);
		color: var(--p-ink);
		padding: clamp(48px, 8vw, 96px) clamp(20px, 6vw, 64px);
	}

	/* ---------- intro ---------- */

	.partnerships__intro {
		max-width: 640px;
		margin: 0 auto;
		text-align: center;
	}

	.partnerships__heading {
		font-family: var(--font-display);
		font-weight: 700;
		text-transform: uppercase;
		font-size: clamp(2.1rem, 5vw, 3.25rem);
		letter-spacing: -0.01em;
		line-height: 1.05;
		margin: 0 0 1.1em;
	}

	.partnerships__subheading {
		font-family: var(--font-serif);
		text-transform: uppercase;
		font-size: clamp(0.95rem, 1.5vw, 1.15rem);
		letter-spacing: 0.02em;
		line-height: 1.6;
		color: var(--p-ink-soft);
		margin: 0;
	}

	/* ---------- row: stage + panel ---------- */

	.partnerships__row {
		display: flex;
		align-items: stretch;
		gap: clamp(24px, 3vw, 56px);
		margin-top: clamp(40px, 6vw, 72px);
	}

	.partnerships__stage {
		flex: 1 1 auto;
		min-width: 0;
		display: flex;
		align-items: center;
		gap: clamp(16px, 2vw, 28px);
		touch-action: pan-y;
	}

	/* left preview card (outside the swiper; swaps content on its own) */

	.partnerships__thumb {
		position: relative;
		flex: 0 0 auto;
		width: clamp(160px, 19vw, 274px);
		height: clamp(210px, 24vw, 342px);
		border: 0;
		padding: 0;
		border-radius: 2px;
		overflow: hidden;
		cursor: pointer;
		background: var(--p-ink);
		opacity: 0.94;
		transition: opacity 0.25s ease;
	}

	.partnerships__thumb:hover,
	.partnerships__thumb:focus-visible {
		opacity: 1;
	}

	.partnerships__thumb:focus-visible {
		outline: 2px solid var(--p-ink);
		outline-offset: 3px;
	}

	.partnerships__thumb img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.partnerships__thumb::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 55%);
		pointer-events: none;
	}

	.partnerships__thumb-caption {
		position: absolute;
		left: 18px;
		right: 18px;
		bottom: 16px;
		display: flex;
		flex-direction: column;
		gap: 3px;
		color: #fff;
		text-align: left;
	}

	.partnerships__thumb-caption small {
		font-family: var(--font-body);
		text-transform: uppercase;
		font-size: 0.65rem;
		letter-spacing: 0.14em;
		opacity: 0.85;
	}

	.partnerships__thumb-caption strong {
		font-family: var(--font-display);
		text-transform: uppercase;
		font-weight: 700;
		font-size: clamp(0.95rem, 1.4vw, 1.15rem);
		letter-spacing: 0.01em;
		line-height: 1.2;
	}

	/* main slide (the Swiper instance) */

	.partnerships__main {
		flex: 1 1 auto;
		min-width: 0;
		height: clamp(340px, 38vw, 480px);
		overflow: hidden;
		border-radius: 2px;
		cursor: grab;
	}

	.partnerships__main:active {
		cursor: grabbing;
	}

	.partnerships__main-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* ---------- fixed right panel ---------- */

	.partnerships__panel {
		flex: 0 0 clamp(240px, 23vw, 320px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 22px;
	}

	.partnerships__panel-title {
		font-family: var(--font-display);
		font-weight: 700;
		text-transform: uppercase;
		font-size: clamp(1.05rem, 1.6vw, 1.3rem);
		line-height: 1.35;
		letter-spacing: 0.005em;
		margin: 0;
	}

	.partnerships__panel-desc {
		font-family: var(--font-body);
		font-size: 0.95rem;
		line-height: 1.65;
		color: var(--p-ink-soft);
		margin: 0;
		max-width: 36ch;
	}

	.partnerships__nav {
		display: flex;
		gap: 12px;
	}

	.partnerships__nav-btn {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		border: 1px solid var(--p-line);
		background: transparent;
		color: var(--p-ink);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			background 0.2s ease,
			color 0.2s ease,
			border-color 0.2s ease;
	}

	.partnerships__nav-btn:hover {
		background: var(--p-ink);
		color: var(--p-bg);
		border-color: var(--p-ink);
	}

	.partnerships__nav-btn:focus-visible {
		outline: 2px solid var(--p-ink);
		outline-offset: 3px;
	}

	/* ---------- responsive ---------- */

	@media (max-width: 860px) {
		.partnerships__row {
			flex-direction: column;
		}

		.partnerships__panel {
			flex: 1 1 auto;
			gap: 14px;
		}

		.partnerships__panel-desc {
			max-width: none;
		}

		.partnerships__main {
			height: clamp(260px, 70vw, 380px);
		}

		.partnerships__thumb {
			width: clamp(84px, 22vw, 120px);
			height: clamp(110px, 29vw, 156px);
		}

		.partnerships__thumb-caption strong {
			font-size: 0.8rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.partnerships__thumb,
		.partnerships__nav-btn {
			transition: none !important;
		}
	}
</style>
