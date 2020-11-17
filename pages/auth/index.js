import { login } from '../../utils/asyncWx.js'
import { request } from '../../request/index.js'
Page({
  // 获取授权
  async handleGetUserInfo(e) {
    try {
      const { encryptedData, iv, rawData, signature } = e.detail;
      const { code } = await login();
      const loginParams = { encryptedData, iv, rawData, signaturem, code }
      const res = await request({ url: "/users/wxlogin", data: loginParams, method: "post" });
      wx.setStorageSync("token", token);
      wx.navigateBack({
        delta: 1
      });
    } catch (error) {
      console.log(error)
    }
  }
})