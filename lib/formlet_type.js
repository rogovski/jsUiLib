var util    = require('util');

function Formlet() {}
exports.Formlet = Formlet;


function _BlockLabel(data) {
    Formlet.call(this);
    this.type = 'BLOCK_LABEL';
    this.data = data;
}
util.inherits(_BlockLabel, Formlet);


function _BlockPlaceholder(data) {
    Formlet.call(this);
    this.type = 'BLOCK_PLACEHOLDER';
    this.data = data;
}
util.inherits(_BlockPlaceholder, Formlet);


function _InlineLabel(data) {
    Formlet.call(this);
    this.type = 'INLINE_LABEL';
    this.data = data;
}
util.inherits(_InlineLabel, Formlet);


function _InlinePlaceholder(data) {
    Formlet.call(this);
    this.type = 'INLINE_PLACEHOLDER';
    this.data = data;
}
util.inherits(_InlinePlaceholder, Formlet);


exports.BlockLabel = function (data) {
    return new _BlockLabel(data);
};


exports.BlockPlaceholder = function (data) {
    return new _BlockPlaceholder(data);
};


exports.InlineLabel = function (data) {
    return new _InlineLabel(data);
};


exports.InlinePlaceholder = function (data) {
    return new _InlinePlaceholder(data);
};
