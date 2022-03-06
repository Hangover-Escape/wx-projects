"use strict";

var _core = _interopRequireDefault(require('./../../vendor.js')(1));

var _eventHub = _interopRequireDefault(require('./../../common/eventHub.js'));

var _x = require('./../../vendor.js')(3);

var _store = _interopRequireDefault(require('./../../store/index.js'));

var _test = _interopRequireDefault(require('./../../mixins/test.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {
    // Page 级别 hook, 只对当前 Page 的 setData 生效。
    'before-setData': function beforeSetData(dirty) {
      if (Math.random() < 0.2) {
        console.log('setData canceled');
        return false; // Cancel setData
      }

      dirty.time = +new Date();
      return dirty;
    }
  },
  mixins: [_test["default"]],
  data: {
    inputmodel: 'v-model',
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    currentTime: +new Date(),
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  },
  computed: _objectSpread(_objectSpread({}, (0, _x.mapState)(['counter'])), {}, {
    testcomputed: function testcomputed() {
      return 'computed - ' + this.mynum;
    }
  }),
  methods: {
    handleViewTap: function handleViewTap() {
      console.log('handleVieTap clicked');
    },
    tap: function tap() {
      throw 'can not go here';
    },
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '自定义标题',
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });
      promise.then(function (d) {
        console.log('toast done');
      });
    },
    mixintap: function mixintap() {
      console.log('do noting from ' + this.$is);
    },
    communicate: function communicate() {
      var counters = this.$children.filter(function (com) {
        return com.$is === 'components/counter';
      }); // Get children counter

      counters[0].num++;
      counters[1].num--;

      _eventHub["default"].$emit('app-launch', {
        a: 1
      }, {
        b: 2
      });
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];

      while (i--) {
        wx.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            if (d.statusCode !== 200) {
              self.netrst += d.statusCode + '.';
            } else {
              self.netrst += d.data + '.';
            }
          }
        });
      }
    },
    counterEmit: function counterEmit(num) {
      console.log("".concat(this.$is, " receive event, the number is: ").concat(num));
    }
  },
  created: function created() {
    var self = this;
    self.currentTime = +new Date();
    self.setTimeoutTitle = '标题三秒后会被修改';
    setTimeout(function () {
      self.setTimeoutTitle = '到三秒了';
    }, 3000);
    wx.getUserInfo({
      success: function success(res) {
        self.userInfo = res.userInfo;
      }
    });
  }
}, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined }, {info: {"components":{"list":{"path":"./../../components/wepy-list"},"group":{"path":"./../../components/group"},"counter":{"path":"./../../components/counter"},"panel":{"path":"./../../components/panel"},"slide-view":{"path":"./../../$vendor/_miniprogram-slide-view@0.0.3@miniprogram-slide-view/miniprogram_dist/index"}},"on":{"8-7":["index-emit"]}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.handleViewTap.apply(_vm, $args || [$event]);
  })();
}},'8-1': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.currentTime = +new Date();
  })();
}},'8-2': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.mixintap.apply(_vm, $args || [$event]);
  })();
}},'8-3': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.communicate.apply(_vm, $args || [$event]);
  })();
}},'8-4': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}},'8-5': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.request.apply(_vm, $args || [$event]);
  })();
}},'8-6': {"tap": function proxy () {
    var _vm=this;
  return (function () {
    _vm.mynum++;
  })();
}},'8-7': {"index-emit": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.counterEmit.apply(_vm, $args || [$event]);
  })();
}}}, models: {'0': {
      type: "input",
      expr: "inputmodel",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputmodel = $v;
      
    }
    }}, refs: undefined });