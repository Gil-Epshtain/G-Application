/* Created by Gil Epshtain on 17/02/2016 */

'use strict';

export default function(ngModule)
{
    ngModule
        .factory("NativeService",
        [
            '$timeout',
            nativeServiceFunc
        ]);

    function nativeServiceFunc($timeout)
    {
        console.log("NativeService: Initializing...");

        let nativeService =
        {
            //  *** Platform (from 'navigator.userAgent') *** //
            Platform:
            {
                getPlatform,
                isAndroid,
                isIOS,
                isMobile,
                isDesktop
            },
            // *** Cordova *** //
            Cordova:
            {
                isReady: isCordovaReady,

                // *** Cordova Plugins ***
                Plugins:
                {
                    // *** Plugin: SplashScreen 'cordova-plugin-splashscreen' *** //
                    SplashScreen:
                    {
                        Toggle: splashScreenToggle,
                        Hide:   splashScreenHide,
                        Show:   splashScreenShow
                    },
                    // *** Plugin: StatusBar 'cordova-plugin-statusbar' *** //
                    StatusBar:
                    {
                        SetColor:  statusBarSetColor,
                        Toggle:    statusBarToggle,
                        Hide:      statusBarHide,
                        Show:      statusBarShow,
                        isVisible: statusBarIsVisible
                    }
                }
            }
        };

        //---------------------------------------------------------//
        // On DeviceReady

        let isDeviceReadyEventFire = false;
        document.addEventListener('deviceready', ()=>
        {
            isDeviceReadyEventFire = true;

            console.log("NativeService: DeviceReady!");
        });

        $timeout(() =>
        {
            if (!isDeviceReadyEventFire)
            {
                console.warn("NativeService: DeviceReady event didn't fire after 5sec");
                getPlatform();
            }
        }, 5000);

        //---------------------------------------------------------//
        // Platform

        function getPlatform()
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
        }

        function isAndroid()
        {
            return (getPlatform() == 'Android');
        }

        function isIOS()
        {
            return (getPlatform() == 'iOS');
        }

        function isMobile()
        {
            let platform = getPlatform();

            return ((platform == 'Android') ||
                    (platform == 'Nokia')   ||
                    (platform == 'iOS'));
        }

        function isDesktop()
        {
            let platform = getPlatform();

            return ((platform == 'Windows') ||
                    (platform == 'OSX')     ||
                    (platform == 'Linux'));
        }

        //---------------------------------------------------------//
        // Cordova

        function isCordovaReady()
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
        }

        //---------------------------------------------------------//
        // Cordova.Plugin.SplashScreen

        // SplashScreen: Show/Hide
        function splashScreenToggle(isShow)
        {
            let showOrHideStr = isShow ? "Show" : "Hide";

            if (isCordovaReady() && window.navigator.splashscreen)
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
        }

        // SplashScreen: Hide
        function splashScreenHide()
        {
            splashScreenToggle(false);
        }

        // SplashScreen: Show
        function splashScreenShow()
        {
            splashScreenToggle(true);
        }

        //---------------------------------------------------------//
        // Cordova.Plugin.StatusBar

        // StatusBar: Color
        function statusBarSetColor(hexColor)
        {
            if (isCordovaReady() && StatusBar)
            {
                console.log(`NativeService: StatusBar -> Setting color: ${ hexColor }`);

                StatusBar.backgroundColorByHexString(hexColor);
            }
            else
            {
                console.warn(`NativeService: StatusBar -> Error: Trying to Set status bar color ${ hexColor } but Cordova isn't ready`);
            }
        }

        // StatusBar: Show/Hide
        function statusBarToggle(isShow)
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
        }

        // StatusBar: Hide
        function statusBarHide()
        {
            statusBarToggle(false);
        }

        // StatusBar: Show
        function statusBarShow()
        {
            statusBarToggle(true);
        }

        // StatusBar: isVisible
        function statusBarIsVisible()
        {
            let isVisible = true;

            if (isCordovaReady() && StatusBar)
            {
                isVisible = StatusBar.isVisible;
            }
            else
            {
                console.warn("NativeService: StatusBar -> Error: Trying get 'isVisible' status but Cordova isn't ready");
            }

            return isVisible;
        }

        //---------------------------------------------------------//

        return nativeService;
    }
};