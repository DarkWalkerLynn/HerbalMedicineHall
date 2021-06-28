<template>
	<view>
		<u-sticky class="top" offset-top="5" :enable="enable">
			<u-search 
				style="padding: 5rpx 20rpx;" 
				placeholder="搜索中药名/穴位/医书/文章标题" 
				:show-action="false" disabled="disabled" 
				@click="search"
			></u-search>
		</u-sticky>
		<u-cell-group v-for="(prescription,index) in myPrescription.prescription" :key="index">	
			<u-cell-item 
				:title="prescription.name" 
				:title-style="titleStyle" 
				:arrow="true" 
				@click="detail(index)"
			>
				共{{prescription.num}}个
			</u-cell-item>
			<view class="center-column" v-if="index!=myPrescription.prescription.length-1">
				<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
			</view>
		</u-cell-group>
	</view>
</template>

<script>
	import prescription from "../../data/prescription.js"
	export default {
		data() {
			return {
				enable: true,
				myPrescription:prescription,
				accordion:false,
				titleStyle:{'font-size':'32rpx','font-weight':'bold','color':'rgba(67,103,42,0.5)','margin-left':'18rpx'}
			}
		},
		methods: {
			search:function(e){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/search/search'
				})
			},
			detail:function(index){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/prescription/prescription_detail?index='+index
				})
			}
		},
		onShow() {
		    this.enable= true
		},
		onHide() {
		    this.enable= false
		}
	}
</script>

<style>

</style>
