/* Created by Gil Epshtain on 18/03/2016 */

'use strict';

// Gallery Photos
import imgImagePlaceholder       from './../../../../Assets/Images/Images/Placeholder-Large.jpg';
import imgImagePlaceholder_Thumb from './../../../../Assets/Images/Images/Placeholder.jpg';

//import imgPhoto_XX       from './../../../../Assets/Images/Photos/GalleryX/photo_XX_YY.jpg';
//import imgPhoto_XX_Thumb from './../../../../Assets/Images/Photos/GalleryX/photo_XX_YY_thumb.jpg';

//[
//  {
//    "galleryId": "/<gallery_id>",
//    "galleryTitle": "<gallery_title>",
//    "images":
//    [
//      {
//        "id": "/<gallery_id>/<pic_id>",
//        "text": "<image_text>",
//        "image":
//        {
//          "thumbnail": a,
//          "picture":   b
//        }
//      },
//      // ...
//    ]
//  },
//  // ...
//];

export default
[
    {
        "galleryId": "/gId1",
        "galleryTitle": "גלריה 1",
        "images":
        [
            {
                "id": "/gId1/pic1",
                "text": "תמונה",
                "image":
                {
                    "thumbnail": "",    //imgImagePlaceholder,       //imgPhoto_XX,
                    "picture":   ""     //imgImagePlaceholder_Thumb  //imgPhoto_XX_Thumb
                }
            },
            {
                "id": "/gId1/pic2",
                "text": "תמונה",
                "image":
                {
                    "thumbnail": imgImagePlaceholder,       //imgPhoto_XX,
                    "picture":   imgImagePlaceholder_Thumb  //imgPhoto_XX_Thumb
                }
            },
            {
                "id": "/gId1/pic3",
                "text": "תמונה",
                "image":
                {
                    "thumbnail": imgImagePlaceholder,       //imgPhoto_XX,
                    "picture":   imgImagePlaceholder_Thumb  //imgPhoto_XX_Thumb
                }
            },
            {
                "id": "/gId1/pic4",
                "text": "תמונה",
                "image":
                {
                    "thumbnail": imgImagePlaceholder,       //imgPhoto_XX,
                    "picture":   imgImagePlaceholder_Thumb  //imgPhoto_XX_Thumb
                }
            },
            {
                "id": "/gId1/pic5",
                "text": "תמונה",
                "image":
                {
                    "thumbnail": imgImagePlaceholder,       //imgPhoto_XX,
                    "picture":   imgImagePlaceholder_Thumb  //imgPhoto_XX_Thumb
                }
            },
            {
                "id": "/gId1/pic6",
                "text": "תמונה",
                "image":
                {
                    "thumbnail": imgImagePlaceholder,       //imgPhoto_XX,
                    "picture":   imgImagePlaceholder_Thumb  //imgPhoto_XX_Thumb
                }
            }
        ]
    },
    {
        "galleryId": "/gId2",
        "galleryTitle": "גלריה 2",
        "images": []
    },
    {
        "galleryId": "/gId3",
        "galleryTitle": "גלריה 3",
        "images": []
    },
    {
        "galleryId": "/gId4",
        "galleryTitle": "גלריה 4",
        "images": []
    }
]