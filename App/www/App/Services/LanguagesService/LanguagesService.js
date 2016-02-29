/* Created by Gil on 23/02/2016 */
'use strict';

module.exports = (ngModule) =>
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

        var languagesService = {};

        languagesService.Languages =
        [
            {
                localCode: "he-IL",
                name:      "עברית"
            },
            {
                localCode: "en-US",
                name:      "English"
            }
        ];

        languagesService.getLanguageStrings = function(localCode)
        {
            console.log("LanguagesService: Searching for language Strings [" + localCode + "]");

            var deferredStringsLoaded = $q.defer();

            var language = Utils.Search(languagesService.Languages, localCode, 'localCode');
            if (language)
            {
                if (language.strings)
                {
                    console.log("LanguagesService: Language Strings found in repository [" + localCode + "]");

                    deferredStringsLoaded.resolve(language.strings);
                }
                else
                {
                    console.log("LanguagesService: Sending request to get Language Strings [" + localCode + "]");

                    var fileUrl = "App/Data/Local/" + localCode + ".json";

                    ServerService.httpGet(fileUrl, deferredStringsLoaded, function(strings)
                    {
                        // Save current app strings, so if language change back, a 2nd request wan't be needed.
                        console.log("LanguagesService: Language Strings saved in repository [" + localCode + "]");

                        language.strings = strings;
                    });
                }
            }
            else
            {
                console.log("LanguagesService: Language not found [" + localCode + "]");

                deferredStringsLoaded.reject();
            }

            return deferredStringsLoaded.promise;
        };

        languagesService.getLanguageName = function(localCode)
        {
            var language = Utils.Search(languagesService.Languages, localCode, 'localCode');
            var languageName = language ? language.name : "";

            return languageName;
        };

        return languagesService;
    }
};