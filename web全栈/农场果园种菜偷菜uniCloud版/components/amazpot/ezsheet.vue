<template>
	<view class="ezsheet">
		<view>
			<view class="item" style="font-size: 14px;color: #999;">{{title}}</view>
			<slot name="header">
			</slot>
			<view v-for="item,index in items" class="item">
				<button @click="clicked_selected(index)" class="clear_button" :open-type="item.type?item.type:''" :style="{color:item.color?item.color:'#000'}">{{item.title}}</button>
			</view>
			<view @click="clicked_cancel" class="item" style="color:#ff0000" :style="{height:(safeArea.top!=20?84:50)+'px'}">取消</view>
		</view>
	</view>
</template>

<script>
	var sysInfo=uni.getSystemInfoSync();
	export default {
		data() {
			return {
				safeArea:{
					top:0
				}
			};
		},
		props:{
			items:
			{
				type:Array,
				default(){
					return [];
				}
			},
			title:{
				type:String,
				default:""
			}
		},
		methods:{
			clicked_selected:function(index){
				this.$emit("selected",index);
				this.$emit("dismiss");
			},
			clicked_cancel:function(){
				this.$emit("dismiss");
			}
		},
		mounted() {
			this.safeArea=sysInfo.safeArea;
		}
	}
</script>

<style>
	.ezsheet
	{
		width:100%;
		height: 100%;
		background: rgba(0,0,0,.3);
		position: absolute;
		top:0px;
		z-index:999999;
	}
	.ezsheet>view
	{
		width:100%;
		bottom:0px;
		background: #fff;
		position: fixed;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		overflow: hidden;
		box-shadow: 0px 0px 20px #999;
	}
	.ezsheet>view>.item
	{
		text-align: center;
		font-size: 16px;
		height:50px;
		line-height: 50px;
		color:#000;
		border-top: 1px solid #f2f2f2;
	}
	.ezsheet>view>.item>button
	{
		font-size: 16px;
	}
	.clear_button:after
	{
		border: none;
	}
	.clear_button
	{
		border: none;
		background: none;
		padding:0px !important;
		margin:0px !important;
		border-radius: 0px;
		line-height: inherit;
		box-sizing: border-box;
	}
</style>
