/* Created by Gil Epshtain on 17/02/2016 */

'use strict';

import galleriesData from './GalleryData';

// Load App Images

// Icons
import imgIconMenuWhite          from './../../../../Assets/Images/Icons/Menu-icon-white.png';
import imgIconMenuHexBE1912      from './../../../../Assets/Images/Icons/Menu-icon-hexBE1912.png';
import imgIconDeleteWhite        from './../../../../Assets/Images/Icons/Delete-icon-white.png';
import imgIconArrowUpWhite       from './../../../../Assets/Images/Icons/ArrowUp-icon-white.png';
import imgIconArrowDownWhite     from './../../../../Assets/Images/Icons/ArrowDown-icon-white.png';
import imgIconArrowLeftWhite     from './../../../../Assets/Images/Icons/ArrowLeft-icon-white.png';
import imgIconArrowRightWhite    from './../../../../Assets/Images/Icons/ArrowRight-icon-white.png';
import imgIconHomeWhite          from './../../../../Assets/Images/Icons/Home-icon-white.png';
import imgIconHomeHexBE1912      from './../../../../Assets/Images/Icons/Home-icon-hexBE1912.png';
import imgIconLoveWhite          from './../../../../Assets/Images/Icons/Love-icon-white.png';
import imgIconLoveHexBE1912      from './../../../../Assets/Images/Icons/Love-icon-hexBE1912.png';
import imgIconSettingsWhite      from './../../../../Assets/Images/Icons/Settings-icon-white.png';
import imgIconSettingsHexBE1912  from './../../../../Assets/Images/Icons/Settings-icon-hexBE1912.png';

// Images
import imgImageHarts             from './../../../../Assets/Images/Images/Hearts.png';
import imgImagePlaceholder       from './../../../../Assets/Images/Images/Placeholder.jpg';
import imgImagePlaceholderLarge  from './../../../../Assets/Images/Images/Placeholder-Large.jpg';

// Animated
import imgAnimatedSpinner        from './../../../../Assets/Images/Animated/Spinner-white.svg';



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

        let photosService =
        {
            Galleries: galleriesData,
            AppImages:
            {
                // Icons
                imgIconMenuWhite,
                imgIconMenuHexBE1912,
                imgIconDeleteWhite,
                imgIconArrowUpWhite,
                imgIconArrowDownWhite,
                imgIconArrowLeftWhite,
                imgIconArrowRightWhite,
                imgIconHomeWhite,
                imgIconHomeHexBE1912,
                imgIconLoveWhite,
                imgIconLoveHexBE1912,
                imgIconSettingsWhite,
                imgIconSettingsHexBE1912,

                // Images
                imgImageHarts,
                imgImagePlaceholder,
                imgImagePlaceholderLarge,

                // Animated
                imgAnimatedSpinner
            }
        };
        return photosService;
    }
};