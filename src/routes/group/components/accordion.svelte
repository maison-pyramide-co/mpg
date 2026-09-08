<script lang="ts">
	const { children } = $props();
	let open = $state(false);
	let contentEl: any;
	let contentHeight = $derived(open ? contentEl.offsetHeight : 0);
	const togle = () => {
		open = !open;
	};
</script>

<div class="acc" class:active={open}>
	<div class="acc_b_" style="height: {contentHeight + 'px'}; ">
		<div class="acc_b" bind:this={contentEl}>
			{@render children()}
		</div>
	</div>
	<button type="button" onclick={togle}>
		{open ? 'VIEW LESS' : 'VIEW MORE'}
	</button>
</div>

<style>
	.acc {
	}
	button {
		margin-top: 28rem;
		padding: 12rem 44rem;
		border: 1px solid black;
		border-radius: 50rem;
		text-transform: uppercase;
		font-size: 14rem;
	}
	.acc_b_ {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}
</style>
