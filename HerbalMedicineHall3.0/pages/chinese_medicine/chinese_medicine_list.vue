<template>
	<view>
		<view class="center-column" v-for="(item,index2) in medicineClassContent" :key="index2">
			<cell-list 
				:title="item.name" 
				titleWidth="200" 
				:title-style="titleStyle" 
				:value="str(item.wei)" 
				:valueStyle="valueStyle" 
				@click="detail(index2)"
			></cell-list>
			<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
		</view>
	</view>
</template>

<script>
	import medicine from "../../data/chinese_medicine.js"
	import Divider from "../../my-component/divider/divider.vue"
	import CellList from "../../my-component/cell-list/cell-list.vue";
	export default {
		data() {
			return {
				myMedicine:medicine,
				index1:-1,
				medicineClass:'',
				medicineClassContent:[],
				titleStyle:{'font-size':'32rpx','font-weight':'bold','color':'rgba(67,103,42,0.6)'},
				valueStyle:{'font-size':'28rpx','color':'rgba(40,44,53,0.5)'}
			}
		},
		onLoad(option) {
			this.index1=parseInt(option.index);
			
			let medicine_class=this.myMedicine.chinese_medicine[this.index1];
			
			this.medicineClass=medicine_class.name;
			this.medicineClassContent=medicine_class.content;
			uni.setNavigationBarTitle({
			    title:this.medicineClass
			})
		},
		methods: {
			detail:function(index2){
				// console.log("index1="+this.index1+"index2="+index2);
				uni.navigateTo({
				    url:'/pages/chinese_medicine/chinese_medicine_detail?index1='+this.index1+'&index2='+index2
				})
			},
			str:function(value){
				let result=value+'';
				return result.replace(/<br\s*\/?>/g,'');//替换<br>
			}
		},
		components:{
			Divider,
			CellList
		},
		filters:{
		// 	str:function(value){
		// 		let result=value+'';
		// 		return result.replace(/<br\s*\/?>/g,'');//替换<br>
		// 	}
		}
	}
</script>

<style>
.oneline{
	width: 80%;   /*设置文本长度，像素或者百分比*/
	overflow:hidden; /*溢出的部分隐藏*/
	white-space: nowrap; /*文本不换行*/
	text-overflow:ellipsis;
	float: right;
	text-align: left;
}
</style>
