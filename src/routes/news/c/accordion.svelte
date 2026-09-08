<script lang="ts">
	const { children, date } = $props();
	let open = $state(false);
	let contentEl: any;
	let contentHeight = $derived(open ? contentEl.offsetHeight : 0);
	const togle = () => {
		open = !open;
	};
</script>

<div class="acc" class:active={open}>
	<div class="acc_h">
		<span>{date}</span>
		<button type="button" onclick={togle}>
			{open ? '-' : 'READ FULL ARTICLE'}
		</button>
	</div>

	<div class="acc_b_" style="height: {contentHeight + 'px'}; ">
		<div class="acc_b" bind:this={contentEl}>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.acc_h {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	span {
		display: block;
		font-size: 16rem;
		text-transform: uppercase;
	}
	button {
		padding: 6rem 18rem;
		border: 1px solid black;
		border-radius: 100rem;
		font-size: 14rem;
	}
	.acc_b_ {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}
</style>
