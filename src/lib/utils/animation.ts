import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import pkg from 'gsap/CustomEase';

const { CustomEase } = pkg as any;
gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);
CustomEase.create('io2', '.45,0,.55,1');

const imagesA = () => {
	gsap.utils.toArray('[data-ga="ir"]').forEach((el: any) => {
		gsap.from(el, {
			duration: 1,
			opacity: 0,
			ease: 'io2',
			scrollTrigger: {
				trigger: el, // 👈 each element triggers its own animation
				start: 'top 90%'
			}
		});
	});
};

const textsA = () => {
	gsap.utils.toArray('[data-ga="tr"]').forEach((el: any) => {
		const t_split = SplitText.create(el, { type: 'lines', mask: 'lines' });

		gsap.from(t_split.lines, {
			yPercent: 100,
			duration: 1.2,
			ease: 'power4.out',
			stagger: 0.05,
			scrollTrigger: {
				trigger: el, // 👈 each element triggers its own animation
				start: 'top 90%'
			},
			onComplete: () => {
				t_split.masks.forEach((mask: any) => {
					mask.style.overflow = '';
				});
			}
		});
	});
};

export { textsA, imagesA };
