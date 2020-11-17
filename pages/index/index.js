// const { request } = require("../../request");

//Page Object
import { request } from "../../request/index.js";
Page({
    data: {
        swiperList: [],
        shopList: [],
        floorList: []
    },
    onLoad: function(option) {
        // this.getImg();
        // this.getShop();

        wx.showLoading({
            title: '加载中',
        })

        setTimeout(function() {
            wx.hideLoading()
        }, 2000)

        this.getSwiperList()
        this.getNavList()
        this.getFloorList()
    },

    getSwiperList() {
        request({ url: "/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result
                })
            })

    },
    getNavList() {
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    shopList: result
                })
            })
    },
    getFloorList() {
        request({ url: "/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result
                })
            })
    }
    // getImg() {
    //     wx.request({
    //         url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //         success: (result) => {
    //             // console.log(result)
    //             this.setData({
    //                 swiperList: result
    //             })
    //         }
    //     });
    // },

    // getShop() {
    //     wx.request({
    //         url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
    //         success: (result) => {
    //             console.log(result)
    //             this.setData({
    //                 shopList: result
    //             })
    //         }
    //     });
    // }

});