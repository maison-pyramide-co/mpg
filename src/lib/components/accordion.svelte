<script>
	const { title, children } = $props();

	let isOpen = $state(false);
	let contentHeight = $state(0);
	let contentEl;

	const toggle = async () => {
		isOpen = !isOpen;

		if (isOpen) {
			contentHeight = contentEl.offsetHeight;
		}
	};
</script>

<div class="acc" class:active={isOpen}>
	<button type="button" onclick={toggle}>
		<h3>{title}</h3>
		<span>+</span>
	</button>

	<div class="acc_b_" style="height: {isOpen ? contentHeight + 'px' : '0px'}; ">
		<div class="acc_b" bind:this={contentEl}>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.acc {
	}
	.acc:global(.active) span {
		transform: rotate(45deg);
	}
	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 20rem;
		font-size: 24rem;
		font-weight: 600;
	}
	button span {
		transition: all 0.2s ease-out;
	}
	.acc_b_ {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}
</style>
