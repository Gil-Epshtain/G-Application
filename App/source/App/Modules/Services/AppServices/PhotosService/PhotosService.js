/* Created by Gil Epshtain on 17/02/2016 */

'use strict';

import photos from './Photos.json';

import imgIconMenuWhite          from './../../../../Assets/Images/Icons/Menu-icon-white.png';
import imgIconMenuHexBE1912      from './../../../../Assets/Images/Icons/Menu-icon-hexBE1912.png';
import imgIconDeleteWhite        from './../../../../Assets/Images/Icons/Delete-icon-white.png';
import imgIconArrowUpWhite       from './../../../../Assets/Images/Icons/ArrowUp-icon-white.png';
import imgIconArrowDownWhite     from './../../../../Assets/Images/Icons/ArrowDown-icon-white.png';

import imgIconHomeWhite          from './../../../../Assets/Images/Icons/Home-icon-white.png';
import imgIconHomeHexBE1912      from './../../../../Assets/Images/Icons/Home-icon-hexBE1912.png';
import imgIconLoveWhite          from './../../../../Assets/Images/Icons/Love-icon-white.png';
import imgIconLoveHexBE1912      from './../../../../Assets/Images/Icons/Love-icon-hexBE1912.png';
import imgIconSettingsWhite      from './../../../../Assets/Images/Icons/Settings-icon-white.png';
import imgIconSettingsHexBE1912  from './../../../../Assets/Images/Icons/Settings-icon-hexBE1912.png';

import imgPhoto1                 from './../../../../Assets/Images/Photos/test1.jpg';
import imgPhoto2                 from './../../../../Assets/Images/Photos/test2.jpg';
import imgPhoto3                 from './../../../../Assets/Images/Photos/test3.jpg';
import imgPhoto4                 from './../../../../Assets/Images/Photos/test4.jpg';
import imgPhoto5                 from './../../../../Assets/Images/Photos/test5.jpg';

import imgImageHarts             from './../../../../Assets/Images/Images/Hearts.png';
import imgImagePlaceholder       from './../../../../Assets/Images/Images/Placeholder.jpg';
import imgImagePlaceholderLarge  from './../../../../Assets/Images/Images/Placeholder-Large.jpg';

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

        photosService.AppImages =
        {
            imgIconMenuWhite,
            imgIconMenuHexBE1912,
            imgIconDeleteWhite,
            imgIconArrowUpWhite,
            imgIconArrowDownWhite,

            imgIconHomeWhite,
            imgIconHomeHexBE1912,
            imgIconLoveWhite,
            imgIconLoveHexBE1912,
            imgIconSettingsWhite,
            imgIconSettingsHexBE1912,

            imgPhoto1,
            imgPhoto2,
            imgPhoto3,
            imgPhoto4,
            imgPhoto5,

            imgImageHarts,
            imgImagePlaceholder,
            imgImagePlaceholderLarge
        };

        return photosService;
    }
};