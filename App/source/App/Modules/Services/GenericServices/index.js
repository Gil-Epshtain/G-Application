/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import 'angular';

// Load all services
import languagesService from './LanguagesService/LanguagesService';
import nativeService    from './NativeService/NativeService';
import serverService    from './ServerService/ServerService';
import utilsService     from './UtilsService/UtilsService';

// Create new ngModule named gServices
const genericServicesModule = angular.module('gServices', []);

console.log("Loading Generic Services...");

// Bind All the services to gServices
languagesService (genericServicesModule);
nativeService    (genericServicesModule);
serverService    (genericServicesModule);
utilsService     (genericServicesModule);

// Export the ngModule
export default genericServicesModule;