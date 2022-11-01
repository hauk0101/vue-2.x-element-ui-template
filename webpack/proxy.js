const interfaces = require('os').networkInterfaces(); // 在开发环境中获取局域网中的本机iP地址

let IPAdress = '';
for (let devName in interfaces) {
  let iface = interfaces[devName];
  for (let i = 0; i < iface.length; i++) {
    let alias = iface[i];
    if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
      IPAdress = alias.address;
    }
  }
}

let proxy = { // !!IPAdress ? IPAdress :
  host: '127.0.0.1', // can be overwritten by process.env.HOST
  port: 8088,
  disableHostCheck: true,
  proxy: {
    '/mock': {
      target: 'http://xxx.com',
      changeOrigin: true,
      pathRewrite: {
        '^/mock': '/mock'
      }
    },
  }
};
module.exports = proxy;
