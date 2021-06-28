<template name="Divider">
	<view class="divider" :style="{height: height == 'auto' ? 'auto' : height + 'rpx',backgroundColor: bgColor,marginBottom: marginBottom + 'rpx',marginTop: marginTop + 'rpx'}">
		<view class="divider-line" :style="[lineStyle]"></view>
		<view v-if="useSlot" class="divider-text" :style="{color: color,fontSize: fontSize + 'rpx'}"><slot /></view>
		<view class="divider-line" :style="[lineStyle]"></view>
	</view>
</template>

<script>
export default {
	name: 'u-divider',
	props: {
		// 单一边divider横线的宽度(数值)，单位rpx。或者百分比
		halfWidth: {
			type: [Number, String],
			default: 200
		},
		// divider横线的颜色，如设置，
		borderColor: {
			type: String,
			default: '#3d3d3d'
		},
		// 文字颜色
		color: {
			type: String,
			default: '#909399'
		},
		// 文字大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 26
		},
		// 整个divider的背景颜色
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		// 整个divider的高度单位rpx
		height: {
			type: [Number, String],
			default: 'auto'
		},
		// 上边距
		marginTop: {
			type: [String, Number],
			default: 0
		},
		// 下边距
		marginBottom: {
			type: [String, Number],
			default: 0
		},
		// 是否使用slot传入内容，如果不用slot传入内容，线的中间就不会有空隙
		useSlot: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		lineStyle() {
			let style = {};
			if(String(this.halfWidth).indexOf('%') != -1) style.width = this.halfWidth;
			else style.width = this.halfWidth + 'rpx';
			style.borderColor = this.borderColor;
			return style;
		}
	},
	methods: {
		
	}
};
</script>

<style>
.divider {
	width: 100%;
	position: relative;
	text-align: center;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	display: flex;
	flex-direction: row;
}
.divider-line {
	border-bottom: 1rpx solid;
	transform: scale(1, 0.5);
	transform-origin: center;
}

.divider-text {
	white-space: nowrap;
	padding: 0 16rpx;
	display: inline-flex;	
}
</style>
