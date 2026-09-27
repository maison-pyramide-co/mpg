import { textsA } from '$lib/utils/animation';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

ScrollTrigger.defaults({ markers: false });

// Header animation
const headerA = () => {
	const h = document.getElementById('h');

	gsap.to(h, {
		mixBlendMode: 'unset'
	});

	ScrollTrigger.create({
		trigger: '.s-intro_',
		start: 'bottom top',
		onEnter: () => {
			gsap.set(h, {
				mixBlendMode: 'difference'
			});
		},
		onLeaveBack: () => {
			gsap.set(h, {
				mixBlendMode: 'unset'
			});
		}
	});
};

// Intro text animation
const introA = () => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.s-intro_',
			start: 'top top',
			end: 'bottom bottom',
			scrub: true,
			pin: '.s-intro',
			pinSpacing: false
		}
	});

	const t_split1 = SplitText.create('.s-intro .t', {
		type: 'lines',
		mask: 'lines'
	});
	const t_split2 = SplitText.create('.s-intro .b p', {
		type: 'lines',
		mask: 'lines'
	});

	// Text Animation
	const t_split = SplitText.create('.s-intro h1', {
		type: 'lines',
		mask: 'lines'
		// autoSplit: true
	});

	tl.from(t_split.lines, {
		y: 100,
		duration: 1,
		ease: 'power4.out',
		stagger: 0.05
	});
	// Els Animation
	tl.from(t_split1.lines, {
		y: 100,
		duration: 0.6,
		ease: 'power4.out',
		stagger: 0.05
	});
	tl.from(
		'.s-intro .b',
		{
			autoAlpha: 0,
			duration: 0.6,
			ease: 'sine.in'
		},
		'<'
	);
	tl.from(
		t_split2.lines,
		{
			y: 100,
			duration: 0.6,
			ease: 'power4.out',
			stagger: 0.05
		},
		'<'
	);
};
const introAM = () => {
	const t_split = SplitText.create('.s-intro h1', {
		type: 'lines',
		mask: 'lines'
		// autoSplit: true
	});

	const t_split1 = SplitText.create('.s-intro .t', {
		type: 'lines',
		mask: 'lines'
	});
	const t_split2 = SplitText.create('.s-intro .b p', {
		type: 'lines',
		mask: 'lines'
	});

	gsap.from(t_split.lines, {
		y: 100,
		duration: 0.6,
		ease: 'power4.out',
		stagger: 0.05,
		scrollTrigger: {
			trigger: '.s-intro h1',
			start: 'top 80%'
		}
	});
	gsap.from(t_split1.lines, {
		y: 100,
		duration: 0.6,
		ease: 'power4.out',
		stagger: 0.05,
		scrollTrigger: {
			trigger: '.s-intro .t',
			start: 'top 80%'
		}
	});
	gsap.from(t_split2.lines, {
		y: 100,
		duration: 0.6,
		ease: 'power4.out',
		stagger: 0.05,
		scrollTrigger: {
			trigger: '.s-intro .b p',
			start: 'top 80%'
		}
	});
	gsap.from('.s-intro .b a', {
		autoAlpha: 0,
		duration: 0.6,
		ease: 'sine.in',
		scrollTrigger: {
			trigger: '.s-intro .b a',
			start: 'top 80%'
		}
	});
};

// Header logo animation
const logoA = () => {
	const vh = window?.innerHeight;
	const triggerEl = document.querySelector('.s-hero');
	const targetEl = document.querySelector('.s-hero .logo') as HTMLElement;
	const headerEl = document.querySelector('#h') as HTMLElement;
	gsap.set(headerEl, { autoAlpha: 0 });
	const final_position = vh / 2 - targetEl?.clientHeight / 2;

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: triggerEl,
			start: 'top top',
			end: 'bottom top',
			scrub: 1
		}
	});
	tl.to(targetEl, {
		width: '60rem',
		top: '49rem',
		ease: 'linear',
		onComplete: () => {
			targetEl.remove();
			gsap.set(headerEl, { autoAlpha: 1 });
		}
	});
};

const animation = (page: HTMLElement) => {
	let ctx: gsap.Context | null = null;
	let destroyed = false;
	const isMobile = window.innerWidth < 770;

	document.fonts.ready.then(() => {
		if (destroyed) return;

		const p = document.querySelector('#p');
		const h = document.querySelector('#h');

		if (p) {
			gsap.set(p, { autoAlpha: 1 });
		}

		if (h && isMobile) {
			gsap.set(h, { autoAlpha: 1 });
		}

		ctx = gsap.context(() => {
			if (!isMobile) {
				logoA();
				headerA();
				introA();
			} else {
				introAM();
			}
			// introA();
			textsA();
		}, page);
	});

	return () => {
		destroyed = true;
		ctx?.revert();
	};
};

export default animation;
