"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = void 0;

var _version = require('./../common/version.js');

var button = Behavior({
  externalClasses: ['hover-class'],
  properties: {
    id: String,
    lang: String,
    businessId: Number,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    ariaLabel: String,
    openType: String,
    getUserProfileDesc: String
  },
  data: {
    canIUseGetUserProfile: (0, _version.canIUseGetUserProfile)()
  },
  methods: {
    onGetUserInfo: function onGetUserInfo(event) {
      this.triggerEvent('getuserinfo', event.detail);
    },
    onContact: function onContact(event) {
      this.triggerEvent('contact', event.detail);
    },
    onGetPhoneNumber: function onGetPhoneNumber(event) {
      this.triggerEvent('getphonenumber', event.detail);
    },
    onError: function onError(event) {
      this.triggerEvent('error', event.detail);
    },
    onLaunchApp: function onLaunchApp(event) {
      this.triggerEvent('launchapp', event.detail);
    },
    onOpenSetting: function onOpenSetting(event) {
      this.triggerEvent('opensetting', event.detail);
    }
  }
});
exports.button = button;