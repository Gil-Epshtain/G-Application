/* Created by Gil Epshtain on 15/02/2016 */

'use strict';

import './GSubHeaderMenu.less';

export default function(ngModule)
{
    ngModule
        .directive('gSubHeaderMenu',
        [
            gHeaderMenuDirective
        ]);

    function gHeaderMenuDirective()
    {
        console.log("G-HeaderMenu: Initializing...");

        const linkFunc = function(scope, element, attrs)
        {
            scope.selectedItem = scope.items[0];

            // OnClick
            scope.onClick_MenuItem = function(item)
            {
                let itemId = item.id ? item.id : item;
                console.log(`G-HeaderMenu: Click -> MenuItem [${ itemId }]`);

                scope.selectedItem = item;

                scope.clickItemCallback({ headerMenuItem: item });
            };
        };

        let gHeaderMenu =
        {
            restrict: 'AE',
            templateUrl: "App/Modules/Directives/GSubHeaderMenu/GSubHeaderMenu.html",
            link: linkFunc,
            scope:
            {
                items: '=',             // items:    [{ id: '', text: '' }, {..}, ..]
                clickItemCallback: '&'  // callback: function(headerMenuItem)
            }

            // -> '@' String: (with expression {{ }} ), data stored in attrs
            // -> '&' Callback (function)
            // -> '=' Two way binding. don't use {{ }}, data stored in scope
        };

        return gHeaderMenu;
    }
};