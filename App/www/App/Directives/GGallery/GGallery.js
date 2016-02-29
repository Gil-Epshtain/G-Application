/* Created by Gil Epshtain on 16/02/2016 */

'use strict';

import './GGallery.less';

module.exports = (ngModule) =>
{
    ngModule
        .directive('gGallery',
        [
            '$timeout',
            '$interval',
            gGalleryDirective
        ]);

    function gGalleryDirective($timeout, $interval)
    {
        console.log("G-Gallery: Initializing...");

        var linkFunc = function(scope, element, attrs)
        {
            // OnChange: Gallery Items (new Gallery)
            scope.$watch('galleryItems', function(newValue, oldValue)
            {
                // Each time the gallery collection is changed we update the show/hide status of the BackToTop button
                isShowBackToTop();
            });

            // OnClick: Gallery Item (Photo)
            scope.onClick_GalleryItem = function(galleryItem)
            {
                var galleryItemId = galleryItem.id ? galleryItem.id : galleryItem;
                console.log("G-Gallery: Click -> GalleryItem [" + galleryItemId + "]");

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

                var gGalleryDiv = document.getElementById('gGallery');
                var gGalleryElement = angular.element(gGalleryDiv);

                // Scroll Top Animation
                var scrollTopInterval = $interval(function()
                {
                    gGalleryElement[0].scrollTop -= 10;
                    if (gGalleryElement[0].scrollTop <= 0)
                    {
                        $interval.cancel(scrollTopInterval);
                    }

                }, 10);

                // Press Button Animation
                $timeout(function()
                {
                    scope.isShowBackToTopButtonPressStyle = false;
                }, 250);
            };

            function isShowBackToTop()
            {
                var windowHeight = window.innerHeight;
                var gGalleryHeight = document.getElementById('gGallery').scrollHeight;

                scope.isShowBackToTopButton = (windowHeight < gGalleryHeight);

                console.log("G-Gallery: Gallery Ready -> BackToTop [" + (scope.isShowBackToTopButton ? "Show" : "Hide") + " - WindowHeight:'" + windowHeight + "'; gGalleryHeight:'" + gGalleryHeight + "']");
            }
        };

        var gGallery =
        {
            restrict: 'AE',
            templateUrl: "App/Directives/GGallery/GGallery.html",
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

        return gGallery;
    }
};