const R = require('ramda');
const admin = require('firebase-admin');
const config = require('../../service-account');

module.exports = R.once(() => {
  admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: "https://gt-ecommerce.firebaseio.com"
  });
})
