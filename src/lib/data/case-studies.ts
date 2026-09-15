const caseStudies = [
	{
		id: 1,
		name: 'Westfield',
		image: '', // TODO: add image import/path
		category: 'retail', // TODO: no category data in source sheet
		description: '',
		services: ['strategy', 'production', 'design', 'digital', 'social']
	},
	{
		id: 2,
		name: 'JAQA',
		image: '', // TODO: add image import/path
		category: 'retail', // TODO: no category data in source sheet
		description: '',
		services: []
	},
	{
		id: 3,
		name: 'Mall of the Emirates',
		image: '', // TODO: add image import/path
		category: 'retail', // TODO: no category data in source sheet
		description:
			'For a standout fashion showcase at Mall of the Emirates, we created an elevated runway experience combining fashion, music and immersive scenography. The activation engaged media, VIPs and shoppers, transforming the mall into a contemporary fashion stage.',
		services: ['experiential']
	},
	{
		id: 4,
		name: 'Sodic',
		image: '', // TODO: add image import/path
		category: 'real estate', // TODO: no category data in source sheet
		description:
			'As SODIC’s exclusive PR partner, we lead its regional communications strategy, managing media relations and press office activity to strengthen visibility and reinforce its premium market position.',
		services: []
	},
	{
		id: 5,
		name: 'Soma Bay',
		image: '', // TODO: add image import/path
		category: 'real estate', // TODO: no category data in source sheet
		description:
			'As Soma Bay’s press office partner, we manage regional and international communications, media relations and hosted press visits. We also curate talent and influencer stays that generate authentic coverage and strengthen its position as a leading lifestyle destination.',
		services: []
	},
	{
		id: 6,
		name: 'Qatari Diar',
		image: '', // TODO: add image import/path
		category: 'real estate', // TODO: no category data in source sheet
		description: '',
		services: []
	},
	{
		id: 7,
		name: 'Taiba',
		image: 'real estate', // TODO: add image import/path
		category: '', // TODO: no category data in source sheet
		description:
			'We manage TAIBA’s social media presence across LinkedIn, Instagram and X, covering strategy, content planning, copywriting, production and paid media. Our work supports the company’s positioning as a leader in Saudi Arabia’s hospitality sector.',
		services: []
	},
	{
		id: 8,
		name: 'Nobu',
		image: '', // TODO: add image import/path
		category: 'real estate', // TODO: no category data in source sheet
		description:
			'Ahead of Nobu’s debut on Egypt’s North Coast, we led the communications, media and talent strategy surrounding its market entry. A curated retreat at Nobu Hotel Ibiza Bay introduced regional tastemakers to the brand and generated premium coverage across key markets.',
		services: ['experiential', 'pr']
	},
	{
		id: 9,
		name: 'One and Only',
		image: '', // TODO: add image import/path
		category: 'real estate', // TODO: no category data in source sheet
		description:
			'To celebrate the opening of One&Only One Za’abeel, we produced an exclusive private dinner across two locations. The experience introduced the Dubai hotel to selected guests through an intimate expression of the brand’s luxury hospitality.',
		services: ['experiential']
	},
	{
		id: 10,
		name: 'GFF',
		image: '', // TODO: add image import/path
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'As regional PR partner for the eighth Gouna Film Festival, we led international and regional communications, media strategy, talent relations and on-ground press operations. The campaign strengthened the festival’s global profile and positioned El Gouna as a leading cultural destination.',
		services: []
	},
	{
		id: 11,
		name: 'Hia Hub',
		image: '', // TODO: add image import/path
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'For four consecutive years, we led Hia Hub from creative concept and production to programming, guest experience and VIP curation. Its 2024 edition brought together 117 speakers and talents alongside masterclasses, workshops, talks and panel discussions over five days.',
		services: ['experiential', 'talent', 'programming', 'partnerships']
	},
	{
		id: 12,
		name: 'Noor Riyadh',
		image: '', // TODO: add image import/path
		category: 'arts & culture', // TODO: no category data in source sheet
		description: '',
		services: []
	},
	{
		id: 13,
		name: 'Layali Diriyah',
		image: '', // TODO: add image import/path
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'We led the end-to-end creative direction, concept development and guest journey for Layali Diriyah, shaping a seamless experience from arrival to departure. Our work included six bespoke restaurant concepts, two cafés, complete visitor-flow planning, ambient lighting and immersive activations across the destination.',
		services: ['experiential']
	},
	{
		id: 14,
		name: 'Future Creative Residence',
		image: '', // TODO: add image import/path
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'We conceptualized, designed and oversaw the development of the Saudi Fashion Commission’s permanent creative venue at JAX District in Riyadh. Since its opening, we have continued to activate the destination through cultural programming, education and entertainment.',
		services: []
	},
	{
		id: 15,
		name: 'Cairo Design Week',
		image: '', // TODO: add image import/path
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'We curated Cairo Design Week’s Fashion Design District at Villa Magenta, bringing together exclusive work from regional and international brands. As regional press office partner, we also led media relations and secured widespread coverage across key publications.',
		services: []
	},
	{
		id: 16,
		name: 'Saudi 100 Brands',
		image: '', // TODO: add image import/path
		category: 'fashioin & luxury', // TODO: no category data in source sheet
		description:
			'In partnership with Elovation Consulting, we helped deliver Saudi 100 Brands, a Saudi Fashion Commission initiative supporting local designers. The program combined expert-led learning, one-to-one mentorship and retail and wholesale activations to prepare brands for international expansion.',
		services: []
	},
	{
		id: 17,
		name: 'Riyadh Fashion Week',
		image: '', // TODO: add image import/path
		category: '', // TODO: no category data in source sheet
		description:
			'We led press, showroom, sales and talent management for Riyadh Fashion Week, covering media strategy, buyer invitations, guest curation, brand assets and on-ground operations. The integrated program connected Saudi designers with international media, buyers and cultural talent.',
		services: []
	},
	{
		id: 18,
		name: 'Madrid Fashion Week',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description: '',
		services: []
	},
	{
		id: 19,
		name: 'Fashion Trust Arabia',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description: '',
		services: []
	},
	{
		id: 20,
		name: 'Puma',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'For Puma’s Speedcat launch in Egypt, we reimagined the iconic sneaker through a distinctly local cultural lens. An immersive journey from the ancient goddess Bastet to the modern Speedcat combined storytelling, product discovery and a high-energy launch experience.',
		services: ['experiential', 'guest list', 'comms']
	},
	{
		id: 21,
		name: 'Adidas',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description: '',
		services: []
	},
	{
		id: 22,
		name: 'Cadillac',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'For Cadillac’s market entry into Egypt, we lead the PR and communications strategy in partnership with Mansour Automotive. Our scope spans media relations, guest curation and talent management, positioning Cadillac as a leading luxury automotive brand.',
		services: []
	},
	{
		id: 23,
		name: 'Elie Saab',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'For Elie Saab’s 45-year celebration at Riyadh Season, we led regional PR, media planning, guest management and content development. The campaign generated more than 1,000 articles, 34 million impressions and over 75 original content assets.',
		services: []
	},
	{
		id: 24,
		name: 'Stella McCartney x H&M',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'To launch the Stella McCartney x H&M collection in Riyadh and Dubai, we produced exclusive pre-sale events for influencers and cultural tastemakers. Immersive retail design, branded installations and interactive content brought the collaboration’s creative identity to life.',
		services: ['experiential', 'guest list', 'comms']
	},
	{
		id: 25,
		name: 'Gucci x Assouline',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'For the regional launch of Gucci x Assouline’s Art of Silk, we hosted an intimate dinner at Bujairi Terrace in Riyadh. The experience brought together voices from fashion, culture and publishing through thoughtful design and storytelling rooted in Diriyah’s heritage.',
		services: ['experiential']
	},
	{
		id: 26,
		name: 'Dolce & Gabanna',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'We celebrated the opening of Dolce & Gabbana’s first regional concept store with an experiential launch at Bujairi Terrace. Creative programming and a strong PR presence generated engagement while respecting Diriyah’s distinctive cultural identity.',
		services: ['experiential']
	},
	{
		id: 27,
		name: 'Bottega Veneta',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'We facilitated Zeyne’s performance at Bottega Veneta’s Waves event in Dubai, bringing together regional talent and an international luxury house for a significant cultural collaboration.',
		services: []
	},
	{
		id: 28,
		name: 'Infiniti',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'We facilitated the partnership appointing Saudi film producer and entrepreneur Mo Al-Turki as INFINITI Middle East’s first regional Chief Luxury Ambassador. The collaboration created a strong connection between regional cultural influence and luxury automotive positioning.',
		services: []
	},
	{
		id: 29,
		name: 'Breitling',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'To celebrate the opening of Breitling Kitchen in Riyadh, we produced an intimate launch for the brand’s community, media and influencers. Hospitality, live music and a bespoke illustration activation created an engaging expression of Breitling’s identity.',
		services: ['experiential']
	},
	{
		id: 30,
		name: 'Boucheron',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'For Ramadan, we created an intimate Suhoor experience for Boucheron’s VIP clients. Set against the sound of the sea and illuminated by candlelight, the evening elevated the luxury house’s regional presence through an atmospheric guest experience.',
		services: ['experiential']
	},
	{
		id: 31,
		name: 'Chopard',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'We conceptualized and produced Chopard’s annual Suhoor for VIP clients, media and influencers. The experience brought together the luxury house’s elegant identity and regional cultural traditions in a memorable Ramadan setting.',
		services: ['experiential']
	},
	{
		id: 32,
		name: 'Whoop',
		image: '', // TODO: add image import/path
		category: 'beauty & wellness', // TODO: no category data in source sheet
		description:
			'We facilitated WHOOP’s annual ambassadorship with Karen Wazen, managing the regional talent partnership and coordinating its supporting social media content.',
		services: []
	},
	{
		id: 33,
		name: 'L’Oreal Group',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'For more than five years, we have partnered with L’Oréal Group across Lancôme, Armani Beauty and YSL Beauty. Our work spans marketing strategy, public relations, content creation, social media design and e-commerce assets, supporting each brand across key digital and consumer touchpoints.',
		services: []
	},
	{
		id: 34,
		name: 'Jo Malone',
		image: '', // TODO: add image import/path
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'To launch Jo Malone London’s Taif Rose fragrance, we conceived and produced a Ramadan Suhoor inspired by the timeless character of the rose. The immersive experience carried the fragrance story from creative concept through to full execution.',
		services: ['experiential', 'guest list', 'comms']
	}
];

export default caseStudies;
