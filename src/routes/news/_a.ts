import { imagesA, textsA } from '$lib/utils/animation';

import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GSDevTools } from 'gsap/dist/GSDevTools';

gsap.registerPlugin(SplitText, ScrollTrigger, GSDevTools);

const animation = async () => {
	await document.fonts.ready;

	gsap.set('#p', {
		autoAlpha: 1
	});
	gsap.set('#h', {
		autoAlpha: 1
	});

	gsap.set('#h', {
		mixBlendMode: 'difference'
	});
	imagesA();
	textsA();
};

export default animation;
