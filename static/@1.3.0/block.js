/*!
  * heyform 1.3.0
  * https://heyform.net
  *
  * Copyright 2021 Heyooo, Inc. All Rights Reserved
  */
!function(){"use strict";var e={855:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.uniqueArray=t.isFormData=t.isBool=t.isFalse=t.isTrue=t.isEqual=t.isValid=t.isEmpty=t.isPlainObject=t.isNil=t.isUndefined=t.isNull=t.isFunction=t.isError=t.isRegExp=t.isDate=t.isObject=t.isSymbol=t.isMap=t.isSet=t.isNan=t.isValidArray=t.isArray=t.isNumber=t.isString=t.isBoolean=t.isUUID=void 0;const n=r(186),o=r(278),i=/^[\s\f\n\r\t\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff\x09\x0a\x0b\x0c\x0d\x20\xa0]+$/;function a(e){return"boolean"===n.type(e)}function l(e){return"string"===n.type(e)}function s(e){return"number"===n.type(e)}function u(e){return t.isArray(e)&&e.length>0}function c(e){return s(e)&&Number.isNaN(e)}function f(e){return"set"===n.type(e)}function m(e){return"map"===n.type(e)}function d(e){return"symbol"===n.type(e)}function p(e){return"object"===n.type(e)}function y(e){return"date"===n.type(e)}function h(e){return"regexp"===n.type(e)}function b(e){return"error"===n.type(e)}function g(e){return"function"===n.type(e)}function v(e){return"null"===n.type(e)}function E(e){return"undefined"===n.type(e)}function w(e){return v(e)||E(e)}function A(e){if(!p(e))return!1;const t=e.constructor;if("function"!=typeof t)return!1;const r=t.prototype;return!!p(r)&&r.hasOwnProperty("isPrototypeOf")}function F(e){if(w(e))return!0;if(a(e))return!1;if(s(e))return!1;if(l(e))return 0===e.length||i.test(e);if(g(e)||t.isArray(e))return 0===e.length;switch(n.type(e)){case"file":case"map":case"set":return 0===e.size;case"object":for(const t in e)if(Object.hasOwnProperty.call(e,t))return!1;return!0}return!1}function C(e){return!F(e)}function x(e,t){return String(e)===String(t)}function _(e){return!0===e||"true"===e||x(e,"1")}function N(e){return!1===e||"false"===e||x(e,"0")}function S(e){return _(e)||N(e)}function O(e){return"formdata"===n.type(e)}function j(e){return u(e)?Array.from(new Set(e)):[]}t.isUUID=o.default,t.isBoolean=a,t.isString=l,t.isNumber=s,t.isArray=Array.isArray,t.isValidArray=u,t.isNan=c,t.isSet=f,t.isMap=m,t.isSymbol=d,t.isObject=p,t.isDate=y,t.isRegExp=h,t.isError=b,t.isFunction=g,t.isNull=v,t.isUndefined=E,t.isNil=w,t.isPlainObject=A,t.isEmpty=F,t.isValid=C,t.isEqual=x,t.isTrue=_,t.isFalse=N,t.isBool=S,t.isFormData=O,t.uniqueArray=j,t.default={isUUID:t.isUUID,isBoolean:a,isString:l,isNumber:s,isArray:t.isArray,isValidArray:u,isNan:c,isSet:f,isMap:m,isSymbol:d,isObject:p,isDate:y,isRegExp:h,isError:b,isFunction:g,isNull:v,isUndefined:E,isNil:w,isPlainObject:A,isEmpty:F,isValid:C,isEqual:x,isTrue:_,isFalse:N,isBool:S,isFormData:O,uniqueArray:j}},186:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.type=void 0;const r=Object.prototype.toString;t.type=function(e){if(null===e)return"null";let t=typeof e;if("object"!==t)return t;t=r.call(e).slice(8,-1);const n=t.toLowerCase();return"object"!==n&&("number"===n||"boolean"===n||"string"===n)?t:n}},278:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";(0,o.default)(e);var r=i[t];return r&&r.test(e)};var n,o=(n=r(571))&&n.__esModule?n:{default:n};var i={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};e.exports=t.default,e.exports.default=t.default},571:function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t;throw t=null===e?"null":"object"===(t=r(e))&&e.constructor&&e.constructor.hasOwnProperty("name")?e.constructor.name:"a ".concat(t),new TypeError("Expected string but received ".concat(t,"."))}},e.exports=t.default,e.exports.default=t.default}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=r(855);const t=React;var n=r.n(t),o=window._heyformBlock.embedUrlPrefix,i=new RegExp("^"+o+"/([a-z0-9A-Z]{8,})$");function a(e){return o+"/"+e}var l,s,u,c,f,m,d,p,y,h=function(e){var t=e.formId,r=e.width,o=e.height,i=a(t);return n().createElement("div",{className:"heyform-block"},n().createElement("iframe",{src:i,style:{width:r||"100%",height:o||"100%",border:"none",overflow:"hidden"}}))},b=function(e){var t=e.formId,r=e.width,o=e.height,i=a(t);return n().createElement("figure",{className:"wp-block-embed-heyform wp-block-embed"},n().createElement("div",{className:"wp-block-embed__wrapper"},n().createElement("iframe",{src:i,style:{width:r||"100%",height:o||"100%",border:"none",overflow:"hidden"}})))},g=function(){return n().createElement("svg",{width:"30px",height:"35px",viewBox:"0 0 30 35",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n().createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n().createElement("g",{transform:"translate(-578.000000, -480.000000)",fillRule:"nonzero"},n().createElement("g",{transform:"translate(578.000000, 480.000000)"},n().createElement("g",{transform:"translate(0.000000, 0.000000)"},n().createElement("path",{d:"M14.5123812,0.509309521 C15.1371378,0.979310763 15.4842037,1.61985512 15.553579,2.43094261 L15.5644641,2.42471856 L15.5644593,2.61502158 C15.5658717,2.65720603 15.5665779,2.6998242 15.5665779,2.7428761 L15.564447,2.74403728 L15.5644534,19.2066736 C15.5790654,20.0654422 15.8999708,20.7454589 16.5271696,21.2467236 C17.4673224,21.9182318 18.4476535,21.9806433 19.468163,21.4339579 L6.12285297,29.1205189 C5.13218783,29.6307633 4.18464488,29.5864957 3.28022415,28.9877158 C2.65681076,28.5187251 2.30989526,27.8799237 2.23947766,27.0713118 L2.22602736,27.07902 L2.22606102,10.214869 C2.19435333,9.39164506 1.87414489,8.73678933 1.26543571,8.25030176 C0.9651084,8.03579168 0.660681086,7.88343701 0.352153755,7.7932378 C-0.0860588108,7.67726486 -0.0860588108,7.13063748 0.236965271,6.96150262 C0.973090982,6.53751282 4.78401998,4.34251412 11.6697523,0.376506485 C12.6604175,-0.133737986 13.6079604,-0.0894703069 14.5123812,0.509309521 Z",fill:"#9DE8FF"}),n().createElement("path",{d:"M15.5644152,19.2043695 C15.5550528,17.5463948 14.2017991,15.1358382 11.4603297,15.1358382 C10.6985402,15.1358382 9.98846304,15.3349017 9.33009827,15.7330287 L21.5652763,8.68775965 C22.1717914,8.3353857 22.8772283,8.13350541 23.6300004,8.13350541 C25.8874805,8.13350541 27.719259,9.94908237 27.7340447,12.1943401 C27.7340476,12.1947869 27.7340505,12.2039305 27.7340533,12.221771 L27.7341348,24.657323 C27.7488913,25.5157974 28.0697931,26.1956064 28.6968403,26.69675 C29.000635,26.9137366 29.3086249,27.0671244 29.6208101,27.1569132 C30.0708622,27.3029218 30.0191922,27.8291754 29.7273844,27.9843558 C28.0269421,28.9638141 24.6049106,30.9381845 19.4612897,33.9074671 C18.4706246,34.4177115 17.5230816,34.3734439 16.6186609,33.774664 C15.9936838,33.3044969 15.6465934,32.6636663 15.5773897,31.8521721 L15.5644641,31.8595989 L15.5644641,28.7841315 C15.5644532,25.5885265 15.5644369,19.2082198 15.5644152,19.2043695 Z",fill:"#106BF3"}),n().createElement("path",{d:"M11.4603297,15.1358382 C13.7269806,15.1358382 15.5644641,16.9661963 15.5644641,19.2240575 C15.5644641,21.4904619 15.5644641,22.9772633 15.5644641,23.6844616 C15.5644641,23.6844616 8.50280375,27.7488772 7.47927655,28.3379794 C7.39930523,28.3840078 6.07730627,29.1428503 6.07730627,29.1428503 C7.25143039,28.3840078 7.35619533,27.3660711 7.35619533,26.9140783 C7.35619533,25.6034476 7.35619533,23.0401073 7.35619533,19.2240575 C7.35619533,16.9661963 9.19367889,15.1358382 11.4603297,15.1358382 Z",fill:"#57AAF9"}))))))},v=function(e){var t=e.onChange,r=window.wp.i18n.__;return n().createElement("div",{className:"components-placeholder wp-block-embed is-large"},n().createElement("div",{className:"components-placeholder__label"},n().createElement("span",{className:"block-editor-block-icon"},n().createElement(g,null)),n().createElement("span",null,r("HeyFormURL","heyform"))),n().createElement("div",{className:"components-placeholder__instructions"},r("Paste a link to the content you want to display on your site.","heyform")),n().createElement("div",{className:"components-placeholder__fieldset"},n().createElement("form",{onSubmit:t},n().createElement("input",{type:"url",className:"components-placeholder__input","aria-label":r("HeyFormURL","heyform"),placeholder:r("Enter HeyForm sharing URL here...","heyform"),name:"formId"}),n().createElement("button",{type:"submit",className:"components-button is-primary"},r("Embed","heyform"))),n().createElement("div",{className:"components-placeholder__learn-more"},n().createElement("a",{className:"components-external-link",href:"https://help.heyform.net/Integrate-with-WordPress-42fb2431684c4f519361e8539689265e",target:"_blank",rel:"external noreferrer noopener"},r("Learn more about embeds","heyform"),n().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",className:"components-external-link__icon",role:"img","aria-hidden":"true",focusable:"false"},n().createElement("path",{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"}))))))};l=window.wp,s=l.blocks,u=l.components,c=l.editor,f=l.i18n,m=u.TextControl,d=c.InspectorAdvancedControls,p=s.registerBlockType,y=f.__,p("heyform/heyform-block",{title:y("HeyForm","heyform"),category:"common",icon:g,description:y("Serverless Online Form Builder & Data Management Platform","heyform"),attributes:{formId:{type:"string"},width:{type:"string",default:"100%"},height:{type:"string",default:"600px"}},edit:function(t){var r=t.attributes,o=r.formId,a=r.width,l=r.height,s=t.setAttributes;return n().createElement("div",{className:"components-heyform"},(0,e.isValid)(o)?n().createElement(b,{formId:o,width:a,height:l}):n().createElement(v,{onChange:function(e){var t=e.target.elements.formId.value.match(i);if(t){var r=t[1];s({formId:r})}e.preventDefault()}}),n().createElement(d,null,n().createElement(m,{label:y("Form Width","heyform"),value:a,onChange:function(e){return s({width:e})}}),n().createElement(m,{label:y("Form Height","heyform"),value:l,onChange:function(e){return s({height:e})}})))},save:function(e){var t=e.attributes,r=t.formId,o=t.width,i=t.height;return n().createElement(h,{formId:r,width:o,height:i})}})}()}();
//# sourceMappingURL=block.js.map