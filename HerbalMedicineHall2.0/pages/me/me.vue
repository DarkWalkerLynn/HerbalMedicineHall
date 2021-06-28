<template>
	<view class="content">
		<view class="block center">
			<view @click="login">
				<view style="height: 70rpx;"></view>
				<u-image class="center" width="150rpx" height="150rpx" shape="circle" :src="src"></u-image>
				<p class="login-message center">{{text}}</p>
				<view style="height: 40rpx;"></view>
			</view>
		</view>
		<u-cell-group class="center" style="width: 95%;">
			<u-cell-item 
				icon="star" 
				:icon-style="iconStyle" 
				title="我的收藏" 
				:title-style="titleStyle" 
				:arrow="false"
			></u-cell-item>
			<view class="center-column">
				<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
			</view>
			<u-cell-item 
				icon="order" 
				:icon-style="iconStyle" 
				title="用户协议" 
				:title-style="titleStyle" 
				:arrow="false"
			></u-cell-item>
			<view class="center-column">
				<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
			</view>
			<u-cell-item 
				icon="file-text" 
				:icon-style="iconStyle" 
				title="隐私政策" 
				:title-style="titleStyle" 
				:arrow="false"
			></u-cell-item>
			<view class="center-column">
				<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
			</view>
			<u-cell-item 
				icon="question-circle" 
				:icon-style="iconStyle" 
				title="帮助反馈" 
				:title-style="titleStyle" 
				:arrow="false"
			></u-cell-item>
			<view class="center-column">
				<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
			</view>
			<u-cell-item 
				icon="setting" 
				:icon-style="iconStyle" 
				title="个人设置" 
				:title-style="titleStyle" 
				:arrow="false"
			></u-cell-item>
		</u-cell-group>
		<view class="center-column top" v-if="isSigned">
			<u-button 
				style="width: 90%;" 
				:ripple="ripple" 
				:custom-style="customStyle" 
				hoverBgColor="rgba(67,103,42,0.2)" 
				@click="show_modal"
			>退出登录</u-button>
		</view>
		<u-modal 
			v-model="show" 
			:content="content" 
			:mask-close-able="true" 
			:show-cancel-button="showCancelButton"
			@confirm="unsigned"
		></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '/static/unsigned.png',
				text:'',
				isSigned:true,
				ripple:true,
				customStyle:{color:'rgba(67,103,42,0.6)',borderColor:'rgba(67,103,42,0.6)'},
				titleStyle:{'font-size':'32rpx','color':'rgba(133,141,134)','margin-left':'10rpx'},
				iconStyle:{'color':'rgba(133,141,134)','margin-left':'18rpx'},
				show:false,
				content:"确定退出吗？",
				showCancelButton:true
			}
		},
		methods: {
			login:function(e){
				if(!this.isSigned){
					// console.log(1);
					uni.navigateTo({
					    url:'/pages/me/login_verification'
					})
				}
			},
			show_modal:function(){
				this.show=true;
			},
			unsigned:function(){
				getApp().globalData.isSigned=false;
				getApp().globalData.nickname='';
				this.isSigned=false;
				this.text='点击登录或注册';
			}
		},
		onShow() {
			this.isSigned=getApp().globalData.isSigned;
			if(this.isSigned){
				this.text=getApp().globalData.nickname;
			}else{
				this.text='点击登录或注册';
			}
		}
	}
</script>

<style>
.login-message{
	font-size: 35rpx;
	font-weight: 400;
	color: rgba(133,141,134);
	margin-top: 15rpx;
}
.block{
	background-color: rgba(67,103,42,0.3);
	border-bottom-left-radius: 80rpx;
	border-bottom-right-radius: 80rpx;
	width: 90%;
}
</style>
