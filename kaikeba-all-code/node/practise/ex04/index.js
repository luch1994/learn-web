const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密
  // 暗号：哈希算法
  // 创建User
  const User = sequelize.define("User", {
    name: Sequelize.STRING
  });
  // 创建Product
  const Product = sequelize.define("Product", {
    title: Sequelize.STRING
  });

  // 建立关系
  Product.belongsTo(User);
  User.hasMany(Product);

  // 同步数据库，这一步会生成表
  await sequelize.sync();

  // ##END##
  return {
    User,
    Product
  }
}