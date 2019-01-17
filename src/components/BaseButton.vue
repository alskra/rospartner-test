<script>
	export default {
		name: 'BaseButton',
	}
</script>

<style lang="scss">
	:root {
		--base-button-transition: 0.15s ease-in-out;
	}
</style>

<style lang="scss" scoped>
	.base-button {
		@include reset;

		display: inline-block;
		vertical-align: top;
		padding: (40px - 16px * 1.25) / 2 16px;
		border-radius: 4px;
		min-width: 120px;
		max-width: 100%;
		font-size: 16px;
		line-height: 1.25;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: var(--base-button-transition);
		transition-property: color,
		background-color,
		border-color,
		box-shadow;

		&:not(:disabled) {
			cursor: pointer;
		}

		&--default {
			color: #282828;
			box-shadow: inset 100vw 0 rgba(#000000, 0);
			background-color: #e5e9ef;

			&:not(:disabled) {
				&:hover {
					box-shadow: inset 100vw 0 rgba(#000000, 0.1);
					background-color: #d9dde3;
				}

				&:focus {
					box-shadow: inset 100vw 0 rgba(#000000, 0.1),
					0 0 0 3px rgba(229, 233, 239, 0.5);
					background-color: #d9dde3;
				}

				&:focus-visible {
					outline: none;
				}
			}
		}

		&--primary {
			position: relative;
			z-index: 1;
			color: #ffffff;
			font-weight: 500;
			box-shadow: inset 100vw 0 rgba(#000000, 0);
			background-image: linear-gradient(45deg, #00a1f9 0%, #008dfe 100%),
			linear-gradient(to top, #000000 0%, #ffffff 100%);

			&:not(:disabled) {
				&:hover {
					box-shadow: inset 100vw 0 rgba(#000000, 0.1);
				}

				&:focus {
					box-shadow: inset 100vw 0 rgba(#000000, 0.1),
					0 0 0 3px rgba(70, 162, 252, 0.5);
				}

				&:focus-visible {
					outline: none;
				}
			}
		}

		&--small {
			padding: (36px - 13px * 1.25) / 2 16px;
			font-size: 13px;
		}
	}
</style>
