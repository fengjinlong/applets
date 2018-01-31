//logs.js
// const util = require('../../utils/util.js')
import util from '../../utils/util.js'

Page({
  data: {
    logs: [],
    logss: '66666'
  },
  onLoad: function () {
    this.ff()
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })  
    })
  },
  ff: () => {
    console.log('ownFun')
  },
  onReachBottom: () => {
    console.log('bottom')
  }
})
