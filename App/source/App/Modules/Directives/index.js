/* Created by Gil Epshtain on 27/02/2016 */

'use strict';

import 'angular';

// Load all directive
import gCheckbox       from './GCheckbox/GCheckbox';
import gCheckboxSwitch from './GCheckboxSwitch/GCheckboxSwitch';
import gButton         from './GButton/GButton';
import gDropDownList   from './GDropDownList/GDropDownList';
import gGallery        from './GGallery/GGallery';
import gPhotoPreview   from './GPhotoPreview/GPhotoPreview';
import gPopUp          from './GPopUp/GPopup';
import gSubHeaderMenu  from './GSubHeaderMenu/GSubHeaderMenu';
import gTextPanel      from './GTextPanel/GTextPanel.ts';

// Create new ngModule named gDirectives
const gDirectiveModule = angular.module('gDirectives', []);

console.log("Loading App Directives...");

// Bind All the directives to gDirectives
gCheckbox       (gDirectiveModule);
gCheckboxSwitch (gDirectiveModule);
gButton         (gDirectiveModule);
gDropDownList   (gDirectiveModule);
gGallery        (gDirectiveModule);
gPhotoPreview   (gDirectiveModule);
gPopUp          (gDirectiveModule);
gSubHeaderMenu  (gDirectiveModule);
gTextPanel      (gDirectiveModule);

// Export the ngModule
export default gDirectiveModule;