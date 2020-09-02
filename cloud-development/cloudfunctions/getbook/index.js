// 云函数入口文件
const cloud = require('wx-server-sdk')
const axios = require('axios')
const doubanbook = require("doubanbook");

cloud.init()

const getDoubanBook = async (isbn) => {
  const url = 'https://search.douban.com/book/subject_search?search_text='+isbn
  const res = await axios.get(url)

  const reg = /window\.__DATA__ = "(.*)"/;

  if(reg.test(res.data)){
    const bookdata=RegExp.$1;
    return doubanbook(bookdata)[0];
  }

  return res
}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const {isbn} = event

  const res = await getDoubanBook(isbn)

  return res
}