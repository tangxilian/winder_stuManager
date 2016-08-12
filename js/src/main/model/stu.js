define([
    'underscore',
    'backbone'
],function (_,Backbone) {
    var Student = Backbone.Model.extend({
        validate:function (attrData) {
            for (var obj in attrData){
                if (attrData[obj] == ''){
                    return obj +"不能为空";
                }
                if (obj == 'Score' && isNaN(attrData.Score)){
                    return "分数必须为数字";
                }
            }
        },

    });
    return Student;

});