define([
    'jquery',
    'underscore',
    'backbone',
],function ($, _, backbone) {
   var babyView =  Backbone.View.extend({
       tagName:'li',
       className:'li_c',
       template:_.template($('#item-template').html()),
       events:{
           "dblclick span": "editing",
           "blur input,select":"blur",
           "click span a":"dele"
       },
       initialize:function () {
           this.model.on("change",this.render,this);
           this.model.on("destroy",this.remove,this);
       },
       editing:function (e) {
           console.log("editing....");
           $(e.currentTarget).removeClass("show").addClass("editing").find('input,select').focus;
       },
       blur:function (e) {
           console.log("blur....");
           var $curele = $(e.currentTarget);
           var objData = {};
           objData[$curele.attr('name')] = $curele.val();
           this.model.set(objData,{'validate':true});
           $(e.currentTarget).parent().parent().removeClass("editing").addClass("show");
       },
       dele:function () {
           console.log("dele....");
           this.model.destroy();
       },
       render:function () {
           console.log("render....");
           $(this.el).html(this.template(this.model.toJSON()));
           this.setValue();
           return this;

       },
       remove:function () {
           console.log("remove....");
           $(this.el).remove();
       },
       setValue:function () {
           console.log("setValue....");
           var model = this.model;
           $(this.el).find('input,select').each(function () {
               var $curele = $(this);
               $curele.val(model.get($curele.attr("name")));
           })
           
       }
    });
    return babyView;

});