<template>
	<view>
		<view class="my-image center">
			<u-image class="my-image" :src="img" :border-radius="borderRadius" mode="widthFix"></u-image>
		</view>
		<view class="my-title">{{acupointName}}</view>
		<view class="my-content-title">定位：</view>
		<view class="my-content">{{wei}}</view>
		<view class="my-content-title">解剖：</view>
		<view class="my-content">{{jie}}</view>
		<view class="my-content-title">主治：</view>
		<view class="my-content">{{zhi}}</view>
		<view class="my-content-title">操作：</view>
		<view class="my-content">{{cao}}</view>
		<view class="flex-row" style="margin-top: 25rpx;">
			<u-button 
				class="width-thirty" 
				@click="previous" 
				:disabled="index2==0" 
				:ripple="ripple" 
				:custom-style="customStyle" 
				hoverBgColor="rgba(67,103,42,0.2)"
			>上一穴位</u-button>
			<u-button 
				class="width-thirty" 
				@click="collection" 
				:ripple="ripple" 
				:custom-style="customStyle"
			>收藏</u-button>
			<u-button 
				class="width-thirty" 
				@click="next" 
				:disabled="index2==acupointNum-1" 
				:ripple="ripple" 
				:custom-style="customStyle" 
				hoverBgColor="rgba(67,103,42,0.2)"
			>下一穴位</u-button>
		</view>
		<divider 
			halfWidth="250" 
			borderColor="rgba(67,103,42,0.4)" 
			color="rgba(67,103,42,0.4)" 
			marginTop="25" 
			marginBottom="50"
		>没有更多了</divider>
		<back-top :scrollTop="scrollTop" top="600" tips="回到顶部" :customStyle="dividerCustomStyle"></back-top>
	</view>
</template>

<script>
	import acupoint from "../../data/acupoint.js"
	import BackTop from "../../my-component/back-top/back-top.vue"
	import Divider from "../../my-component/divider/divider.vue"
	export default {
		data() {
			return {
				acupointClass:'',
				acupointName:'',
				myAcupoint:acupoint,
				wei:'',
				jie:'',
				zhi:'',
				cao:'',
				img:'',
				scrollTop: 0,
				index1:0,
				index2:0,
				acupointNum:0,
				customStyle:{color:'rgba(67,103,42,0.6)',borderColor:'rgba(67,103,42,0.6)'},
				ripple:true,
				dividerCustomStyle:{width:'110rpx',height:'110rpx',background:'rgba(67,103,42,0.3)'},
				borderRadius:'50rpx'
			}
		},
		onLoad(option) {
			this.index1=parseInt(option.index1);
			this.index2=parseInt(option.index2);
			
			let acupoint_class=this.myAcupoint.acupoint[this.index1];
			let acupoint=acupoint_class.content[this.index2];
			
			this.acupointClass=acupoint_class.name;
			this.acupointNum=acupoint_class.num;
			this.acupointName=acupoint.name;
			this.wei=acupoint.wei;
			this.jie=acupoint.jie;
			this.zhi=acupoint.zhi;
			this.cao=acupoint.cao;
			this.img=acupoint.img;
			uni.setNavigationBarTitle({
			    title:this.acupointName+'【'+this.acupointClass+'】'
			})
		},
		methods: {
			previous:function(){
				// console.log(1);
				this.index2-=1;
				// console.log('index1='+this.index1+'index2='+this.index2);
				let acupoint_class=this.myAcupoint.acupoint[this.index1];
				let acupoint=acupoint_class.content[this.index2];
				
				this.acupointClass=acupoint_class.name;
				this.acupointNum=acupoint_class.num;
				this.acupointName=acupoint.name;
				this.wei=acupoint.wei;
				this.jie=acupoint.jie;
				this.zhi=acupoint.zhi;
				this.cao=acupoint.cao;
				this.img=acupoint.img;
				uni.setNavigationBarTitle({
				    title:this.acupointName+'【'+this.acupointClass+'】'
				})
				uni.pageScrollTo({
					scrollTop: 0,
				});
			},
			next:function(){
				// console.log(1);
				this.index2+=1;
				// console.log('index1='+this.index1+'index2='+this.index2);
				let acupoint_class=this.myAcupoint.acupoint[this.index1];
				let acupoint=acupoint_class.content[this.index2];
				
				this.acupointClass=acupoint_class.name;
				this.acupointNum=acupoint_class.num;
				this.acupointName=acupoint.name;
				this.wei=acupoint.wei;
				this.jie=acupoint.jie;
				this.zhi=acupoint.zhi;
				this.cao=acupoint.cao;
				this.img=acupoint.img;
				uni.setNavigationBarTitle({
				    title:this.acupointName+'【'+this.acupointClass+'】'
				})
				uni.pageScrollTo({
					scrollTop: 0,
				});
			},
			collection:function(){
				
			},
			str:function(value){
				let result=value+'';
				return "<p>"+result.replace(/<br\s*\/?>/g,'</p><p>')+"</p>";//替换<br>
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		components:{
			BackTop,
			Divider
		}
	}
</script>

<style>
.center{
	margin:0 auto;
	text-align: center;
}
</style>
