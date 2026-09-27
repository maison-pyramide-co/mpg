import mpLogo from '$lib/assets/images/mp-logo.png';
import eeLogo from '$lib/assets/images/ee-logo.png';
import showroomLogo from '$lib/assets/images/showroom-logo.png';
import mpCover from '$lib/assets/images/mp-cover.png';
import eeCover from '$lib/assets/images/ee-cover.png';
import showroomCover from '$lib/assets/images/showroom-cover.png';

const agencies = [
	{
		name: 'MAISON PYRAMIDE',
		bio: 'Where strategy meets culture.',
		description:
			'The Group’s communications and marketing arm, working across public relations, integrated marketing, content and social media, events and experiential activations.',
		link: 'https://www.maisonpyramide.com/',
		logo: mpLogo,
		cover: mpCover
	},
	{
		name: 'MP SHOWROOM',
		bio: 'Connecting international brands to the markets that matter.',
		description:
			'The Group’s sales, distribution and brand development business, supporting international fashion and luxury brands with wholesale development, regional distribution, retailer relationships, market expansion and long-term commercial development.',
		link: 'https://showroom.maisonpyramide.com/',
		logo: showroomLogo,
		cover: showroomCover
	},
	{
		name: 'EGO & EAST',
		bio: "Representing the region's most influential voices.",
		description:
			'The Group’s luxury talent management and representation agency, working with selected talent across regional and international markets.',
		link: 'https://www.egoandeast.com/',
		logo: eeLogo,
		cover: eeCover
	}
];

export default agencies;
