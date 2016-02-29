/* Created by Gil on 26/02/2016 */

'use strict';

import 'angular';
import 'angular-ui-router';

import appRun        from './AppRun';
import appRoute      from './Route';
import appDirectives from './Directives/index'
import appServices   from './Services/index'
import appPages      from './Views/index'

const app =
    angular
        .module('App',
        [
            'ui.router'
        ]);

appRun(app);
appRoute(app);
appDirectives(app);
appServices(app);
appPages(app);