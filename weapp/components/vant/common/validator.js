"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = isBoolean;
exports.isDef = isDef;
exports.isFunction = isFunction;
exports.isImageUrl = isImageUrl;
exports.isNumber = isNumber;
exports.isObj = isObj;
exports.isPlainObject = isPlainObject;
exports.isPromise = isPromise;
exports.isVideoUrl = isVideoUrl;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(val) {
  return typeof val === 'function';
}

function isPlainObject(val) {
  return val !== null && _typeof(val) === 'object' && !Array.isArray(val);
}

function isPromise(val) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val["catch"]);
}

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  var type = _typeof(x);

  return x !== null && (type === 'object' || type === 'function');
}

function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;

function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}

function isVideoUrl(url) {
  return VIDEO_REGEXP.test(url);
}