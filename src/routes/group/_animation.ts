import { imagesA, textsA } from '$lib/utils/animation';

import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GSDevTools } from 'gsap/dist/GSDevTools';

gsap.registerPlugin(SplitText, ScrollTrigger, GSDevTools);

const anim = () => {
	return;
	gsap.from('.g-numb', {
		opacity: 0,
		textContent: 0,
		duration: 1,
		ease: 'power1.out',
		snap: { textContent: 1 }, // rounds to whole numbers
		stagger: 0.2
	});
};

const heA = () => {
	const title_split = SplitText.create('.g-he-ti', { type: 'lines', mask: 'lines' });
	const he_tl = gsap.timeline();

	he_tl
		.from(title_split.lines, {
			yPercent: 100,
			duration: 1,
			ease: 'power4.out',
			stagger: 0.2,
			id: 'title'
		})
		.from(
			'.g-he-ban',
			{
				duration: 0.6,
				opacity: 0,
				ease: 'power2.inOut',
				id: 'banner'
			},
			'<+0.3'
		);

	gsap.utils.toArray('.g-numb-list li').forEach((el: any) => {
		const item_tl = gsap.timeline();
		const tt = el.querySelector('div');
		const bt = el.querySelector('.g-numb-label');
		const t_split = SplitText.create(tt, { type: 'chars' });
		const b_split = SplitText.create(bt, { type: 'lines', mask: 'lines' });
		item_tl
			.from(t_split.chars, {
				yPercent: 100,
				duration: 0.6,
				ease: 'power2.inOut',
				stagger: 0.1
			})
			.from(
				b_split.lines,
				{
					yPercent: 100,
					duration: 0.4,
					ease: 'power1.inOut'
				},
				'>-0.2'
			);
		// if (i != 0) {
		he_tl.add(item_tl, '<+0.2');
		// } else {
		// 	he_tl.add(item_tl, '>');
		// }
	});

	// GSDevTools.create({ animation: he_tl });
};
const indA = () => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.ind_list',
			start: 'top 90%'
		}
	});

	tl.from('.ind_i', {
		yPercent: 20,
		opacity: 0,
		duration: 0.8,
		ease: 'power1.out',
		stagger: 0.2
	});
	// gsap.utils.toArray('.ind_i').forEach((el: any) => {});
};

const agenA = () => {
	const $agencies = document.querySelectorAll('[data-gs="agen"]');
	/**
	 * split text and animate it when
	 *
	 */
	$agencies.forEach(($agen) => {
		const $line = $agen.querySelector('.line');
		const $title = $agen.querySelector('h3');
		const $info = $agen.querySelector('p');

		const title_split = SplitText.create($title, { type: 'lines', mask: 'lines' });
		const info_split = SplitText.create($info, { type: 'lines', mask: 'lines' });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: $agen,
				start: 'top 90%'
			}
		});

		tl.from(title_split.lines, {
			yPercent: 100,
			duration: 1.2,
			ease: 'power4.out',
			stagger: 0.05
		})
			.from(
				info_split.lines,
				{
					yPercent: 100,
					duration: 1.2,
					ease: 'power4.out',
					stagger: 0.05
				},
				'<0.3'
			)
			.from(
				$line,
				{
					width: 0,
					duration: 0.3
				},
				'<.2'
			);
	});
};

const pinA = () => {
	ScrollTrigger.create({
		trigger: '.agn',
		start: 'bottom bottom',
		end: 'top top',
		endTrigger: '.prt',
		pin: true,
		pinSpacing: false
	});
	ScrollTrigger.create({
		trigger: '.s-cult',
		start: 'bottom bottom',
		end: 'top top',
		endTrigger: '.s-imp',
		pin: true,
		pinSpacing: false
	});
};

const animation = async () => {
	await document.fonts.ready;

	gsap.set('#p', {
		autoAlpha: 1
	});
	heA();
	indA();
	imagesA();
	textsA();
	anim();
	agenA();
	pinA();
};

export default animation;
