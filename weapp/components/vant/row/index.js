"use strict";

var _component = require('./../common/component.js');

var _relation = require('./../common/relation.js');

(0, _component.VantComponent)({
  relation: (0, _relation.useChildren)('col', function (target) {
    var gutter = this.data.gutter;

    if (gutter) {
      target.setData({
        gutter: gutter
      });
    }
  }),
  props: {
    gutter: {
      type: Number,
      observer: 'setGutter'
    }
  },
  methods: {
    setGutter: function setGutter() {
      var _this = this;

      this.children.forEach(function (col) {
        col.setData(_this.data);
      });
    }
  }
});