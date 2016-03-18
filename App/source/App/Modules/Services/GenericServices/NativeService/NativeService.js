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
            UserAgent:
            {
                getPlatform:  userAgentGetPlatform,
                isAndroid:    userAgentIsAndroid,
                isIOS:        userAgentIsIOS,
                isMobile:     userAgentIsMobile,
                isDesktop:    userAgentIsDesktop
            },
            // *** Cordova *** //
            Cordova:
            {
                isReady: isCordovaReady,

                // *** Cordova Plugins ***
                Plugins:
                {
                    // *** Plugin: Device 'cordova-plugin-device' *** //
                    Device:
                    {
                        PlatformName: deviceGetPlatformName,
                        DeviceName:   deviceGetDeviceName,
                        Platform:     deviceGetPlatform,
                        isAndroid:    deviceIsAndroid,
                        isIOS:        deviceIsIOS
                    },
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
                    // *** Plugin: PushNotification 'cordova-plugin-push-notification' *** //
                    //PushNotification:
                    //{}
                }
            }
        };


        //---------------------------------------------------------//
        //---------------------------------------------------------//
        //---------------------------------------------------------//
        // Platform

        function userAgentGetPlatform()
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

            return platform;
        }

        function userAgentIsAndroid()
        {
            return (userAgentGetPlatform() == 'Android');
        }

        function userAgentIsIOS()
        {
            return (userAgentGetPlatform() == 'iOS');
        }

        function userAgentIsMobile()
        {
            let platform = userAgentGetPlatform();

            return ((platform == 'Android') ||
                    (platform == 'Nokia')   ||
                    (platform == 'iOS'));
        }

        function userAgentIsDesktop()
        {
            let platform = userAgentGetPlatform();

            return ((platform == 'Windows') ||
                    (platform == 'OSX')     ||
                    (platform == 'Linux'));
        }

        //---------------------------------------------------------//
        //---------------------------------------------------------//
        //---------------------------------------------------------//
        // Cordova

        let isDeviceReady = false;
        document.addEventListener('deviceready', ()=>
        {
            isDeviceReady = true;

            console.log("NativeService: DeviceReady!");

            // Get Device and Platform from Cordova plugin
            console.log(`Device: ${ deviceGetDeviceName() }`);
            console.log(`Platform: ${ deviceGetPlatformName() }`);
        });

        $timeout(() =>
        {
            if (!isDeviceReady)
            {
                console.warn("NativeService: DeviceReady event didn't fire after 5sec");

                // Get Platform from userAgent
                console.log(`Platform: ${ userAgentGetPlatform() }`);
            }
        }, 5000);

        function isCordovaReady()
        {
            return isDeviceReady;
        }

        //---------------------------------------------------------//
        // Cordova.Plugin.Device
        // see more info at:
        // https://www.npmjs.com/package/cordova-plugin-device

        // Device: PlatformName
        function deviceGetPlatformName()
        {
            let platformName = "-";

            if (isDeviceReady && device)
            {
                platformName = `${ device.platform }: ${ device.version }`;
            }
            else
            {
                console.warn("NativeService: Device -> Error: Trying get 'PlatformName' but Cordova isn't ready");
            }

            return platformName;
        }

        // Device: DeviceName
        function deviceGetDeviceName()
        {
            let deviceName = "-";

            if (isDeviceReady && device)
            {
                deviceName = `${ device.manufacturer.toUpperCase() }: ${ device.model }`;
            }
            else
            {
                console.warn("NativeService: Device -> Error: Trying get 'DeviceName' but Cordova isn't ready");
            }

            return deviceName;
        }

        // Device: PlatformName
        function deviceGetPlatform()
        {
            let platform = "-";

            if (isDeviceReady && device)
            {
                platform = device.platform;
            }
            else
            {
                console.warn("NativeService: Device -> Error: Trying get 'PlatformName' but Cordova isn't ready");
            }

            return platform;
        }

        // Device: isAndroid
        function deviceIsAndroid()
        {
            return (deviceGetPlatform() == 'Android');
        }

        // Device: isIOS
        function deviceIsIOS()
        {
            return (deviceGetPlatform() == 'iOS');
        }

        //---------------------------------------------------------//
        // Cordova.Plugin.SplashScreen
        // see more info at:
        // https://www.npmjs.com/package/cordova-plugin-splashscreen

        // SplashScreen: Show/Hide
        function splashScreenToggle(isShow)
        {
            let showOrHideStr = isShow ? "Show" : "Hide";

            if (isDeviceReady && window.navigator.splashscreen)
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
        // see more info at:
        // https://www.npmjs.com/package/cordova-plugin-statusbar

        // StatusBar: Color
        function statusBarSetColor(hexColor)
        {
            if (isDeviceReady && StatusBar)
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

            if (isDeviceReady && StatusBar)
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
        // Cordova.Plugin.Push.Notification
        // see more info at:
        // https://www.npmjs.com/package/cordova-plugin-push-notification

        // PushNotification

        //function initPushNotification()
        //{
        //    if (isDeviceReady && window.plugins.pushNotification)
        //    {
        //        if (deviceIsAndroid())
        //        {
        //            window.plugins.pushNotification.register(
        //                // SuccessHandler
        //                (result) =>
        //                {
        //                    console.log(`NativeService: PushNotification -> Result: ${ result }`);
        //                },
        //                // ErrorHandler
        //                (error) =>
        //                {
        //                    console.log(`NativeService: PushNotification -> Error: ${ error }`);
        //                },
        //                // Data
        //                {
        //                    // Google's project number from GDC (Google Developer Console)
        //                    "senderID": "919428656675",
        //                    // OnNotification
        //                    "ecb": (e) =>
        //                    {
        //                        console.log(`NativeService: PushNotification -> OnNotiication [event: ${ e.event }]`);
        //
        //                        switch(e.event)
        //                        {
        //                            case 'registered':
        //                                // Your GCM push server needs to know the regID before it can push to this device
        //                                // here is where you might want to send it the regID for later use.
        //                                if (0 < e.regid.length)
        //                                {
        //                                    console.log(`NativeService: PushNotification -> OnNotiication [redID: ${ e.regid }]`);
        //                                }
        //
        //                                break;
        //
        //                            case 'message':
        //                                // if this flag is set, this notification happened while we were in the foreground.
        //                                // you might want to play a sound to get the user's attention, throw up a dialog, etc.
        //                                if (e.foreground)
        //                                {
        //                                    console.log("NativeService: PushNotification -> OnNotiication [foreground]");
        //
        //                                    // on Android soundname is outside the payload.
        //                                    var soundfile = e.soundname || e.payload.sound;
        //
        //                                    // if the notification contains a soundname, play it.
        //                                    var myMedia = new Media("/android_asset/www/"+ soundfile);
        //
        //                                    myMedia.play();
        //                                }
        //                                else
        //                                {  // otherwise we were launched because the user touched a notification in the notification tray.
        //                                    if (e.coldstart)
        //                                    {
        //                                        console.log("NativeService: PushNotification -> OnNotiication [coldstart]");
        //                                    }
        //                                    else
        //                                    {
        //                                        console.log("NativeService: PushNotification -> OnNotiication [background]");
        //                                    }
        //                                }
        //
        //                                break;
        //
        //                            case 'error':
        //                                console.log(`NativeService: PushNotification -> OnNotiication [error: ${ e.msg }]`);
        //
        //                                break;
        //
        //                            default:
        //                                console.log("NativeService: PushNotification -> OnNotiication [Unknown event]");
        //
        //                                break;
        //                        }
        //                    }
        //                });
        //        }
        //        else if (deviceIsIOS())
        //        {
        //            window.plugins.pushNotification.register(
        //                // TokenHandler
        //                (result) =>
        //                {
        //                    // Your iOS push server needs to know the token before it can push to this device
        //                    // here is where you might want to send it the token for later use.
        //                    console.log(`NativeService: PushNotification -> Device Token: ${ result }`);
        //                },
        //                // ErrorHandler
        //                (error) =>
        //                {
        //                    console.log(`NativeService: PushNotification -> Error: ${ error }`);
        //                },
        //                // Data
        //                {
        //                    "badge":"true",
        //                    "sound":"true",
        //                    "alert":"true",
        //                    // OnNotiicationAPN
        //                    "ecb": (event) =>
        //                    {
        //                        console.log("NativeService: PushNotification -> OnNotiicationAPN");
        //
        //                        if (event.alert)
        //                        {
        //                            console.log("NativeService: PushNotification -> OnNotiicationAPN Alert!");
        //
        //                            alert(event.alert);
        //                        }
        //
        //                        if (event.sound)
        //                        {
        //                            console.log("NativeService: PushNotification -> OnNotiicationAPN Sound!");
        //
        //                            var snd = new Media(event.sound);
        //                            snd.play();
        //                        }
        //
        //                        if (event.badge)
        //                        {
        //                            console.log("NativeService: PushNotification -> OnNotiicationAPN Badge!");
        //
        //                            pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, event.badge);
        //                        }
        //                    }
        //                });
        //        }
        //        else
        //        {
        //            console.warn("NativeService: PushNotification -> Error: Platform isn't Android nor iOS");
        //        }
        //    }
        //    else
        //    {
        //        console.warn("NativeService: PushNotification -> Error: Trying init 'PushNotification' but Cordova isn't ready");
        //    }
        //}

        //---------------------------------------------------------//
        //---------------------------------------------------------//
        //---------------------------------------------------------//

        return nativeService;
    }
};