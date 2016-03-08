/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

export default function(ngApp)
{
    ngApp
        .run(runApp);

    function runApp()
    {
        console.log("~*~ Welcome to G-Application ~*~");
        console.log("App stared at: " + getTimeString());

        let logSeverity = 3; // 3 - Dev / 0 - Prod
        webLogManager(logSeverity);

        function getTimeString(time)
        {
            // Return the time in string format: "hh:mm dd/mm/yyyy"

            time = time ? time : new Date();

            return `${ time.getHours() }:${ time.getMinutes() }:${ time.getSeconds() } ${ time.getDate() }/${ time.getMonth() + 1 }/${ time.getFullYear() }`;
        }

        function webLogManager(logSeverity)
        {
            // Disable/Enable WebView Log
            // 0 - Disable all logs         // Production
            // 1 - Error only
            // 2 - Error and Warning
            // 3 - Error, Warning and Log   // Debug

            let emptyFunc = (msg) => { }; // do nothing!

            window.console.log   = (logSeverity < 3) ? emptyFunc : window.console.log;
            window.console.warn  = (logSeverity < 2) ? emptyFunc : window.console.warn;
            window.console.error = (logSeverity < 1) ? emptyFunc : window.console.error;
        }
    }
};
