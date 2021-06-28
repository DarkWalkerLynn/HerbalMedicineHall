<script>
	export default {
		globalData:{
			isSigned:false,
			nickname:'',
			registUser:{
				"user" : {
				"name" : "test",
				"password" : "password5",
				"id": 5
				},
				"itemName":"user5"
			},
			requestId:"http://127.0.0.1:8081/id",
			requestPhoneNumber:"http://127.0.0.1:8081/phoneNumber",
			requestAddUser:"http://127.0.0.1:8081/addUser"
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
