'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'NodeForm';
	var applicationModuleVendorDependencies = [
		'duScroll', 'ui.select', 'ui.grid', 'ui.grid.edit', 'ui.grid.pagination',
		'ui.grid.selection', 'ui.grid.cellNav', 'ngAnimate', 'ngSanitize', 'vButton', 'ngResource',
		'formsg.templates', 'ui.router', 'ui.bootstrap', 'ui.utils',
		'pascalprecht.translate', 'colorpicker.module', 'angularMoment', 
		'LocalStorageModule'
	];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();
