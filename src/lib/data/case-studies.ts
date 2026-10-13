import addidas from '$lib/assets/images/case studies/ADIDAS.webp';
import bottegaVeneta from '$lib/assets/images/case studies/BOTTEGA.webp';
import boucheron from '$lib/assets/images/case studies/BOUCHERON.webp';
import breitling from '$lib/assets/images/case studies/BREITLING.webp';
import cadillac from '$lib/assets/images/case studies/CADILLAC.webp';
import cdw from '$lib/assets/images/case studies/CDW.webp';
import chopard from '$lib/assets/images/case studies/CHOPARD.webp';
import dg from '$lib/assets/images/case studies/D&G.webp';
import elieSaab from '$lib/assets/images/case studies/ELIE SAAB.webp';
import fcr from '$lib/assets/images/case studies/FCR.webp';
import fta from '$lib/assets/images/case studies/FTA.webp';
import gff from '$lib/assets/images/case studies/GFF.webp';
import gucciXAssouline from '$lib/assets/images/case studies/GUCCI X ASSOULINE.webp';
import hiaHub from '$lib/assets/images/case studies/HIA HUB.webp';
import infiniti from '$lib/assets/images/case studies/Infiniti.webp';
import jaqa from '$lib/assets/images/case studies/JAQA.webp';
import layaliDiriyah from '$lib/assets/images/case studies/LAYALI DIRIYAH.webp';
import mbfw from '$lib/assets/images/case studies/MBFW.webp';
import moe from '$lib/assets/images/case studies/MOE.webp';
import nobu from '$lib/assets/images/case studies/NOBU.webp';
import noorRiyadh from '$lib/assets/images/case studies/NOOR RIYADH.webp';
import oneAndOnly from '$lib/assets/images/case studies/O&O.webp';
import puma from '$lib/assets/images/case studies/PUMA.webp';
import rfw from '$lib/assets/images/case studies/RFW.webp';
import s100 from '$lib/assets/images/case studies/S100.webp';
import sodic from '$lib/assets/images/case studies/SODIC.webp';
import somaBay from '$lib/assets/images/case studies/SOMA BAY.webp';
import stella from '$lib/assets/images/case studies/STELLA MCARTNEY X H&M.webp';
import taiba from '$lib/assets/images/case studies/TAIBA.webp';
import westfield from '$lib/assets/images/case studies/Westfield.webp';
import whoop from '$lib/assets/images/case studies/WHOOP.webp';
import samsung from '$lib/assets/images/case studies/SAMSUNG.webp';
import fendi from '$lib/assets/images/case studies/fendi.webp';
import nars from '$lib/assets/images/case studies/Nars.webp';
import jamalouki from '$lib/assets/images/case studies/Jamalouki.webp';
import kerastase from '$lib/assets/images/case studies/KERASTASE.webp';
import lancom from '$lib/assets/images/case studies/lancome.webp';
import ysl from '$lib/assets/images/case studies/ysl.webp';
import via from '$lib/assets/images/case studies/via.png';
import armani from '$lib/assets/images/case studies/armani.webp';
import prada from '$lib/assets/images/case studies/prada.png';
import azza from '$lib/assets/images/case studies/azza.png';
import serge from '$lib/assets/images/case studies/SERGE LUTENS.webp';

