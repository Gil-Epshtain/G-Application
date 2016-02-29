/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import gCheckbox       from './GCheckbox/GCheckbox';
import gCheckboxSwitch from './GCheckboxSwitch/GCheckboxSwitch';
import gButton         from './GButton/GButton';
import gDropDownList   from './GDropDownList/GDropDownList';
import gGallery        from './GGallery/GGallery';
import gPopUp          from './GPopUp/GPopUp';
import gSubHeaderMenu  from './GSubHeaderMenu/GSubHeaderMenu';

module.exports = function(ngModule)
{
    console.log("Loading App Directives...");

    gCheckbox(ngModule);
    gCheckboxSwitch(ngModule);
    gButton(ngModule);
    gDropDownList(ngModule);
    gGallery(ngModule);
    gPopUp(ngModule);
    gSubHeaderMenu(ngModule);
};