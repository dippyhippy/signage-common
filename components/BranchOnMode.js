var noflo = require('noflo');

exports.getComponent = function () {
  var c = new noflo.Component();

  c.inPorts.add('mode', function (event, payload) {
    if (event !== 'data') {
      return;
    }
    // Do something with the packet, then
    if (payload === 'server') {
    	c.outPorts.server.send(payload);
    }    
  });
  c.outPorts.add('server');
  c.outPorts.add('browser');
  c.outPorts.add('client');
  return c;
};