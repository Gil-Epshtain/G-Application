/* Created by Gil on 23/08/15 */

'use strict';

import './SettingsPageStyle.less';

module.exports = (ngModule) =>
{
    ngModule
        .controller('SettingsController',
        [
            'Utils',
            'NativeService',
            'LanguagesService',
            'AppDataService',
            '$scope',
            settingsCtrlFunc
        ]);

    function settingsCtrlFunc(Utils, NativeService, LanguagesService, AppDataService, $scope)
    {
        console.log("SettingsController: Initializing...");

        var settingsCtrl = this;
        var mainCtrl = $scope.$parent.mainCtrl;

        // ------ Application Version ------
        settingsCtrl.versionNumber = "v";

        // ------ Languages Section ------
        settingsCtrl.dropDownLanguages_Items = [];
        for (var i = 0; i < LanguagesService.Languages.length; i++)
        {
            settingsCtrl.dropDownLanguages_Items.push(
            {
                id:   LanguagesService.Languages[i].localCode,
                text: LanguagesService.Languages[i].name
            });
        }
        settingsCtrl.dropDownLanguages_SelectedItem = settingsCtrl.dropDownLanguages_Items[0];
        settingsCtrl.onClick_DropDownLanguagesItem = function(selectedItem)
        {
            console.log("SettingsController: Click -> DropDownLanguages [" + selectedItem.id + "]");

            mainCtrl.AppData.setAppLanguage(selectedItem.id);
        };


        // ------ Show/Hide StatusBar ------
        settingsCtrl.switchStatusBar_isOn = NativeService.Cordova.Plugins.StatusBar.isVisible();
        settingsCtrl.wasPopUpStatusBarShown = false;
        settingsCtrl.onClick_SwitchStatusBar = function(isChecked)
        {
            console.log("SettingsController: Click -> SwitchStatusBar [" + (isChecked ? "Show" : "Hide") + "]");

            if (isChecked) // Show StatusBar
            {
                NativeService.Cordova.Plugins.StatusBar.Toggle(isChecked);
            }
            else // Hide StatusBar
            {
                if (!settingsCtrl.wasPopUpStatusBarShown) // Show PopUp only once
                {
                    settingsCtrl.wasPopUpStatusBarShown = true;

                    // Show PopUp
                    var popUpTitle = mainCtrl.AppData.Strings._SettingsPage_PopUp_StatusBar_Header_;
                    var popUpText = mainCtrl.AppData.Strings._SettingsPage_PopUp_StatusBar_Body_;
                    var popUpButtons =
                    [
                        {
                            text: mainCtrl.AppData.Strings._OK_,
                            isActiveStyle: true,
                            callback: function()
                            {
                                NativeService.Cordova.Plugins.StatusBar.Toggle(isChecked);
                            }
                        }
                    ];
                    var showPopUpCloseButton = true;
                    mainCtrl.showPopUp(popUpTitle, popUpText, showPopUpCloseButton, popUpButtons);
                }
                else
                {
                    NativeService.Cordova.Plugins.StatusBar.Toggle(isChecked);
                }
            }
        };


        // ----- Allow/Denney Notification -----
        settingsCtrl.isAllowNotifications = false;
        settingsCtrl.wasPopUpAllowNotificationsShown = false;
        settingsCtrl.onClick_CheckBoxAllowNotification = function(isChecked)
        {
            console.log("SettingsController: Click ->  CheckboxNotification [" + (isChecked ? "Allowing" : "Denying") + "]");

            if (isChecked)
            {
                if (!settingsCtrl.wasPopUpAllowNotificationsShown) // Show PopUp only once
                {
                    settingsCtrl.wasPopUpAllowNotificationsShown = true;

                    // Show PopUp
                    var popUpTitle = mainCtrl.AppData.Strings._SettingsPage_PopUp_AllowNotification_Header_;
                    var popUpText = mainCtrl.AppData.Strings._SettingsPage_PopUp_AllowNotification_Body_;
                    var popUpButtons =
                        [
                            {
                                text: mainCtrl.AppData.Strings._Cancel_,
                                callback: function()
                                {
                                    settingsCtrl.isAllowNotifications = false;
                                    settingsCtrl.wasPopUpAllowNotificationsShown = false;
                                }
                            },
                            {
                                text: mainCtrl.AppData.Strings._OK_,
                                isActiveStyle: true,
                                callback: function()
                                {
                                    console.warn("Notification: Not Working Yet...");
                                }
                            }
                        ];
                    var showPopUpCloseButton = false;
                    mainCtrl.showPopUp(popUpTitle, popUpText, showPopUpCloseButton, popUpButtons);
                }
            }
        };

        // ----- On Application Data Loaded -----
        AppDataService.onDataLoaded.then(function()
        {
            settingsCtrl.versionNumber = mainCtrl.AppData.AppVersion;

            settingsCtrl.dropDownLanguages_SelectedItem = Utils.Search(
                                                                    settingsCtrl.dropDownLanguages_Items,
                                                                    mainCtrl.AppData.getAppLanguage(),
                                                                    'id');
        });
    }
};