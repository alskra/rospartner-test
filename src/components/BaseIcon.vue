<template lang="pug">
	svg.base-icon(
		xmlns="http://www.w3.org/2000/svg"
		:class="`base-icon--${name}`"
		:width="width"
		:height="height"
		:viewBox="icons[name].viewBox"
		v-html="icons[name].content"
		:aria-labelledby="`${name} icon`"
		role="presentation"
		:fill="color"
	)
</template>

<script>
	export default {
		name: 'BaseIcon',
		props: {
			name: {
				type: String,
				default: 'base',
			},
			width: {
				type: [Number, String],
				default: '1.5rem',
			},
			height: {
				type: [Number, String],
				default: '1.5rem',
			},
			color: {
				type: String,
				default: 'currentColor',
			},
		},
		data() {
			return {
				icons: {
					base: {
						viewBox: '0 0 24 24',
						content: '',
					},
					warning: {
						viewBox: '0 0 24 24',
						content: '<path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>',
					},
					'file_copy-outline': {
						viewBox: '0 0 24 24',
						content: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"/>',
					},
					'check_box_outline_blank': {
						viewBox: '0 0 24 24',
						content: '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/>',
					},
					'check_box': {
						viewBox: '0 0 24 24',
						content: '<path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
					},
				},
			};
		},
	}
</script>

<style lang="scss">
	.base-icon {
		* {
			pointer-events: none;
		}
	}
</style>