const caseStudies = [
	{
		id: 1,
		name: 'Dolce & Gabbana x Diriyah',
		image: dg,
		category: 'luxury & fashion',
		description:
			'For the opening of Dolce & Gabbana’s first regional concept store at Bujairi Terrace, Maison Pyramide developed an experiential launch supported by regional PR. Creative programming generated engagement while respecting Diriyah’s distinctive cultural identity.',
		services: ['Events & Experiential', 'Public Relations', 'Communications']
	},
	{
		id: 2,
		name: 'Fendi',
		image: fendi,
		category: 'luxury & fashion',
		description:
			'For Fendi, Maison Pyramide conceptualized and produced an intimate Ramadan Suhoor in Riyadh. Creative direction and guest-list management expressed the luxury house’s identity through a culturally relevant Saudi lens.',
		services: ['Events & Experiential', 'Creative & Design', 'Guest List Management']
	},
	{
		id: 3,
		name: 'Samsung',
		image: samsung,
		category: 'arts & culture',
		description:
			'Through Ego & East, Maison Pyramide facilitated the appointment of Karen Wazen as Brand Ambassador for Samsung Electronics MENA. The partnership connects a leading regional digital personality with a global technology brand, strengthening Samsung’s relevance and audience connection across the Middle East and North Africa.',
		services: ['Talent Management', 'Brand Partnerships']
	},
	{
		id: 5,
		name: 'Chopard',
		image: chopard,
		category: 'luxury & fashion',
		description:
			'Maison Pyramide conceptualized and produced Chopard’s annual Ramadan Suhoor for VIP clients, media and influencers. The experience connected the luxury house’s identity with regional cultural traditions in an elegant guest setting.',
		services: ['Events & Experiential', 'Guest List Management', 'Influencer Marketing']
	},
	{
		id: 6,
		name: 'Westfield',
		image: westfield,
		category: 'hospitality & destinations',
		description:
			'Maison Pyramide’s work with Cenomi Centers on Westfield Riyadh and Jeddah spans destination marketing strategy, social media and content, paid media, influencer partnerships and cultural programming. The work establishes a cohesive brand platform while giving each destination a distinct identity shaped by its city, audiences and culture.',
		services: [
			'Integrated Marketing',
			'Digital Strategy',
			'Paid Media',
			'Content & Social Media',
			'Creative & Design',
			'Influencer Marketing'
		]
	},
	{
		id: 7,
		name: 'Jabal Al Qurain Avenue',
		image: jaqa,
		category: 'hospitality & destinations',
		description:
			'Appointed by Diriyah Company, Maison Pyramide shaped the retail strategy and development of Jabal Al Qurain Avenue, a landmark cultural district in Diriyah. Across more than 79 retail units, the scope encompassed brand curation and positioning, tenant and merchandising mix, leasing and strategic partnerships rooted in Saudi excellence, Arab heritage and global cultural exchange.',
		services: [
			'Retail & Destination Development',
			'Brand Curation & Positioning',
			'Leasing & Partnerships'
		]
	},
	{
		id: 8,
		name: 'Mall of the Emirates',
		image: moe,
		category: 'hospitality & destinations',
		description:
			'For Majid Al Futtaim’s Mall of the Emirates, Maison Pyramide created an elevated fashion showcase combining runway, music and immersive scenography. The activation engaged media, VIPs and shoppers while transforming the Dubai retail destination into a contemporary fashion stage.',
		services: ['Events & Experiential']
	},
	{
		id: 10,
		name: 'Hia Hub',
		image: hiaHub,
		category: 'arts & culture',
		description:
			'Across four consecutive years, Maison Pyramide partnered with SRMG on Hia Hub, covering creative concept, production, programming, guest experience and VIP curation. The 2024 edition brought together 117 speakers and talents alongside masterclasses, workshops, talks and panel discussions over five days.',
		services: [
			'Events & Experiential',
			'Talent Management',
			'Programming & Partnerships',
			'Guest List Management'
		]
	},
	{
		id: 11,
		name: 'SODIC',
		image: sodic,
		category: 'hospitality & destinations',
		description:
			'Maison Pyramide’s work with SODIC has included regional communications strategy, media relations and press office management. The mandate supports consistent visibility and reinforces the real estate developer’s premium positioning across Egypt and the wider region.',
		services: ['Public Relations', 'Communications', 'Media Relations', 'Press Office']
	},
	{
		id: 12,
		name: 'Soma Bay',
		image: somaBay,
		category: 'hospitality & destinations',
		description:
			'Maison Pyramide’s work with Soma Bay has encompassed regional and international communications, media relations and hosted press visits. Curated talent and influencer stays generated authentic coverage and supported the Egyptian Red Sea destination’s positioning in lifestyle, hospitality and leisure.',
		services: [
			'Public Relations',
			'Communications',
			'Media Relations',
			'Press Office',
			'Influencer Marketing'
		]
	},
	{
		id: 13,
		name: 'TAIBA',
		image: taiba,
		category: 'hospitality & destinations',
		description:
			'Maison Pyramide’s work with TAIBA encompassed social media strategy and management across LinkedIn, Instagram and X, including content planning, copywriting, production and paid media. The engagement supported TAIBA’s digital communications and positioning as a leading hospitality owner and operator in Saudi Arabia.',
		services: ['Digital Strategy', 'Paid Media', 'Content & Social Media', 'Content Production']
	},
	{
		id: 14,
		name: 'Nobu',
		image: nobu,
		category: 'hospitality & destinations',
		description:
			'For Nobu’s market entry into Egypt, Maison Pyramide developed the communications, media and talent strategy surrounding its North Coast debut. A curated retreat at Nobu Hotel Ibiza Bay introduced regional tastemakers to the brand and generated premium local, regional and international coverage.',
		services: [
			'Events & Experiential',
			'Public Relations',
			'Communications',
			'Influencer Marketing'
		]
	},
	{
		id: 15,
		name: 'One&Only',
		image: oneAndOnly,
		category: 'hospitality & destinations',
		description:
			'For the opening of One&Only One Za’abeel, Maison Pyramide produced an exclusive private dinner across two locations. The experience introduced the Dubai luxury hotel to selected guests through an intimate expression of the One&Only brand.',
		services: ['Events & Experiential']
	},
	{
		id: 16,
		name: 'El Gouna Film Festival',
		image: gff,
		category: 'arts & culture',
		description:
			'For the eighth El Gouna Film Festival, Maison Pyramide served as regional PR partner, leading international and regional communications, media strategy, talent relations and on-ground press operations. The work strengthened the festival’s global profile and positioned El Gouna as a leading cultural destination in Egypt.',
		services: [
			'Public Relations & Communications',
			'Media Relations & Press Office',
			'Influencer & Celebrity Relations'
		]
	},
	{
		id: 17,
		name: 'Noor Riyadh',
		image: noorRiyadh,
		category: 'arts & culture',
		description:
			'For Noor Riyadh, Maison Pyramide managed regional and international media engagement from outreach, invitations and guest-list coordination through on-ground hosting, accreditation, scheduling and press operations. The integrated media program supported coverage of Saudi Arabia’s annual citywide light art festival.',
		services: [
			'Public Relations',
			'Communications',
			'Media Relations',
			'Press Office',
			'Guest List Management'
		]
	},
	{
		id: 18,
		name: 'Layali Diriyah',
		image: layaliDiriyah,
		category: 'hospitality & destinations',
		description:
			'For Layali Diriyah, Maison Pyramide was commissioned by Sela to lead end-to-end creative direction, concept development and guest experience design. The scope included six bespoke restaurant concepts, two cafés, visitor-flow planning, ambient lighting and immersive activations across the Diriyah destination.',
		services: ['Events & Experiential', 'Creative & Design', 'Guest Experience Design']
	},
	{
		id: 19,
		name: 'Future Creative Residence',
		image: fcr,
		category: 'arts & culture',
		description:
			'For the Saudi Fashion Commission, Maison Pyramide conceptualized, designed and oversaw the build and launch of Future Creative Residence at JAX District in Riyadh. The wider scope covered venue operations, cultural programming and communications, establishing a permanent destination for Saudi Arabia’s creative community.',
		services: [
			'Creative & Design',
			'Event Production & Operations',
			'Cultural Programming',
			'Public Relations',
			'Communications'
		]
	},
	{
		id: 20,
		name: 'Cairo Design Week',
		image: cdw,
		category: 'arts & culture',
		description:
			'For Cairo Design Week, Maison Pyramide curated the Fashion Design District at Villa Magenta, presenting work from regional and international brands. As regional press office partner, the team also led media relations and secured coverage across key publications.',
		services: [
			'Public Relations',
			'Communications',
			'Media Relations',
			'Press Office',
			'Cultural Programming'
		]
	},
	{
		id: 21,
		name: 'Saudi 100 Brands',
		image: s100,
		category: 'luxury & fashion',
		description:
			'Maison Pyramide’s multi-season work on Saudi 100 Brands, the Saudi Fashion Commission’s flagship brand development program, has supported Saudi fashion brands through strategy, mentorship, retail and wholesale development, international market access, programming, PR and marketing. Global partnerships, retail activations and Fashion Week interventions provide designers with the capabilities and exposure required for local and international growth.',
		services: [
			'Brand Strategy & Development',
			'Wholesale Development & Market Expansion',
			'Retail Activations',
			'Programming & Mentorship',
			'Public Relations'
		]
	},
	{
		id: 22,
		name: 'Riyadh Fashion Week',
		image: rfw,
		category: 'luxury & fashion',
		description:
			'For the 2024 Riyadh Fashion Week, Maison Pyramide led press, showroom, sales, talent and event operations across the six-day program. The integrated scope covered media strategy, buyer invitations, guest and talent curation, brand assets and logistics, connecting Saudi designers with international media, buyers and cultural talent.',
		services: [
			'Public Relations',
			'Communications',
			'Showroom Representation & Sales',
			'Talent Management',
			'Operations'
		]
	},
	{
		id: 23,
		name: 'Mercedes-Benz Fashion Week Madrid',
		image: mbfw,
		category: 'luxury & fashion',
		description:
			'Maison Pyramide and MP Showroom’s work with Mercedes-Benz Fashion Week Madrid has connected Spanish designers with buyers, editors and industry leaders across MEA, Europe and the UK. The MP Showroom Prize provides selected designers with Paris market access, PR visibility and strategic guidance across commercial potential, creative identity and responsible design.',
		services: [
			'Brand Strategy & Development',
			'Showroom Representation & Sales',
			'Buyer & Editor Relations',
			'Guest List Management'
		]
	},
	{
		id: 24,
		name: 'Gucci x Assouline',
		image: gucciXAssouline,
		category: 'luxury & fashion',
		description:
			'For the regional launch of Gucci x Assouline’s Art of Silk, Maison Pyramide hosted an intimate dinner at Bujairi Terrace in Riyadh. The experience brought together voices from fashion, culture and publishing through thoughtful design and storytelling rooted in Diriyah’s heritage.',
		services: ['Events & Experiential']
	},
	{
		id: 25,
		name: 'The 1001 Seasons of ELIE SAAB',
		image: elieSaab,
		category: 'luxury & fashion',
		description:
			'For ELIE SAAB’s 45-year celebration at Riyadh Season, Maison Pyramide led regional PR, media planning, guest-list management and content development. The campaign generated more than 1,000 articles, 34 million impressions and over 75 original content assets.',
		services: [
			'Public Relations',
			'Communications',
			'Content & Social Media',
			'Guest List Management'
		]
	},
	{
		id: 26,
		name: 'Fashion Trust Arabia',
		image: fta,
		category: 'luxury & fashion',
		description:
			'Across four consecutive years, MP Showroom served as Fashion Trust Arabia’s official showroom and prize partner. Award-winning MENA designers received digital and physical showroom representation, wholesale development and PR consultancy, connecting regional talent with international buyers, media and market opportunities.',
		services: [
			'Brand Strategy & Development',
			'Showroom Representation & Sales',
			'Wholesale Development & Market Expansion',
			'Public Relations'
		]
	},
	{
		id: 27,
		name: 'PUMA',
		image: puma,
		category: 'luxury & fashion',
		description:
			'For PUMA’s Speedcat launch in Egypt, Maison Pyramide created an immersive event and content campaign inspired by the journey from the ancient goddess Bastet to the modern Speedcat. A CGI teaser and three-screen reveal brought the story to life, supported by media outreach, influencer seeding and guest-list management.',
		services: [
			'Events & Experiential',
			'Public Relations',
			'Communications',
			'Guest List Management',
			'Content Production',
			'Influencer Marketing'
		]
	},
	{
		id: 28,
		name: 'adidas',
		image: addidas,
		category: 'luxury & fashion',
		description:
			'For adidas’ ‘You Got This’ World Cup campaign, Maison Pyramide brought the story to life in Cairo through a 13-metre mural celebrating Mohamed Salah. The project covered design, artist curation, execution and documentary content, transforming District 5 into a public extension of the campaign.',
		services: ['Events & Experiential', 'Public Relations', 'Communications', 'Content Production']
	},
	{
		id: 29,
		name: 'Stella McCartney x H&M',
		image: stella,
		category: 'luxury & fashion',
		description:
			'For the Stella McCartney x H&M collection launch in Riyadh and Dubai, Maison Pyramide produced exclusive events for influencers and cultural tastemakers. Immersive retail design, branded installations and interactive content brought the collaboration’s creative identity to life.',
		services: [
			'Events & Experiential',
			'Public Relations',
			'Communications',
			'Guest List Management',
			'Influencer Marketing'
		]
	},
	{
		id: 30,
		name: 'Bottega Veneta',
		image: bottegaVeneta,
		category: 'luxury & fashion',
		description:
			'Ego & East secured Zeyne’s performance at Bottega Veneta’s Waves event in Dubai, connecting regional musical talent with the Italian luxury house through a culturally relevant brand collaboration.',
		services: ['Talent Management', 'Brand Partnerships']
	},
	{
		id: 31,
		name: 'Infiniti',
		image: infiniti,
		category: 'arts & culture',
		description:
			'Ego & East led the talent partnership behind Saudi film producer and entrepreneur Mohammed Al Turki’s appointment as INFINITI Middle East’s first regional Chief Luxury Ambassador, bringing regional cultural influence to the luxury automotive brand.',
		services: ['Talent Management', 'Brand Partnerships']
	},
	{
		id: 32,
		name: 'Breitling',
		image: breitling,
		category: 'luxury & fashion',
		description:
			'For the opening of Breitling Kitchen in Riyadh, Maison Pyramide produced an intimate launch for the brand’s community, media and influencers. Hospitality, live music and a bespoke illustration activation created an engaging expression of Breitling’s identity.',
		services: ['Events & Experiential', 'Influencer Marketing']
	},
	{
		id: 33,
		name: 'Boucheron',
		image: boucheron,
		category: 'luxury & fashion',
		description:
			'Maison Pyramide crafted an intimate evening for Boucheron’s VIP clients in Kuwait. A seaside setting, candlelit design and considered guest experience strengthened the luxury house’s regional presence.',
		services: ['Events & Experiential', 'Guest List Management']
	},
	{
		id: 34,
		name: 'Whoop',
		image: whoop,
		category: 'beauty & wellness',
		description:
			'Ego & East managed the annual brand ambassadorship between WHOOP and Karen Wazen, overseeing talent relations, partnership coordination and supporting social media content. The collaboration connected the performance and wellness brand with regional audiences through authentic, lifestyle-led storytelling aligned with both WHOOP’s positioning and Karen’s personal platform.',
		services: ['Talent Management', 'Brand Partnerships']
	},
	{
		id: 35,
		name: 'Serge Lutens',
		image: serge,
		category: 'beauty & wellness',
		description:
			'Across several collaborations over the years, Maison Pyramide has created events for Serge Lutens that translate the fragrance house’s distinctive artistic universe into immersive brand experiences. The work has include creative concept development, event production, spatial storytelling and guest-list management, bringing each occasion to life for regional audiences.',
		services: [
			'Events & Experiential',
			'Public Relations & Communications',
			'Guest List Management'
		]
	},
	{
		id: 36,
		name: 'Cadillac',
		image: cadillac,
		category: 'arts & culture',
		description:
			'For Cadillac’s market entry in Egypt, Maison Pyramide developed the PR and communications strategy in partnership with Mansour Automotive. The scope covered media relations, guest-list management and talent management, supporting Cadillac’s positioning as a leading luxury automotive brand.',
		services: ['Public Relations', 'Media Relations', 'Guest List Management', 'Talent Management']
	},
	{
		id: 37,
		name: 'Prada',
		image: prada,
		category: 'luxury & fashion',
		description:
			'Ego & East brought together Prada and regional talents Shargeeya, Nathalie Fanj and Laila Abdallah for a campaign showcasing the Prada Fall/Winter 2026 Carry Bag. The collaboration combined talent management and brand partnership coordination to connect the luxury fashion house with influential regional audiences.',
		services: ['Talent Management', 'Brand Partnerships', 'Campaign Coordination']
	},
	{
		id: 38,
		name: 'VIA Riyadh',
		image: via,
		category: 'hospitality & destinations',
		description:
			'Maison Pyramide’s longstanding work with VIA Riyadh encompassed integrated marketing and a multi-channel digital strategy for the Saudi luxury retail destination. The approach evolved alongside the brand’s growth, supporting its digital presence and audience engagement.',
		services: ['Integrated Marketing', 'Digital Strategy', 'Paid Media', 'Content & Social Media']
	},
	{
		id: 39,
		name: 'YSL Beauty',
		image: ysl,
		category: 'beauty & wellness',
		description:
			'As part of Maison Pyramide’s wider work with L’Oréal Group, the YSL Beauty scope has spanned public relations, integrated marketing, campaign content, social media design, e-commerce creative and brand experiences. The North Coast launch of Libre L’Eau Nue at MyŌtel combined communications strategy, targeted seeding, talent and VIP relations, press outreach, guest management and on-ground media execution.',
		services: [
			'Public Relations',
			'Communications',
			'Content & Social Media',
			'Events & Experiential',
			'Influencer Marketing'
		]
	},
	{
		id: 40,
		name: 'Armani Beauty',
		image: armani,
		category: 'beauty & wellness',
		description:
			'As part of Maison Pyramide’s wider work with L’Oréal Group, the Armani Beauty scope has encompassed marketing strategy, public relations, social media, e-commerce creative and brand experiences. Event work has covered concept development, venue scouting, entertainment, influencer relations and guest-list management.',
		services: [
			'Public Relations',
			'Communications',
			'Content & Social Media',
			'Events & Experiential',
			'Influencer Marketing'
		]
	},
	{
		id: 41,
		name: 'Lancôme',
		image: lancom,
		category: 'beauty & wellness',
		description:
			'As part of Maison Pyramide’s wider work with L’Oréal Group, the Lancôme scope has combined integrated marketing, public relations, content, social media and e-commerce creative. Brand experiences have extended from concept development and venue selection to guest-list management and visual content moments.',
		services: [
			'Public Relations',
			'Communications',
			'Content & Social Media',
			'Events & Experiential',
			'Influencer Marketing'
		]
	},
	{
		id: 42,
		name: 'Jamalouki',
		image: jamalouki,
		category: 'arts & culture',
		description:
			'To mark Jamalouki’s 40th anniversary, Maison Pyramide reimagined the regional fashion and lifestyle publication’s visual identity across print and digital. The new logo, typography, visual system and social media templates created a bold, flexible editorial language that honors the title’s legacy while expressing its evolution.',
		services: ['Brand Identity', 'Creative & Design', 'Content & Social Media']
	},
	{
		id: 43,
		name: 'Azza Fahmy',
		image: azza,
		category: 'luxury & fashion',
		description:
			'Maison Pyramide’s work with Azza Fahmy in Saudi Arabia has encompassed media relations, press dispatches, celebrity and influencer dressing, and boutique visits across the Kingdom and wider region. Strategic outreach and on-ground coordination support the jewellery house’s regional and international visibility.',
		services: [
			'Public Relations',
			'Communications',
			'Media Relations',
			'Press Office',
			'Influencer & Celebrity Relations'
		]
	},
	{
		id: 44,
		name: 'Nars',
		image: nars,
		category: 'beauty & wellness',
		description:
			'For NARS, Maison Pyramide created an immersive daytime beauty launch centered on product discovery, education and hands-on engagement. Editorial activations, content moments, a live makeup artist masterclass and curated hospitality provided influencers with an elevated brand experience.',
		services: ['Events & Experiential', 'Content Production']
	},
	{
		id: 4,
		name: 'Kérastase',
		image: kerastase,
		category: 'beauty & wellness',
		description:
			'As part of Maison Pyramide’s wider work with L’Oréal Group, the Kérastase scope included an intimate Cairo launch dinner at an iconic historic venue. Creative development, event planning and full production were complemented by guest-list management for Kérastase activations at El Gouna Film Festival.',
		services: ['Events & Experiential', 'Creative & Design', 'Guest List Management']
	}
];

export default caseStudies;
