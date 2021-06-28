<template>
	<view class="content">
		<u-sticky class="top" offset-top="5" :enable="enable">
			<u-search 
				style="padding: 5rpx 20rpx;" 
				placeholder="搜索中药名/穴位/医书/文章标题" 
				:show-action="false" 
				disabled="disabled" 
				@click="search"
			></u-search>
		</u-sticky>
		<u-cell-group v-for="(item,index) in myAcupoint.acupoint" :key="index">
			<u-cell-item 
				:title="item.name" 
				:title-style="titleStyle" 
				:arrow="true" 
				@click="list(index)"
			>
				共{{item.num}}个
			</u-cell-item>
			<view class="center-column" v-if="index!=myAcupoint.acupoint.length-1">
				<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
			</view>
		</u-cell-group>
	</view>
</template>

<script>
	import acupoint from "../../data/acupoint.js"
	export default {
		data() {
			return {
				myAcupoint:acupoint,
				accordion:false,
				enable: true,
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
			list:function(index){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/acupuncture/acupuncture_list?index='+index
				})
			}
		},
		// filters:{
		// 	str:function(value){
		// 		let result=value+'';
		// 		return result.replace(/<br\s*\/?>/g,'');//替换<br>
		// 	}
		// },
		onShow() {
		    this.enable= true
		},
		onHide() {
		    this.enable= false
		}
	}
</script>

<style>
.disabled{
	disabled:true;
}
.list-cell {
	display: flex;
	box-sizing: border-box;
	width: 100%;
	padding: 10px 24rpx;
	overflow: hidden;
	color: #323233;
	font-size: 14px;
	line-height: 24px;
	background-color: #fff;
}
.explain{
	font-size: 8px;
	color: #82848A;
	margin-left: 12px;
}
.item_title{
	font-size: 14px;
}
.oneline{
	width: 85%;   /*设置文本长度，像素或者百分比*/
	overflow:hidden; /*溢出的部分隐藏*/
	white-space: nowrap; /*文本不换行*/
	text-overflow:ellipsis;
}
.sticky {
	width: 750rpx;
	height: 120rpx;
	background-color: #2979ff;
	color: #fff;
	padding: 24rpx;
}
</style>
