define([
    'src/main/dataproxy/Main',
    'src/main/view/main',
    'src/main/routers/router',
], function(BaseController, Dataproxy, Main,Workspace) {
    var Controller = BaseController.extend({
        initialize: function() {
            //初始化路由
            new Workspace();
            Backbone.history.start();
            new Main();
        },

    });
    return Controller;
});
