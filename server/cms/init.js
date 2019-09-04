const R = require('ramda');
const contentful = require('contentful');
const config = require('../../cms-access');

module.exports = R.once(() => (
  contentful.createClient(config)
));
