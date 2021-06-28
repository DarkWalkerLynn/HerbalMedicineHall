<template name="BackTop">
	<view @tap="backToTop" class="back-top" :style="[{bottom: bottom + 'rpx',right: right + 'rpx',zIndex: uZIndex,opacity: opacity}, customStyle]">
		<view class="back-top-content">
			<u-icon @click="backToTop" :name="icon" :custom-style="iconStyle" color="#FFFFFF"></u-icon>
			<view class="back-top-content-tips">
				{{tips}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'u-back-top',
		props: {
			// 自定义图标
			icon: {
				type: String,
				default: 'arrow-upward'
			},
			// 提示文字
			tips: {
				type: String,
				default: ''
			},
			// 返回顶部滚动时间
			duration: {
				type: [Number, String],
				default: 100
			},
			// 滚动距离
			scrollTop: {
				type: [Number, String],
				default: 0
			},
			// 距离顶部多少距离显示，单位rpx
			top: {
				type: [Number, String],
				default: 400
			},
			// 返回顶部按钮到底部的距离，单位rpx
			bottom: {
				type: [Number, String],
				default: 200
			},
			// 返回顶部按钮到右边的距离，单位rpx
			right: {
				type: [Number, String],
				default: 40
			},
			// 层级
			zIndex: {
				type: [Number, String],
				default: '9'
			},
			// 图标的样式，对象形式
			iconStyle: {
				type: Object,
				default() {
					return {
						color: '#909399',
						fontSize: '38rpx'
					}
				}
			},
			// 整个组件的样式
			customStyle: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		watch: {
			showBackTop(topjudge) {
				// 当组件的显示与隐藏状态发生跳变时，修改组件的层级和不透明度
				if(topjudge) {
					this.uZIndex = this.zIndex;
					this.opacity = 1;
				} else {
					this.uZIndex = -1;
					this.opacity = 0;
				}
			}
		},
		computed: {
			showBackTop() {
				// 如果滚动条到顶的距离大于设定的距离，就显示返回顶部的按钮
				return this.scrollTop > uni.upx2px(this.top);
			},
		},
		data() {
			return {
				// 不透明度，为了让组件有一个显示和隐藏的过渡动画
				opacity: 0,
				// 组件的z-index值，隐藏时设置为-1，就会看不到
				uZIndex: -1
			}
		},
		methods: {
			backToTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: this.duration
				});
			}
		}
	}
</script>

<style>
	.back-top{
		width: 80rpx;
		height: 80rpx;
		position: fixed;
		z-index: 9;
		justify-content: center;
		background-color: #E1E1E1;
		color: $u-content-color;
		align-items: center;
		transition: opacity 0.4s;
		text-align: center;
		border-radius: 10000rpx;
		display: flex;
		flex-direction: row;
	}
	.back-top-content{
		align-items: center;
	}
	.back-top-content-icon{
		color: '#909399';
		fontSize: '38rpx';
	}
	.back-top-content-tips{
		font-size: 26rpx;
		font-weight: 400;
		transform: scale(0.8);
		line-height: 1;
		color: #FFFFFF;
	}
</style>
