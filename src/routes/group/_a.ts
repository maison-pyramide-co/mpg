import { imagesA, textsA } from '$lib/utils/animation';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
import { resetScroll } from '$lib/utils/lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

ScrollTrigger.defaults({ markers: false });

const heroA = () => {
	const t_split1 = SplitText.create('#s-hero h1', {
		type: 'lines',
		mask: 'lines'
	});
	const t_split2 = SplitText.create('#s-hero p', {
		type: 'lines',
		mask: 'lines'
	});

	const tl = gsap.timeline({});
	tl.from(t_split1.lines, {
		y: 100,
		duration: 1,
		ease: 'power4.out',
		stagger: 0.05,
		onComplete: () => {
			t_split1.masks.forEach((mask: any) => {
				mask.style.overflow = '';
			});
		}
	});
	tl.from(
		t_split2.lines,
		{
			y: 100,
			duration: 0.8,
			ease: 'power4.out',
			stagger: 0.05,

			onComplete: () => {
				t_split2.masks.forEach((mask: any) => {
					mask.style.overflow = '';
				});
			}
		},
		'<.5'
	);
};

const introA = () => {
	const isMobile = window.innerWidth < 770;

	// TEXT
	const t_split = SplitText.create('#s-intro h3', {
		type: 'lines',
		mask: 'lines'
	});
	gsap.from(t_split.lines, {
		yPercent: 100,
		duration: 1.2,
		ease: 'power4.out',
		stagger: 0.05,
		scrollTrigger: {
			trigger: '#s-intro h3',
			start: isMobile ? 'top 80%' : 'top 90%'
		},

		onComplete: () => {
			t_split.masks.forEach((mask: any) => {
				mask.style.overflow = '';
			});
		}
	});

	// NUMBERS
	gsap.utils.toArray('#s-intro div span').forEach((span: any) => {
		gsap.from(span, {
			opacity: 0,
			textContent: 0,
			duration: 1,
			ease: 'power1.out',
			snap: { textContent: 1 },
			scrollTrigger: {
				trigger: span, // or span.closest('div') if the span is tiny/inline
				start: isMobile ? 'top 90%' : 'top 70%',
				//once: true // optional: play once, don't replay on scroll back
				invalidateOnRefresh: true
			}
		});
	});

	/*
	gsap.from('#s-intro div span', {
		opacity: 0,
		textContent: 0,
		duration: 1,
		ease: 'power1.out',
		snap: { textContent: 1 }, // rounds to whole numbers
		// stagger: 0.2,
		scrollTrigger: {
			trigger: '#s-intro ul',
			start: isMobile ? 'top 90%' : 'top 70%',
			markers: true
		}
	});
	*/
};

// SECTION PINNING ANIMATION
const pinA = () => {
	ScrollTrigger.create({
		trigger: '#s-culture',
		start: 'bottom bottom',
		end: 'top top',
		endTrigger: '#s-csr',
		pin: true,
		pinSpacing: false,
		anticipatePin: 1,
		invalidateOnRefresh: true
	});
};

const animation = (page: HTMLElement) => {
	let ctx: gsap.Context | null = null;
	let destroyed = false;
	const isMobile = window.innerWidth < 770;
	resetScroll();

	document.fonts.ready.then(() => {
		if (destroyed) return;

		const p = document.querySelector('#p');
		const h = document.querySelector('#h');

		if (p) {
			gsap.set(p, { autoAlpha: 1 });
		}

		if (h) {
			gsap.set(h, { autoAlpha: 1, mixBlendMode: 'difference' });
		}

		ctx = gsap.context(() => {
			if (!isMobile) pinA();
			heroA();
			introA();
			imagesA();
			textsA();
		}, page);
	});
	// Recalculate pin positions after initialization
	ScrollTrigger.refresh(true);

	return () => {
		destroyed = true;
		ctx?.revert();
	};
};

export default animation;
