/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import appDataService   from './AppDataService/AppDataService';
import languagesService from './LanguagesService/LanguagesService';
import nativeService    from './NativeService/NativeService';
import photosService    from './PhotosService/PhotosService';
import serverService    from './ServerService/ServerService';
import utilsService     from './UtilsService/UtilsService';

module.exports = function(ngModule)
{
    console.log("Loading App Services...");

    appDataService(ngModule);
    languagesService(ngModule);
    nativeService(ngModule);
    photosService(ngModule);
    serverService(ngModule);
    utilsService(ngModule);
};