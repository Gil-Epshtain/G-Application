/* Created by Gil Epshtain on 17/02/2016 */
'use strict';

module.exports = (ngModule) =>
{
    ngModule
        .factory("PhotosService",
        [
            photosServiceFunc
        ]);

    function photosServiceFunc()
    {
        console.log("PhotosService: Initializing...");

        var photosService = {};

        photosService.Galleries =
        [
            // Gallery 1: - Demo
            {
                galleryId: '/Demo',
                galleryTitle: 'אלבום 1',
                images:
                [
                    {
                        id: '/Demo/pic1',
                        text: 'תמונה 1',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic2',
                        text: 'תמונה 2',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic3',
                        text: 'תמונה 3',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic4',
                        text: 'תמונה 4',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic5',
                        text: 'תמונה 5',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic6',
                        text: 'תמונה 6',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic7',
                        text: 'תמונה 7',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic8',
                        text: 'תמונה 8',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    },
                    {
                        id: '/Demo/pic9',
                        text: 'תמונה 9',
                        image:
                        {
                            thumbnail: 'App/Assets/Images/Images/Placeholder.jpg',
                            picture:   'App/Assets/Images/Images/Placeholder-Large.jpg'
                        }
                    }
                ]
            },
            // Gallery 2:
            {
                galleryId: '/g2',
                galleryTitle: 'אלבום 2',
                images: []
            },
            // Gallery 3:
            {
                galleryId: '/g3',
                galleryTitle: 'אלבום 3',
                images: []
            },
            // Gallery 4:
            {
                galleryId: '/g4',
                galleryTitle: 'אלבום 4',
                images: []
            }
        ];

        return photosService;
    }
};