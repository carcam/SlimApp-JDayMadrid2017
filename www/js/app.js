/*!
 * @package     JoomGap.Apps
 *
 * @author      JoomGap <team@joomgap.com>
 * @copyright   Copyright (C) 2016 -  2017 JoomGap. All rights reserved.
 * @license     http://http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
 */

/* globals angular,cordova,alert,window,navigator,console */

angular.module(
    'starter', ['ionic', 'ngCordova', 'general.constants', 'starter.browser'])

  .run(
    function(
      $ionicPlatform,
      JGBrowser, LandingUrl
    ) {

      $ionicPlatform.ready(function() {
        "use strict";

        if ((window.cordova) && (window.cordova.plugins) &&
          (window.cordova.plugins.Keyboard)) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
          window.StatusBar.styleLightContent();
        }

        JGBrowser.load(LandingUrl);

      });
    })

  .config(
    function($compileProvider, $stateProvider, $urlRouterProvider, $logProvider) {
      // Debug Application
      $logProvider.debugEnabled(false);
      $compileProvider.debugInfoEnabled(false);
    });
