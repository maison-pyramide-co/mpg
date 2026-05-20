import { gsap } from 'gsap/dist/gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const sliderA = () => {
	const tl = gsap.timeline();

	tl.from('.projects', {
		delay: 0.3,
		autoAlpha: 0,
		duration: 0.8,
		ease: 'power2.inOut'
	});
};

const animation = async () => {
	await document.fonts.ready;

	gsap.set('#p', {
		autoAlpha: 1
	});
	gsap.set('#h', {
		autoAlpha: 1
	});
	sliderA();
};

export default animation;
