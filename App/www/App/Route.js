/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

export default function(ngApp)
{
    ngApp
        .config(appRouter);

    function appRouter($stateProvider, $urlRouterProvider)
    {
        console.log("Router: Initializing...");

        // Default route
        $urlRouterProvider.otherwise('/body/homePage');

        // Application route:
        $stateProvider

        // **************************** //
        // **** Application Layout **** //
        // **************************** //

            .state('body',
                {
                    url: "/body",

                    views:
                    {
                        // Application container (the only child view of index.html)
                        '':
                        {
                            templateUrl: "App/Modules/Views/MainPage/Main.html",
                            controller: "MainController as mainCtrl"
                        },
                        // SideMenu (nested in body view)
                        'sideMenu@body':
                        {
                            templateUrl: "App/Modules/Views/SideMenu/SideMenu.html",
                            controller: "SideMenuController as sideMenuCtrl"
                        },
                        // Header (nested in body view)
                        'header@body':
                        {
                            templateUrl: "App/Modules/Views/Header/Header.html",
                            controller: "HeaderController as headerCtrl"
                        }//,
                        // Footer (nested in body view)
                        //'footer@body':
                        //{
                        //    templateUrl: "Views/Footer.html",
                        //    controller: "MainController as mainCtrl"
                        //}
                    }
                })

            // **************************** //
            // **** Application Pages ***** //
            // **************************** //

            // *** Home Page *** //
            .state('body.homePage',
                {
                    url: "/homePage",
                    templateUrl: "App/Modules/Views/HomePage/HomePage.html",
                    controller: "HomePageController as homePageCtrl"
                })

            // *** Gallery *** //
            .state('body.gallery',
                {
                    url: "/gallery",
                    templateUrl: "App/Modules/Views/GalleryPage/Gallery.html",
                    controller: "GalleryController as galleryCtrl"
                })

            // *** Settings *** //
            .state('body.settings',
                {
                    url: "/settings",
                    templateUrl: "App/Modules/Views/SettingsPage/Settings.html",
                    controller: "SettingsController as settingsCtrl"
                })
        ;
    }
};