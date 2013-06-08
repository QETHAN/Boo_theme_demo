// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "public/js/lib",
    "paths": {
      "app": "../app",
      "jquery": "jquery.min",
      "jquery.dualListBox": "jquery.dualListBox.min",
      "jquery.gritter": "../../plugins/pl-system-info/gritter/jquery.gritter.min",
      "jquery.qtip": "../../plugins/pl-system-info/qtip/jquery.qtip.min",
      "jquery.notyfy": "../../plugins/pl-system-info/notyfy/jquery.notyfy"
    },
    "shim": {
        // "jquery.dualListBox": ["jquery"]
        // "jquery.notyfy": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["app/duallist","app/notification"]);
