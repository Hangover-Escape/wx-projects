"use strict";

var _relation = require('./../common/relation.js');

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  relation: (0, _relation.useParent)('row'),
  props: {
    span: Number,
    offset: Number
  }
});