/* Created by Gil Epshtain on 09/11/2016 */

'use strict';

import './GTextPanel.less';
//import gTextPanelTemplate from 'GTextPanel.html';
let gTextPanelTemplate = '<div>!!!</div>';

export default function(ngModule)
{
    ngModule
        .directive('gTextPanel',
        [
            gTextPanelDirective
        ]);

    function gTextPanelDirective()
    {
        console.log("G-TextPanel: Initializing...");

        let gTextPanel =
        {
            restrict: 'AE',
            template: gTextPanelTemplate,
            link: linkFunc,
            scope:
            {

            }

            // -> '@' String: (with expression {{ }} ), data stored in attrs
            // -> '&' Callback (function)
            // -> '=' Two way binding. don't use {{ }}, data stored in scope
        };

        function linkFunc(scope, element, attrs)
        {

        }

        return gTextPanel;
    }
};