/* Created by Gil Epshtain on 7/03/2016 */

'use strict';

import './GPhotoPreview.less';
import gPhotoPreviewTemplate from './GPhotoPreview.html';

export default function(ngModule)
{
    ngModule
        .directive('gPhotoPreview',
            [
                gPhotoPreviewDirective
            ]);

    function gPhotoPreviewDirective()
    {
        console.log("G-PhotoPreview: Initializing...");

        let gPhotoPreview =
        {
            restrict: 'AE',
            template: gPhotoPreviewTemplate,
            link: linkFunc,
            scope:
            {
                isVisible: '=',
                imgSrc: '='
            }

            // -> '@' String: (with expression {{ }} ), data stored in attrs
            // -> '&' Callback (function)
            // -> '=' Two way binding. don't use {{ }}, data stored in scope
        };

        function linkFunc(scope, element, attrs)
        {
            scope.onClick_PhotoPreview = function()
            {
                console.log("G-PhotoPreview: Click -> Photo");

                // Do nothing, just for prevent close view due to click on container div

            };

            scope.onClick_PhotoPreviewDarkBackground = function()
            {
                console.log("G-PhotoPreview: Click -> Dark Background");

                scope.onClick_HidePhotoPreview();
            };

            scope.onClick_ClosePreviewButton = function()
            {
                console.log("G-PhotoPreview: Click -> Close");

                scope.onClick_HidePhotoPreview();
            };

            scope.onClick_HidePhotoPreview = function()
            {
                console.log("G-PhotoPreview: Closing");

                scope.isVisible = false;
            };
        }

        return gPhotoPreview;
    }
};