/* Created by Gil on 23/08/15 */

'use strict';

import './GalleryPageStyle.less';

export default function(ngModule)
{
    ngModule
        .controller('GalleryController',
        [
            'Utils',
            'PhotosService',
            galleryCtrlFunc
        ]);

    function galleryCtrlFunc(Utils, PhotosService)
    {
        console.log("GalleryController: Initializing...");

        let galleryCtrl = this;

        galleryCtrl.subHeaderMenuItems = [];
        galleryCtrl.galleries = PhotosService.Galleries;
        galleryCtrl.currentGallery = galleryCtrl.galleries[0];

        // Init SubHeader with Galleries Title's
        for (let i = 0; i < galleryCtrl.galleries.length; i++)
        {
            galleryCtrl.subHeaderMenuItems.push(
            {
                id:   galleryCtrl.galleries[i].galleryId,
                text: galleryCtrl.galleries[i].galleryTitle
            });
        }

        // On Click
        galleryCtrl.onClick_HeaderMenuItem = function(headerMenuItem)
        {
            console.log(`GalleryController: Gallery Selected [${ headerMenuItem.id }]`);

            let gallery = Utils.Search(galleryCtrl.galleries, headerMenuItem.id, 'galleryId');
            if (gallery)
            {
                galleryCtrl.currentGallery = gallery;
            }
        };

        galleryCtrl.onClick_GalleryItem = function(galleryItem)
        {
            console.log(`GalleryController: Gallery Item Selected [${ galleryItem.id }]`);
        };
    }
};