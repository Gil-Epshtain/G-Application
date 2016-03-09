/* Created by Gil Epshtain on 12/02/2016 */

'use strict';

import './SideMenuStyle.less';

export default function(ngModule)
{
    ngModule
        .controller('SideMenuController',
        [
            'AppDataService',
            '$scope',
            '$state',
            '$timeout',
            sideMenuCtrlFunc
        ]);

    function sideMenuCtrlFunc(AppDataService, $scope, $state, $timeout)
    {
        console.log("SideMenuController: Initializing...");

        let sideMenuCtrl = this;

        let mainCtrl = $scope.$parent.mainCtrl;

        // ------ Open/Close Side Menu ------
        sideMenuCtrl.openSideMenu = function()
        {
            sideMenuCtrl.toggleSideMenu(true);
        };

        sideMenuCtrl.closeSideMenu = function()
        {
            sideMenuCtrl.toggleSideMenu(false);
        };

        sideMenuCtrl.toggleSideMenu = function(isOpening)
        {
            console.log(`SideMenuController: Side-Menu Toggle [${ (isOpening ? "Open" : "Close") }]`);

            mainCtrl.AppData.isSideMenuOpen = isOpening;
        };

        // ------ Active Menu Item ------
        sideMenuCtrl.isActiveMenuItem = function(menuItem)
        {
            return (menuItem.state == $state.current.name);
        };

        sideMenuCtrl.getMenuItemIcon = function(menuItem)
        {
            let iconUrl = "";

            if (menuItem && menuItem.icon)
            {
                let isActiveMenuItem = sideMenuCtrl.isActiveMenuItem(menuItem);

                iconUrl = isActiveMenuItem ? menuItem.icon.active : menuItem.icon.inactive;
            }

            return iconUrl;
        };

        // ------ Select Menu Item ------
        sideMenuCtrl.onClick_SideMenuItem = function(menuItem)
        {
            if (menuItem && menuItem.id)
            {
                // Add Press Style
                menuItem.isPressStyle = true;

                console.log(`SideMenuController: Click -> Side-Menu Item [${ menuItem.id }]`);

                // Go to page
                $state.go(menuItem.state);

                $timeout(() =>
                {
                    // Change Header Title
                    mainCtrl.AppData.ApplicationHeader = menuItem.pageTitle;

                    // Close side menu
                    sideMenuCtrl.closeSideMenu();
                }, 350);

                $timeout(() =>
                {
                    // Remove press Style
                    menuItem.isPressStyle = false;
                }, 500);
            }
        };
    }
};