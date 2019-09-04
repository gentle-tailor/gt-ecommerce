const R = require('ramda');
const admin = require('firebase-admin');
const config = require('./config');

module.exports = R.once(() => {
  admin.initializeApp(config)
});
