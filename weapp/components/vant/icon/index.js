"use strict";

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  props: {
    dot: Boolean,
    info: null,
    size: null,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    },
    name: String
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  }
});