<script>
	let { title, children, open, img, toggle, align } = $props();
</script>

<div class="acc {align}" class:active={open}>
	<button type="button" onclick={toggle}>
		<h3>{title}</h3>
		<span>+</span>
	</button>
	<div class="acc_b">
		<div class="l">
			{@render children()}
		</div>
		<div class="r">
			<img src={img} alt="" />
		</div>
	</div>
</div>

<style>
	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 20rem;
		font-size: 20rem;
		font-weight: 500;
		text-align: left;
	}
	button h3 {
		@media (width < 770px) {
			max-width: 250rem;
		}
	}
	span {
		font-weight: normal;
		transition: all 0.2s ease-out;
	}
	.acc_b {
		display: flex;
		overflow: hidden;
		align-items: flex-start;
	}
	.acc {
		transition: padding 0.8s ease-out;
	}
	.acc.left {
		padding-right: calc(116rem - var(--p-i));
	}
	.acc.right {
		padding-left: calc(116rem - var(--p-i));
	}
	.acc.active {
		padding-left: 0;
		padding-right: 0;
	}
	.acc.active .l {
		width: 286rem;
	}
	.acc img {
		width: 264rem;
		height: 320rem;
	}
	.l {
		overflow: hidden;
		flex-shrink: 0;
		width: 0;
		transition: width 0.8s ease-out;
	}
	.r {
		width: 100%;
		flex-shrink: 0;
	}
</style>
