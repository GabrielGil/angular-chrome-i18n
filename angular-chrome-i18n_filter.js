angular.module('angular-chrome-i18n.filter', [])


/**
 * @ngdoc filter
 * @name angular-chrome-i18n.filter.i18n
 *
 * @description
 * Retrieves the message translation text from chrome.i18n API.
 */
.filter('i18n', function() {
  return function(message) {
    return chrome.i18n.getMessage(message);
  };
});
