<template>
	<view class="content">
		<view style="margin-top: 30rpx;">
			<u-field v-model="phoneNumber" :field-style="fieldStyle" label="手机号" placeholder="请填写手机号" :error-message="phoneNumberErrorMessage"></u-field>
			<!-- <u-field v-model="mobile" label="手机号" placeholder="请填写手机号"></u-field> -->
			<u-field v-model="code" :field-style="fieldStyle2" label="验证码" placeholder="请填写验证码" :error-message="codeErrorMessage">
				<u-button size="mini" slot="right" @click="getCode">{{codeText}}</u-button>
			</u-field>
			<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
			<view class="center-column">
				<u-button style="background-color: rgba(67,103,42,0.6);width: 95%;" type="primary" :ripple="true" @click="login">验证登录</u-button>
			</view>
		</view>
		<view class="flex-row top">
			<view class="line center" @click="login_password">密码登录</view>
			<view class="line">|</view>
			<view class="line center" @click="regist">注册账号</view>
		</view>
		<u-modal v-model="show" :content="content" :mask-close-able="true"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {openSqlite,userInfoSQL,acupointInfoSQL,chineseMedicineInfoSQL,prescriptionInfoSQL,addUserInformation,selectInformationType} from "../../data/sql.js"
	export default {
		data() {
			return {
				phoneNumber: '',
				code: '',
				phoneNumberErrorMessage: '',
				codeErrorMessage:'',
				codeText:'发送验证码',
				customStyle:{color:'rgba(67,103,42,0.6)',borderColor:'rgba(67,103,42,0.6)'},
				fieldStyle:{"width":"500rpx"},
				fieldStyle2:{"width":"380rpx"},
				show:false,
				content:"手机号未注册！"
			}
		},
		methods: {
			login_password:function(e){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/me/login_password'
				})
			},
			codeChange:function(text){
				this.codeText = text;
			},
			getCode:function(){
				if(this.phoneNumber==''){
					this.phoneNumberErrorMessage="手机号未填写！";
				}else{
					this.phoneNumberErrorMessage='';
					if(this.$refs.uCode.canGetCode) {
						// 模拟向后端请求验证码
						uni.showLoading({
							title: '正在获取验证码'
						})
						setTimeout(() => {
							uni.hideLoading();
							// 通知验证码组件内部开始倒计时
							this.$refs.uCode.start();
						}, 1000);
					}else {
						this.$u.toast('倒计时结束后再发送');
					}
				}
			},
			regist:function(e){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/me/regist'
				})
			},
			login:function(e){
				let f=true;
				if(this.phoneNumber==''){
					this.phoneNumberErrorMessage="手机号未填写！";
					f=false;
				}else{
					this.phoneNumberErrorMessage='';
				}
				if(this.code==''){
					this.codeErrorMessage="验证码未填写！";
					f-=false;
				}else if(this.code!='7777'){
					this.codeErrorMessage="验证码不正确！";
				}else{
					this.codeErrorMessage='';
				}
				
				if(f){
					// let _this=this;
					// openSqlite();
					// let p=selectInformationType("userInfo","phoneNumber",this.phoneNumber);
					// p.then(function(data){
					// 	// for(var i in data){
					// 	// 	console.log(JSON.stringify(data[i]));
					// 	// }
					// 	console.log(data.length);
					// 	if(data.length==0){
					// 		_this.show=true;
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
						url:getApp().globalData.requestPhoneNumber+_this.phoneNumber,
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
	}
</script>

<style>
.center{
	margin:0 auto;
	text-align: center;
}
</style>
