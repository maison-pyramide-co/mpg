<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		header,
		children,
		open,
		toggle
	}: {
		header: Snippet;
		children: Snippet;
		open: boolean;
		toggle: () => void;
	} = $props();

	let contentEl: HTMLDivElement;
	let contentHeight = $derived(open ? (contentEl?.offsetHeight ?? 0) : 0);
</script>

<div class="acc" class:active={open}>
	<button type="button" onclick={toggle}>
		{@render header()}
	</button>

	<div class="acc_b_" style="height: {contentHeight}px;">
		<div class="acc_b" bind:this={contentEl}>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.acc:global(.active) span {
		transform: rotate(45deg);
		transition: all 0.2s ease-out;
	}
	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 20rem;
		font-size: 24rem;
		font-weight: 600;
		position: relative;
	}
	.acc_b_ {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}
</style>
