/* Created by Gil on 26/02/2016 */

'use strict';

// Load Libraries
import 'angular';
import 'angular-ui-router';

(function webLogManager(logSeverity = 3)
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
})();

// Load Custom Modules
import './Modules/Directives/index';               // gDirectives
import './Modules/Services/GenericServices/index'; // gServices
import './Modules/Services/AppServices/index';     // appServices
import './Modules/Views/index';                    // appControllers

// App config and run
import appRoute     from './Route';
import appRun       from './AppRun';

// Create app module to pass on to Controllers
const app =
    angular
        .module('App',
        [
            'ui.router',
            'gDirectives',
            'gServices',
            'appServices',
            'appControllers'
        ]);

// Run App
appRun(app);
appRoute(app);
