
const app = getApp();
// 设置通用方法
// 页面跳转
function toPage(e) {
	return new Promise((resolve, reject) => {
		// console.log(e)
		let { url, type } = e.currentTarget.dataset;
		let {tabList,userType}=app.globalData;
		if (type == 'back') {
			wx.navigateBack({ success: (res) => {resolve(true);},fail:reject })
		} else{
			let index = tabList[userType].findIndex( o => o.pagePath==url);
			// console.log(index)
			if(index>=0){ // 跳转到switchTab页
				app.globalData.currentTab = index//修改选中项
				let pages = getCurrentPages(); //页面指针数组
				let {route} = pages[pages.length - 1]; //上一页面指针
				console.log(route)
				if ('/'+route != "pages/index/index") { //当前页不是同个页面
					wx.redirectTo({ url:'/pages/index/index',success:res=>{ resolve(true); },fail:reject })
					console.log('currentTab修改为：'+index)
				}
			}else if (type == 'redirect') {
				wx.redirectTo({ url,success:res=>{ resolve(true); },fail:reject })
			} else {
				wx.navigateTo({ url,success:res=>{ resolve(true); },fail:reject })
			}
		}
	});
}


// 组件内通用方法
let setComponentCommonFun = Behavior({
  // 共享数据
  data: {},
  // 共享方法
  pageLifetimes: {
    show(){
			console.log("在视图层布局完成后执行");
		}
	},
	methods: {
		toPage(e) {
			console.log(e)
			toPage(e).then(res=>{
				console.log(res)
			})
		}
	}
})
export { toPage,setComponentCommonFun }