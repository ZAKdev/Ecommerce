module.exports = {
	mongoConnection: 'mongodb://192.168.0.100:27017/ecommerce',
	mongoOptions: {
        auto_reconnect: true,
        db: {
            w: 1,
        },
        server: {
            socketOptions: {
                keepAlive: 1,
            },
        },
    },
    B_port: "3000",
    F_port: "1888",
    debug: true,
    minify: false
}