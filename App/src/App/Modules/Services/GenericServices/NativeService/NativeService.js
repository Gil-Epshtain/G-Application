/* Created by Gil Epshtain on 17/02/2016 */

'use strict';

export default function(ngModule)
{
    ngModule
        .factory("NativeService",
        [
            nativeServiceFunc
        ]);

    function nativeServiceFunc()
    {
        console.log("NativeService: Initializing...");

        let nativeService = {};

        //  *** Platform (from 'navigator.userAgent') ***
        nativeService.getPlatform = function()
        {
            let platform;
            const userAgent = navigator.userAgent;

            if (userAgent.match('Android'))
            {
                platform = 'Android';
            }
            else if (userAgent.match('iPhone|iPad'))
            {
                platform = 'iOS';
            }
            else if (userAgent.match('Nokia'))
            {
                platform = 'Nokia';
            }
            else if (userAgent.match('Macintosh|OSX'))
            {
                platform = 'OSX';
            }
            else if (userAgent.match('Windows'))
            {
                platform = 'Windows';
            }
            else if (userAgent.match('Linux'))
            {
                platform = 'Linux';
            }
            else
            {
                platform = 'Unknown';
            }

            console.log(`NativeService: Platform: ${ platform }`);

            return platform;
        };

        nativeService.isAndroid = function()
        {
            return (nativeService.getPlatform() == 'Android');
        };

        nativeService.isIOS = function()
        {
            return (nativeService.getPlatform() == 'iOS');
        };

        nativeService.isMobile = function()
        {
            const platform = nativeService.getPlatform();

            return ((platform == 'Android') ||
                    (platform == 'Nokia')   ||
                    (platform == 'iOS'));
        };

        nativeService.isDesktop = function()
        {
            const platform = nativeService.getPlatform();

            return ((platform == 'Windows') ||
                    (platform == 'OSX')     ||
                    (platform == 'Linux'));
        };

        // *** Cordova ***
        nativeService.Cordova = {};
        nativeService.Cordova.isReady = function()
        {
            let isReady;

            if (window.cordova)
            {
                isReady = true;
            }
            else
            {
                isReady = false;
            }

            return isReady
        };

        // *** Cordova Plugins ***
        nativeService.Cordova.Plugins = {};

        // *** Plugin: SplashScreen 'cordova-plugin-splashscreen' ***
        nativeService.Cordova.Plugins.SplashScreen = {};

        // SplashScreen: Show/Hide
        nativeService.Cordova.Plugins.SplashScreen.Toggle = function(isShow)
        {
            let showOrHideStr = isShow ? "Show" : "Hide";

            if (nativeService.Cordova.isReady() && window.navigator.splashscreen)
            {
                console.log(`NativeService: SplashScreen -> ${ showOrHideStr }`);

                if (isShow)
                {
                    window.navigator.splashscreen.show();
                }
                else
                {
                    window.navigator.splashscreen.hide();
                }
            }
            else
            {
                console.warn(`NativeService: SplashScreen -> Error: Trying to ${ showOrHideStr } SplashScreen but Cordova isn't ready`);
            }
        };

        // SplashScreen: Hide
        nativeService.Cordova.Plugins.SplashScreen.Hide = function()
        {
            nativeService.Cordova.Plugins.SplashScreen.Toggle(false);
        };

        // SplashScreen: Show
        nativeService.Cordova.Plugins.SplashScreen.Show = function()
        {
            nativeService.Cordova.Plugins.SplashScreen.Toggle(true);
        };

        // *** Plugin: StatusBar 'cordova-plugin-statusbar' ***
        nativeService.Cordova.Plugins.StatusBar = {};

        // StatusBar: Color
        nativeService.Cordova.Plugins.StatusBar.SetColor = function(hexColor)
        {
            if (nativeService.Cordova.isReady() && StatusBar)
            {
                console.log(`NativeService: StatusBar -> Setting color: ${ hexColor }`);

                StatusBar.backgroundColorByHexString(hexColor);
            }
            else
            {
                console.warn(`NativeService: StatusBar -> Error: Trying to Set status bar color ${ hexColor } but Cordova isn't ready`);
            }
        };

        // StatusBar: Show/Hide
        nativeService.Cordova.Plugins.StatusBar.Toggle = function(isShow)
        {
            let showOrHideStr = isShow ? "Show" : "Hide";

            if (nativeService.Cordova.isReady() && StatusBar)
            {
                console.log(`NativeService: StatusBar -> ${ showOrHideStr }`);

                if (isShow)
                {
                    StatusBar.show();
                }
                else
                {
                    StatusBar.hide();
                }
            }
            else
            {
                console.warn(`NativeService: StatusBar -> Error: Trying to ${ showOrHideStr } StatusBar but Cordova isn't ready`);
            }
        };

        // StatusBar: Hide
        nativeService.Cordova.Plugins.StatusBar.Hide = function()
        {
            nativeService.Cordova.Plugins.StatusBar.Toggle(false);
        };

        // StatusBar: Show
        nativeService.Cordova.Plugins.StatusBar.Show = function()
        {
            nativeService.Cordova.Plugins.StatusBar.Toggle(true);
        };

        // StatusBar: isVisible
        nativeService.Cordova.Plugins.StatusBar.isVisible = function()
        {
            let isVisible = true;

            if (nativeService.Cordova.isReady() && StatusBar)
            {
                isVisible = StatusBar.isVisible;
            }
            else
            {
                console.warn("NativeService: StatusBar -> Error: Trying get 'isVisible' status but Cordova isn't ready");
            }

            return isVisible;
        };

        // --- Cordova: Run Plugins ---
        //(function invokePlugins()
        //{
        //    if (nativeService.Cordova.isReady())
        //    {
        //        nativeService.Cordova.Plugins.StatusBar.SetColor('#BE1912');
        //        nativeService.Cordova.Plugins.SplashScreen.Hide();
        //    }
        //})();

        return nativeService;
    }
};