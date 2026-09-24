<script lang="ts">
	const { title, children, toggle, open } = $props();
	let contentEl: any;
	let contentHeight = $derived(open ? contentEl.offsetHeight : 0);
</script>

<div class="acc" class:active={open}>
	<button type="button" onclick={toggle}>
		{title}
		<span>+</span>
	</button>
	<div class="acc_b_" style="height: {contentHeight + 'px'}; ">
		<div class="acc_b" bind:this={contentEl}>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.acc {
		margin-top: 24rem;
	}
	button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-transform: uppercase;
		font-size: 20rem;
		font-weight: 500;
	}
	span {
		font-weight: normal;
		transition: all 0.2s ease-out;
	}
	.acc.active button span {
		transform: rotate(45deg);
	}
	.acc_b_ {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}
	.acc_b {
		padding-top: 10rem;
	}
</style>
