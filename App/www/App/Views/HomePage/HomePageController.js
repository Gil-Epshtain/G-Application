/* Created by Gil on 23/08/15 */

'use strict';

import './HomePageStyle.less';

module.exports = (ngModule) =>
{
    ngModule
        .controller('HomePageController',
        [
            '$scope',
            homePageCtrlFunc
        ]);

    function homePageCtrlFunc($scope)
    {
        console.log("HomePageController: Initializing...");

        var homePageCtrl = this;

        var mainCtrl = $scope.$parent.mainCtrl;
    }
};