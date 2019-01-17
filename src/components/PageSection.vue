<script>
	import WarningMsg from './WarningMsg';
	import NotificationsList from './NotificationsList';

	export default {
		name: 'PageSection',
		components: {
			WarningMsg,
			NotificationsList,
		},
	}
</script>

<style lang="scss" scoped>
	.page-section {
		@include reset;
	}

	.title {
		@include reset;

		margin-bottom: 1rem;
		color: #2c2c2c;
		font-size: 18px;
		line-height: 1.25;
		font-weight: 500;
	}

	.warning-msg {
		margin: 36px 0;
	}
</style>
