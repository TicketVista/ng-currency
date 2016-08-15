<<<<<<< HEAD
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("angular")):"function"==typeof define&&define.amd?define("ng-currency",["angular"],n):"object"==typeof exports?exports["ng-currency"]=n(require("angular")):e["ng-currency"]=n(e.angular)}(this,function(e){return function(e){function n(t){if(r[t])return r[t].exports;var u=r[t]={exports:{},id:t,loaded:!1};return e[t].call(u.exports,u,u.exports,n),u.loaded=!0,u.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var u=r(2),i=t(u),o=r(1),c=t(o),a=i["default"].module("ng-currency",[]);a.directive("ngCurrency",c["default"]),n["default"]=a.name},function(e,n){"use strict";function r(e,n,r){return{require:"ngModel",link:function(t,u,i,o){function c(){$&&(o.$validate(),t.$emit("currencyRedraw"))}function a(e){return RegExp("\\d|\\-|\\"+e,"g")}function l(e){return RegExp("\\-{0,1}((\\"+e+")|([0-9]{1,}\\"+e+"?))&?[0-9]{0,"+R+"}","g")}function f(r){r=String(r);var t=n.NUMBER_FORMATS.DECIMAL_SEP,u=null;r.indexOf(n.NUMBER_FORMATS.DECIMAL_SEP)===-1&&r.indexOf(".")!==-1&&R>0&&(t=".");var i=e("currency")("-1",d(),R),o=RegExp("[0-9."+n.NUMBER_FORMATS.DECIMAL_SEP+n.NUMBER_FORMATS.GROUP_SEP+"]+"),c=i.replace(o.exec(i),""),f=r.replace(o.exec(r),"");return c===f&&(r="-"+o.exec(r)),RegExp("^-[\\s]*$","g").test(r)&&(r="-0"),a(t).test(r)&&(u=r.match(a(t)).join("").match(l(t)),u=u?u[0].replace(t,"."):null),u}function d(){return void 0!==g?g:n.NUMBER_FORMATS.CURRENCY_SYM}function s(){for(var e=o.$$rawModelValue,n=o.$formatters.length-1;n>=0;n--)e=o.$formatters[n](e);o.$setViewValue(e),o.$render()}function v(e){if(N&&p&&[void 0,null,""].indexOf(e)===-1){if(void 0!==m&&e>m)return m;if(void 0!==x&&e<x)return x}return e}var $=void 0,p=void 0,x=void 0,m=void 0,g=void 0,M=void 0,N=!0,R=2,b=!0;i.$observe("ngCurrency",function(e){N="false"!==e,c()}),i.$observe("hardCap",function(e){p="true"===e,c()}),i.$observe("min",function(e){x=e?Number(e):void 0,c()}),i.$observe("max",function(e){m=e?Number(e):void 0,c()}),i.$observe("currencySymbol",function(e){g=e,c()}),i.$observe("ngRequired",function(e){M=e,c()}),i.$observe("fraction",function(e){R=e||2,c()}),i.$observe("autoSelect",function(e){b="false"!==e,c()}),r(function(){$=!0,c(),o.$setPristine()}),o.$parsers.push(function(e){if(N&&[void 0,null,""].indexOf(e)===-1){var n=f(e);return"."!==n&&"-."!==n||(n=".0"),Number(n)}return e}),o.$parsers.push(v),o.$formatters.push(function(n){return N&&[void 0,null,""].indexOf(n)===-1?e("currency")(n,d(),R):n}),o.$validators.min=function(e){return!(M||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!N||[void 0,null].indexOf(x)!==-1||isNaN(x)||e>=x)},o.$validators.max=function(e){return!(M||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!N||[void 0,null].indexOf(m)!==-1||isNaN(m)||e<=m)},o.$validators.fraction=function(e){return!N||!e||!isNaN(e)},t.$on("currencyRedraw",function(){if($){o.$commitViewValue();var e=v(o.$$rawModelValue);e!==o.$$rawModelValue&&(o.$setViewValue(e),o.$commitViewValue()),s()}}),u.on("focus",function(){var e=o.$$rawModelValue;e=isNaN(e)||""===e||null===e?"":Number(e).toFixed(R),o.$viewValue!==e&&(o.$setViewValue(e),o.$render(),u.triggerHandler("focus"),b&&u.select())}),u.on("blur",function(){o.$commitViewValue(),s()})}}}r.$inject=["$filter","$locale","$timeout"],Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r},function(n,r){n.exports=e}])});
//# sourceMappingURL=ng-currency.js.map
=======
/*
 * ng-currency
 * http://alaguirre.com/

 * Version: 0.10.0 - 2016-06-03
 * License: MIT
 */

/*commonjs support*/
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
      module.exports = 'ng-currency';
}

