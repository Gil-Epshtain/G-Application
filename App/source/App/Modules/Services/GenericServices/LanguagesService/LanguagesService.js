/* Created by Gil on 23/02/2016 */

'use strict';

import languages from "./Languages.json";

import languageHeIL from './../../../../Data/Local/he-IL.json';
import languageEnUS from './../../../../Data/Local/en-US.json';

export default function(ngModule)
{
    ngModule
        .service("LanguagesService",
            [
                'ServerService',
                'Utils',
                '$q',
                languagesServiceFunc
            ]);

    function languagesServiceFunc(ServerService, Utils, $q)
    {
        console.log("LanguagesService: Initializing...");

        let languagesService =
        {
            Languages: {}
        };

        initLanguagesStrings();

        function initLanguagesStrings()
        {
            languages['he-IL'].strings = languageHeIL;
            languages['en-US'].strings = languageEnUS;

            languagesService.Languages = languages;
        }

        return languagesService;
    }
};