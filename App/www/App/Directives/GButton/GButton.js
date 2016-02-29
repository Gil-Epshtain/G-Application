/* Created by Gil Epshtain on 28/02/2016 */

'use strict';

import './GButton.less';

module.exports = (ngModule) =>
{
    ngModule
        .directive('gButton',
        [
            '$timeout',
            gButtonDirective
        ]);

    function gButtonDirective($timeout)
    {
        console.log("G-Button: Initializing...");

        var linkFunc = function(scope, element, attrs)
        {
            scope.isPressStyle = false;

            // OnClick
            scope.onClick_Button = function()
            {
                // Press Style
                scope.isPressStyle = true;

                console.log("G-Button: Click -> Button [" + (scope.text ? scope.text : "") + "]");

                $timeout(function()
                {
                    scope.isPressStyle = false;

                    // Invoke Callback
                    scope.onClick();
                }, 250)
            };
        };

        var gButton =
        {
            restrict: 'AE',
            templateUrl: "App/Directives/GButton/GButton.html",
            link: linkFunc,
            scope:
            {
                text: '@',
                isActiveStyle: '@',
                onClick: '&',
            }

            // -> "@" String: (with expression {{ }} ), data stored in attrs
            // -> "&" Callback (function)
            // -> "=" Two way binding. don't use {{ }}, data stored in scope
        };

        return gButton;
    }
};