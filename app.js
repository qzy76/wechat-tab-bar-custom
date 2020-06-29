//app.js
App({
  onLaunch: function () {
    this.lowVersionPrompt();
  },
  // 低版本提示
  lowVersionPrompt(v,content){
    if (this.compareVersion(wx.getSystemInfoSync().SDKVersion,v||'2.8.2') == 1) {
      console.log('当前用户基础库版本:',wx.getSystemInfoSync().SDKVersion)
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: content||'当前微信版本过低，可能导致部分功能异常或无法使用，请升级到最新微信版本后重试。'
      })
    }
  },
  compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)
  
    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }
  
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])
  
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
  
    return 0
  },

  // 自定义监听事件 用于数据改变时监听
  // this.observe(this.globalData, "tabBarType", this.watch);
  // 上面这个是触发监听，一般放在ready/onshow/onlaunch
  // this.watch是监听变化后触发
  observe(obj, key, watch) {
    let val = obj[key]; 
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set: function (value) {
        watch(val, value); 
        val = value;
      },
      get: function () {
        return val;
      }
    })
  },

  globalData: {
    currentTab:0, // tabBar选中项
    userType: 0, // 当前身份
    tabList:[
      [{
        "text": "测试",
        "pagePath": "/pages/component/identity_a/index/index",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      },
      {
        "text": "我的",
        "pagePath": "/pages/component/identity_a/mine/index",
        "iconPath": "/assets/icons/mine.png",
        "selectedIconPath": "/assets/icons/mine_active.png"
      }],
      [{
        "text": "测试1",
        "pagePath": "/pages/component/identity_b/index/index",
        "iconPath": "/assets/icons/home.png",
        "selectedIconPath": "/assets/icons/home_active.png"
      },
      {
        "text": "我的1",
        "pagePath": "/pages/component/identity_b/mine/index",
        "iconPath": "/assets/icons/mine.png",
        "selectedIconPath": "/assets/icons/mine_active.png"
      }]
    ]
  }
})