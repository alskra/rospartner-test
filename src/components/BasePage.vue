<template lang="pug">
</template>

<script>
	export default {
		name: 'BasePage',
	}
</script>

<style lang="scss">
	:root {
		--base-page-background-color: #ffffff;
	}

	.base-page {
		@include reset;

		min-width: 960px;

		&__body {
			@include reset;

			background-color: var(--base-page-background-color);
		}
	}
</style>
