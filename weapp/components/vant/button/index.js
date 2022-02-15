"use strict";

var _component = require('./../common/component.js');

var _button = require('./../mixins/button.js');

var _version = require('./../common/version.js');

var mixins = [_button.button];

if ((0, _version.canIUseFormFieldButton)()) {
  mixins.push('wx://form-field-button');
}

(0, _component.VantComponent)({
  mixins: mixins,
  classes: ['hover-class', 'loading-class'],
  data: {
    baseStyle: ''
  },
  props: {
    formType: String,
    icon: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    },
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    loadingType: {
      type: String,
      value: 'circular'
    },
    type: {
      type: String,
      value: 'default'
    },
    dataset: null,
    size: {
      type: String,
      value: 'normal'
    },
    loadingSize: {
      type: String,
      value: '20px'
    },
    color: String
  },
  methods: {
    onClick: function onClick(event) {
      var _this = this;

      this.$emit('click', event);
      var _this$data = this.data,
          canIUseGetUserProfile = _this$data.canIUseGetUserProfile,
          openType = _this$data.openType,
          getUserProfileDesc = _this$data.getUserProfileDesc,
          lang = _this$data.lang;

      if (openType === 'getUserInfo' && canIUseGetUserProfile) {
        wx.getUserProfile({
          desc: getUserProfileDesc || '  ',
          lang: lang || 'en',
          complete: function complete(userProfile) {
            _this.$emit('getuserinfo', userProfile);
          }
        });
      }
    }
  }
});