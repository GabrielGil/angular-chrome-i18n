angular.module('angular-chrome-i18n.directive', [])


/**
 * @ngdoc directive
 * @name angular-chrome-i18n.directive.i18n
 *
 * @description
 * Replaces the content of the element with the message translation text
 * from chrome.i18n API.
 */
.directive('i18n', function () {
  return {
    scope: {
      i18n: '@'
    },
    link: function (scope, element) {
      element.replaceWith(chrome.i18n.getMessage(scope.i18n));
    }
  };
});
