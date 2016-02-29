/* Created by Gil Epshtain on 23/08/15 */

'use strict';

module.exports = (ngModule) =>
{
    ngModule
        .service("AppDataService",
        [
            'LanguagesService',
            '$q',
            appDataFunc
        ]);

    function appDataFunc(LanguagesService, $q)
    {
        console.log("AppDataService: Initializing...");

        var appData = {};

        appData.AppVersion = "v0.0.0.1";

        appData.ApplicationHeader = "";

        // Side Menu
        appData.isSideMenuOpen = false;
        appData.SideMenuItems =
        [
            {   // -- Home Page --
                id: "/homePage",
                text: "",
                pageTitle: "",
                icon:
                {
                    active: "App/Assets/Images/Icons/Home-icon-hexBE1912.png",
                    inactive: "App/Assets/Images/Icons/Home-icon-white.png"
                },
                state: "body.homePage"
            },
            {   // -- Gallery Page --
                id: "/gallery",
                text: "",
                pageTitle: "",
                icon:
                {
                    active: "App/Assets/Images/Icons/Love-icon-hexBE1912.png",
                    inactive: "App/Assets/Images/Icons/Love-icon-white.png"
                },
                state: "body.gallery"
            },
            {   // -- Settings Page --
                id: "/settings",
                text: "",
                pageTitle: "",
                icon:
                {
                    active: "App/Assets/Images/Icons/Settings-icon-hexBE1912.png",
                    inactive: "App/Assets/Images/Icons/Settings-icon-white.png"
                },
                state: "body.settings"
            }
        ];

        // App Language and Strings
        appData.Strings = {};

        appData.getAppLanguage = function()
        {
            // Load app language from localStorage or use the default one
            var defaultLocalCode = 'he-IL'; // 'en-US';

            var localCode = localStorage.localCode ? localStorage.localCode : defaultLocalCode;

            return localCode;
        };

        appData.setAppLanguage = function(localCode)
        {
            console.log("AppDataService: Changing app language - " + localCode);

            // Load Strings
            LanguagesService.getLanguageStrings(localCode).then(

                function success(strings)
                {
                    localStorage.localCode = localCode;

                    appData.Strings = strings;

                    onAppStringsChange();
                },

                function failure()
                {
                    console.warn("AppDataService: Error getting Language Strings");
                }
            );
        };

        function onAppStringsChange()
        {
            console.log("AppDataService: App Language Changed");

            deferredAppDataLoaded.resolve();

            // Refresh SideMenu Text
            for (var i = 0; i < appData.SideMenuItems.length; i++)
            {
                switch (appData.SideMenuItems[i].id)
                {
                    case '/homePage':
                        appData.SideMenuItems[i].text      = appData.Strings._HomePage_;
                        appData.SideMenuItems[i].pageTitle = appData.Strings._AnG_;
                        break;

                    case '/gallery':
                        appData.SideMenuItems[i].text      = appData.Strings._Gallery_;
                        appData.SideMenuItems[i].pageTitle = appData.Strings._Gallery_;
                        break;

                    case '/settings':
                        appData.SideMenuItems[i].text      = appData.Strings._Settings_;
                        appData.SideMenuItems[i].pageTitle = appData.Strings._Settings_;
                        break;
                }

            }

            appData.ApplicationHeader = appData.Strings._AnG_;
        }

        // Init application languages
        appData.setAppLanguage(appData.getAppLanguage());

        var deferredAppDataLoaded = $q.defer();

        return { AppData: appData, onDataLoaded: deferredAppDataLoaded.promise };
    }
};