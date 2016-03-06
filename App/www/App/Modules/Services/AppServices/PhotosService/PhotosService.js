/* Created by Gil Epshtain on 17/02/2016 */

'use strict';

import photos from './Photos.json';

export default function(ngModule)
{
    ngModule
        .factory("PhotosService",
        [
            photosServiceFunc
        ]);

    function photosServiceFunc()
    {
        console.log("PhotosService: Initializing...");

        let photosService = {};

        photosService.Galleries = photos;

        return photosService;
    }
};