"use strict";

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var _utils = require('./../common/utils.js');

var _validator = require('./../common/validator.js');

var _relation = require('./../common/relation.js');

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

(0, _component.VantComponent)({
  mixins: [_touch.touch],
  classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
  relation: (0, _relation.useChildren)('tab', function () {
    this.updateTabs();
  }),
  props: {
    sticky: Boolean,
    border: Boolean,
    swipeable: Boolean,
    titleActiveColor: String,
    titleInactiveColor: String,
    color: String,
    animated: {
      type: Boolean,
      observer: function observer() {
        var _this = this;

        this.children.forEach(function (child, index) {
          return child.updateRender(index === _this.data.currentIndex, _this);
        });
      }
    },
    lineWidth: {
      type: null,
      value: 40,
      observer: 'resize'
    },
    lineHeight: {
      type: null,
      value: -1
    },
    active: {
      type: null,
      value: 0,
      observer: function observer(name) {
        if (name !== this.getCurrentName()) {
          this.setCurrentIndexByName(name);
        }
      }
    },
    type: {
      type: String,
      value: 'line'
    },
    ellipsis: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 0.3
    },
    zIndex: {
      type: Number,
      value: 1
    },
    swipeThreshold: {
      type: Number,
      value: 5,
      observer: function observer(value) {
        this.setData({
          scrollable: this.children.length > value || !this.data.ellipsis
        });
      }
    },
    offsetTop: {
      type: Number,
      value: 0
    },
    lazyRender: {
      type: Boolean,
      value: true
    }
  },
  data: {
    tabs: [],
    scrollLeft: 0,
    scrollable: false,
    currentIndex: 0,
    container: null,
    skipTransition: true,
    scrollWithAnimation: false,
    lineOffsetLeft: 0
  },
  mounted: function mounted() {
    var _this2 = this;

    (0, _utils.requestAnimationFrame)(function () {
      _this2.swiping = true;

      _this2.setData({
        container: function container() {
          return _this2.createSelectorQuery().select('.van-tabs');
        }
      });

      _this2.resize();

      _this2.scrollIntoView();
    });
  },
  methods: {
    updateTabs: function updateTabs() {
      var _this$children = this.children,
          children = _this$children === void 0 ? [] : _this$children,
          data = this.data;
      this.setData({
        tabs: children.map(function (child) {
          return child.data;
        }),
        scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
      });
      this.setCurrentIndexByName(data.active || this.getCurrentName());
    },
    trigger: function trigger(eventName, child) {
      var currentIndex = this.data.currentIndex;
      var currentChild = child || this.children[currentIndex];

      if (!(0, _validator.isDef)(currentChild)) {
        return;
      }

      this.$emit(eventName, {
        index: currentChild.index,
        name: currentChild.getComputedName(),
        title: currentChild.data.title
      });
    },
    onTap: function onTap(event) {
      var _this3 = this;

      var index = event.currentTarget.dataset.index;
      var child = this.children[index];

      if (child.data.disabled) {
        this.trigger('disabled', child);
      } else {
        this.setCurrentIndex(index);
        (0, _utils.nextTick)(function () {
          _this3.trigger('click');
        });
      }
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var _this$children2 = this.children,
          children = _this$children2 === void 0 ? [] : _this$children2;
      var matched = children.filter(function (child) {
        return child.getComputedName() === name;
      });

      if (matched.length) {
        this.setCurrentIndex(matched[0].index);
      }
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      var _this4 = this;

      var data = this.data,
          _this$children3 = this.children,
          children = _this$children3 === void 0 ? [] : _this$children3;

      if (!(0, _validator.isDef)(currentIndex) || currentIndex >= children.length || currentIndex < 0) {
        return;
      }

      (0, _utils.groupSetData)(this, function () {
        children.forEach(function (item, index) {
          var active = index === currentIndex;

          if (active !== item.data.active || !item.inited) {
            item.updateRender(active, _this4);
          }
        });
      });

      if (currentIndex === data.currentIndex) {
        return;
      }

      var shouldEmitChange = data.currentIndex !== null;
      this.setData({
        currentIndex: currentIndex
      });
      (0, _utils.requestAnimationFrame)(function () {
        _this4.resize();

        _this4.scrollIntoView();
      });
      (0, _utils.nextTick)(function () {
        _this4.trigger('input');

        if (shouldEmitChange) {
          _this4.trigger('change');
        }
      });
    },
    getCurrentName: function getCurrentName() {
      var activeTab = this.children[this.data.currentIndex];

      if (activeTab) {
        return activeTab.getComputedName();
      }
    },
    resize: function resize() {
      var _this5 = this;

      if (this.data.type !== 'line') {
        return;
      }

      var _this$data = this.data,
          currentIndex = _this$data.currentIndex,
          ellipsis = _this$data.ellipsis,
          skipTransition = _this$data.skipTransition;
      Promise.all([(0, _utils.getAllRect)(this, '.van-tab'), (0, _utils.getRect)(this, '.van-tabs__line')]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            _ref2$ = _ref2[0],
            rects = _ref2$ === void 0 ? [] : _ref2$,
            lineRect = _ref2[1];

        var rect = rects[currentIndex];

        if (rect == null) {
          return;
        }

        var lineOffsetLeft = rects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);
        lineOffsetLeft += (rect.width - lineRect.width) / 2 + (ellipsis ? 0 : 8);

        _this5.setData({
          lineOffsetLeft: lineOffsetLeft
        });

        _this5.swiping = true;

        if (skipTransition) {
          (0, _utils.nextTick)(function () {
            _this5.setData({
              skipTransition: false
            });
          });
        }
      });
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView() {
      var _this6 = this;

      var _this$data2 = this.data,
          currentIndex = _this$data2.currentIndex,
          scrollable = _this$data2.scrollable,
          scrollWithAnimation = _this$data2.scrollWithAnimation;

      if (!scrollable) {
        return;
      }

      Promise.all([(0, _utils.getAllRect)(this, '.van-tab'), (0, _utils.getRect)(this, '.van-tabs__nav')]).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            tabRects = _ref4[0],
            navRect = _ref4[1];

        var tabRect = tabRects[currentIndex];
        var offsetLeft = tabRects.slice(0, currentIndex).reduce(function (prev, curr) {
          return prev + curr.width;
        }, 0);

        _this6.setData({
          scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
        });

        if (!scrollWithAnimation) {
          (0, _utils.nextTick)(function () {
            _this6.setData({
              scrollWithAnimation: true
            });
          });
        }
      });
    },
    onTouchScroll: function onTouchScroll(event) {
      this.$emit('scroll', event.detail);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.data.swipeable) return;
      this.swiping = true;
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.data.swipeable || !this.swiping) return;
      this.touchMove(event);
    },
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      if (!this.data.swipeable || !this.swiping) return;
      var direction = this.direction,
          deltaX = this.deltaX,
          offsetX = this.offsetX;
      var minSwipeDistance = 50;

      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        var index = this.getAvaiableTab(deltaX);

        if (index !== -1) {
          this.setCurrentIndex(index);
        }
      }

      this.swiping = false;
    },
    getAvaiableTab: function getAvaiableTab(direction) {
      var _this$data3 = this.data,
          tabs = _this$data3.tabs,
          currentIndex = _this$data3.currentIndex;
      var step = direction > 0 ? -1 : 1;

      for (var i = step; currentIndex + i < tabs.length && currentIndex + i >= 0; i += step) {
        var index = currentIndex + i;

        if (index >= 0 && index < tabs.length && tabs[index] && !tabs[index].disabled) {
          return index;
        }
      }

      return -1;
    }
  }
});