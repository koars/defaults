var defaults = require('../index.js');
var sinon = require('sinon');

it('must be called with the correct assets data', function() {
    var spy = sinon.spy();
    defaults({
        defaults: spy
    });
    spy.calledWith('assets', require('../lib/assets.js')).must.be.true();
});

it('must be called with the correct session data', function() {
    var spy = sinon.spy();
    defaults({
        defaults: spy
    });
    spy.calledWith('session', require('../lib/session.js')).must.be.true();
});

it('must be called with the correct view data', function() {
    var spy = sinon.spy();
    defaults({
        defaults: spy
    });
    spy.calledWith('views', require('../lib/views.js')).must.be.true();
});
