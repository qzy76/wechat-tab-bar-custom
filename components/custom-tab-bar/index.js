// component/custom-tab-bar/index.js
let app = getApp();
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		tabBarList:{
			type:Array,
			value:[],
      observer(newVal, oldVal) {
        // console.log(newVal, oldVal)
      }
		},
		selected:{
			type:Number,
			value:0
		}

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		color: "#000000",
		selectedColor: "#3cc51f"
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		switchTab(e) {
			let {index}=e.currentTarget.dataset;
      this.triggerEvent('comEvent',{selectIndex: index})
		}
	}
})
