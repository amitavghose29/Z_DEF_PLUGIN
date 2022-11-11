/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/airbus/default/plugin/zdefplugin/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.airbus.default.plugin.zdefplugin.Component", {
           

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                var renderer = sap.ushell.Container.getRenderer("fiori2");
                renderer.addHeaderEndItem("sap.m.Button", {
                  id: "headerEnd",
                  icon: "sap-icon://action-settings",
                  type: "Transparent",
                  press: this._openDefaultValueHelp.bind(this)
                }, true, false);
          
            },
            _openDefaultValueHelp: function(oEvent){
                 var broweserURLLink=window.location.href;
                 var navParam=broweserURLLink.split("#");
                 var defaultValueLink=navParam[0]+"#zdefval-execute";
                // window.open(defaultValueLink);
                window.open(defaultValueLink,'Default Setting Value','height=455,width=450,toolbar=no,directories=no,status=no,linemenubar=no,scrollbars=no,resizable=no,modal=yes');

            }

        });
    }
);