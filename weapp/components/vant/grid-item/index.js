"use strict";

var _component = require('./../common/component.js');

var _relation = require('./../common/relation.js');

var _link = require('./../mixins/link.js');

(0, _component.VantComponent)({
  relation: (0, _relation.useParent)('grid'),
  classes: ['content-class', 'icon-class', 'text-class'],
  mixins: [_link.link],
  props: {
    icon: String,
    iconColor: String,
    iconPrefix: {
      type: String,
      value: 'van-icon'
    },
    dot: Boolean,
    info: null,
    badge: null,
    text: String,
    useSlot: Boolean
  },
  data: {
    viewStyle: ''
  },
  mounted: function mounted() {
    this.updateStyle();
  },
  methods: {
    updateStyle: function updateStyle() {
      if (!this.parent) {
        return;
      }

      var _this$parent = this.parent,
          data = _this$parent.data,
          children = _this$parent.children;
      var columnNum = data.columnNum,
          border = data.border,
          square = data.square,
          gutter = data.gutter,
          clickable = data.clickable,
          center = data.center,
          direction = data.direction,
          reverse = data.reverse,
          iconSize = data.iconSize;
      this.setData({
        center: center,
        border: border,
        square: square,
        gutter: gutter,
        clickable: clickable,
        direction: direction,
        reverse: reverse,
        iconSize: iconSize,
        index: children.indexOf(this),
        columnNum: columnNum
      });
    },
    onClick: function onClick() {
      this.$emit('click');
      this.jumpLink();
    }
  }
});