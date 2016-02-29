/* Created by Gil Epshtain on 23/08/15 */

'use strict';

module.exports = (ngModule) =>
{
    ngModule
        .factory("Utils",
        [
            utilsFunc
        ]);

    function utilsFunc()
    {
        console.log("Utils: Initializing...");

        var utils = {};

        // search in array of objects
        utils.Search = function(array, key, searchQuery)
        {
            var retVal = null;

            if ((array) && (key) && (searchQuery)) // validate input
            {
                for (var i = 0; i < array.length; i++)
                {
                    if (array[i][searchQuery] == key)
                    {
                        retVal = array[i];
                        break;
                    }
                }
            }

            return retVal;
        };

        return utils;
    }
};