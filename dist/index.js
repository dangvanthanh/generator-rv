(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueComponentName = factory());
}(this, (function () { 'use strict';

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();






var Hello = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v(_vm._s(_vm.msg))])])},staticRenderFns: [],
  data: function data () {
    return {
      msg: 'Hello Vue Component'
    }
  }
}

return Hello;

})));
//# sourceMappingURL=index.js.map
