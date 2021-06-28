<template>
	<view>
		<view>
			<u-field v-model="account" :field-style="fieldStyle" label="账号" placeholder="请输入账号" required :error-message="accountErrorMessage"></u-field>
			<u-field v-model="nickname" :field-style="fieldStyle" label="昵称" placeholder="请输入昵称" :error-message="nicknameErrorMessage"></u-field>
			<u-field v-model="password" :field-style="fieldStyle" label="密码" placeholder="请输入密码" required :error-message="passwordErrorMessage" :password="isPassword"></u-field>
			<u-field v-model="passwordRepeat" :field-style="fieldStyle" label="确认密码" placeholder="请再次输入密码" required :error-message="passwordRepeatErrorMessage" :password="isPassword"></u-field>
			<u-field v-model="phoneNumber" :field-style="fieldStyle" label="手机号" placeholder="请填写手机号" required :error-message="phoneNumberErrorMessage"></u-field>
			<u-field v-model="code" :field-style="fieldStyle2" label="验证码" placeholder="请填写验证码" required :error-message="codeErrorMessage">
				<u-button size="mini" slot="right" @click="getCode">{{codeText}}</u-button>
			</u-field>
			<u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
		</view>
		<view class="center-column">
			<u-button style="background-color: rgba(67,103,42,0.6);width: 95%;" type="primary" :ripple="true" @click="show_modal">确认注册</u-button>
		</view>
		<view class="flex-row top">
			<view class="line center" @click="login_verification">验证码登录</view>
			<view class="line">|</view>
			<view class="line center" @click="login_password">密码登录</view>
		</view>
		<u-modal v-model="show" :content="content" :mask-close-able="true" :show-cancel-button="showCancelButton" @confirm="regist"></u-modal>
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
				accountErrorMessage:'',
				nickname:'',
				nicknameErrorMessage:'',
				password:'',
				passwordErrorMessage:'',
				passwordRepeat:'',
				passwordRepeatErrorMessage:'',
				phoneNumber: '',
				code: '',
				phoneNumberErrorMessage: '',
				codeErrorMessage:'',
				codeText:'发送验证码',
				fieldStyle:{"width":"500rpx"},
				fieldStyle2:{"width":"380rpx"},
				show: false,
				content:"确认注册吗？",
				showCancelButton:true,
				isPassword:true
			}
		},
		methods: {
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
			login_verification:function(e){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/me/login_verification'
				})
			},
			login_password:function(e){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/me/login_password'
				})
			},
			show_modal:function(){
				let f=true;
				if(this.account==''){
					this.accountErrorMessage="账号未填写！";
					f=false;
				}else{
					this.accountErrorMessage='';
				}
				if(this.password==''){
					this.passwordErrorMessage="密码不能为空！";
					f=false;
				}else{
					this.passwordErrorMessage='';
					if(this.passwordRepeat==''){
						this.passwordRepeatErrorMessage="确认密码未填写！"
						f=false;
					}else{
						if(this.password!=this.passwordRepeat){
							this.passwordRepeatErrorMessage="密码不一致！";
							f=false;
						}else{
							this.passwordRepeatErrorMessage='';
						}
					}
				}
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
					this.show=true;
				}
			},
			regist:function(){
				// this.accountErrorMessage=this.account==''?'账号未填写！':'';
				// userInfoSQL();
				// acupointInfoSQL();
				// chineseMedicineInfoSQL();
				// prescriptionInfoSQL();
				// addUserInformation({"phoneNumber":"13656644654","id":"1","nickname":"林空","password":"123456"});
				openSqlite();
				let p=selectInformationType("userInfo","password","123456");
				p.then(function(data){
					for(var i in data){
						console.log(JSON.stringify(data[i]));
					}
				});
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
