/* Created by Gil Epshtain on 16/02/2016 */

'use strict';

import './GGallery.less';
import gGalleryTemplate from './GGallery.html';

export default function(ngModule)
{
    ngModule
        .directive('gGallery',
        [
            'PhotosService',
            '$timeout',
            '$interval',
            gGalleryDirective
        ]);

    function gGalleryDirective(PhotosService, $timeout, $interval)
    {
        console.log("G-Gallery: Initializing...");

        let gGallery =
        {
            restrict: 'AE',
            template: gGalleryTemplate,
            link: linkFunc,
            scope:
            {
                galleryTitle: '=',
                galleryItems: '=',
                clickGalleryItemCallback: '&'
            }

            // -> '@' String: (with expression {{ }} ), data stored in attrs
            // -> '&' Callback (function)
            // -> '=' Two way binding. don't use {{ }}, data stored in scope
        };

        function linkFunc(scope, element, attrs)
        {
            scope.imgIconArrowUpWhite = PhotosService.AppImages.imgIconArrowUpWhite;
            scope.imgSpinner =          PhotosService.AppImages.imgAnimatedSpinner;

            // OnChange: Gallery Items (new Gallery)
            scope.$watch('galleryItems', function(newValue, oldValue)
            {
                // Each time the gallery collection is changed we update the show/hide status of the BackToTop button
                isShowBackToTop();
            });

            // OnClick: Gallery Item (Photo)
            scope.onClick_GalleryItem = function(galleryItem)
            {
                let galleryItemId = galleryItem.id ? galleryItem.id : galleryItem;
                console.log(`G-Gallery: Click -> GalleryItem [${ galleryItemId }]`);

                scope.clickGalleryItemCallback({ galleryItem: galleryItem });
            };

            // --- BackToTop Button ---
            scope.isShowBackToTopButton = false;
            scope.isShowBackToTopButtonPressStyle = false;

            // OnClick: BackToTop
            scope.onClick_BackToTop = function()
            {
                scope.isShowBackToTopButtonPressStyle = true;
                console.log("G-Gallery: Click -> Gallery - BackToTop");

                let gGalleryDiv = document.getElementById('gGallery');
                let gGalleryElement = angular.element(gGalleryDiv);

                // Scroll Top Animation
                let scrollTopInterval = $interval(() =>
                {
                    gGalleryElement[0].scrollTop -= 10;
                    if (gGalleryElement[0].scrollTop <= 0)
                    {
                        $interval.cancel(scrollTopInterval);
                    }

                }, 10);

                // Press Button Animation
                $timeout(() =>
                {
                    scope.isShowBackToTopButtonPressStyle = false;
                }, 250);
            };

            function isShowBackToTop()
            {
                let windowHeight = window.innerHeight;
                let gGalleryHeight = document.getElementById('gGallery').scrollHeight;

                scope.isShowBackToTopButton = (windowHeight < gGalleryHeight);

                console.log(`G-Gallery: Gallery Ready -> BackToTop [${ (scope.isShowBackToTopButton ? "Show" : "Hide") } - WindowHeight:'${ windowHeight }'; gGalleryHeight:'${ gGalleryHeight }']`);
            }
        }

        return gGallery;
    }
};