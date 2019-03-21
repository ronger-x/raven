module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'https://hacpai.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api/v2'
                }
            }
        },
        https: true
    }
}