angular.module('ng-currency', [])
    .directive('ngCurrency', ['$filter', '$locale', function ($filter, $locale) {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {

                if (attrs.ngCurrency === 'false') return;
               
                attrs.$observe('min', function(v) { scope.min = v; });
                attrs.$observe('max', function(v) { scope.max = v; });
                attrs.$observe('currencySymbol', function(v) { scope.currencySymbol = v; });
                attrs.$observe('ngRequired', function(v) { scope.ngRequired = v; });
                attrs.$observe('fraction', function(v) { scope.fraction = v; });

                scope.fraction = (typeof scope.fraction !== 'undefined')?scope.fraction:2;

                function decimalRex(dChar) {
                    return RegExp("\\d|\\-|\\" + dChar, 'g');
                }

                function clearRex(dChar) {
                    return RegExp("\\-{0,1}((\\" + dChar + ")|([0-9]{1,}\\" + dChar + "?))&?[0-9]{0," + scope.fraction + "}", 'g');
                }

                function clearValue(value) {
                    value = String(value);
                    var dSeparator = $locale.NUMBER_FORMATS.DECIMAL_SEP;
                    var cleared = null;

                    if(value.indexOf($locale.NUMBER_FORMATS.DECIMAL_SEP) == -1 && 
                       value.indexOf('.') != -1 &&
                       scope.fraction)
                    {
                        dSeparator = '.';
                    }

                    // Replace negative pattern to minus sign (-)
                    var neg_dummy = $filter('currency')("-1", getCurrencySymbol(), scope.fraction);
                    var neg_regexp = RegExp("[0-9."+$locale.NUMBER_FORMATS.DECIMAL_SEP+$locale.NUMBER_FORMATS.GROUP_SEP+"]+");
                    var neg_dummy_txt = neg_dummy.replace(neg_regexp.exec(neg_dummy), "");
                    var value_dummy_txt = value.replace(neg_regexp.exec(value), "");

                    // If is negative
                    if(neg_dummy_txt == value_dummy_txt) {
                        value = '-' + neg_regexp.exec(value);
                    }

                    if(RegExp("^-[\\s]*$", 'g').test(value)) {
                        value = "-0";
                    }

                    if(decimalRex(dSeparator).test(value))
                    {
                        cleared = value.match(decimalRex(dSeparator))
                            .join("").match(clearRex(dSeparator));
                        cleared = cleared ? cleared[0].replace(dSeparator, ".") : null;
                    }

                    return cleared;
                }

                function getCurrencySymbol() {
                    if (angular.isDefined(scope.currencySymbol)) {
                        return scope.currencySymbol;
                    } else {
                        return $locale.NUMBER_FORMATS.CURRENCY_SYM;
                    }
                }

                function reformatViewValue(){
                    var formatters = ngModel.$formatters,
                        idx = formatters.length;

                    var viewValue = ngModel.$$rawModelValue;
                    while (idx--) {
                      viewValue = formatters[idx](viewValue);
                    }

                    ngModel.$setViewValue(viewValue);
                    ngModel.$render();
                }

                ngModel.$parsers.push(function (viewValue) {
                    var cVal = clearValue(viewValue);
                    //return parseFloat(cVal);
                    // Check for fast digitation (-. or .)
                    if(cVal == "." || cVal == "-.")
                    {
                        cVal = ".0";
                    }
                    return parseFloat(cVal);
                });

                element.on("blur", function () {
                    ngModel.$commitViewValue();
                    reformatViewValue();
                });

                ngModel.$formatters.unshift(function (value) {
                    return $filter('currency')(value, getCurrencySymbol(), scope.fraction);
                });

                ngModel.$validators.min = function(cVal) {
                    if (!scope.ngRequired && isNaN(cVal)) {
                        return true;
                    }
                    if(typeof scope.min  !== 'undefined') {
                        return cVal >= parseFloat(scope.min);
                    }
                    return true;
                };
                
                scope.$watch('min', function (val) {
                    ngModel.$validate();
                });

                ngModel.$validators.max = function(cVal) {
                    if (!scope.ngRequired && isNaN(cVal)) {
                        return true;
                    }
                    if(typeof scope.max  !== 'undefined') {
                        return cVal <= parseFloat(scope.max);
                    }
                    return true;
                };

                scope.$watch('max', function (val) {
                    ngModel.$validate();
                });


                ngModel.$validators.fraction = function(cVal) {
                    if (!!cVal && isNaN(cVal)) {
                        return false;
                    }

                    return true;
                };

                scope.$on('currencyRedraw', function() { 
                    ngModel.$commitViewValue();
                    reformatViewValue(); 
                });

                element.on('focus',function(){
                    var viewValue = ngModel.$$rawModelValue;

                    if(isNaN(viewValue) || viewValue === '' || viewValue == null)
                    {
                        viewValue = '';
                    }
                    else
                    {
                        viewValue = parseFloat(viewValue).toFixed(scope.fraction);
                    }
                    ngModel.$setViewValue(viewValue);
                    ngModel.$render();
                });
            }
        }
    }]);
>>>>>>> parent of a13e708... Version v0.10.1
