import { gsap } from 'gsap/dist/gsap';


const animation = async () => {
	await document.fonts.ready;

	gsap.set('#p', {
		autoAlpha: 1
	});
	gsap.set('#h', {
		autoAlpha: 1
	});
};

export default animation;
