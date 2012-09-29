var EventEmitter = require( "events" ).EventEmitter;

var MyConstructor = function() {
  var self = this;
  process.nextTick(function() {
    self._continue();
  });
};

MyConstructor.prototype.__proto__ = EventEmitter.prototype;

MyConstructor.prototype._continue = function() {
  // without the process.nextTick
  // these events would be emitted immediately
  // with no listeners. they would be lost.
  this.emit('data', 'hello');
  this.emit('data', 'world');
  this.emit('end');
};

module.exports = MyConstructor;