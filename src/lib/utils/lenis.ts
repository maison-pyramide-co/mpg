import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export const getLenis = () => lenis;

export const initLenis = () => {
	lenis = new Lenis({ autoRaf: false });

	// keep ScrollTrigger in sync with Lenis' virtual scroll
	lenis.on('scroll', ScrollTrigger.update);

	// drive Lenis from GSAP's ticker (one RAF loop for everything)
	const tick = (time: number) => lenis?.raf(time * 1000);
	gsap.ticker.add(tick);
	gsap.ticker.lagSmoothing(0);

	return () => {
		gsap.ticker.remove(tick);
		lenis?.destroy();
		lenis = null;
	};
};

export const resetScroll = () => {
	history.scrollRestoration = 'manual';
	ScrollTrigger.clearScrollMemory();

	const l = getLenis();
	if (l) l.scrollTo(0, { immediate: true, force: true });
	else window.scrollTo(0, 0);
};

export const scrollToBottom = (opts: { duration?: number; immediate?: boolean } = {}) => {
	const { duration = 1.2, immediate = false } = opts;
	const l = getLenis();

	if (l) {
		l.resize(); // recalc height in case content changed since the last measure
		l.scrollTo(l.limit, {
			duration,
			immediate,
			easing: (t) => t // linear: constant speed, no ease in/out
		});
	} else {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: immediate ? 'auto' : 'smooth'
		});
	}
};
