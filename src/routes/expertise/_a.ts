import { gsap } from 'gsap/dist/gsap';

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
			gsap.set(h, { autoAlpha: 1 });
		}

		ctx = gsap.context(() => {}, page);
	});

	return () => {
		destroyed = true;
		ctx?.revert();
	};
};

export default animation;
