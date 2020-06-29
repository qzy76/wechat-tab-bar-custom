const createRecycleContext = require('miniprogram-recycle-view');
import {formatTime} from '../../utils/util';
let ctx='';
Page({
    data:{
        recycleList:[]
    },
    onReady: function() {
        ctx = createRecycleContext({
          id: 'recycleId',
          dataKey: 'recycleList',
          page: this,
          itemSize: this.itemSizeFunc(),
          useInPage:true,
          root:getCurrentPages()
        })
        this.setList(0,100)
        // ctx.update(beginIndex, list);
    },
    itemSizeFunc: function (item, idx) {
        return {
            width: 375,
            height: 10.6
        }
    },
    setList(i,allNum){
		let setArr = setInterval(()=>{
            i++
			if(i>=allNum){
				clearInterval(setArr);
                // ctx.splice(0,100)
                console.log(ctx.getBoundingClientRect(0))
                console.log(ctx.getBoundingClientRect(20))
                console.log(ctx.getBoundingClientRect(50))
                console.log(ctx.getBoundingClientRect(80))
                console.log(ctx.getBoundingClientRect(100))
                ctx.forceUpdate()
                i=0
            }
            // console.log(i,ctx.getViewportItems())
            // ctx.append([{idx:i,title:formatTime(new Date())}]) // 往后追加
            ctx.splice(0,0,[{idx:i,title:formatTime(new Date())}]) // 往前追加
		},10)

    },
    loadMore(){
        console.log(9527)
        let {recycleList}=this.data
        console.log(recycleList)
    },

	/**
	 * 生命周期函数--监听页面卸载
	 */


	onUnload: function () {
        ctx.destroy()
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
        console.log('下拉开始')
        wx.stopPullDownRefresh()
    },
    bindscroll(e){
        console.log(e)
    },
    onPageScroll(e){
        // console.log(e)
    }
})