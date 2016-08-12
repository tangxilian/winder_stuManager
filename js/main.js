require.config({
    shim: {
        underscore: {
            exports: '_'

        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'

        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone/backbone',
        backboneLocalstorage: 'lib/backbone/backbone.localStorage',
        text: 'lib/require/text'
    }

});
require([
    'jquery',
    'underscore',
    'backbone',
    'text',
    'src/main/app',
], function($, _, Backbone, AppView) {
    "use strict";
     Backbone.View.extend({
        initialize: function() {
            new AppView();
        }
    });

});
