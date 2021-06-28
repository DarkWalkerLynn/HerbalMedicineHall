<template>
	<view>
		<view class="my-title">
			{{medicineName}}
		</view>
		<view class="my-content-title">性状</view>
		<view class="my-content" v-html="str(xing)"></view>
		<!-- <view class="my-content">{{xing|str}}</view> -->
		<view class="my-content-title">味道</view>
		<view class="my-content" v-html="str(wei)"></view>
		<view class="my-content-title">用量</view>
		<view class="my-content" v-html="str(liang)"></view>
		<view class="my-content-title">主治</view>
		<view class="my-content" v-html="str(zhi)"></view>
		<view class="flex-row" style="margin-top: 25rpx;">
			<u-button 
				class="width-thirty" 
				@click="previous" 
				:disabled="index2==0" 
				:ripple="ripple" 
				:custom-style="customStyle" 
				hoverBgColor="rgba(67,103,42,0.2)"
			>上一味药</u-button>
			<u-button 
				class="width-thirty" 
				@click="collection" 
				:ripple="ripple" 
				:custom-style="customStyle"
			>收藏</u-button>
			<u-button
				class="width-thirty" 
				@click="next" 
				:disabled="index2==medicineNum-1" 
				:ripple="ripple" 
				:custom-style="customStyle" 
				hoverBgColor="rgba(67,103,42,0.2)"
			>下一味药</u-button>
		</view>
		<divider 
			halfWidth="250" 
			borderColor="rgba(67,103,42,0.4)" 
			color="rgba(67,103,42,0.4)" 
			marginTop="25" 
			marginBottom="50"
		>没有更多了</divider>
		<back-top 
			:scrollTop="scrollTop" 
			top="600" 
			tips="回到顶部" 
			:customStyle="dividerCustomStyle"
		></back-top>
	</view>
</template>

<script>
	import medicine from "../../data/chinese_medicine.js"
	import BackTop from "../../my-component/back-top/back-top.vue"
	import Divider from "../../my-component/divider/divider.vue"
	export default {
		data() {
			return {
				medicineClass:'',
				medicineName:'',
				myMedicine:medicine,
				xing:'',
				wei:'',
				liang:'',
				zhi:'',
				scrollTop: 0,
				index1:0,
				index2:0,
				// previous_disabled:false,
				// next_disabled:true,
				medicineNum:0,
				customStyle:{color:'rgba(67,103,42,0.6)',borderColor:'rgba(67,103,42,0.6)'},
				ripple:true,
				dividerCustomStyle:{width:'110rpx',height:'110rpx',background:'rgba(67,103,42,0.3)'}
			}
		},
		onLoad(option) {
			// let medicine_class=this.myMedicine.chinese_medicine[option.index1];
			// let medicine=this.myMedicine.chinese_medicine[option.index1].content[option.index2];
			
			// console.log('index1='+index1+'index2='+index2);
			// console.log(this.myMedicine.chinese_medicine[index1].name);
			this.index1=parseInt(option.index1);
			this.index2=parseInt(option.index2);
			// this.previous_disabled=(option.index2 == 0);
			// this.next_disabled=(option.index2 == medicine_class.num-1);
			
			let medicine_class=this.myMedicine.chinese_medicine[this.index1];
			let medicine=medicine_class.content[this.index2];
			
			this.medicineClass=medicine_class.name;
			this.medicineNum=medicine_class.num;
			this.medicineName=medicine.name;
			this.xing=medicine.xing;
			this.wei=medicine.wei;
			this.liang=medicine.liang;
			this.zhi=medicine.zhi;
			uni.setNavigationBarTitle({
			    title:this.medicineName+'【'+this.medicineClass+'】'
			})
			
			// DataChange();
		},
		methods: {
			previous:function(){
				// console.log(1);
				this.index2-=1;
				// console.log('index1='+this.index1+'index2='+this.index2);
				let medicine_class=this.myMedicine.chinese_medicine[this.index1];
				let medicine=this.myMedicine.chinese_medicine[this.index1].content[this.index2];
				this.medicineClass=medicine_class.name;
				this.medicineName=medicine.name;
				this.medicineNum=medicine_class.num;
				this.xing=medicine.xing;
				this.wei=medicine.wei;
				this.liang=medicine.liang;
				this.zhi=medicine.zhi;
				uni.setNavigationBarTitle({
				    title:this.medicineName+'【'+this.medicineClass+'】'
				})
				uni.pageScrollTo({
					scrollTop: 0,
				});
			},
			next:function(){
				// console.log(1);
				this.index2+=1;
				// console.log('index1='+this.index1+'index2='+this.index2);
				let medicine_class=this.myMedicine.chinese_medicine[this.index1];
				let medicine=this.myMedicine.chinese_medicine[this.index1].content[this.index2];
				this.medicineClass=medicine_class.name;
				this.medicineName=medicine.name;
				this.medicineNum=medicine_class.num;
				this.xing=medicine.xing;
				this.wei=medicine.wei;
				this.liang=medicine.liang;
				this.zhi=medicine.zhi;
				uni.setNavigationBarTitle({
				    title:this.medicineName+'【'+this.medicineClass+'】'
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
		},
		filters:{
			// str:function(value){
			// 	let result=value+'';
			// 	return result.replace(/<br\s*\/?>/g,'\n');//替换<br>
			// }
		}
	}
</script>

<style>

</style>
