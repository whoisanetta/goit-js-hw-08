!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a.default(e,t,r[t])}))}return e};var i,a=(i=o("hKHmD"))&&i.__esModule?i:{default:i};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t){return l.default(e)||c.default(e,t)||d.default(e,t)||s.default()};var l=p(o("8slrw")),c=p(o("7AJDX")),s=p(o("ifqQW")),d=p(o("auk6i"));function p(e){return e&&e.__esModule?e:{default:e}}var v,y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var b="Expected a function",m=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,j=/^0o[0-7]+$/i,_=parseInt,x="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,w=x||h||Function("return this")(),S=Object.prototype.toString,M=Math.max,P=Math.min,E=function(){return w.Date.now()};function T(e,t,r){var n,o,u,i,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(b);function p(t){var r=n,u=o;return n=o=void 0,l=t,i=e.apply(u,r)}function v(e){return l=e,a=setTimeout(m,t),c?p(e):i}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=u}function m(){var e=E();if(y(e))return g(e);a=setTimeout(m,function(e){var r=t-(e-f);return s?P(r,u-(e-l)):r}(e))}function g(e){return a=void 0,d&&n?p(e):(n=o=void 0,i)}function O(){var e=E(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return v(f);if(s)return a=setTimeout(m,t),p(f)}return void 0===a&&(a=setTimeout(m,t)),i}return t=A(t)||0,N(r)&&(c=!!r.leading,u=(s="maxWait"in r)?M(A(r.maxWait)||0,t):u,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?i:g(E())},O}function N(t){var r=void 0===t?"undefined":e(y)(t);return!!t&&("object"==r||"function"==r)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(y)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==S.call(t)}(t))return NaN;if(N(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=N(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var n=O.test(t);return n||j.test(t)?_(t.slice(2),n?2:8):g.test(t)?NaN:+t}v=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(b);return N(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),T(e,t,{leading:n,maxWait:t,trailing:o})};var D="feedback-form-state",I={},k=document.querySelector(".feedback-form"),q=localStorage.getItem(D),W=JSON.parse(q);W&&(Object.entries(W).forEach((function(t){var r=e(f)(t,2),n=r[0],o=r[1];document.querySelector("[name='".concat(n,"']")).value=o})),I=e(u)({},W));k.addEventListener("input",e(v)((function(e){var t=e.target.name,r=e.target.value;I["".concat(t)]=r;var n=JSON.stringify(I);localStorage.setItem(D,n)}),500)),k.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem(D),Object.entries(I).forEach((function(t){var r=e(f)(t,2),n=r[0];r[1]&&(document.querySelector("[name='".concat(n,"']")).value="")})),console.log(I),I={}}))}();
//# sourceMappingURL=03-feedback.bfd85adf.js.map