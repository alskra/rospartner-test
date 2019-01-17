<script>
	export default {
		name: 'BaseContent',
	}
</script>

<style lang="scss">
	@custom-selector :--headings
	h1, h2, h3, h4, h5, h6,
	.h1, .h2, .h3, .h4, .h5, .h6;

	:root {
		--base-content-font-family: "Roboto", sans-serif;
		--base-content-font-weight: 400;
		--base-content-font-size: 14px;
		--base-content-line-height: 1.25;
		--base-content-color: #000000;
		--base-content-link-color: #2196f3;
		--base-content-link-hover-color: #2575d5;
		--base-content-space: 1em;

		// Headings
		--base-content-headings-font-family: "Roboto", sans-serif;
		--base-content-headings-font-weight: 500;
		--base-content-headings-font-size: 32px;
		--base-content-headings-line-height: 1.25;
		--base-content-headings-color: #2c2c2c;

		--base-content-h1-font-size: var(--base-content-headings-font-size);
		--base-content-h2-font-size: calc(28 / 32 * var(--base-content-headings-font-size));
		--base-content-h3-font-size: calc(24 / 32 * var(--base-content-headings-font-size));
		--base-content-h4-font-size: calc(18 / 32 * var(--base-content-headings-font-size));
		--base-content-h5-font-size: calc(16 / 32 * var(--base-content-headings-font-size));
		--base-content-h6-font-size: calc(14 / 32 * var(--base-content-headings-font-size));
	}

	.base-content {
		@include reset;

		font-family: var(--base-content-font-family);
		font-weight: var(--base-content-font-weight);
		font-size: var(--base-content-font-size);
		line-height: var(--base-content-line-height);
		word-wrap: break-word;
		color: var(--base-content-color);

		a {
			color: var(--base-content-link-color);
			text-decoration: underline;

			&:hover {
				color: var(--base-content-link-hover-color);
				text-decoration: none;
			}
		}

		p, blockquote {
			// page-break-inside: avoid;
		}

		p, blockquote, ul, ol, dl, table, pre {
			margin-top: 0;
			margin-bottom: var(--base-content-space);
		}

		:--headings {
			margin-top: calc(var(--base-content-space) * 1.5);
			margin-bottom: var(--base-content-space);
			font-weight: var(--base-content-headings-font-weight);
			line-height: var(--base-content-headings-line-height);
			color: var(--base-content-headings-color);
		}

		h1, .h1 {
			font-size: var(--base-content-h1-font-size);
		}

		h2, .h2 {
			font-size: var(--base-content-h2-font-size);
		}

		h3, .h3 {
			font-size: var(--base-content-h3-font-size);
		}

		h4, .h4 {
			font-size: var(--base-content-h4-font-size);
		}

		h5, .h5 {
			font-size: var(--base-content-h5-font-size);
		}

		h6, .h6 {
			font-size: var(--base-content-h6-font-size);
		}

		ul,
		ol {
			padding-left: 2.5rem;
		}

		li + li {
			margin-top: calc(var(--base-content-space) * 0.25);
		}

		ul ul,
		ul ol,
		ol ol,
		ol ul {
			margin-top: 0;
			margin-bottom: 0;
		}

		ul {
			overflow: hidden;

			> li {
				position: relative;
				list-style: none;

				&::before {
					content: '';
					display: inline-block;
					vertical-align: middle;
					margin-left: (-2.5rem / 2);
					margin-right: calc(2.5rem / 2 - 8px);
					width: 8px;
					height: 8px;
					background-color: #2a2a2a;
				}
			}
		}

		dl {
			padding: 0;

			dt {
				margin-top: var(--base-content-space);
				padding: 0;
				font-weight: 700;
				font-style: italic;
				font-size: 1em;
			}

			dd {
				margin-bottom: var(--base-content-space);
				margin-left: 0;
				padding: 0 1em;
			}
		}

		pre {
			overflow: auto;
			padding: 1em;
			font-size: 85%;
			line-height: 1.45;
			word-wrap: normal;
		}

		code {
			margin: 0;
			padding: 0.2em 0.4em;
			font-size: 85%;
		}

		img {
			vertical-align: middle;
			max-width: 100%;
		}

		b, strong {
			color: var(--base-content-headings-color);
		}

		blockquote {
			position: relative;
			margin: calc(var(--base-content-space) * 2.5) 2.5rem;
			border-left: 4px solid var(--base-content-headings-color);
			padding: 1rem 0 1rem calc(1rem + 4px);

			&::before {
				content: '“';
				position: absolute;
				top: 0;
				left: calc(-2.5rem - 4px);
				font-weight: 700;
				font-size: 72px;
				line-height: 0.86;
				color: var(--base-content-headings-color);
			}
		}

		> :first-child {
			margin-top: 0;
		}

		> :last-child {
			margin-bottom: 0;
		}

		&--invert {
			color: var(--base-page-background-color);

			:--headings {
				color: var(--base-page-background-color);
			}
		}
	}
</style>
