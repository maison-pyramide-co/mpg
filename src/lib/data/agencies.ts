import mpLogo from '$lib/assets/images/mp-logo.png';
import eeLogo from '$lib/assets/images/ee-logo.png';
import showroomLogo from '$lib/assets/images/showroom-logo.png';
import mpCover from '$lib/assets/images/mp-cover.png';
import eeCover from '$lib/assets/images/ee-cover.png';
import showroomCover from '$lib/assets/images/showroom-cover.png';

const agencies = [
	{
		name: 'MAISON PYRAMIDE',
		bio: '360° brand consultancy agency <br/> across disciplines.',
		description: '360° brand consultancy agency across disciplines.',
		link: 'https://www.maisonpyramide.com/',
		logo: mpLogo,
		cover: mpCover
	},
	{
		name: 'MP SHOWROOM',
		bio: 'Wholesale and retail strategy, sales,<br/> and distribution platform. ',
		description: 'Wholesale and retail strategy, sales, and distribution platform.',
		link: 'https://showroom.maisonpyramide.com/',
		logo: showroomLogo,
		cover: showroomCover
	},
	{
		name: 'EGO & EAST',
		bio: 'A talent management agency<br/> representing artists, celebrities & influencers.',
		description: 'Leading talent management and procurement agency.',
		link: 'https://www.egoandeast.com/',
		logo: eeLogo,
		cover: eeCover
	}
];

export default agencies;
