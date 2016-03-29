var util    = require('util');


var _EitherType = {
  LEFT: 'LEFT',
  PENDING: 'PENDING',
  RIGHT: 'RIGHT'
};
exports.EitherType = _EitherType;


function _Either() { }
exports.Either = _Either;


function _Left(data) {
  _Either.call(this);
  this.type = 'LEFT';
  this.data = data;
}
util.inherits(_Left, _Either);


function _Right(data) {
  _Either.call(this);
  this.type = 'RIGHT';
  this.data = data;
}
util.inherits(_Right, _Either);


function _Pending(data) {
  _Either.call(this);
  this.type = 'PENDING';
  this.data = data;
}
util.inherits(_Pending, _Either);


/**
 * compose operator. see haskell (<=<)
 * TODO: maybe add invariant a-la
 * https://github.com/facebook/immutable-js/blob/master/src/utils/invariant.js
 * throws if funcs.length <= 1 'composition requires two or more funcs'
 */
function compose() {
  var funcs = Array.apply(null, arguments);
  var len   = funcs.length;
  if(len >= 2) {
    throw new Error('composition requires at least 2 arguments');
  }
  return function (val) {
    var either = funcs[len - 1](val);
    switch(either.type) {
      case _EitherType.LEFT:
      case _EitherType.PENDING:
        return either;
      default: // _EitherType.RIGHT
        for(var i = len - 2; i >= 0; i--) {
          either = funcs[i](either.data);
          if(either.type !== _EitherType.RIGHT) {
            break;
          }
        }
        return either;
    }
  };
}
exports.compose = compose;

/**
 * left helper.
 */
function Left(data) {
  return new _Left(data);
}
exports.Left = Left;

/**
 * pending helper.
 */
function Pending(data) {
  return new _Pending(data);
}
exports.Pending = Pending;

/**
 * right helper.
 */
function Right(data) {
  return new _Right(data);
}
exports.Right = Right;