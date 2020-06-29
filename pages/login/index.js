// pages/login/index.js
const app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	binLogin(e){
		// console.log(e)
		app.globalData.userType = e.currentTarget.dataset.index;
		console.log(app.globalData.userType)
		wx.redirectTo({
			url: '/pages/index/index',
		})
	}
})