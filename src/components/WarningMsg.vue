<template lang="pug">
	.warning-msg
		.icon-col
			base-icon.icon(name="warning")

		.main-col
			strong.title Внимание!

			.content
				slot
</template>

<script>
	export default {
		name: 'WarningMsg',
	}
</script>

<style lang="scss" scoped>
	.warning-msg {
		@include reset;

		display: flex;
		padding: 1rem 0;
		border-radius: 4px;
		background-image: linear-gradient(-205deg, #ff7da7 0%, #ffa3a4 100%);
	}

	.icon-col {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		padding-right: 2px;
		width: 85px;

		&::before {
			content: "";
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			width: 2px;
			background-image: linear-gradient(to right, #000001 0%, #ffffff 50%, #ffffff 100%);
			opacity: 0.05;
		}
	}

	.icon {
		color: rgba(#ffffff, 0.37);
		width: 38px;
		height: 38px;
	}

	.main-col {
		flex-grow: 1;
		padding: 0 24px;
	}

	.title {
		@include reset;

		margin-bottom: 12px;
		text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
		color: #ffffff;
		font-size: 18px;
		line-height: 1.25;
		font-weight: 700;
	}

	.content {
		@include reset;

		text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
		color: #ffffff;
		font-size: 16px;
		line-height: 1.25;
		font-weight: 400;

		/deep/ p {
			margin-top: 0;
			margin-bottom: 1em;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
</style>
