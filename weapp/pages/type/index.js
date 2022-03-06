"use strict";

var _core = _interopRequireDefault(require('./../../vendor.js')(1));

var _test = _interopRequireDefault(require('./../../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from '../common/eventHub';
// import { mapState } from '@wepy/x';
// import store from '';
_core["default"].page({
  config: {
    navigationBarTitleText: 'test'
  },
  // mixins: [testMixin],
  data: {
    activeKey: 0,
    activeId: null,
    mainActiveIndex: 0,
    imageName: 'nav_01',
    items: [{
      text: '组1',
      id: 0,
      // 禁用选项
      disabled: false,
      img: 'nav_01'
    }, {
      text: '组2',
      id: 1,
      // 禁用选项
      disabled: false,
      img: 'nav_02'
    }, {
      text: '组3',
      id: 2,
      // 禁用选项
      disabled: false,
      img: 'nav_03'
    }]
  },
  // onChange (event) {
  //   Notify({ type: 'primary', message: event.detail });
  // },
  methods: {
    onClickNav: function onClickNav(event) {
      var _this = this;

      console.log(event.$wx.detail.index, 'event1');
      this.items.map(function (item) {
        if (item.id == event.$wx.detail.index) {
          _this.imageName = item.img;
        }
      });
    },
    onClickItem: function onClickItem(_ref) {
      var _ref$detail = _ref.detail,
          detail = _ref$detail === void 0 ? {} : _ref$detail;
      console.log(detail.index, 'event2');
    }
  }
}, {info: {"components":{"van-tree-select":{"path":"./../../components/vant/tree-select/index"},"van-sidebar":{"path":"./../../components/vant/sidebar/index"},"van-sidebar-item":{"path":"./../../components/vant/sidebar-item/index"}},"on":{"7-78":["click-nav","click-item"]}}, handlers: {'7-78': {"click-nav": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.onClickNav.apply(_vm, $args || [$event]);
  })();
}, "click-item": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.onClickItem.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });