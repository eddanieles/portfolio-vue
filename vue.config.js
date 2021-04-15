module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/vue-emailjs-demo/' : '/',
    "transpileDependencies": [
        "vuetify"
    ]
}