/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import mainCtrl     from './MainPage/MainController';
import sideMenuCtrl from './SideMenu/SideMenuController';
import headerCtrl   from './Header/HeaderController';
import homePageCtrl from './HomePage/HomePageController';
import galleryCtrl  from './GalleryPage/GalleryController';
import settingsCtrl from './SettingsPage/SettingsController';

module.exports = function(ngModule)
{
    console.log("Loading App Views/Controllers...");

    mainCtrl(ngModule);
    sideMenuCtrl(ngModule);
    headerCtrl(ngModule);
    homePageCtrl(ngModule);
    galleryCtrl(ngModule);
    settingsCtrl(ngModule);
};