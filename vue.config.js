module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8082/zktj',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        https: false
    }
}
