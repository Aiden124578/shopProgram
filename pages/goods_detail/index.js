// pages/goods_detail/index.js

import { request } from "../../request/index.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: {}
    },
    GoodsInfo: {},
    /**,
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const { goods_id } = options;
        // console.log(goods_id)
        this.getGoodsDetail(goods_id)
    },
    // 获取商品的详情数据
    async getGoodsDetail(goods_id) {
        const goodsObj = await request({ url: "/goods/detail", data: { goods_id } });
        this.GoodsInfo = goodsObj;
        // console.log(res);
        this.setData({
            goodsObj: {
                goods_name: goodsObj.goods_name,
                goods_price: goodsObj.goods_price,
                //iphone不识别webp图片格式
                //最好找到后台 让他进行修改
                //自己改
                goods_introduce: goodsObj.goods_introduce.replace(/\.webp/g, '.jpg'),
                pics: goodsObj.pics,
            }
        })
    },
    // 点击轮播图放大预览
    handlePreviewImg(e) {
        const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
        const current = e.currentTarget.dataset.url;
        wx.previewImage({
            current,
            urls

        });

    },
    handleCartAdd() {
        // console.log("gouwuche");
        let cart = wx.getStorageSync("cart") || [];
        let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
        if (index === -1) {
            //不存在购物车数据
            this.GoodsInfo.num = 1;
            this.GoodsInfo.checked = true;
            cart.push(this.GoodsInfo);
        } else {
            cart[index].num++;
        }
        //把购物车重新添加回缓存中
        wx.setStorageSync("cart", cart);
        wx.showToast({
            title: '加入成功',
            icon: 'success',
            //防止用户 手抖 疯狂的点击按钮
            mask: true
        });

    }
})