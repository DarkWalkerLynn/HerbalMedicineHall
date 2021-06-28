<template>
	<view>
		<view class="my-title">方剂简介</view>
		<view class="my-content">{{prescriptionClass.intro}}</view>
		<view class="my-title">使用注意事项</view>
		<view class="my-content">{{prescriptionClass.matters}}</view>
		<view class="my-title">常用{{prescriptionClass.name}}</view>
		<view v-for="(item,index) in prescriptionContent" :key="index">
			<view class="my-content-title flex-row">
				{{item.name}}
				<u-button 
					style="margin-right: 20rpx;text-indent: 0rpx;" 
					size="mini" 
					@click="collection" 
					:ripple="ripple" 
					:custom-style="customStyle"
				>收藏</u-button>
			</view>
			<view class="my-item-title">来源：<span class="my-item">{{item.yuan}}</span></view>
			<view class="my-item-title">组成：<span class="my-item">{{item.zu}}</span></view>
			<view class="my-item-title">功效：<span class="my-item">{{item.xiao}}</span></view>
			<view class="my-item-title">主治：<span class="my-item">{{item.zhi}}</span></view>
		</view>
	</view>
</template>

<script>
	import prescription from "../../data/prescription.js"
	export default {
		data() {
			return {
				index:-1,
				myPrescription:prescription,
				prescriptionClass:{},
				prescriptionContent:[],
				customStyle:{color:'rgba(67,103,42,0.6)',borderColor:'rgba(67,103,42,0.6)'},
				ripple:true
			}
		},
		methods: {
			collection:function(){
				
			}
		},
		onLoad(option) {
			this.index=parseInt(option.index);
			// let prescription_class=this.myPrescription.prescription[this.index];
			// this.prescriptionName=prescription_class.name;
			this.prescriptionClass=this.myPrescription.prescription[this.index];
			this.prescriptionContent=this.prescriptionClass.content;
			uni.setNavigationBarTitle({
			    title:this.prescriptionClass.name
			})
		}
	}
</script>

<style>

</style>
