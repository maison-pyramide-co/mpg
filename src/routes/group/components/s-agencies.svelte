<script lang="ts">
	import agencies from '$lib/data/agencies';
	import { gsap } from 'gsap';

	function mouseEnter(e: any) {
		const agnEl = e.target;
		const titleEl = agnEl.querySelector('.agency_title h3');
		const infoEl = agnEl.querySelector('.agency_info');

		const tl = gsap.timeline({
			defaults: { duration: 0.8, ease: 'power3.inOut' }
		});

		tl.to(titleEl, {
			y: '100%',
			duration: '0.4'
		}).to(infoEl, {
			autoAlpha: 1,

			duration: '.6'
		});
	}

	function mouseLeave(e: MouseEvent) {
		const agnEl = e.currentTarget as HTMLElement;
		const titleEl = agnEl.querySelector('.agency_title h3');
		const infoEl = agnEl.querySelector('.agency_info');

		const tl = gsap.timeline({
			defaults: { ease: 'power3.inOut' }
		});

		tl.to(infoEl, {
			autoAlpha: 0,
			duration: 0.6
		}).to(titleEl, {
			y: '0%',
			duration: 0.4
		});
	}

	function agencyHover(node: HTMLElement) {
		const titleEl = node.querySelector('.agency_title h3');
		const infoEl = node.querySelector('.agency_info');

		const tl = gsap.timeline({
			paused: true,
			defaults: {
				ease: 'power3.inOut'
			}
		});

		tl.to(titleEl, {
			y: '100%',
			duration: 0.4
		}).to(
			infoEl,
			{
				autoAlpha: 1,
				duration: 0.6
			},
			'<'
		);

		const enter = () => tl.play();
		const leave = () => tl.reverse();

		node.addEventListener('mouseenter', enter);
		node.addEventListener('mouseleave', leave);

		return {
			destroy() {
				node.removeEventListener('mouseenter', enter);
				node.removeEventListener('mouseleave', leave);
				tl.kill();
			}
		};
	}

</script>

<section>

	{#each agencies as agency}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="agency" use:agencyHover>
			<figure>
				<img src={agency.cover} alt="" />
			</figure>
			<div class="agency_title">
				<h3>{agency.name}</h3>
			</div>

			<div class="agency_info">
				<h3>{agency.name}</h3>
				<p>
					Attention is earned. Impact is intentional. We create brands that turn attention into
					action, and action into growth. Every great brand starts with a story
				</p>
				<a href={agency.link} target="_blank">DISCOVER</a>
			</div>
		</div>
	{/each}

</section>

<style>
	section {
		display: flex;
		@media (width < 770px) {
			flex-direction: column;
		}
	}
	.agency {
		flex: 1;
		position: relative;
	}
	.agency figure {
		width: 100%;
		height: auto;
	}
	.agency_title {
		overflow: hidden;
		width: 100%;
		position: absolute;
		padding-inline: 24rem;
		bottom: 72rem;
		color: white;
	}
	.agency_info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		padding-inline: 80rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 32rem;
		color: white;
		background-color: rgba(0, 0, 0, 0.7);
		opacity: 0;
		visibility: hidden;
	}
	.agency_info p {
		text-align: center;
		font-size: 20rem;
		line-height: 1;
	}
	h3 {
		font-size: 20rem;
		line-height: 1;
		font-weight: 500;
		text-align: center;
	}

	a {
		position: absolute;
		bottom: 48rem;
		padding: 6rem 20rem;
		border: 1px solid white;
		border-radius: 50rem;
		font-size: 14rem;
	}
	p {
		margin-top: 40rem;
		font-size: 15rem;
		font-weight: 300;
	}
</style>
