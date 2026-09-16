<script>
	import industries from '$lib/data/industries';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const section = document.getElementById('industries');
		const prevBox = document.getElementById('prevBox');
		const prevImgs = Array.from(prevBox.querySelectorAll('.prev__img'));
		const stage = document.getElementById('stage');
		const stageItems = Array.from(stage.querySelectorAll('.stage__item'));
		const n = stageItems.length;

		const clamp01 = (v) => Math.max(0, Math.min(1, v));
		const ease = (t) => t * t * (3 - 2 * t); // smoothstep, for a gentler crossfade than linear

		/**
		 * The stage is a fixed box: only which item is opaque changes. Item k
		 * (outgoing) fades 1 -> 0 across the whole step; item k+1 (incoming)
		 * fades 0 -> 1 in lockstep, so the two crossfade cleanly. Each item's
		 * own caption is gated tighter (fast out, late in) so two captions are
		 * never both readable mid-transition.
		 */
		function layoutStage(k, frac) {
			stageItems.forEach((item, i) => {
				let opacity = 0;
				if (i === k) opacity = 1 - ease(frac);
				else if (i === k + 1) opacity = ease(frac);
				item.style.opacity = opacity;

				const overlay = item.querySelector('.stage__overlay');
				let capOpacity = 0;
				if (i === k) capOpacity = 1 - clamp01(frac / 0.25);
				else if (i === k + 1) capOpacity = clamp01((frac - 0.75) / 0.25);
				overlay.style.opacity = capOpacity;
				overlay.style.pointerEvents = capOpacity > 0.5 ? 'auto' : 'none';
			});
		}

		/**
		 * The left preview is empty at pos 0 (nothing has left the stage yet).
		 * During the very first step it grows in from nothing, showing card 0
		 * with no crossfade partner. On every step after that its box stays
		 * fully grown and only its image content crossfades — from whichever
		 * card was "previous" a moment ago to whichever card just became
		 * previous — exactly mirroring the stage's own crossfade, one step
		 * behind it.
		 */
		function layoutPrev(k, frac) {
			const naturalHeight = prevBox.clientWidth * (3.5 / 4);

			if (k === 0) {
				const t = ease(frac);
				prevBox.style.height = t * naturalHeight + 'px';
				prevBox.style.opacity = t;
				prevBox.classList.toggle('has-height', t > 0.02);
				prevImgs.forEach((img, i) => {
					img.style.opacity = i === 0 ? 1 : 0;
				});
			} else {
				prevBox.style.height = naturalHeight + 'px';
				prevBox.style.opacity = 1;
				prevBox.classList.add('has-height');
				prevImgs.forEach((img, i) => {
					let opacity = 0;
					if (i === k - 1) opacity = 1 - ease(frac);
					else if (i === k) opacity = ease(frac);
					img.style.opacity = opacity;
				});
			}
		}

		function layout(pos) {
			const k = Math.min(Math.floor(pos), n - 2); // clamp so k+1 is always a valid index
			const frac = clamp01(pos - k);
			layoutStage(k, frac);
			layoutPrev(k, frac);
		}

		ScrollTrigger.matchMedia({
			// desktop / tablet: pin + scroll-scrub through each industry
			'(min-width: 900px)': function () {
				layout(0);

				const trigger = ScrollTrigger.create({
					trigger: section,
					start: 'top top',
					end: () => '+=' + (n - 1) * window.innerHeight, // one viewport of scroll per remaining industry
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true,
					onUpdate: (self) => layout(self.progress * (n - 1)),
					onRefreshInit: () => layout(0)
				});

				// matchMedia cleanup on breakpoint change
				return () => trigger.kill();
			},

			// mobile: no pin, everything laid out statically by CSS
			'(max-width: 899px)': function () {
				stageItems.forEach((item) => {
					item.style.opacity = '';
				});
				prevBox.style.height = '';
				prevBox.style.opacity = '';
			}
		});

		/**
		 * If this page also runs Lenis smooth scroll site-wide, ScrollTrigger needs
		 * to be told about Lenis's virtual scroll position, or the pin will drift:
		 *
		 *   const lenis = new Lenis();
		 *   lenis.on('scroll', ScrollTrigger.update);
		 *   gsap.ticker.add((time) => lenis.raf(time * 1000));
		 *   gsap.ticker.lagSmoothing(0);
		 */
	});
