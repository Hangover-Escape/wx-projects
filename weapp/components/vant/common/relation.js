"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChildren = useChildren;
exports.useParent = useParent;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useParent(name, onEffect) {
  var path = "../".concat(name, "/index");
  return {
    relations: _defineProperty({}, path, {
      type: 'ancestor',
      linked: function linked() {
        onEffect && onEffect.call(this);
      },
      linkChanged: function linkChanged() {
        onEffect && onEffect.call(this);
      },
      unlinked: function unlinked() {
        onEffect && onEffect.call(this);
      }
    }),
    mixin: Behavior({
      created: function created() {
        var _this = this;

        Object.defineProperty(this, 'parent', {
          get: function get() {
            return _this.getRelationNodes(path)[0];
          }
        });
        Object.defineProperty(this, 'index', {
          // @ts-ignore
          get: function get() {
            var _a, _b;

            return (_b = (_a = _this.parent) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.indexOf(_this);
          }
        });
      }
    })
  };
}

function useChildren(name, onEffect) {
  var path = "../".concat(name, "/index");
  return {
    relations: _defineProperty({}, path, {
      type: 'descendant',
      linked: function linked(target) {
        onEffect && onEffect.call(this, target);
      },
      linkChanged: function linkChanged(target) {
        onEffect && onEffect.call(this, target);
      },
      unlinked: function unlinked(target) {
        onEffect && onEffect.call(this, target);
      }
    }),
    mixin: Behavior({
      created: function created() {
        var _this2 = this;

        Object.defineProperty(this, 'children', {
          get: function get() {
            return _this2.getRelationNodes(path) || [];
          }
        });
      }
    })
  };
}