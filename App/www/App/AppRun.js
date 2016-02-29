/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

module.exports = function(ngModule)
{
    ngModule
        .run(runApp);

    function runApp()
    {
        console.log("~*~ Welcome to G-Application ~*~");
        console.log("App stared at: " + getTimeFormat());

        function getTimeFormat(time) // Return the time in string format: "hh:mm dd/mm/yyyy"
        {
            time = time ? time : new Date();

            return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " " + +time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear());
        }
    }
};
