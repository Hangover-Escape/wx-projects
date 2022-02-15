"use strict";

var _component = require('./../common/component.js');

var _relation = require('./../common/relation.js');

(0, _component.VantComponent)({
  relation: (0, _relation.useChildren)('grid-item'),
  props: {
    square: {
      type: Boolean,
      observer: 'updateChildren'
    },
    gutter: {
      type: null,
      value: 0,
      observer: 'updateChildren'
    },
    clickable: {
      type: Boolean,
      observer: 'updateChildren'
    },
    columnNum: {
      type: Number,
      value: 4,
      observer: 'updateChildren'
    },
    center: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    },
    border: {
      type: Boolean,
      value: true,
      observer: 'updateChildren'
    },
    direction: {
      type: String,
      observer: 'updateChildren'
    },
    iconSize: {
      type: String,
      observer: 'updateChildren'
    },
    reverse: {
      type: Boolean,
      value: false,
      observer: 'updateChildren'
    }
  },
  methods: {
    updateChildren: function updateChildren() {
      this.children.forEach(function (child) {
        child.updateStyle();
      });
    }
  }
});