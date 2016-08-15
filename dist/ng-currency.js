!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("angular")):"function"==typeof define&&define.amd?define("ng-currency",["angular"],n):"object"==typeof exports?exports["ng-currency"]=n(require("angular")):e["ng-currency"]=n(e.angular)}(this,function(e){return function(e){function n(t){if(r[t])return r[t].exports;var u=r[t]={exports:{},id:t,loaded:!1};return e[t].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var u=r(2),i=t(u),o=r(1),c=t(o),a=i["default"].module("ng-currency",[]);a.directive("ngCurrency",c["default"]),n["default"]=a.name},function(e,n){"use strict";function r(e,n,r){return{require:"ngModel",link:function(t,u,i,o){function c(){$&&(o.$validate(),t.$emit("currencyRedraw"))}function a(e){return RegExp("\\d|\\-|\\"+e,"g")}function l(e){return RegExp("\\-{0,1}((\\"+e+")|([0-9]{1,}\\"+e+"?))&?[0-9]{0,"+R+"}","g")}function f(r){r=String(r);var t=n.NUMBER_FORMATS.DECIMAL_SEP,u=null;r.indexOf(n.NUMBER_FORMATS.DECIMAL_SEP)===-1&&r.indexOf(".")!==-1&&R>0&&(t=".");var i=e("currency")("-1",d(),R),o=RegExp("[0-9."+n.NUMBER_FORMATS.DECIMAL_SEP+n.NUMBER_FORMATS.GROUP_SEP+"]+"),c=i.replace(o.exec(i),""),f=r.replace(o.exec(r),"");return c===f&&(r="-"+o.exec(r)),RegExp("^-[\\s]*$","g").test(r)&&(r="-0"),a(t).test(r)&&(u=r.match(a(t)).join("").match(l(t)),u=u?u[0].replace(t,"."):null),u}function d(){return void 0!==g?g:n.NUMBER_FORMATS.CURRENCY_SYM}function s(){for(var e=o.$$rawModelValue,n=o.$formatters.length-1;n>=0;n--)e=o.$formatters[n](e);o.$setViewValue(e),o.$render()}function v(e){if(N&&p&&[void 0,null,""].indexOf(e)===-1){if(void 0!==m&&e>m)return m;if(void 0!==x&&e<x)return x}return e}var $=void 0,p=void 0,x=void 0,m=void 0,g=void 0,M=void 0,N=!0,R=2,b=!0;i.$observe("ngCurrency",function(e){N="false"!==e,c()}),i.$observe("hardCap",function(e){p="true"===e,c()}),i.$observe("min",function(e){x=e?Number(e):void 0,c()}),i.$observe("max",function(e){m=e?Number(e):void 0,c()}),i.$observe("currencySymbol",function(e){g=e,c()}),i.$observe("ngRequired",function(e){M=e,c()}),i.$observe("fraction",function(e){R=e||2,c()}),i.$observe("autoSelect",function(e){b="false"!==e,c()}),r(function(){$=!0,c(),o.$setPristine()}),o.$parsers.push(function(e){if(N&&[void 0,null,""].indexOf(e)===-1){var n=f(e);return"."!==n&&"-."!==n||(n=".0"),Number(n)}return e}),o.$parsers.push(v),o.$formatters.push(function(n){return N&&[void 0,null,""].indexOf(n)===-1?e("currency")(n,d(),R):n}),o.$validators.min=function(e){return!(M||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!N||[void 0,null].indexOf(x)!==-1||isNaN(x)||e>=x)},o.$validators.max=function(e){return!(M||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!N||[void 0,null].indexOf(m)!==-1||isNaN(m)||e<=m)},o.$validators.fraction=function(e){return!N||!e||!isNaN(e)},t.$on("currencyRedraw",function(){if($){o.$commitViewValue();var e=v(o.$$rawModelValue);e!==o.$$rawModelValue&&(o.$setViewValue(e),o.$commitViewValue()),s()}}),u.on("focus",function(){var e=o.$$rawModelValue;e=isNaN(e)||""===e||null===e?"":Number(e).toFixed(R),o.$viewValue!==e&&(o.$setViewValue(e),o.$render(),u.triggerHandler("focus"),b&&u.select())}),u.on("blur",function(){o.$commitViewValue(),s()})}}}r.$inject=["$filter","$locale","$timeout"],Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r},function(n,r){n.exports=e}])});
//# sourceMappingURL=ng-currency.js.map