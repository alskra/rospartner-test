<template lang="pug">
	label.form-checkbox
		input.input(
			type="checkbox"
			:name="name"
			v-model="isChecked"
		)

		span.fake-input
			base-icon(
				:name="isChecked ? 'check_box' : 'check_box_outline_blank'"
			)

		span.label(v-if="label") {{ label }}
</template>

<script>
	export default {
		name: 'FormCheckbox',
		props: {
			name: {
				type: String,
				default: null,
			},
			checked: {
				type: Boolean,
				default: false,
			},
			label: {
				type: String,
				default: null,
			},
		},
		data() {
			return {
				isChecked: this.checked,
			};
		},
	}
</script>

<style lang="scss" scoped>
	.form-checkbox {
		@include reset;

		display: inline-flex;
		align-items: flex-start;
		vertical-align: top;
		max-width: 100%;
	}

	.input {
		@include visually-hidden;

		&:not(:disabled) {
			& ~ .fake-input {
				cursor: pointer;
			}
		}

		&:checked {
			& ~ .fake-input {
				color: #008dfe;
			}
		}

		&:focus-visible {
			& ~ .fake-input {
				outline: 1px dotted currentColor;
				outline: 5px auto -webkit-focus-ring-color;
			}
		}
	}

	.fake-input {
		flex-shrink: 0;
		color: #5e5e5f;
		overflow: hidden;
		transition: color 0.15s ease-in-out;

		/deep/ .base-icon {
			display: block;
			margin: -3px;
		}
	}

	.label {
		@include reset;

		margin-top: 1px;
		margin-left: 12px;
		flex-grow: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #2c2c2c;
		font-size: 14px;
		line-height: 1.25;
		cursor: default;
	}
</style>
