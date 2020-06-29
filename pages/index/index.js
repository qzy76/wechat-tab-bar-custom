let app = getApp();
import { toPage } from '../../utils/setCommonFun'
Page({
  
  data: {
    userType:0,
    currentTab: 0,
    //这里只做tab名和显示图标
    tabBarList: []
  },
  toPage:toPage,
  // 底部栏点击切换页面
  switchTab(e) {
    let {currentTab}=this.data;
    let {selectIndex}=e.detail;
    if (currentTab === selectIndex) {
      return false;
    } else {
      app.globalData.currentTab=selectIndex;
    }
  },

  // 设置标题
  setNavigationBarTitle(){
    let {tabList,userType}=app.globalData;
    let {currentTab}=this.data
    wx.setNavigationBarTitle({ title: tabList[userType][currentTab].text+'--身份'+userType })
  },
  
  // 显示时更新
  onShow(){
    let {tabList,userType,currentTab}=app.globalData;
    this.setData({tabBarList:tabList[userType],userType,currentTab});
    wx.hideHomeButton();
    this.setNavigationBarTitle();
    //监听currentTab变化
    app.observe(app.globalData, "currentTab", this.watchCurrentTabChange);
  },

  //监听选中的值发生了变化
  watchCurrentTabChange(oldVal,newVal){
    console.log(oldVal,newVal)
    this.setData({currentTab:newVal})
    this.setNavigationBarTitle();
  }
})
