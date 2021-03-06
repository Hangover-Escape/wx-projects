"use strict";

var _utils = require('./../common/utils.js');

var _component = require('./../common/component.js');

var _props = require('./props.js');

(0, _component.VantComponent)({
  field: true,
  classes: ['input-class', 'right-icon-class', 'label-class'],
  props: Object.assign(Object.assign(Object.assign(Object.assign({}, _props.commonProps), _props.inputProps), _props.textareaProps), {
    size: String,
    icon: String,
    label: String,
    error: Boolean,
    center: Boolean,
    isLink: Boolean,
    leftIcon: String,
    rightIcon: String,
    autosize: null,
    required: Boolean,
    iconClass: String,
    clickable: Boolean,
    inputAlign: String,
    customStyle: String,
    errorMessage: String,
    arrowDirection: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    readonly: {
      type: Boolean,
      observer: 'setShowClear'
    },
    clearable: {
      type: Boolean,
      observer: 'setShowClear'
    },
    clearTrigger: {
      type: String,
      value: 'focus'
    },
    border: {
      type: Boolean,
      value: true
    },
    titleWidth: {
      type: String,
      value: '6.2em'
    },
    clearIcon: {
      type: String,
      value: 'clear'
    }
  }),
  data: {
    focused: false,
    innerValue: '',
    showClear: false
  },
  created: function created() {
    this.value = this.data.value;
    this.setData({
      innerValue: this.value
    });
  },
  methods: {
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? '' : _ref$value;

      this.value = value;
      this.setShowClear();
      this.emitChange();
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.setShowClear();
      this.$emit('focus', event.detail);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.setShowClear();
      this.$emit('blur', event.detail);
    },
    onClickIcon: function onClickIcon() {
      this.$emit('click-icon');
    },
    onClickInput: function onClickInput(event) {
      this.$emit('click-input', event.detail);
    },
    onClear: function onClear() {
      var _this = this;

      this.setData({
        innerValue: ''
      });
      this.value = '';
      this.setShowClear();
      (0, _utils.nextTick)(function () {
        _this.emitChange();

        _this.$emit('clear', '');
      });
    },
    onConfirm: function onConfirm(event) {
      var _ref2 = event.detail || {},
          _ref2$value = _ref2.value,
          value = _ref2$value === void 0 ? '' : _ref2$value;

      this.value = value;
      this.setShowClear();
      this.$emit('confirm', value);
    },
    setValue: function setValue(value) {
      this.value = value;
      this.setShowClear();

      if (value === '') {
        this.setData({
          innerValue: ''
        });
      }

      this.emitChange();
    },
    onLineChange: function onLineChange(event) {
      this.$emit('linechange', event.detail);
    },
    onKeyboardHeightChange: function onKeyboardHeightChange(event) {
      this.$emit('keyboardheightchange', event.detail);
    },
    emitChange: function emitChange() {
      var _this2 = this;

      this.setData({
        value: this.value
      });
      (0, _utils.nextTick)(function () {
        _this2.$emit('input', _this2.value);

        _this2.$emit('change', _this2.value);
      });
    },
    setShowClear: function setShowClear() {
      var _this$data = this.data,
          clearable = _this$data.clearable,
          readonly = _this$data.readonly,
          clearTrigger = _this$data.clearTrigger;
      var focused = this.focused,
          value = this.value;
      var showClear = false;

      if (clearable && !readonly) {
        var hasValue = !!value;
        var trigger = clearTrigger === 'always' || clearTrigger === 'focus' && focused;
        showClear = hasValue && trigger;
      }

      this.setData({
        showClear: showClear
      });
    },
    noop: function noop() {}
  }
});