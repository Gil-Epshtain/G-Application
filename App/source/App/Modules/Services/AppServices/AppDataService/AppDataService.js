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

        let deferredAppDataLoaded = $q.defer();

        let appData =
        {
            AppVersion, "v0.0.1",

            Strings: {},
            AppImages: PhotosService.AppImages,

            ApplicationHeader: "",
            isSideMenuOpen: false,
            SideMenuItems: sideMenuItems,

            getAppLocalCode,
            setAppLanguage
        };

        //---------------------------------------------------------//
        // On AppData Ready

        if (localStorage.isStatusBarPainted)
        {
            NativeService.Cordova.Plugins.StatusBar.SetColor('#BE1912');
        }

        // Init application languages
        appData.setAppLanguage(getAppLocalCode());

        //---------------------------------------------------------//
        // AppData functions

        function getAppLocalCode()
        {
            // Load app language from localStorage or use the default one
            const defaultLocalCode = 'he-IL'; // 'en-US';

            let localCode = localStorage.localCode ? localStorage.localCode : defaultLocalCode;

            return localCode;
        }

        function setAppLanguage(localCode)
        {
            console.log(`AppDataService: Changing app language - ${ localCode }`);

            // Load Strings
            let language = LanguagesService.Languages[localCode];
            if (language)
            {
                localStorage.localCode = localCode;
                appData.Strings = language.strings;

                resetSideMenu();
            }
            else
            {
                console.warn(`AppDataService: Error getting Language Strings, language '${ localCode }' not found`);
            }
        }

        //---------------------------------------------------------//
        // Private

        function resetSideMenu()
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

        return { AppData: appData, onDataLoaded: deferredAppDataLoaded.promise };
    }
};