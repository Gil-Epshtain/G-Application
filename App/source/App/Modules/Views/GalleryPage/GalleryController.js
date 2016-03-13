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

        // Galleries
        galleryCtrl.galleries = PhotosService.Galleries;
        galleryCtrl.currentGallery = galleryCtrl.galleries[0];

        // Photo Preview
        galleryCtrl.photoPreview =
        {
            itemIndex: -1,
            isVisible: false,
            imgUrl: "",
            isButtonNextVisible: false,
            isButtonBackVisible: false
        };

        // SubHeader Menu Items - init with galleries titles
        galleryCtrl.subHeaderMenuItems = [];
        for (let i = 0; i < galleryCtrl.galleries.length; i++)
        {
            galleryCtrl.subHeaderMenuItems.push(
            {
                id:   galleryCtrl.galleries[i].galleryId,
                text: galleryCtrl.galleries[i].galleryTitle
            });
        }

        // OnClick: SubHeader Menu Item
        galleryCtrl.onClick_HeaderMenuItem = function(headerMenuItem)
        {
            console.log(`GalleryController: Gallery Selected [${ headerMenuItem.id }]`);

            let gallery = Utils.Search(galleryCtrl.galleries, headerMenuItem.id, 'galleryId');
            if (gallery)
            {
                galleryCtrl.currentGallery = gallery;
            }
            else
            {
                console.warn("GalleryController: Gallery not found!");
                console.log(headerMenuItem);
            }
        };

        // OnClick: Gallery Item
        galleryCtrl.onClick_GalleryItem = function(galleryItem)
        {
            console.log(`GalleryController: Gallery Item Selected [${ galleryItem.id }]`);

            // Show Photo Preview

            let photoIndex = -1; // save index for next/back buttons
            for (let i = 0; i < galleryCtrl.currentGallery.images.length; i++)
            {
                if (galleryCtrl.currentGallery.images[i].id == galleryItem.id)
                {
                    photoIndex = i;
                    break;
                }
            }

            if (photoIndex != -1)
            {
                galleryCtrl.photoPreview.itemIndex = photoIndex;

                galleryCtrl.photoPreview.isButtonBackVisible = (photoIndex != 0);
                galleryCtrl.photoPreview.isButtonNextVisible = (photoIndex != galleryCtrl.currentGallery.images.length - 1);

                galleryCtrl.photoPreview.imgUrl = galleryItem.image.picture;
                galleryCtrl.photoPreview.isVisible = true;
            }
            else
            {
                console.warn("GalleryController: Error -> PreviewPhoto Item not found");
            }
        };

        // OnClick: Photo Preview Next
        galleryCtrl.onClick_PhotoPreviewNext = function()
        {
            console.log("GalleryController: Click -> PreviewPhoto Next");

            galleryCtrl.photoPreview.itemIndex++;

            galleryCtrl.photoPreview.isButtonBackVisible = true;
            galleryCtrl.photoPreview.isButtonNextVisible = (galleryCtrl.photoPreview.itemIndex != galleryCtrl.currentGallery.images.length - 1);

            galleryCtrl.photoPreview.imgUrl = galleryCtrl.currentGallery.images[galleryCtrl.photoPreview.itemIndex].image.picture;
        };

        // OnClick: Photo Preview Back
        galleryCtrl.onClick_PhotoPreviewBack = function()
        {
            console.log("GalleryController: Click -> PreviewPhoto Back");

            galleryCtrl.photoPreview.itemIndex--;

            galleryCtrl.photoPreview.isButtonBackVisible = (galleryCtrl.photoPreview.itemIndex != 0);
            galleryCtrl.photoPreview.isButtonNextVisible = true;

            galleryCtrl.photoPreview.imgUrl = galleryCtrl.currentGallery.images[galleryCtrl.photoPreview.itemIndex].image.picture;
        };
    }
};