function tiemo () {
  console.log('贴膜...')
}

function niejiao () {
  console.log('捏脚...')
}

// 暴露
// module.exports = {
//   tiemo,
//   niejiao
// }

exports.niejiao = niejiao
exports.tiemo = tiemo