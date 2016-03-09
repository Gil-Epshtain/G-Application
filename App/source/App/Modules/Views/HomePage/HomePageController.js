/* Created by Gil on 23/08/15 */

'use strict';

import './HomePageStyle.less';

export default function(ngModule)
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

        let homePageCtrl = this;

        let mainCtrl = $scope.$parent.mainCtrl;
    }
};