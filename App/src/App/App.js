/* Created by Gil on 26/02/2016 */

'use strict';

// Load Libraries
import 'angular';
import 'angular-ui-router';

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
