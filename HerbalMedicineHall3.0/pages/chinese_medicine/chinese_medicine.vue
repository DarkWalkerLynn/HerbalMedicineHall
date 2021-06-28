<template>
	<view class="content">
		<u-sticky class="top" offset-top="5" :enable="enable">
			<u-search 
				style="padding: 5rpx 20rpx;" 
				placeholder="搜索中药名/穴位/医书/文章标题" 
				:show-action="false" disabled="disabled" 
				@click="search"
			>
			</u-search>
		</u-sticky>
		<u-cell-group v-for="(item,index) in myMedicine.chinese_medicine" :key="index">
			<u-cell-item :title="item.name" :title-style="titleStyle" :arrow="true" @click="detail(index)">共{{item.num}}个</u-cell-item>
			<view class="center-column" v-if="index!=myMedicine.chinese_medicine.length-1">
				<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
			</view>
		</u-cell-group>
	</view>
</template>

<script>
	import medicine from "../../data/chinese_medicine.js";
	import CellList from "../../my-component/cell-list/cell-list.vue";
	export default {
		data() {
			return {
				myMedicine:medicine,
				// scrollTop: 0,
				// indexList: ["解表药", "清热药", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
				// 	"V", "W", "X", "Y", "Z"
				// ]
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
			detail:function(index){
				// console.log(1);
				uni.navigateTo({
				    url:'/pages/chinese_medicine/chinese_medicine_list?index='+index
				})
			}
		},
		filters:{
			str:function(value){
				let result=value+'';
				return result.replace(/<br\s*\/?>/g,'');//替换<br>
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onShow() {
		    this.enable= true
		},
		onHide() {
		    this.enable= false
		},
		components:{
			CellList
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
</style>
