/* Created by Gil Epshtain on 28/02/2016 */

'use strict';

import './GButton.less';
import gButtonTemplate from './GButton.html';

export default function(ngModule)
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

        let gButton =
        {
            restrict: 'AE',
            template: gButtonTemplate,
            link: linkFunc,
            scope:
            {
                text: '@',
                isActiveStyle: '@',
                onClick: '&'
            }

            // -> "@" String: (with expression {{ }} ), data stored in attrs
            // -> "&" Callback (function)
            // -> "=" Two way binding. don't use {{ }}, data stored in scope
        };

        function linkFunc(scope, element, attrs)
        {
            scope.isPressStyle = false;

            // OnClick
            scope.onClick_Button = function()
            {
                // Press Style
                scope.isPressStyle = true;

                console.log(`G-Button: Click -> Button [${scope.text ? scope.text : ""}]`);

                $timeout(() =>
                {
                    scope.isPressStyle = false;

                    // Invoke Callback
                    scope.onClick();
                }, 250)
            };
        }

        return gButton;
    }
};