/* Created by Gil Epshtain on 24/10/2015 */

'use strict';

import './GPopUp.less';

module.exports = (ngModule) =>
{
    ngModule
        .directive('gPopUp',
        [
            '$timeout',
            gPopUpDirective
        ]);

    function gPopUpDirective($timeout)
    {
        console.log("G-PopUp: Initializing...");

        var linkFunc = function(scope, element, attrs)
        {
            // Click: Close 'X' Button
            scope.onClick_ClosePopUp = function()
            {
                console.log("G-PopUp: Click -> Close");

                scope.closePopUp();
            };

            // Close PopUp
            scope.closePopUp = function()
            {
                console.log("G-PopUp: Closing");

                scope.onClose();

                scope.isVisible = false;
            }
        };

        var gPopUp =
        {
            restrict: 'AE',
            templateUrl: "App/Directives/GPopUp/GPopup.html",
            link: linkFunc,
            scope:
            {
                isVisible: '=',
                title: '=',
                text: '=',
                buttons: '=',
                showCloseButton: '=',
                onClose: '&'

                // ** Input Structure: **
                //    isVisible: true|false
                //    title: "",
                //    text: "",
                //    buttons:
                //    [
                //        {
                //            text: "",
                //            isActiveStyle: true|false,
                //            callback: function() {}
                //        }
                //    ],
                //    showCloseButton: true|false,
                //    onClose: function() {}
            }

            // -> "@" String: (with expression {{ }} ), data stored in attrs
            // -> "&" Callback (function)
            // -> "=" Two way binding. don't use {{ }}, data stored in scope
        };

        return gPopUp;
    }
};