"use strict";

var _core = _interopRequireDefault(require('./../../vendor.js')(0));

var _test = _interopRequireDefault(require('./../../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import eventHub from '../common/eventHub';
// import { mapState } from '@wepy/x';
// import store from '';
_core["default"].page({
  config: {
    navigationBarTitleText: 'test'
  },
  mixins: [_test["default"]],
  data: {
    value: ''
  },
  computed: {},
  methods: {},
  created: function created() {
    console.log('---1-------');
    wx.getUserInfo({
      success: function success(res) {// self.userInfo = res.userInfo;
      }
    });
  }
}, {info: {"components":{"van-search":{"path":"./../../components/vant/search/index"},"van-tab":{"path":"./../../components/vant/tab/index"},"van-tabs":{"path":"./../../components/vant/tabs/index"},"biaoqianA":{"path":"./../../components/home/biaoqianA/index"},"biaoqianB":{"path":"./../../components/home/biaoqianB/index"},"biaoqianC":{"path":"./../../components/home/biaoqianC/index"},"biaoqianD":{"path":"./../../components/home/biaoqianD/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });