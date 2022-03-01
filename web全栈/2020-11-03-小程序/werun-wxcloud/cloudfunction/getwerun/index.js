// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const {
    werundata
  } = event;

  return {
    werundata
  }
}

// //暗号：less is more
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()
//   const {
//     num1,
//     num2
//   } = event;
//   const result = num1 + num2;
//   const db = cloud.database();
//   db.collection('num').add({
//     data: {
//       result: result
//     }
//   })
//   return {
//     result
//   }
// }