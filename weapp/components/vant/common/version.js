"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canIUseAnimate = canIUseAnimate;
exports.canIUseCanvas2d = canIUseCanvas2d;
exports.canIUseFormFieldButton = canIUseFormFieldButton;
exports.canIUseGetUserProfile = canIUseGetUserProfile;
exports.canIUseGroupSetData = canIUseGroupSetData;
exports.canIUseModel = canIUseModel;
exports.canIUseNextTick = canIUseNextTick;

var _utils = require('./utils.js');

function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }

  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i], 10);
    var num2 = parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

function gte(version) {
  var system = (0, _utils.getSystemInfoSync)();
  return compareVersion(system.SDKVersion, version) >= 0;
}

function canIUseModel() {
  return gte('2.9.3');
}

function canIUseFormFieldButton() {
  return gte('2.10.3');
}

function canIUseAnimate() {
  return gte('2.9.0');
}

function canIUseGroupSetData() {
  return gte('2.4.0');
}

function canIUseNextTick() {
  return wx.canIUse('nextTick');
}

function canIUseCanvas2d() {
  return gte('2.9.0');
}

function canIUseGetUserProfile() {
  return !!wx.getUserProfile;
}