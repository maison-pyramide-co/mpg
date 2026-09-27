import addidas from '$lib/assets/images/case studies/ADIDAS.webp';
import bottegaVeneta from '$lib/assets/images/case studies/BOTTEGA VENETA.webp';
import boucheron from '$lib/assets/images/case studies/BOUCHERON.webp';
import breitling from '$lib/assets/images/case studies/BREITLING.webp';
import cadillac from '$lib/assets/images/case studies/CADILLAC.webp';
import cdw from '$lib/assets/images/case studies/CDW.webp';
import chopard from '$lib/assets/images/case studies/CHOPARD.webp';
import dg from '$lib/assets/images/case studies/D&G.webp';
import edition from '$lib/assets/images/case studies/EDITION.webp';
import elieSaab from '$lib/assets/images/case studies/ELIE SAAB.webp';
import fcr from '$lib/assets/images/case studies/FCR.webp';
import fta from '$lib/assets/images/case studies/FTA.webp';
import gff from '$lib/assets/images/case studies/GFF.webp';
import gucciXAssouline from '$lib/assets/images/case studies/GUCCI X ASSOULINE.webp';
import hiaHub from '$lib/assets/images/case studies/HIA HUB.webp';
import infiniti from '$lib/assets/images/case studies/Infiniti.webp';
import jaqa from '$lib/assets/images/case studies/JAQA.webp';
import joMalone from '$lib/assets/images/case studies/JO MALONE.webp';
import layaliDiriyah from '$lib/assets/images/case studies/LAYALI DIRIYAH.webp';
import loreal from '$lib/assets/images/case studies/LOREAL.webp';
import mbfw from '$lib/assets/images/case studies/MBFW.webp';
import moe from '$lib/assets/images/case studies/MOE.webp';
import nobu from '$lib/assets/images/case studies/NOBU.webp';
import noorRiyadh from '$lib/assets/images/case studies/NOOR RIYADH.webp';
import oneAndOnly from '$lib/assets/images/case studies/ONE&ONLY.webp';
import puma from '$lib/assets/images/case studies/PUMA.webp';
import qatariDiar from '$lib/assets/images/case studies/QATARI DIAR.webp';
import rfw from '$lib/assets/images/case studies/RFW.webp';
import s100 from '$lib/assets/images/case studies/S100.webp';
import sodic from '$lib/assets/images/case studies/SODIC.webp';
import somaBay from '$lib/assets/images/case studies/SOMA BAY.webp';
import stella from '$lib/assets/images/case studies/STELLA MCARTNEY X H&M.webp';
import taiba from '$lib/assets/images/case studies/TAIBA.webp';
import westfield from '$lib/assets/images/case studies/Westfield.webp';
import whoop from '$lib/assets/images/case studies/WHOOP.webp';

