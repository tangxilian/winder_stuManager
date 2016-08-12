define([
    'jquery',
    'backbone',
    'common'
], function($, Backbone, Common) {
    var Workspace = Backbone.Router.extend({
        routers: {
            // '#filter': 'setFilter',
            // 'test': 'starItem',
        },
        // setFilter: function(param) {
        //     Common.TodoFilter = param.trim() || '';
        //     Main.trigger('filter');
        // },
        // starItem:function () {
        //    alert('starItem');
        // },

    });
    return Workspace;
});
