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
		type: 'lines,chars',
		mask: 'chars',
		autoSplit: true
	});

	tl.from(t_split.chars, {
		x: 100,
		duration: 1.2,
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

// Header logo animation
const logoA = () => {
	const vh = window?.innerHeight;
	const triggerEl = document.querySelector('.s-hero');
	const targetEl = document.querySelector('.s-hero .logo') as HTMLElement;
	const headerEl = document.querySelector('#h') as HTMLElement;
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
			headerEl.style.opacity = '1';
		}
	});
	// tl.from(targetEl, {
	// 	width: '190rem',
	// 	y: final_position,
	// 	ease: 'linear',
	// 	duration: 1
	// });
};
/*
const animation = async (page: HTMLElement) => {
	await document.fonts.ready;

	// const ctx = gsap.context(() => {
	gsap.set('#p', {
		autoAlpha: 1
	});
	gsap.set('#h', {
		autoAlpha: 1
	});
	logoA();
	introA();
	// }, page);

	// return () => ctx.revert();
};
*/
const animation = (page: HTMLElement) => {
	let ctx: gsap.Context | null = null;
	let destroyed = false;

	document.fonts.ready.then(() => {
		if (destroyed) return;

		const p = document.querySelector('#p');
		const h = document.querySelector('#h');

		if (p) {
			gsap.set(p, { autoAlpha: 1 });
		}

		if (h) {
			// gsap.set(h, { autoAlpha: 1 });
		}

		ctx = gsap.context(() => {
			logoA();
			// headerA();
			introA();
			textsA();
		}, page);
	});

	return () => {
		destroyed = true;
		ctx?.revert();
	};
};

export default animation;
