/* Created by Gil Epshtain on 23/08/15 */

'use strict';

import sideMenuItems from './SideMenuItems.json';

export default function(ngModule)
{
    ngModule
        .service("AppDataService",
        [
            'NativeService',
            'LanguagesService',
            'PhotosService',
            '$q',
            appDataFunc
        ]);

    function appDataFunc(NativeService, LanguagesService, PhotosService, $q)
    {
        console.log("AppDataService: Initializing...");

        let appData = {};

        // App Language and Strings
        appData.Strings = {};
        appData.AppImages = PhotosService.AppImages;
        appData.NativeService = NativeService;

        appData.AppVersion = "v0.0.0.1";

        appData.ApplicationHeader = "";

        // Side Menu
        appData.isSideMenuOpen = false;
        appData.SideMenuItems = sideMenuItems;

        let deferredAppDataLoaded = $q.defer();

        appData.getAppLanguage = function()
        {
            // Load app language from localStorage or use the default one
            const defaultLocalCode = 'he-IL'; // 'en-US';

            let localCode = localStorage.localCode ? localStorage.localCode : defaultLocalCode;

            return localCode;
        };

        appData.setAppLanguage = function(localCode)
        {
            console.log(`AppDataService: Changing app language - ${ localCode }`);

            // Load Strings
            let language = LanguagesService.Languages[localCode];
            if (language)
            {
                localStorage.localCode = localCode;
                appData.Strings = language.strings;

                initSideMenu();
            }
            else
            {
                console.warn(`AppDataService: Error getting Language Strings, language '${ localCode }' not found`);
            }
        };

        function initSideMenu()
        {
            console.log("AppDataService: Refreshing SideMenu");

            // Refresh SideMenu Text
            for (let i = 0; i < appData.SideMenuItems.length; i++)
            {
                switch (appData.SideMenuItems[i].id)
                {
                    case '/homePage':
                        appData.SideMenuItems[i].text          = appData.Strings._HomePage_;
                        appData.SideMenuItems[i].pageTitle     = appData.Strings._AnG_;
                        appData.SideMenuItems[i].icon.active   = appData.AppImages.imgIconHomeHexBE1912;
                        appData.SideMenuItems[i].icon.inactive = appData.AppImages.imgIconHomeWhite;
                        break;

                    case '/gallery':
                        appData.SideMenuItems[i].text          = appData.Strings._Gallery_;
                        appData.SideMenuItems[i].pageTitle     = appData.Strings._Gallery_;
                        appData.SideMenuItems[i].icon.active   = appData.AppImages.imgIconLoveHexBE1912;
                        appData.SideMenuItems[i].icon.inactive = appData.AppImages.imgIconLoveWhite;
                        break;

                    case '/settings':
                        appData.SideMenuItems[i].text          = appData.Strings._Settings_;
                        appData.SideMenuItems[i].pageTitle     = appData.Strings._Settings_;
                        appData.SideMenuItems[i].icon.active   = appData.AppImages.imgIconSettingsHexBE1912;
                        appData.SideMenuItems[i].icon.inactive = appData.AppImages.imgIconSettingsWhite;
                        break;
                }
            }

            appData.ApplicationHeader = appData.Strings._AnG_;

            deferredAppDataLoaded.resolve();
        }

        // Init application languages
        appData.setAppLanguage(appData.getAppLanguage());

        return { AppData: appData, onDataLoaded: deferredAppDataLoaded.promise };
    }
};