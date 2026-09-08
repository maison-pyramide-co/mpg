<script lang="ts">
	const { title, sTitle = null, children, open, toggle } = $props();
	let contentEl: any;
	let contentHeight = $derived(open ? contentEl.offsetHeight : 0);
</script>

<div class="acc" class:active={open}>
	<button type="button" onclick={toggle}>
		<h3>{title}</h3>
		{#if sTitle}
			<div>{sTitle}</div>
		{/if}
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
	}
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

		div {
			position: absolute;
			left: 520rem;
			top: 50%;
			transform: translateY(-50%);
			font-size: 14rem;
			font-weight: normal;
			/* opacity: 0.7; */

			@media (width < 770px) {
				display: none;
				/* position: static; */
			}
		}
		span {
			font-weight: normal;
			/* transition: all 0.2s ease-out; */
		}
	}
	.acc_b_ {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}
</style>
