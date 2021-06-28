<script>
	export default {
		globalData:{
			isSigned:false,
			nickname:'',
			
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "uview-ui/theme.scss";
	@import "data/mycss.css";
</style>
