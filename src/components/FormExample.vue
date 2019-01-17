<script>
	import FormField from './FormField';

	export default {
		name: 'FormExample',
		components: {
			FormField,
		},
	}
</script>

<style lang="scss" scoped>
	.form-example {
		@include reset;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -16px;

		&:not(:last-child) {
			margin-bottom: 27px;
		}
	}

	.col {
		flex-shrink: 0;
		padding: 0 16px;
		min-width: 0;
		max-width: 100%;

		&--size {
			&-33 {
				width: percentage(1/3);
			}

			&-100 {
				width: 100%;
			}
		}
	}

	.action-row {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -12px;

		&:not(:last-child) {
			margin-bottom: 27px;
		}
	}

	.action-col {
		flex-shrink: 0;
		padding: 0 12px;
		min-width: 0;
		max-width: 100%;
	}
</style>
