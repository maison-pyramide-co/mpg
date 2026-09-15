import gsap from 'gsap';

const agnA = () => {
	// const tl = gsap.timeline({
	// 	defaults: { duration: 1.2, ease: 'power4.inOut' }
	// });
	gsap.from('#menu ul div div', {
		y: '100%',
		duration: 1,
		stagger: 0.1,
		ease: 'power4.inOut'
	});
	gsap.from('#menu ul svg', {
		opacity: 0,
		duration: 1.2,
		stagger: 0.2,
		ease: 'power4.inOut'
	});
};

const navA = () => {
	const tl = gsap.timeline({
		defaults: { duration: 1.2, ease: 'power4.inOut' }
	});

	// get all list items
	const items = gsap.utils.toArray('#menu nav a') as HTMLElement[];

	items.forEach((item, i) => {
		const text = item.querySelector('.ti'); // the first .y (text)
		const index = item.querySelector('.indx'); // the index number inside .i

		tl.from(index, { y: '100%' }, i * 0.2) // index starts a bit after text
			.from(text, { y: '100%' }, i * 0.1 + 0.1); // each <li> starts slightly later
	});
};

export const hA = () => {
	const tl = gsap.timeline();

	tl.from('#h a .y', {
		yPercent: 100,
		duration: 0.6,
		ease: 'sine.inOut'
	}).from(
		'#h button .y',
		{
			yPercent: 100,
			duration: 0.4,
			ease: 'sine.inOut'
		},
		'< 0.3'
	);
};

const animation = () => {
	navA();
	agnA();

	gsap.set('#h', {
		mixBlendMode: 'difference'
	});
};

export default animation;
