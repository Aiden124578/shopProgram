// pages/cart/index.js
import { getSetting, chooseAddress, openSetting, showModal, showToast, requestPayment } from "../../utils/asyncWx.js"
import { request } from '../../request/index.js'
Page({
  data: {
    address: {},
    cart: [],
    totalPrice: 0,
    totalNum: 0
  },
  onShow() {
    const address = wx.getStorageSync("address");
    let cart = wx.getStorageSync("cart") || [];
    //过滤后的购物车数组
    cart = cart.filter(v => v.checked);
    this.setData({
      address
    });

    let totalPrice = 0;
    let totalNum = 0;
    cart.forEach(v => {
      totalPrice += v.num * v.goods_price;
      totalNum += v.num;
    });
    this.setData({
      cart,
      totalPrice,
      totalNum,
      address
    });
  },
  // 支付
  async handleOrderPay() {
    try {
      // 判断缓存中有没有token
      const token = wx.getStorageSync("token");
      if (!token) {
        wx.navigateTo({
          url: '/pages/auth/index',
        });
        return
      }
      // 获取订单编号
      const header = { Authorization: token };
      const order_price = this.data.totalPrice
      const consignee_addr = this.data.address.all
      const cart = this.data.cart
      let goods = [];
      cart.forEach(v => goods.push({
        goods_id: v.goods_id,
        goods_number: v.num,
        goods_price: v.goods_price
      }))
      const orderParams = { order_price, consignee_addr, cart, goods }
      const { order_number } = await request({ url: "/my/orders/create", method: "POST", data: header, orderParams })
      // 订单编号
      // console.log(order_number)
      // 发起预支付接口
      const { pay } = await request({ url: "/my/orders/req_unifiedorder", method: "POST", header, data: { order_number } })
      // 发起支付接口
      await requestPayment(pay)
      // 查询订单状态
      const res = await request({ url: "/my/orders/chkOrder", method: "POST", header, data: { order_number } })
      await showToast({ title: "支付成功" })
      // 支付成功跳转到订单页面
      wx.navigateTo({
        url: '/pages/order/index',
      });
    } catch (error) {
      await showToast({ title: "支付失败" })
      console.log(error)
    }
  },
})