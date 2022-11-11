/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comairbusdefaultplugin/z_def_plugin/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
