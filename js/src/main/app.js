define([
    'src/main/routers/router',
    'src/main/view/stuApp',
], function(Workspace, StuAppView) {
    new Workspace();
    Backbone.history.start();
    new StuAppView();
});
