// module.exports = {
//   entry: {
//     build1: './aap1.js',
//     build2: './app2.js'
//   },
//   output: {
//     filename: '[name].js'
//   }
// }

const path = require('path');

module.exports = {
  entry: {
    build1: './app1.js',
    build2: './app2.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};