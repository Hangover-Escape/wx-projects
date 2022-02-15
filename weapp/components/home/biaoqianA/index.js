"use strict";

var _core = _interopRequireDefault(require('./../../../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    a: 0,
    message: 'Hello' // resoveMessage: ''

  },
  computed: {
    resoveMessage: function resoveMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {},
  created: function created() {}
}, {info: {"components":{"van-grid-item":{"path":"./../../vant/grid-item/index"},"van-grid":{"path":"./../../vant/grid/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });