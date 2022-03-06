"use strict";

var _core = _interopRequireDefault(require('./../../../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  data: {
    a: 0,
    message: 'Hello',
    indicatorDots1: true,
    vertical: false,
    autoplay1: true,
    interval: 2000,
    duration: 500,
    datas_01: [{
      value: 1,
      background: 'demo-text-1',
      content: '11',
      img: 'nav_01'
    }, {
      value: 2,
      background: 'demo-text-2',
      content: '22',
      img: 'nav_02'
    }, {
      value: 3,
      background: 'demo-text-3',
      content: '33',
      img: 'nav_03'
    }] // resoveMessage: ''

  },
  computed: {
    resoveMessage: function resoveMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {},
  created: function created() {}
}, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined }, {info: {"components":{"van-grid":{"path":"./../../vant/grid/index"},"van-grid-item":{"path":"./../../vant/grid-item/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });