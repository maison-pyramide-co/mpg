<script>
	// Swap the placeholder text entries for real logo imports, e.g.:
	//   import loreal from '$lib/assets/images/logos/loreal.svg';
	//   const logos = [{ name: "L'Oréal", src: loreal }, ...];
	// Any entry without a `src` falls back to rendering its `name` as text.
	const defaultLogos = [
		{ name: "L'ORÉAL" },
		{ name: 'sela' },
		{ name: 'DIOR' },
		{ name: 'SAUDI 100 BRANDS' },
		{ name: 'MARAKEZ' },
		{ name: 'HARVEY NICHOLS' },
		{ name: 'FASHION COMMISSION' },
		{ name: 'FASHION TRUST ARABIA' },
		{ name: 'EMAAR' }
	];

	let logos = defaultLogos;
	let speed = 32; // seconds per full loop — lower is faster
	let direction = 'left'; // 'left' | 'right'
	let logoHeight = 32; // px
</script>

<div
	class="marquee"
	role="region"
	aria-label="Client logos"
	style="--marquee-duration: {speed}s; --marquee-direction: {direction === 'right'
		? 'reverse'
		: 'normal'}; --logo-height: {logoHeight}px;"
>
	<div class="track">
		<ul class="logo-set">
			{#each logos as logo}
				<li class="logo">
					{#if logo.src}
						<img src={logo.src} alt={logo.name} loading="lazy" />
					{:else}
						<span class="logo-text">{logo.name}</span>
					{/if}
				</li>
			{/each}
		</ul>
		<ul class="logo-set" aria-hidden="true">
			{#each logos as logo}
				<li class="logo">
					{#if logo.src}
						<img src={logo.src} alt="" />
					{:else}
						<span class="logo-text">{logo.name}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.marquee {
		--bg: #ffffff;
		--fg: rgba(23, 22, 19, 0.5);
		--fg-hover: #171613;

		background: var(--bg);
		overflow: hidden;
		padding: 28px 0;
		-webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
		mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
	}

	.track {
		display: flex;
		width: max-content;
		animation: marquee-scroll var(--marquee-duration, 32s) linear infinite;
		animation-direction: var(--marquee-direction, normal);
	}
	.marquee:hover .track {
		animation-play-state: paused;
	}

	.logo-set {
		display: flex;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: clamp(40px, 6vw, 88px);
		padding-inline-end: clamp(40px, 6vw, 88px);
	}

	.logo {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		height: var(--logo-height);
	}

	.logo img {
		max-height: 100%;
		width: auto;
		filter: grayscale(1);
		opacity: 0.5;
		transition:
			filter 0.25s ease,
			opacity 0.25s ease;
	}
	.logo:hover img {
		filter: grayscale(0);
		opacity: 1;
	}

	.logo-text {
		font-size: 15px;
		font-weight: 600;
		letter-spacing: 0.02em;
		white-space: nowrap;
		color: var(--fg);
		transition: color 0.25s ease;
	}
	.logo:hover .logo-text {
		color: var(--fg-hover);
	}

	@keyframes marquee-scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
		}
	}
</style>