</script>

<section class="industries" id="industries">
	<div class="industries__inner">
		<div class="industries__left">
			<h2 class="industries__title">OUR INDUSTRIES</h2>
			<div class="industries__prev" id="prevBox">
				{#each industries as ind}
					<img class="prev__img" src={ind.image} alt={ind.title} />
				{/each}
			</div>
		</div>

		<div class="industries__stage" id="stage">
			{#each industries as ind}
				<article class="stage__item">
					<img class="stage__media" src={ind.image} alt={ind.title} />
					<div class="stage__overlay">
						<span class="stage__label">{ind.title}</span>
						<button class="stage__cta" type="button">READ MORE</button>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	:root {
		--ink: #0c0c0c;
		--bg: #ffffff;
		--edge: 64px;
		--prev-w: clamp(200px, 26vw, 300px);
		--prev-ratio: 0.8724; /* height / width, taken from the reference crop */
	}

	/* ---------- pinned section ---------- */
	.industries {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.industries__inner {
		height: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding-inline: 40rem;
		display: flex;
		align-items: center;
		/* gap: 6%; */
	}

	/* ----- left: title + the "previous industry" preview beneath it ----- */
	.industries__left {
		/* flex: 0 0 clamp(260px, 34vw, 420px); */
		flex-basis: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 48rem;
	}

	.industries__title {
		margin: 0;
		font-size: 40rem;
		font-weight: 500;
		white-space: nowrap;
	}

	.industries__prev {
		position: relative;
		width: 400rem;
		height: 0; /* animated by JS, 0 -> natural height */
		opacity: 0; /* animated by JS alongside height */
		overflow: hidden;
		background: #e9e9e9;
	}

	.industries__prev.has-height {
		margin-top: 40px; /* only once it actually has content, matches the gap in the reference */
	}

	.prev__img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0; /* JS crosfades between industries */
	}

	/* ----- right: the fixed stage, only its content crossfades ----- */
	.industries__stage {
		flex-basis: 750rem;
		flex-shrink: 0;
		/* flex: 1 1 0; */
		position: relative;
		align-self: center;
		width: 100%;
		/* max-width: 640px; */
		/* max-height: 82vh; */
		/* aspect-ratio: 499 / 440; matches the reference crop */
		aspect-ratio: 4/3.5;
		overflow: hidden;
		border-radius: 2px;
		background: #e9e9e9;
	}

	.stage__item {
		position: absolute;
		inset: 0;
		opacity: 0; /* JS crossfades between industries */
	}

	.stage__media {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.stage__overlay {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 48rem 24rem;
		text-align: center;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0) 72%);
		opacity: 0; /* JS, gated faster than the image so captions never overlap */
	}

	.stage__label {
		display: block;
		color: #fff;
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
	}

	.stage__cta {
		margin-inline: auto;
		margin-top: 20rem;
		font-size: 14rem;
		color: white;
		border: 1px solid white;
		padding: 6px 16px;
		border-radius: 999px;
	}

	/* ---------- mobile fallback: no pin, industries stacked & static ---------- */
	@media (max-width: 899px) {
		.industries {
			height: auto;
			padding: 64px 0;
		}
		.industries__inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 28px;
		}
		.industries__left {
			height: auto;
		}
		.industries__prev {
			display: none;
		} /* the "previous" preview only makes sense as a scroll artifact */
		.industries__stage {
			position: static;
			width: 100%;
			max-width: none;
			aspect-ratio: auto;
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		.stage__item {
			position: static;
			opacity: 1 !important;
			height: 62vw;
			max-height: 420px;
			border-radius: 2px;
			overflow: hidden;
		}
		.stage__overlay {
			opacity: 1 !important;
		}
	}
</style>
