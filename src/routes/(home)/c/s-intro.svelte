<script></script>

<div class="s-intro_">
	<section class="s-intro">
		<div>
			<div class="t">MAISON PYRAMIDE GROUP</div>
			<h1>
				We bring strategy, creativity, and commercial thinking together in a culture-first
				ecosystem.
			</h1>
		</div>
		<div class="b">
			<p>
				We transform insight into stories,<br />
				stories into experiences,<br />
				and experiences into measurable value.
			</p>
			<a href="/group"> EXPLORE THE GROUP </a>
		</div>
	</section>
</div>

<style>
	.s-intro_ {
		height: 200vh;
		height: 200dvh;

		@media (width < 770px) {
			height: 100vh;
			height: 100dvh;
		}
	}
	section {
		height: 100vh;
		height: 100dvh;
		background-color: #3f4018;
		color: #f0e9cd;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	section > div:first-child {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.t {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -100%);
		font-size: 16rem;
		line-height: 1;
		top: -28rem;
		@media (width < 770px) {
			left: 0;
			right: 0;
			transform: unset;
			text-align: center;
			top: -40rem;
		}
	}
	h1 {
		width: 700rem;
		font-size: 40rem;
		font-family: 'gt';
		line-height: 100%;
		text-transform: uppercase;
		text-align: center;
		font-kerning: none;
		text-rendering: optimizeSpeed;
		@media (width < 770px) {
			font-size: 30rem;
			width: 330rem;
		}
	}
	.b {
		position: absolute;
		bottom: 96rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding-inline: 96rem 112rem;
		@media (width < 770px) {
			padding-inline: 0;
			flex-direction: column;
			align-items: center;
			gap: 32rem;
		}
	}
	.b p {
		font-size: 20rem;
		line-height: 1;
		@media (width < 770px) {
			width: 305rem;
			text-align: center;
			margin-inline: auto;
		}
	}
	.b a {
		display: block;
		padding: 12rem 48rem;
		text-transform: uppercase;
		border: 1px solid #f0e9cd;
		color: inherit;
		border-radius: 100rem;
	}
</style>
