module.exports = {
    publicPath: '/',
    assetsDir: 'static', //生成静态文件，默认为 ''
    productionSourceMap: false,
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080/#/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/static/mock'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        }
    }
}