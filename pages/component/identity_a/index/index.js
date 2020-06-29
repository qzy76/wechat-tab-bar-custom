// pages/component/identity_a/index/index.js
import {formatTime} from '../../../../utils/util';
import { setComponentCommonFun } from '../../../../utils/setCommonFun.js'
Component({
	
  behaviors: [setComponentCommonFun],
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		list:[]
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		switchTab(e) {
			let {index}=e.currentTarget.dataset;
			this.setData({selected:index});
      this.triggerEvent('comEvent',{selectIndex: index})
		}
	},
	ready(){
		// console.log(tabBarType,index);
		let {list}=this.data;
		let setArr = setInterval(()=>{
			if(list.length>=100){
				clearInterval(setArr)
			}
			list.unshift(list.length+'  '+formatTime(new Date()))
			this.setData({list})
		},1000)
	}
})