import { request } from '../../request/index.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      id: 0,
      value: "全部",
      isActive: true
    },
    {
      id: 1,
      value: "待付款",
      isActive: false
    },
    {
      id: 2,
      value: "待发货",
      isActive: false
    },
    {
      id: 3,
      value: "退款/退货",
      isActive: false
    }
    ],
  },
  onShow(options){
    // 判断token
    const token = wx.getStorageSync("token");
    if(!token){
      wx.navigateTo({
        url: '/pages/auth/index',
      });
      return;
    }
    // 获取当前小程序的页面栈-数组，长度最大是10页面
    let pages =  getCurrentPages();
    console.log(pages)
    // 数组中，索引最大的页面就是当前的页面
    let currentPage = pages[pages.length-1];
    console.log(currentPage.options)
    let {type} = currentPage.options
    this.getOrders(type)
  },
  // 获取订单列表的方法
  async getOrders(type){
    const res = await request({url:"/my/orders/all",data:{type}})
    console.log(res)
  },

  // 标题的点击事件 从子组件传递过来的
  handleTabsItemChange(e) {
    // console.log(e)
    // 获取被点击的标题索引
    const { index } = e.detail;
    // 修改源数组
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },

})