const caseStudies = [
	{
		id: 1,
		name: 'Westfield',
		image: westfield,
		category: 'hospitality & destinations',
		description:
			'As Westfield’s lead marketing partner for Riyadh and Jeddah, we are shaping the brand’s first presence in Saudi Arabia. Maison Pyramide leads destination marketing strategy, social media and content, paid media, influencer partnerships, and cultural programming, positioning both developments as lifestyle destinations with distinct city identities.',
		services: ['strategy', 'production', 'design', 'digital', 'social']
	},
	{
		id: 2,
		name: 'Jabal AlQurain Avenue',
		image: jaqa,
		category: 'hospitality & destinations',
		description:
			'Appointed by Diriyah Company, we are leading the brand and retail development of Jabal Al Qurain Avenue, a landmark cultural district in Diriyah. Across more than 79 retail units, we oversee brand curation, tenant clustering, leasing and partnerships to create a vibrant destination rooted in Saudi excellence, Arab heritage and global cultural exchange.',
		services: ['Retail Strategy', 'Brand Curation', 'Partnerships']
	},
	{
		id: 3,
		name: 'Mall of the Emirates',
		image: moe,
		category: 'hospitality & destinations',
		description:
			'For a standout fashion showcase at Mall of the Emirates, we created an elevated runway experience combining fashion, music and immersive scenography. The activation engaged media, VIPs and shoppers, transforming the mall into a contemporary fashion stage.',
		services: ['experiential']
	},
	{
		id: 4,
		name: 'Sodic',
		image: sodic,
		category: 'hospitality & destinations',
		description:
			'As SODIC’s exclusive PR partner, we lead its regional communications strategy, managing media relations and press office activity to strengthen visibility and reinforce its premium market position.',
		services: ['Marketing', 'PR']
	},
	{
		id: 5,
		name: 'Soma Bay',
		image: somaBay,
		category: 'hospitality & destinations',
		description:
			'As Soma Bay’s press office partner, we manage regional and international communications, media relations and hosted press visits. We also curate talent and influencer stays that generate authentic coverage and strengthen its position as a leading lifestyle destination.',
		services: ['Marketing', 'PR', 'Influencer']
	},
	{
		id: 6,
		name: 'Qatari Diar',
		image: qatariDiar,
		category: 'hospitality & destinations',
		description:
			'For Qatari Diar’s Alam Al Roum project, we developed luxury PR boxes, leading the creative concept, design and presentation. We curated the gifting elements and sourced selected pieces internationally to create a distinctive experience aligned with the project’s premium identity.',
		services: ['Design', 'PR']
	},
	{
		id: 7,
		name: 'Taiba',
		image: taiba,
		category: 'hospitality & destinations',
		description:
			'We manage TAIBA’s social media presence across LinkedIn, Instagram and X, covering strategy, content planning, copywriting, production and paid media. Our work supports the company’s positioning as a leader in Saudi Arabia’s hospitality sector.',
		services: ['Digital', 'Social Media', 'Content', 'Production']
	},
	{
		id: 8,
		name: 'Nobu',
		image: nobu,
		category: 'hospitality & destinations',
		description:
			'Ahead of Nobu’s debut on Egypt’s North Coast, we led the communications, media and talent strategy surrounding its market entry. A curated retreat at Nobu Hotel Ibiza Bay introduced regional tastemakers to the brand and generated premium coverage across key markets.',
		services: ['experiential', 'pr']
	},
	{
		id: 9,
		name: 'One and Only',
		image: oneAndOnly,
		category: 'hospitality & destinations',
		description:
			'To celebrate the opening of One&Only One Za’abeel, we produced an exclusive private dinner across two locations. The experience introduced the Dubai hotel to selected guests through an intimate expression of the brand’s luxury hospitality.',
		services: ['experiential']
	},
	{
		id: 10,
		name: 'GFF',
		image: gff,
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'As regional PR partner for the eighth Gouna Film Festival, we led international and regional communications, media strategy, talent relations and on-ground press operations. The campaign strengthened the festival’s global profile and positioned El Gouna as a leading cultural destination.',
		services: ['PR', 'Media Relations']
	},
	{
		id: 11,
		name: 'Hia Hub',
		image: hiaHub,
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'For four consecutive years, we led Hia Hub from creative concept and production to programming, guest experience and VIP curation. Its 2024 edition brought together 117 speakers and talents alongside masterclasses, workshops, talks and panel discussions over five days.',
		services: ['experiential', 'talent', 'programming', 'partnerships']
	},
	{
		id: 12,
		name: 'Noor Riyadh',
		image: noorRiyadh,
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'We managed regional and international media engagement for Noor Riyadh, from outreach, invitations and guest-list coordination to confirmations and pre-event planning. On the ground, we oversaw media hosting, accreditation, scheduling and press operations throughout the event.',
		services: ['PR', 'Media Relations']
	},
	{
		id: 13,
		name: 'Layali Diriyah',
		image: layaliDiriyah,
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'We led the end-to-end creative direction, concept development and guest journey for Layali Diriyah, shaping a seamless experience from arrival to departure. Our work included six bespoke restaurant concepts, two cafés, complete visitor-flow planning, ambient lighting and immersive activations across the destination.',
		services: ['experiential']
	},
	{
		id: 14,
		name: 'Future Creative Residence',
		image: fcr,
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'We conceptualized, designed and oversaw the development of the Saudi Fashion Commission’s permanent creative venue at JAX District in Riyadh. Since its opening, we have continued to activate the destination through cultural programming, education and entertainment.',
		services: ['Design', 'Programming', 'Experiential', 'Partnerships']
	},
	{
		id: 15,
		name: 'Cairo Design Week',
		image: cdw,
		category: 'arts & culture', // TODO: no category data in source sheet
		description:
			'We curated Cairo Design Week’s Fashion Design District at Villa Magenta, bringing together exclusive work from regional and international brands. As regional press office partner, we also led media relations and secured widespread coverage across key publications.',
		services: ['PR', 'Programming']
	},
	{
		id: 16,
		name: 'Saudi 100 Brands',
		image: s100,
		category: 'luxury & fashion',
		description:
			'In partnership with Elovation Consulting, we helped deliver Saudi 100 Brands, a Saudi Fashion Commission initiative supporting local designers. The program combined expert-led learning, one-to-one mentorship and retail and wholesale activations to prepare brands for international expansion.',
		services: ['Programming', 'Brand Development', 'Retail Activation']
	},
	{
		id: 17,
		name: 'Riyadh Fashion Week',
		image: rfw,
		category: 'luxury & fashion',
		description:
			'We led press, showroom, sales and talent management for Riyadh Fashion Week, covering media strategy, buyer invitations, guest curation, brand assets and on-ground operations. The integrated program connected Saudi designers with international media, buyers and cultural talent.',
		services: ['PR', 'Showroom', 'Sales', 'Talent Management']
	},
	{
		id: 18,
		name: 'Madrid Fashion Week',
		image: mbfw,
		category: 'luxury & fashion',
		description:
			'Through our ongoing partnership with MBFWMadrid, we connect emerging Spanish designers with buyers, editors and industry leaders across MEA, Europe and the UK. The MP Showroom Prize recognizes designers across Commercial Potential, Creative Identity and Responsible Design, providing access to the Paris market, PR visibility and strategic commercial guidance.',
		services: ['Brand Development', 'Showroom & Sales', 'Guest Management']
	},
	{
		id: 19,
		name: 'Fashion Trust Arabia',
		image: fta,
		category: 'luxury & fashion',
		description:
			'Through our partnership with Fashion Trust Arabia, we supported award-winning MENA designers with digital and physical showroom representation, wholesale development and PR consultancy. The program connected them with international buyers, media and talent, building visibility and supporting global growth.',
		services: ['Brand Development', 'Showroom Representation', 'PR']
	},
	{
		id: 20,
		name: 'Puma',
		image: puma,
		category: 'luxury & fashion',
		description:
			'For Puma’s Speedcat launch in Egypt, we reimagined the iconic sneaker through a distinctly local cultural lens. An immersive journey from the ancient goddess Bastet to the modern Speedcat combined storytelling, product discovery and a high-energy launch experience.',
		services: ['experiential', 'guest list', 'comms']
	},
	{
		id: 21,
		name: 'Adidas',
		image: addidas,
		category: 'luxury & fashion',
		description:
			'For adidas’ “You Got This” World Cup campaign, we brought the story to life in Cairo through a 13-metre mural celebrating Mohamed Salah. We led the design, artist curation, execution and documentary content, transforming District 5 into a public extension of the campaign.',
		services: ['Experiential', 'PR', 'Production']
	},
	{
		id: 22,
		name: 'Cadillac',
		image: cadillac,
		category: 'fashion & luxury', // TODO: no category data in source sheet
		description:
			'For Cadillac’s market entry into Egypt, we lead the PR and communications strategy in partnership with Mansour Automotive. Our scope spans media relations, guest curation and talent management, positioning Cadillac as a leading luxury automotive brand.',
		services: ['PR', 'Guest list', 'Talent Management']
	},
	{
		id: 23,
		name: 'Elie Saab',
		image: elieSaab,
		category: 'luxury & fashion',
		description:
			'For Elie Saab’s 45-year celebration at Riyadh Season, we led regional PR, media planning, guest management and content development. The campaign generated more than 1,000 articles, 34 million impressions and over 75 original content assets.',
		services: ['pr', 'social media', 'content']
	},
	{
		id: 24,
		name: 'Stella McCartney x H&M',
		image: stella,
		category: 'luxury & fashion',
		description:
			'To launch the Stella McCartney x H&M collection in Riyadh and Dubai, we produced exclusive pre-sale events for influencers and cultural tastemakers. Immersive retail design, branded installations and interactive content brought the collaboration’s creative identity to life.',
		services: ['experiential', 'guest list', 'pr']
	},
	{
		id: 25,
		name: 'Gucci x Assouline',
		image: gucciXAssouline,
		category: 'luxury & fashion',
		description:
			'For the regional launch of Gucci x Assouline’s Art of Silk, we hosted an intimate dinner at Bujairi Terrace in Riyadh. The experience brought together voices from fashion, culture and publishing through thoughtful design and storytelling rooted in Diriyah’s heritage.',
		services: ['experiential']
	},
	{
		id: 26,
		name: 'Dolce & Gabanna',
		image: dg,
		category: 'luxury & fashion',
		description:
			'We celebrated the opening of Dolce & Gabbana’s first regional concept store with an experiential launch at Bujairi Terrace. Creative programming and a strong PR presence generated engagement while respecting Diriyah’s distinctive cultural identity.',
		services: ['experiential']
	},
	{
		id: 27,
		name: 'Bottega Veneta',
		image: bottegaVeneta,
		category: 'luxury & fashion',
		description:
			'We facilitated Zeyne’s performance at Bottega Veneta’s Waves event in Dubai, bringing together regional talent and an international luxury house for a significant cultural collaboration.',
		services: ['Talent Management']
	},
	{
		id: 28,
		name: 'Infiniti',
		image: infiniti,
		category: 'luxury & fashion',
		description:
			'We facilitated the partnership appointing Saudi film producer and entrepreneur Mo Al-Turki as INFINITI Middle East’s first regional Chief Luxury Ambassador. The collaboration created a strong connection between regional cultural influence and luxury automotive positioning.',
		services: ['Talent Management']
	},
	{
		id: 29,
		name: 'Breitling',
		image: breitling,
		category: 'luxury & fashion',
		description:
			'To celebrate the opening of Breitling Kitchen in Riyadh, we produced an intimate launch for the brand’s community, media and influencers. Hospitality, live music and a bespoke illustration activation created an engaging expression of Breitling’s identity.',
		services: ['experiential']
	},
	{
		id: 30,
		name: 'Boucheron',
		image: boucheron,
		category: 'luxury & fashion',
		description:
			'For Ramadan, we created an intimate Suhoor experience for Boucheron’s VIP clients. Set against the sound of the sea and illuminated by candlelight, the evening elevated the luxury house’s regional presence through an atmospheric guest experience.',
		services: ['experiential']
	},
	{
		id: 31,
		name: 'Chopard',
		image: chopard,
		category: 'luxury & fashion',
		description:
			'We conceptualized and produced Chopard’s annual Suhoor for VIP clients, media and influencers. The experience brought together the luxury house’s elegant identity and regional cultural traditions in a memorable Ramadan setting.',
		services: ['experiential']
	},
	{
		id: 32,
		name: 'Whoop',
		image: whoop,
		category: 'beauty & wellness', // TODO: no category data in source sheet
		description:
			'We facilitated WHOOP’s annual ambassadorship with Karen Wazen, managing the regional talent partnership and coordinating its supporting social media content.',
		services: ['Talent Management']
	},
	{
		id: 33,
		name: 'L’Oreal Group',
		image: loreal,
		category: 'beauty & wellness', // TODO: no category data in source sheet
		description:
			'For more than five years, we have partnered with L’Oréal Group across Lancôme, Armani Beauty and YSL Beauty. Our work spans marketing strategy, public relations, content creation, social media design and e-commerce assets, supporting each brand across key digital and consumer touchpoints.',
		services: ['Social Media', 'Influencers', 'PR', 'Events']
	},
	{
		id: 34,
		name: 'Jo Malone',
		image: joMalone,
		category: 'beauty & wellness', // TODO: no category data in source sheet
		description:
			'To launch Jo Malone London’s Taif Rose fragrance, we conceived and produced a Ramadan Suhoor inspired by the timeless character of the rose. The immersive experience carried the fragrance story from creative concept through to full execution.',
		services: ['experiential', 'guest list', 'comms']
	}
];

export default caseStudies;
