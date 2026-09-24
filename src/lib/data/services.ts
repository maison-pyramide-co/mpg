import s9 from '$lib/assets/images/services/s9.png';
import branding from '$lib/assets/images/services/branding.webp';
import digital from '$lib/assets/images/services/digital.webp';
import events from '$lib/assets/images/services/events.webp';
import retail from '$lib/assets/images/services/retail.webp';
import wholesale from '$lib/assets/images/services/wholesale.webp';
import platforms from '$lib/assets/images/services/platforms.webp';
import production from '$lib/assets/images/services/production.webp';
import pr from '$lib/assets/images/services/pr.webp';
import creative from '$lib/assets/images/services/creative.webp';
import marketing from '$lib/assets/images/services/marketing.webp';

const services = [
	{
		name: 'PR, Influencer and Communications',
		description:
			'We shape how brands are seen, talked about, and remembered through media, storytelling, and carefully managed influencer campaigns.',
		image: pr,
		sow: [
			'PR strategy and communications planning',
			'Strategic consulting and advisory',
			'⁠Media relations and press office management',
			'⁠Press materials and launch communications',
			'⁠Influencer strategy and outreach',
			'⁠Influencer campaign management',
			'⁠Media and influencer gifting / seeding',
			'⁠Founder and brand profiling',
			'⁠Guest list curation and management'
		]
	},
	{
		name: 'Talent Management & Brand Partnerships',
		description: `With deep expertise across culture, influence, and commerce, Ego & East connects brands with some of the region's most sought-after creators, celebrities, and public figures. Through talent management, commercial representation, influencer marketing, and strategic partnerships, we facilitate collaborations that align brand objectives with authentic talent storytelling.`,
		image: s9,
		sow: [
			'Talent Management',
			'Celebrity & Creator Bookings',
			'Commercial Representation',
			'Talent Sourcing',
			'Influencer Casting',
			'Brand Partnerships',
			'Negotiation & Contracting'
		]
	},
	{
		name: 'Campaign Strategy & Marketing',
		description:
			'We create campaign and marketing strategies that bring brands to market through launches, awareness drives, and multi-channel activations.',
		image: marketing,
		sow: [
			'Campaign strategy',
			'Marketing planning',
			'Product and seasonal launches',
			'360 campaigns',
			'Retail and traffic-driving campaigns',
			'Reporting and optimisation'
		]
	},
	{
		name: 'Digital & Social Media',
		description:
			'We manage digital and social presence end to end, from strategy and content planning to account management, paid media, and search visibility.',
		image: digital,
		sow: [
			'Social media strategy',
			'Content planning and calendars',
			'Account and community management',
			'Paid social and digital advertising',
			'SEO support',
			'Reporting and insights'
		]
	},
	{
		name: 'Content Production',
		description:
			'We produce content that brings campaigns and brands to life across digital, social, retail, and editorial touchpoints.',
		image: production,
		sow: [
			'Photography and videography',
			'Campaign and social shoots',
			'Copywriting',
			'Casting and location sourcing',
			'Styling and shoot coordination'
		]
	},
	{
		name: 'Branding & Brand Strategy',
		description:
			'We shape the core of a brand, from its positioning and identity to the way it is expressed and brought to life.',
		image: branding,
		sow: [
			'Brand positioning',
			'Brand identity',
			'Brand architecture',
			'Messaging and tone of voice',
			'Audience and competitor analysis',
			'Rebranding and go-to-market planning'
		]
	},
	{
		name: 'Creative & Design',
		description:
			'We translate brand thinking into visual worlds, campaign ideas, and design systems that are both distinctive and effective.',
		image: creative,
		sow: [
			'Creative direction',
			'Campaign concepts',
			'Art direction and graphic design',
			'Visual identity systems',
			'Packaging and collateral',
			'Presentations and branded materials'
		]
	},
	{
		name: 'Events & Experiential Activations',
		description:
			'We create experiences that turn brand stories into real-world moments designed to engage audiences and leave a lasting impression.',
		image: events,
		sow: [
			'Event concepts',
			'Brand activations and pop-ups',
			'Launch events and VIP experiences',
			'Panels, talks, and workshops',
			'Guest-list curation',
			'On-ground management'
		]
	},
	{
		name: 'Platforms & Institutional Programmes',
		description:
			'We partner with governments, foundations, and industry bodies to design, manage, and deliver fashion programmes that shape markets, develop talent, and build platforms with lasting impact. From national brand development programmes to international fashion week activations, we operate at the intersection of fashion, culture, and institutional strategy.',
		image: platforms,
		sow: [
			'Programme design & management ',
			'National brand development initiatives',
			'Fashion week operations & creative direction',
			'Global industry engagement & access',
			'Jury, selection & awards programme support',
			'Industry conference & summit programming',
			'Institutional partnership development',
			'Cross-border platform activation'
		]
	},
	{
		name: 'Wholesale & Brand Market Access',
		description:
			'Through our Paris-based showroom operations and global buyer network, we help brands enter new markets, build the right distribution, and grow commercially through wholesale partnerships. We work across seasonal market programming, buyer relations, commercial negotiation and account management, and the full back-office process from order to delivery.',
		image: wholesale,
		sow: [
			'Wholesale strategy & territory development',
			'Multi-market showroom representation (Paris, Dubai, Riyadh, Las Vegas)',
			'Digital showroom & virtual market access',
			'Seasonal market programming',
			'Buyer relations & order management',
			'Back-office & logistics coordination',
			'MENA distribution access & management',
			'Production financing against confirmed orders'
		]
	},
	{
		name: 'Retail & Destination Development',
		description:
			'We help real estate developers, hospitality groups, and asset operators build differentiated retail experiences working across strategy through to operations. Whether defining a unique tenant mix, recruiting the right brands, or managing the retail offer of a destination, we work across the full retail life cycle.',
		image: retail,
		sow: [
			'Retail leasing strategy & leasing implementation',
			'Retail activation strategy, programming, & activations',
			'Retail concept development & management',
			'Brand curation, reach-outs & onboarding ',
			'Buying & brand assortment curation',
			'Market-driven retail feasibility analysis',
			'Retail unit setup, operations & brand management'
		]
	}
];

export default services;
