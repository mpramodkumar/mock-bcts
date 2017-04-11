var config = require('../nightwatch.conf.js');

module.exports = {
  'Example Test': function(client) {
    client
    .url('http://localhost:9000/')
    .pause(500);

    client.expect.element('body').to.be.present.before(500);
  }
};
