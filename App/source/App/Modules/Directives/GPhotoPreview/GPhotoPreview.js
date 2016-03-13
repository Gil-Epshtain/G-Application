/* Created by Gil Epshtain on 7/03/2016 */

'use strict';

import './GPhotoPreview.less';
import gPhotoPreviewTemplate from './GPhotoPreview.html';

export default function(ngModule)
{
    ngModule
        .directive('gPhotoPreview',
            [
                'PhotosService',
                gPhotoPreviewDirective
            ]);

    function gPhotoPreviewDirective(PhotosService)
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
                imgSrc: '=',

                isShowLeftButton: '=',
                onClickLeftButton: '&',

                isShowRightButton: '=',
                onClickRightButton: '&'
            }

            // -> '@' String: (with expression {{ }} ), data stored in attrs
            // -> '&' Callback (function)
            // -> '=' Two way binding. don't use {{ }}, data stored in scope
        };

        function linkFunc(scope, element, attrs)
        {
            scope.imgIconDeleteWhite     = PhotosService.AppImages.imgIconDeleteWhite;
            scope.imgIconArrowLeftWhite  = PhotosService.AppImages.imgIconArrowLeftWhite;
            scope.imgIconArrowRightWhite = PhotosService.AppImages.imgIconArrowRightWhite;

            // OnClick: Photo
            scope.onClick_PhotoPreview = function()
            {
                console.log("G-PhotoPreview: Click -> Photo");

                // Do nothing, just for prevent close view due to click on container div
            };

            // OnClick: Dark Background
            scope.onClick_PhotoPreviewDarkBackground = function()
            {
                console.log("G-PhotoPreview: Click -> Dark Background");

                closePhotoPreview();
            };

            // OnClick: Close
            scope.onClick_ClosePreviewButton = function()
            {
                console.log("G-PhotoPreview: Click -> Close");

                closePhotoPreview();
            };

            // OnClick: Left
            scope.onClick_LeftButton = function()
            {
                console.log("G-PhotoPreview: Click -> Left");

                // Invoke Callback
                scope.onClickLeftButton();
            };

            // OnClick: Right
            scope.onClick_RightButton = function()
            {
                console.log("G-PhotoPreview: Click -> Right");

                // Invoke Callback
                scope.onClickRightButton();
            };

            function closePhotoPreview()
            {
                console.log("G-PhotoPreview: Closing");

                scope.isVisible = false;
            }
        }

        return gPhotoPreview;
    }
};