// import { imagesA, textsA } from '$lib/utils/animation';

import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GSDevTools } from 'gsap/dist/GSDevTools';

gsap.registerPlugin(SplitText, ScrollTrigger, GSDevTools);

const srvcA = () => {
	const srvc_tl = gsap.timeline();

	gsap.utils.toArray('.srvc').forEach((el: any, i) => {
		const line = el.querySelector('.line');
		const title = el.querySelector('h3'); // adjust to your actual class
		const icon = el.querySelector('button span');
		const title_split = SplitText.create(title, { type: 'lines', mask: 'lines' });

		const tl = gsap.timeline({
			// scrollTrigger: {
			// 	trigger: el,
			// 	start: 'top 90%'
			// }
		});

		tl.from(line, {
			scaleX: 0,
			transformOrigin: 'left',
			duration: 0.8,
			ease: 'power3.out'
		})
			.from(
				title_split.lines,
				{
					yPercent: 100,
					opacity: 0,
					duration: 1,
					ease: 'power4.out'
				},
				'<'
			)
			.from(
				icon,
				{
					opacity: 0,
					duration: 0.4,
					ease: 'power1.inOut'
				},
				'>-0.2'
			);

		srvc_tl.add(tl, '<0.2');
	});
	// GSDevTools.create({ animation: srvc_tl });
};

const animation = async () => {
	await document.fonts.ready;
	gsap.set('#p', {
		autoAlpha: 1
	});
	gsap.set('#h', {
		autoAlpha: 1
	});
	srvcA();
};

export default animation;
