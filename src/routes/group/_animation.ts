import { imagesA, textsA } from '$lib/utils/animation';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText, ScrollTrigger);

const anim = () => {
	gsap.from('.g-numb', {
		opacity: 0,
		textContent: 0,
		duration: 1,
		ease: 'power1.out',
		snap: { textContent: 1 } // rounds to whole numbers
	});
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

const animation = async () => {
	await document.fonts.ready;

	gsap.set('#p', {
		autoAlpha: 1
	});
	imagesA();
	textsA();
	anim();
	agenA();
};

export default animation;
