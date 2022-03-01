module.exports = function (source) {
  console.log("css-loader");
  console.log(source);
  console.log(typeof source);
  return JSON.stringify(source);
};
