/* Created by Gil Epshtain on 23/08/15 */

'use strict';

export default function(ngModule)
{
    ngModule
        .factory("Utils",
        [
            utilsFunc
        ]);

    function utilsFunc()
    {
        console.log("Utils: Initializing...");

        let utils = {};

        // search in array of objects
        utils.Search = function(array, key, searchQuery)
        {
            let retVal = null;

            if ((array) && (key) && (searchQuery)) // validate input
            {
                for (let i = 0; i < array.length; i++)
                {
                    if (array[i][searchQuery] == key)
                    {
                        retVal = array[i];
                        break;
                    }
                }
            }
            else
            {
                console.warn("Utils: Error in Search method, incorrect input");
            }

            return retVal;
        };

        return utils;
    }
};