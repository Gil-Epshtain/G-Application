/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import 'angular';

// Load app services
import appDataService   from './AppDataService/AppDataService';
import photosService    from './PhotosService/PhotosService';

// Create new ngModule named appServices
const appServicesModule = angular.module('appServices', []);

console.log("Loading App Services...");

// Bind All the services to appServices
appDataService   (appServicesModule);
photosService    (appServicesModule);

// Export the ngModule
export default appServicesModule;