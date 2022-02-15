"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageScrollMixin = void 0;

var _utils = require('./../common/utils.js');

function onPageScroll(event) {
  var _getCurrentPage = (0, _utils.getCurrentPage)(),
      _getCurrentPage$vanPa = _getCurrentPage.vanPageScroller,
      vanPageScroller = _getCurrentPage$vanPa === void 0 ? [] : _getCurrentPage$vanPa;

  vanPageScroller.forEach(function (scroller) {
    if (typeof scroller === 'function') {
      // @ts-ignore
      scroller(event);
    }
  });
}

var pageScrollMixin = function pageScrollMixin(scroller) {
  return Behavior({
    attached: function attached() {
      var page = (0, _utils.getCurrentPage)();

      if (!(0, _utils.isDef)(page)) {
        return;
      }

      if (Array.isArray(page.vanPageScroller)) {
        page.vanPageScroller.push(scroller.bind(this));
      } else {
        page.vanPageScroller = typeof page.onPageScroll === 'function' ? [page.onPageScroll.bind(page), scroller.bind(this)] : [scroller.bind(this)];
      }

      page.onPageScroll = onPageScroll;
    },
    detached: function detached() {
      var _a;

      var page = (0, _utils.getCurrentPage)();

      if ((0, _utils.isDef)(page)) {
        page.vanPageScroller = ((_a = page.vanPageScroller) === null || _a === void 0 ? void 0 : _a.filter(function (item) {
          return item !== scroller;
        })) || [];
      }
    }
  });
};

exports.pageScrollMixin = pageScrollMixin;