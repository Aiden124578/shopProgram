// pages/goods_list/index.js
import { request } from "../../request/index.js";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                value: "综合",
                isActive: true
            },
            {
                id: 1,
                value: "销量",
                isActive: false
            },
            {
                id: 2,
                value: "价格",
                isActive: false
            }
        ],
        goodsList: []
    },

    // 接口要的参数
    QueryParams: {
        query: "",
        cid: "",
        pagenum: 1,
        pagesize: 10
    },
    // 总页数
    totalPages: 1,

    onLoad: function(options) {
        // console.log(options)
        this.QueryParams.cid = options.cid;
        this.getGoodsList();

    },
    // 获取商品列表数据
    async getGoodsList() {
        const res = await request({ url: "/goods/search", data: this.QueryParams });
        // 获取总条数
        const total = res.total;
        // 计算总页数
        this.totalPages = Math.ceil(total / this.QueryParams.pagesize);
        // console.log(this.totalPages)
        // console.log(res)
        this.setData({
            // goodsList: res.goods
            goodsList: [...this.data.goodsList, ...res.goods]
        })
        wx.stopPullDownRefresh();
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
    onReachBottom() {
        // console.log("页面触底");
        if (this.QueryParams.pagenum >= this.totalPages) {
            // 没有下一页数据
            wx.showToast({ title: "没有下一页数据了" });

        } else {
            this.QueryParams.pagenum++;
            this.getGoodsList();
        }
    },
    onPullDownRefresh() {
        // console.log("aaa")
        this.setData({
            goodsList: []
        })
        this.QueryParams.pagenum = 1;
        this.getGoodsList();

    }

})