/* Created by Gil on 23/02/2016 */

'use strict';

import languages from "./Languages.json";

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

        let languagesService = {};

        languagesService.Languages = languages;

        languagesService.getLanguageStrings = function(localCode)
        {
            console.log(`LanguagesService: Searching for language Strings [${ localCode }]`);

            let deferredStringsLoaded = $q.defer();

            let language = Utils.Search(languagesService.Languages, localCode, 'localCode');
            if (language)
            {
                if (language.strings)
                {
                    console.log(`LanguagesService: Language Strings found in repository [${ localCode }]`);

                    deferredStringsLoaded.resolve(language.strings);
                }
                else
                {
                    console.log(`LanguagesService: Sending request to get Language Strings [${ localCode }]`);

                    let fileUrl = `App/Data/Local/${ localCode }.json`;

                    ServerService.httpGet(fileUrl, deferredStringsLoaded, (strings) =>
                    {
                        // Save current app strings, so if language change back, a 2nd request wan't be needed.
                        console.log(`LanguagesService: Language Strings saved in repository [${ localCode }]`);

                        language.strings = strings;
                    });
                }
            }
            else
            {
                console.log(`LanguagesService: Language not found [${ localCode }]`);

                deferredStringsLoaded.reject();
            }

            return deferredStringsLoaded.promise;
        };

        languagesService.getLanguageName = function(localCode)
        {
            let language = Utils.Search(languagesService.Languages, localCode, 'localCode');
            let languageName = language ? language.name : "";

            return languageName;
        };

        return languagesService;
    }
};