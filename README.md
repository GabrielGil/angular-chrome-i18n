# Angular Chrome i18n

This angular software provides a set of tools to retrieve translations from the
internationalizated `messages.json` file used for Chrome Apps and Extentions.

Reference: https://developer.chrome.com/apps/i18n


### Install

It is a standard but no readme is complete with a reference to NPM.

``` bash
npm install angular-chrome-i18n --save
```


### Usage

#### As a filter (Recomended)

Include the filter module file. `angular-chrome-i18n_filter.js`

Inject into your angular module

``` js
angular.module('MyApp', ['angular-chrome-i18n.filter']);
```

Use in your template...

``` html
<div>
  <input type="email" />
  <input type="password" />
  <button>{{ 'loginText' | i18n }}</button>
</div>
```

...or in your Javascript

``` js
app.controller('MyController', function ($filter) {
  $scope.appTitle = $filter('i18n')('appTitle');
});
```

#### As a directive

Include the directive module file. `angular-chrome-i18n_directive.js`

Inject into your angular module

``` js
angular.module('MyApp', ['angular-chrome-i18n.directive']);
```

Apply the `i18n`directive passing a message key to search. E.g.

``` html
<header>
  <h2 i18n="welcomeText"></h2>
</header>
```


### Development

So maybe you care, this is the
[c9 development environment](https://ide.c9.io/gabrielgil/angular-chrome-i18n)
I used to create this.
