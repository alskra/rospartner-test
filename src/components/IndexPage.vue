<script>
	import PageSection from './PageSection';
	import FormExample from './FormExample';

	export default {
		name: 'IndexPage',
		components: {
			PageSection,
			FormExample,
		},
	}
</script>

<style lang="scss">
	:root {
	}
</style>

<style lang="scss" scoped>
	.index-page {
		@include reset;

		min-height: 100vh;
		background-color: #606060;
	}

	.container {
		margin: 0 auto;
		padding: 48px 36px;
		max-width: 1152px;
		min-height: 100vh;
		box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.5);
		background-color: #ffffff;
	}

	.page-section {
		&:not(:last-child) {
			margin-bottom: 3rem;
		}
	}

	.form-example {
		&:not(:last-child) {
			margin-bottom: 6rem;
		}
	}
</style>
