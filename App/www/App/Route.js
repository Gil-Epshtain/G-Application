/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import mainPageTemplate     from './Modules/Views/MainPage/Main.html';

import sideMenuTemplate     from './Modules/Views/SideMenu/SideMenu.html';
import headerTemplate       from './Modules/Views/Header/Header.html';

import homePageTemplate     from './Modules/Views/HomePage/HomePage.html';
import galleryPageTemplate  from './Modules/Views/GalleryPage/GalleryPage.html';
import settingsPageTemplate from './Modules/Views/SettingsPage/Settings.html';

export default function(ngApp)
{
    ngApp
        .config(
            [
                '$stateProvider',
                '$urlRouterProvider',
                '$httpProvider',
                appRouter
            ]);

    function appRouter($stateProvider, $urlRouterProvider, $httpProvider)
    {
        console.log("Router: Initializing...");

        // Allow Cross Origin using $http
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
        // $httpProvider.defaults.useXDomain = true;

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
                            template: mainPageTemplate,
                            controller: "MainController as mainCtrl"
                        },
                        // SideMenu (nested in body view)
                        'sideMenu@body':
                        {
                            template: sideMenuTemplate,
                            controller: "SideMenuController as sideMenuCtrl"
                        },
                        // Header (nested in body view)
                        'header@body':
                        {
                            template: headerTemplate,
                            controller: "HeaderController as headerCtrl"
                        }
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
                    template: homePageTemplate,
                    controller: "HomePageController as homePageCtrl"
                })

            // *** Gallery *** //
            .state('body.gallery',
                {
                    url: "/gallery",
                    template: galleryPageTemplate,
                    controller: "GalleryController as galleryCtrl"
                })

            // *** Settings *** //
            .state('body.settings',
                {
                    url: "/settings",
                    template: settingsPageTemplate,
                    controller: "SettingsController as settingsCtrl"
                })
        ;
    }
};