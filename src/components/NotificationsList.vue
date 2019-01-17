<script>
	import FormCheckbox from './FormCheckbox';

	export default {
		name: 'NotificationsList',
		components: {
			FormCheckbox,
		}
	}
</script>

<style lang="scss" scoped>
	.notifications-list {
		@include reset;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin: -16px;
	}

	.col {
		flex-shrink: 0;
		padding: 16px;
		width: 25%;
		min-width: 0;
		max-width: 100%;
	}

	.notification {
		display: flex;
		flex-flow: column;
		margin-top: 25px;
		min-height: calc(100% - 25px);

		&__head {
			display: flex;
			flex-flow: column;
			height: 64px;
			box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.09);
			border: 8px solid #fcfcfc;
			background-color: #ffffff;
		}

		&__icon {
			position: relative;
			margin: -33px auto 5px;
			border-radius: 50%;
			width: 54px;
			height: 54px;
			background-color: #f4f4f4;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				border-radius: inherit;
				background: no-repeat 50% 50% / contain;
				filter: grayscale(1);
				opacity: 0.5;
			}

			&--telegram {
				&::before {
					background-image: image-set(
						url("../assets/img/icons/png/telegram.png") 1x,
						url("../assets/img/icons/png/telegram@2x.png") 2x,
						url("../assets/img/icons/png/telegram@3x.png") 3x
					);
				}
			}

			&--icq {
				&::before {
					background-image: image-set(
						url("../assets/img/icons/png/icq.png") 1x,
						url("../assets/img/icons/png/icq@2x.png") 2x,
						url("../assets/img/icons/png/icq@3x.png") 3x
					);
				}
			}

			&--skype {
				&::before {
					background-image: image-set(
						url("../assets/img/icons/png/skype.png") 1x,
						url("../assets/img/icons/png/skype@2x.png") 2x,
						url("../assets/img/icons/png/skype@3x.png") 3x
					);
					background-size: 39px;
				}
			}

			&--slack {
				&::before {
					background-image: image-set(url("../assets/img/icons/png/slack.png") 1x);
				}
			}
		}

		&__title {
			@include reset;

			padding-right: 15px;
			color: #2c2c2c;
			font-size: 14px;
			line-height: 1.25;
			font-weight: 500;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

			&::before {
				content: "";
				margin-top: -1px;
				margin-right: 2px;
				display: inline-block;
				vertical-align: middle;
				width: 13px;
				height: 13px;
				border: 2px solid #ffffff;
				border-radius: 50%;
				background-color: #26a69a;
				visibility: hidden;
			}
		}

		&__body {
			display: flex;
			flex-flow: column;
			flex-grow: 1;
			padding: 24px;
			border-radius: 0 0 4px 4px;
			background-color: rgba(#eaeaee, 0.5);
		}

		&__actions {
			@include reset;

			list-style: decimal inside;
			counter-reset: actions;
		}

		&__action-item {
			display: flex;
			align-items: center;
			color: #2c2c2c;
			font-size: 13px;
			line-height: 1.25;
			font-weight: 400;
			counter-increment: actions;

			&:not(:last-child) {
				margin-bottom: 14px;
			}
		}

		&__action-label {
			flex-grow: 1;
			min-width: 0;
			max-width: 100%;

			&::before {
				content: counter(actions)". ";
			}
		}

		&__action-btn {
			@include reset;

			margin-left: 10px;
			flex-shrink: 0;
			min-width: 0;
			max-width: 100%;
			color: rgba(#687189, 0.5);
			cursor: pointer;
			transition: color 0.15s ease-in-out;

			/deep/ .base-icon {
				display: block;
				width: 19px;
				height: 19px;
			}

			&:hover {
				color: rgba(#687189, 1);
			}
		}

		&__button {
			width: 100%;

			&:not(:last-child) {
				margin-bottom: 16px;
			}
		}

		&__checkbox {
			margin: 0 auto;
		}

		&--active {
			.notification {
				&__icon {
					&::before {
						filter: grayscale(0);
						opacity: 1;
					}
				}

				&__title {
					&::before {
						visibility: visible;
					}
				}
			}
		}
	}
</style>
