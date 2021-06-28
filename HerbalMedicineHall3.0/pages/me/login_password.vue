<template>
	<view class="content">
		<view>
			<u-field v-model="account" :field-style="fieldStyle" label="账号" placeholder="请输入手机号或账号" :error-message="accountErrorMessage"></u-field>
			<u-field v-model="password" :field-style="fieldStyle" label="密码" placeholder="请输入密码" :error-message="passwordErrorMessage" :password="isPassword"></u-field>
		</view>
		<u-button style="background-color: rgba(67,103,42,0.6);width: 95%;" type="primary" :ripple="true" @click="login">登录</u-button>
		<view class="flex-row top">
			<view class="line center" @click="login_verification">验证码登录</view>
			<view class="line">|</view>
			<view class="line center" @click="regist">注册账号</view>
		</view>
		<u-modal v-model="show" :content="content" :mask-close-able="true"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import user from "../../data/user.js"
	import {openSqlite,userInfoSQL,acupointInfoSQL,chineseMedicineInfoSQL,prescriptionInfoSQL,addUserInformation,selectInformationType} from "../../data/sql.js"
	export default {
		data() {
			return {
				myUser:user,
				account:'',
				password:'',
				accountErrorMessage:'',
				passwordErrorMessage:'',
				testList:[],
				fieldStyle:{"width":"500rpx"},
				show:false,
				content:"账号不存在或密码错误！",
				isPassword:true
			}
		},
		methods: {
			login_verification:function(e){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/me/login_verification'
				})
			},
			regist:function(e){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/me/regist'
				})
			},
			login:function(e){
				let f=true;
				if(this.account==''){
					this.accountErrorMessage="账号未填写！";
					f=false;
				}else{
					this.accountErrorMessage='';
				}
				if(this.password==''){
					this.passwordErrorMessage="密码未填写！";
					f=false;
				}else{
					this.passwordErrorMessage='';
				}
				if(f){
					// openSqlite();
					// let p=selectInformationType("userInfo","id",_this.account,"password",_this.password);
					// p.then(function(data){
					// 	console.log(data.length);
					// 	if(data.length==0){
					// 		let p2=selectInformationType("userInfo","phoneNumber",_this.account,"password",_this.password);
					// 		p2.then(function(data2){
					// 			console.log(data2.length);
					// 			if(data2.length==0){
					// 				_this.show=true;
					// 			}else{
					// 				getApp().globalData.isSigned=true;
					// 				getApp().globalData.nickname=data2[0].nickname;
					// 				_this.$refs.uToast.show({
					// 					title:'登录成功！',
					// 					isTab:true,
					// 					duration:1000,
					// 					url:'/pages/me/me'
					// 				})
					// 			}
					// 		});
					// 	}else{
					// 		getApp().globalData.isSigned=true;
					// 		getApp().globalData.nickname=data[0].nickname;
					// 		_this.$refs.uToast.show({
					// 			title:'登录成功！',
					// 			isTab:true,
					// 			duration:1000,
					// 			url:'/pages/me/me'
					// 		})
					// 	}
					// });
					let _this=this;
					uni.request({
						url:getApp().globalData.requestId+_this.account,
						success(data) {
							// console.log(data[0]);
							if(data.data==0){
								_this.show=true;
							}else{
								if(data.data["password"]==_this.password){
									getApp().globalData.isSigned=true;
									getApp().globalData.nickname=data.data["name"];
									_this.$refs.uToast.show({
										title:'登录成功！',
										isTab:true,
										duration:1000,
										url:'/pages/me/me'
									})
								}else{
									// _this.show=true;
									uni.request({
										url:getApp().globalData.requestPhoneNumber+_this.account,
										success(data) {
											// console.log(data[0]);
											if(data.data==0){
												_this.show=true;
											}else{
												getApp().globalData.isSigned=true;
												getApp().globalData.nickname=data.data["name"];
												_this.$refs.uToast.show({
													title:'登录成功！',
													isTab:true,
													duration:1000,
													url:'/pages/me/me'
												})
											}
										}
									});
								}
							}
						}
					});
				}
			},
			test:function(){
				// this.myUser.user.push({"id":"2","nickname":"user1","password":"123456"});
				// console.log(this.myUser.user);
				console.log(this.testList);
			},
			getList:function(){
				uni.request({
					url:'../../data/user.json',
					success:(res)=>{
						// console.log(res.data.id);
						this.testList=res.data;
					}
				})
			}
		},
		onLoad() {
			this.getList();
		}
	}
</script>

<style>
	.float{
		float: left;
		margin-left: 10rpx;
	}
	.float_clear{
		clear: both;
	}
	.half{
		width: 40%;
	}
	.full{
		width: 100%;
	}
	.center{
		margin:0 auto;
		text-align: center;
	}
</style>
