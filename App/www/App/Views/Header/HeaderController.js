/* Created by Gil Epshtain on 22/02/2016 */

'use strict';

import './HeaderStyle.less';

module.exports = (ngModule) =>
{
    ngModule
        .controller('HeaderController',
        [
            '$scope',
            HeaderCtrlFunc
        ]);

    function HeaderCtrlFunc($scope)
    {
        console.log("HeaderController: Initializing...");

        var headerCtrl = this;

        var mainCtrl = $scope.$parent.mainCtrl;

        headerCtrl.onClick_OpenMenu = function()
        {
            if (!mainCtrl.AppData.isSideMenuOpen) // If Closed
            {
                headerCtrl.toggleSideMenu(true);
            }
        };

        headerCtrl.onClick_CloseMenu = function()
        {
            if (mainCtrl.AppData.isSideMenuOpen) // If Open
            {
                headerCtrl.toggleSideMenu(false);
            }
        };

        headerCtrl.toggleSideMenu = function(isOpeningMenu)
        {
            console.log("HeaderController: SideMenu -> " + (isOpeningMenu ? "Open" : "Close"));

            mainCtrl.AppData.isSideMenuOpen = isOpeningMenu;
        };
    }
};