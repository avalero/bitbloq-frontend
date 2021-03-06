'use strict';

/**
 * @ngdoc directive
 * @name bitbloqApp.directive:errSrc
 * @description
 * # errSrc
 */
angular.module('bitbloqApp')
    .directive('errSrc', function() {
        return {
            link: function(scope, element, attrs) {
                element.bind('error', function() {
                    if (attrs.src !== attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });

                attrs.$observe('ngSrc', function(value) {
                    if (!value && attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        };
    });