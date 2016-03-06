/* Created by Gil Epshtain on 12/02/2016 */

'use strict';

import './GCheckboxSwitch.less';

export default function(ngModule)
{
    ngModule
        .directive('gCheckboxSwitch',
        [
            gCheckboxSwitchDirective
        ]);

    function gCheckboxSwitchDirective()
    {
        console.log("G-CheckboxSwitch: Initializing...");

        const linkFunc = function(scope, element, attrs)
        {
            // OnClick
            scope.onClick_Switch = function()
            {
                scope.isChecked = !scope.isChecked;

                console.log(`G-CheckboxSwitch: Click -> CheckboxSwipe [${ (scope.text ? ("'" + scope.text + "':: ") : "") + (scope.isChecked ? "On" : "Off") }]`);

                scope.onClick({ isChecked: scope.isChecked });
            };
        };

        let gCheckboxSwitch =
        {
            restrict: 'AE',
            templateUrl: "App/Modules/Directives/GCheckboxSwitch/GCheckboxSwitch.html",
            link: linkFunc,
            scope:
            {
                text: '@',
                isChecked: "=",
                onClick: '&'
            }

            // -> "@" String: (with expression {{ }} ), data stored in attrs
            // -> "&" Callback (function)
            // -> "=" Two way binding. don't use {{ }}, data stored in scope
        };

        return gCheckboxSwitch;
    }
};