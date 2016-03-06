/* Created by Gil Epshtain on 24/10/2015 */

'use strict';

import './GPopUp.less';

export default function(ngModule)
{
    ngModule
        .directive('gPopUp',
        [
            gPopUpDirective
        ]);

    function gPopUpDirective()
    {
        console.log("G-PopUp: Initializing...");

        const linkFunc = function(scope, element, attrs)
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

        let gPopUp =
        {
            restrict: 'AE',
            templateUrl: "App/Modules/Directives/GPopUp/GPopup.html",
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