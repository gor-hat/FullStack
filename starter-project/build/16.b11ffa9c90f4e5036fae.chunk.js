(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{a5e146f1f3de3987ce62:function(t,e,n){"use strict";n.r(e);var r,o=n("8af190b70a6bc55c6f1b"),i=n.n(o),c=n("0d7f0986bcd2f33d8a2a"),a=n("1037a6e0d5914309f74c"),u=n.n(a),f=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),l=n("4dd2a92e69dcbe1bab10"),s=n("387190e83edf0e5eb8f6");function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=o;else if(c>1){for(var a=new Array(c),u=0;u<c;u++)a[u]=arguments[u+3];e.children=a}if(e&&i)for(var f in i)void 0===e[f]&&(e[f]=i[f]);else e||(e=i||{});return{$$typeof:r,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"===typeof e))return e;return v(t)}(this,n)}}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,i.a.Component);var e,n,r,o=m(a);function a(){var t,e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return t=o.call.apply(o,[this].concat(c)),e=v(t),r={valueForm:[]},(n="state")in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,t}return e=a,(n=[{key:"submitForm",value:function(t){var e=this;setTimeout(function(){e.setState({valueForm:t}),console.log("You submitted:\n\n".concat(e.state.valueForm))},500)}},{key:"render",value:function(){var t=this,e=u.a.name+" - Reset Password",n=u.a.desc,r=this.props.classes;return y("div",{className:r.root},void 0,y(c.Helmet,{},void 0,y("title",{},void 0,e),y("meta",{name:"description",content:n}),y("meta",{property:"og:title",content:e}),y("meta",{property:"og:description",content:n}),y("meta",{property:"twitter:title",content:e}),y("meta",{property:"twitter:description",content:n})),y("div",{className:r.container},void 0,y("div",{className:r.userFormWrap},void 0,y(l.l,{onSubmit:function(e){return t.submitForm(e)}}))))}}])&&b(e.prototype,n),r&&b(e,r),a}();e.default=Object(f.withStyles)(s.a)(w)}}]);