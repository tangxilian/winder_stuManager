define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'src/main/model/stu'
],function (_,Backbone,Store,Student) {
    var stuCollection = Backbone.Collection.extend({
        model:Student,

    });
    return new stuCollection()
});