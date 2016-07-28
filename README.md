# Angular Chrome i18n

This angular software provides a set of tools to retrieve translations from the
internationalizated `messages.json` file used for Chrome Apps and Extentions.

Reference: https://developer.chrome.com/apps/i18n


### Usage

#### As a filter (Recomended)

In yout template

``` html
<div>
  <input type="email" />
  <input type="password" />
  <button>{{ 'loginText' | i18n }}</button>
</div>
```

In Javascript

``` js
app.controller('MyController', function ($filter) {
  $scope.appTitle = $filter('i18n')('appTitle');
});
```

#### As a directive

Apply the `i18n`directive passing a message key. E.g.

``` html
<header>
  <h2 i18n="welcomeText"></h2>
</header>
```
