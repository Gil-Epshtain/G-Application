/* Created by Gil on 23/08/15 */

'use strict';

import './AppContentStyle.less';

module.exports = (ngModule) =>
{
    ngModule
        .controller('MainController',
        [
            "AppDataService",
            mainCtrlFunc
        ]);

    function mainCtrlFunc(AppDataService)
    {
        console.log("MainController: Initializing...");

        var mainCtrl = this;

        mainCtrl.AppData = { Strings: {} };

        // **** Set AppData **** //
        AppDataService.onDataLoaded.then(function()
        {
            mainCtrl.AppData = AppDataService.AppData;
        });

        // **** PopUp **** //
        mainCtrl.popUp =
        {
            isVisible: false,
            title: "",
            text: "",
            buttons: [],
            showCloseButton: true,
            onClose: function() { console.log("MainCtrl: PopUp Closed"); }
        };

        mainCtrl.showPopUp = function(title, text, showCloseButton, buttons, onClose)
        {
            mainCtrl.popUp.title = title ? title : "";
            mainCtrl.popUp.text = text ? text : "";
            mainCtrl.popUp.buttons = buttons ? buttons : [];
            mainCtrl.popUp.showCloseButton = showCloseButton;
            mainCtrl.popUp.onClose = onClose ? onClose : function() { console.log("MainCtrl: PopUp Closed"); };

            console.log("MainCtrl: Show PopUp [title: '" + mainCtrl.popUp.title + "'; text: '" + mainCtrl.popUp.text + "'");

            // Show the PopUp
            mainCtrl.popUp.isVisible = true;
        };
    }
};