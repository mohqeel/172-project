'use strict';

angular.module('thoughtsApp.auth', [
  'thoughtsApp.constants',
  'thoughtsApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
