<template lang="pug">
	label.form-field
		input.input(
			v-if="tag === 'input'"
			:type="type"
			:placeholder="placeholder"
			v-model="value"
			:name="name"
		)

		textarea.textarea(
			v-else
			:placeholder="placeholder"
			:value="value"
			:name="name"
		)

		span.label {{ label }}
</template>

<script>
	export default {
		name: 'FormField',
		props: {
			tag: {
				type: String,
				default: 'input',
			},
			type: {
				type: String,
				default: 'text',
			},
			value: {
				type: String,
				default: '',
			},
			name: {
				type: String,
				default: null,
			},
			label: {
				type: String,
				default: 'Field label',
			},
			placeholder: {
				type: String,
				default: 'Field placeholder',
			}
		},
	}
</script>

<style lang="scss">
	:root {
		--form-field-transition: 0.15s ease-in-out;
	}
</style>

<style lang="scss" scoped>
	.form-field {
		@include reset;

		position: relative;

		&::after {
			content: "";
			position: absolute;
			right: 16px;
			bottom: 6px;
			left: 16px;
			height: 1px;
			background-color: #000000;
			opacity: 0;
			pointer-events: none;
			transition: var(--form-field-transition);
		}

		&:focus-within {
			&::after {
				opacity: 0.04;
			}

			.label {
				color: var(--base-content-link-color);
			}
		}
	}

	.label {
		@include reset;

		position: absolute;
		top: 0;
		left: 0;
		padding: 7px 16px;
		width: 100%;
		color: #27252a;
		font-size: 13px;
		line-height: 1.25;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: text;
		pointer-events: none;
		transition: var(--form-field-transition);
	}

	.input,
	.textarea {
		@include reset;

		padding: (55px - 16px * 1.25 + 21px) / 2 16px (55px - 16px * 1.25 - 21px) / 2;
		width: 100%;
		border-radius: 4px;
		color: #44414d;
		font-size: 16px;
		line-height: 1.25;
		font-weight: 500;
		background-color: #f7f7fa;
		transition: var(--form-field-transition);
		transition-property: background-color,
		box-shadow;

		&::placeholder {
			color: rgba(#27252a, 0.4);
			font-weight: 400;
			opacity: 1;
		}

		&:not(:disabled) {
			&:hover {
				background-color: #eaeaee;
			}

			&:focus-visible {
				outline: none;
				box-shadow: 0 0 0 3px rgba(70, 162, 252, 0.5);
			}
		}
	}

	.textarea {
		min-height: 100px;
		resize: vertical;
		white-space: pre-wrap;
		word-break: break-word;
	}
</style>
