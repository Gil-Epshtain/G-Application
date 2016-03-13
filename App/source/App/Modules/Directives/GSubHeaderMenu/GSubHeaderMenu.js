/* Created by Gil Epshtain on 15/02/2016 */

'use strict';

import './GSubHeaderMenu.less';
import gSubHeaderMenuTemplate from './GSubHeaderMenu.html';

export default function(ngModule)
{
    ngModule
        .directive('gSubHeaderMenu',
        [
            'PhotosService',
            gHeaderMenuDirective
        ]);

    function gHeaderMenuDirective(PhotosService)
    {
        console.log("G-HeaderMenu: Initializing...");

        let gHeaderMenu =
        {
            restrict: 'AE',
            template: gSubHeaderMenuTemplate,
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

        function linkFunc(scope, element, attrs)
        {
            scope.imgIconArrowLeftWhite  = PhotosService.AppImages.imgIconArrowLeftWhite;
            scope.imgIconArrowRightWhite = PhotosService.AppImages.imgIconArrowRightWhite;

            scope.selectedItem = scope.items[0];

            // OnClick
            scope.onClick_MenuItem = function(item)
            {
                let itemId = item.id ? item.id : item;
                console.log(`G-HeaderMenu: Click -> MenuItem [${ itemId }]`);

                scope.selectedItem = item;

                scope.clickItemCallback({ headerMenuItem: item });
            };
        }

        return gHeaderMenu;
    }
};