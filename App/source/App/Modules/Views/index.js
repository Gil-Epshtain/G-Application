/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import 'angular';

// Load all Controllers
import mainCtrl     from './MainPage/MainController';
import sideMenuCtrl from './SideMenu/SideMenuController';
import headerCtrl   from './Header/HeaderController';
import homePageCtrl from './HomePage/HomePageController';
import galleryCtrl  from './GalleryPage/GalleryController';
import settingsCtrl from './SettingsPage/SettingsController';

// Create new ngModule named appControllers
const appControllersModule = angular.module('appControllers', []);

console.log("Loading App Views/Controllers...");

// Bind All the controllers to appControllers
mainCtrl     (appControllersModule);
sideMenuCtrl (appControllersModule);
headerCtrl   (appControllersModule);
homePageCtrl (appControllersModule);
galleryCtrl  (appControllersModule);
settingsCtrl (appControllersModule);

// Export the ngModule
export default appControllersModule;