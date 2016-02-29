/* Created by Gil Epshtain on 18/02/2016 */

'use strict';

import './GDropDownList.less';

module.exports = (ngModule) =>
{
    ngModule
        .directive('gDropDownList',
        [
            "$timeout",
            gDropDownListDirective
        ]);

    function gDropDownListDirective($timeout)
    {
        console.log("G-DropDownList: Initializing...");

        var linkFunc = function(scope, element, attrs)
        {
            scope.isOpen = false;
            scope.selectedItem = scope.selectedItem ? scope.selectedItem : scope.items[0]; // Default: first item selected

            // OnClick: Open DropDown Button
            scope.onClick_OpenDropDownListArrow = function()
            {
                scope.toggleDropDownList();
            };

            // OnClick:
            scope.onClick_DropDownListItem = function(item)
            {
                // Set Selected Item
                scope.selectedItem = item;

                // Press Style
                scope.selectedItem.isPressStyle = true;

                console.log("G-DropDownList: Click -> gDropDownList-Item " + (scope.text ? ("'" + scope.text + "'") : "") + "[" + (scope.selectedItem.id ? scope.selectedItem.id : scope.selectedItem) + "]");

                // Invoke Callback
                scope.onChange({ selectedItem: scope.selectedItem });

                $timeout(function()
                {
                    scope.selectedItem.isPressStyle = false;

                    // Close DroDownList
                    scope.isOpen = false;
                }, 250);
            };

            scope.toggleDropDownList = function()
            {
                scope.isOpen = !scope.isOpen;

                console.log("G-DropDownList: Click -> gDropDownList " + (scope.text ? ("'" + scope.text + "'") : "") + "[" + (scope.isOpen ? "Open" : "Close") + "]");
            };
        };

        var gDropDownList =
        {
            restrict: 'AE',
            templateUrl: "App/Directives/GDropDownList/GDropDownList.html",
            link: linkFunc,
            scope:
            {
                //isOpen: '=',
                text: '@',
                items: '=',
                selectedItem: '=',
                onChange: '&'

                // items = [{ id: "", text: ""}, {...}, ..];
            }

            // -> "@" String: (with expression {{ }} ), data stored in attrs
            // -> "&" Callback (function)
            // -> "=" Two way binding. don't use {{ }}, data stored in scope
        };

        return gDropDownList;
    }
};