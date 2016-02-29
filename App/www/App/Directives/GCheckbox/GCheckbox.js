/* Created by Gil Epshtain on 12/02/2016 */

'use strict';

import './GCheckbox.less';

module.exports = (ngModule) =>
{
    ngModule
        .directive('gCheckbox',
        [
            gCheckboxDirective
        ]);

    function gCheckboxDirective()
    {
        console.log("G-Checkbox: Initializing...");

        var linkFunc = function(scope, element, attrs)
        {
            // OnClick
            scope.onClick_Checkbox = function()
            {
                scope.isChecked = !scope.isChecked;

                console.log("G-Checkbox: Click -> Checkbox [" + (scope.text ? ("'" + scope.text + "':: ") : "") + (scope.isChecked ? "Checked" : "Unchecked") + "]");

                scope.onClick({isChecked: scope.isChecked});
            };
        };

        var gCheckbox =
        {
            restrict: 'AE',
            templateUrl: "App/Directives/GCheckbox/GCheckbox.html",
            link: linkFunc,
            scope: {
                text: '@',
                isChecked: '=',
                onClick: '&'
            }

            // -> "@" String: (with expression {{ }} ), data stored in attrs
            // -> "&" Callback (function)
            // -> "=" Two way binding. don't use {{ }}, data stored in scope
        };

        return gCheckbox;
    }
};