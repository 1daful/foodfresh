const pkg = require('./package')
const firebaseConfig = {
  apiKey: "AIzaSyBj4r66t2hD0q9xI6GytrTS0UBg5RZgIrA",
  authDomain: "med-lte.firebaseapp.com",
  databaseURL: "https://med-lte.firebaseio.com",
  projectId: "med-lte",
  storageBucket: "med-lte.appspot.com",
  messagingSenderId: "6919446903",
  appId: "1:6919446903:web:15e23a48e4a2453a"
};
module.exports = {
  apiKey: "AIzaSyBj4r66t2hD0q9xI6GytrTS0UBg5RZgIrA",
  hprojectId: "med-lte",
  authDomain: "med-lte.firebaseapp.com",
  ANALYTICS_TRACKING_ID: 'UA-49421899-3',
  clearCart: true, // Whether to clear the cart after order is placed. Useful while testing
  currency: { symbol: '₹', code: 'INR' },
  manifest: {
    name: 'Foodfresh',
    short_name: 'Foodfresh',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#555'
  },
  head: {
    titleTemplate: 'Foodfresh | %s',
    title: pkg.description,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Karla:400,700'
      }
    ],
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: pkg.keyword },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:title',
        property: 'og:title',
        content: pkg.description
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      // {
      //   property: "og:image",
      //   content:
      //     "https://s3.envato.com/files/252462089/banner.png"
      // },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: pkg.description
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: pkg.description
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: pkg.url
      }
    ],
    noscript: [
      {
        innerHTML: `We're sorry but Foodfresh doesn't work properly without JavaScript enabled. Please enable it to continue.`
      }
    ],
    htmlAttrs: { lang: 'en' },
    __dangerouslyDisableSanitizers: ['script']
  }
}
