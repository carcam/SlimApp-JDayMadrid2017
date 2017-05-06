/*!
 * @package     JoomGap.Apps
 *
 * @author      JoomGap <team@joomgap.com>
 * @copyright   Copyright (C) 2016 -  2017 JoomGap. All rights reserved.
 * @license     http://http://www.gnu.org/licenses/gpl-3.0.html GNU/GPL
 */

/* globals angular,cordova,navigator */

angular.module('starter.browser', ['ngCordova', 'general.constants'])
 
  .factory('JGBrowser', function(
      $rootScope, $q, $cordovaInAppBrowser, $cordovaToast,
      LandingUrl, LoadingMessage, 
      DebugApp
    ) {
    "use strict";

    $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event) {
      navigator.app.exitApp();
    });   

    $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event) {
      if (window.SpinnerPlugin) {
        var options = null;

        if (!LoadingMessage) {
          options = { dimBackground: false };
        }

        window.SpinnerPlugin.activityStart(LoadingMessage, options);
      }
    });

    $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event) {
      if (window.SpinnerPlugin) {
        window.SpinnerPlugin.activityStop();
      }
    });     

    var loadUrl = function(url) {
      var waitForData = $q.defer();

      if (!url) {
        url = LandingUrl;
      }

      if (DebugApp) console.log('loadUrl ' + url);

      $cordovaInAppBrowser.open(url, '_blank', {
        location: 'no',
        toolbar: 'no',
        hidden: 'yes',
      }).then(function(event) {
        $cordovaInAppBrowser.show();
        waitForData.resolve();
      }).catch(function(err) {
        waitForData.reject(err);
      });

      return waitForData.promise;
    };

    return {
      load: loadUrl
    };
  });
