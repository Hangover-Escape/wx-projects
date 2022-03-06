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
  mixins: [_test["default"]],
  data: {
    value: '',
    indicatorDots1: true,
    indicatorDots2: true,
    vertical: false,
    autoplay1: false,
    autoplay2: false,
    interval: 2000,
    duration: 500 // datas_01: [{
    //   value: 1,
    //   background: 'demo-text-1',
    //   content: '11',
    //   img: 'nav_01'
    // }, {
    //   value: 2,
    //   background: 'demo-text-2',
    //   content: '22',
    //   img: 'nav_02'
    // }, {
    //   value: 3,
    //   background: 'demo-text-3',
    //   content: '33',
    //   img: 'nav_03'
    // }
    // ],

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
}, {info: {"components":{"van-search":{"path":"./../../components/vant/search/index"},"van-tab":{"path":"./../../components/vant/tab/index"},"van-tabs":{"path":"./../../components/vant/tabs/index"},"swiperNav":{"path":"./../../components/home/swiperNav/index"},"jsSelect":{"path":"./../../components/home/js-select/index"},"brand":{"path":"./../../components/home/brand/index"},"hotSpace":{"path":"./../../components/home/hotSpace/index"},"selectList":{"path":"./../../components/home/selectList/index"},"afterSale":{"path":"./../../components/home/afterSale/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });