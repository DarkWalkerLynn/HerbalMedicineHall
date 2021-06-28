<template name="CellList">
	<view @tap="click" class="cell">
		<view class="cell-content">
			<view class="cell-title" :style="[titleStyle]">{{title}}</view>
			<view class="cell-value" :style="[valueStyle]">{{value}}</view>
		</view>
		<u-icon v-if="arrow" name="arrow-right" class="cell-arrow"></u-icon>
	</view>
</template>

<script>
	export default {
		props:{
			// 左侧标题
			title: {
				type: [String, Number],
				default: ''
			},
			// 右侧内容
			value: {
				type: [String, Number],
				default: ''
			},
			// 是否显示右侧箭头
			arrow: {
				type: Boolean,
				default: true
			},
			// 标题的宽度，单位rpx
			titleWidth: {
				type: [Number, String],
				default: ''
			},
			// 控制标题的样式
			titleStyle: {
				type: Object,
				default() {
					return {};
				}
			},
			// 右侧显示内容的样式
			valueStyle: {
				type: Object,
				default() {
					return {};
				}
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: 'transparent'
			},
		},
		data() {
			return {
				
			}
		},
		methods: {
			click() {
				this.$emit('click', this.index);
			}
		}
	}
</script>

<style>
	.cell{
		display: flex;
		align-items: center;
		position: relative;
		box-sizing: border-box;
		width: 100%;
		padding: 26rpx 32rpx;
		font-size: 28rpx;
		line-height: 54rpx;
		/* color: $u-content-color; */
		background-color: #fff;
		text-align: left;
	}
	.cell-content{
		width: 95%;
		margin-left: 18rpx;
	}
	.cell-title{
		font-size: 28rpx;
	}
	.cell-value{
		overflow: hidden;
		vertical-align: middle;
		color: $u-tips-color;
		font-size: 26rpx;
		width: 95%;   /*设置文本长度，像素或者百分比*/
		overflow:hidden; /*溢出的部分隐藏*/
		white-space: nowrap; /*文本不换行*/
		text-overflow:ellipsis;
		text-align: left;
	}
	.cell-arrow{
		margin-right: 5rpx;
		color: #969799;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		height: 48rpx;
	}
</style>
