<template>
	<view>
		<view class="center-column" v-for="(item,index2) in acupointClassContent" :key="index2">
			<cell-list 
				:title="item.name" 
				titleWidth="200" 
				:title-style="titleStyle" 
				:value="str(item.zhi)" 
				:valueStyle="valueStyle" 
				@click="detail(index2)"
			></cell-list>
			<u-line color="rgba(67,103,42,0.2)" length="85%"></u-line>
		</view>
	</view>
</template>

<script>
	import acupoint from "../../data/acupoint.js"
	import CellList from "../../my-component/cell-list/cell-list.vue";
	export default {
		data() {
			return {
				myAcupoint:acupoint,
				index1:-1,
				acupointClass:'',
				acupointClassContent:[],
				titleStyle:{'font-size':'32rpx','font-weight':'bold','color':'rgba(67,103,42,0.6)'},
				valueStyle:{'font-size':'28rpx','color':'rgba(40,44,53,0.5)'}
			}
		},
		onLoad(option) {
			this.index1=parseInt(option.index);
			
			let acupoint_class=this.myAcupoint.acupoint[this.index1];
			
			this.acupointClass=acupoint_class.name;
			this.acupointClassContent=acupoint_class.content;
			uni.setNavigationBarTitle({
			    title:this.acupointClass
			})
		},
		methods: {
			detail:function(index2){
				// console.log("index1="+this.index1+"index2="+index2);
				uni.navigateTo({
				    url:'/pages/acupuncture/acupuncture_detail?index1='+this.index1+'&index2='+index2
				})
			},
			str:function(value){
				let result=value+'';
				return result.replace(/<br\s*\/?>/g,'');//替换<br>
			}
		},
		components:{
			CellList
		}
	}
</script>

<style>

</style>
