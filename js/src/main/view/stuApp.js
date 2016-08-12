define([
    'jquery',
    'underscore',
    'backbone',
    'src/main/collection/stu',
    'src/main/view/stu',
    // 'text!src/main/template/stu.html',
],function ($, _, backbone,stuColletion,StuView) {
   var stuAppView =  Backbone.View.extend({
       el:"#stuManager",
       // template:_.template(stuTemplate),
       events:{
           "click #btnAdd":"newstu"
       },
       //绑定colletion的相关事件
       initialize:function () {
           // this.$el.html(this.template());
           stuColletion.bind('add',this.addData,this);
           $("#StuID").val(stuColletion.length + 1);
       },
       newstu:function () {
           console.log("newstu....");
           var stu = new stuColletion.model();
           var objData = {};
           $('#Name,#Sex,#Score').each(function () {
               objData[$(this).attr('name')] = $(this).val();
           });
           stu.bind('invalid',function (model,error) {
               $("#pStatus").show().html(error);
           })
           if (stu.set(objData,{'validate':true})){
               stuColletion.add(stu);
               $("#pStatus").hide();
           }

       },
       addData:function (stu) {
           console.log("addData....");
           stu.set({
               "StuID":stu.get("StuID") || stuColletion.length
           });
           var subView = new StuView({model:stu});
           $("#ulMessage").append(subView.render().el);
           $("#Name,#Score").each(function () {
               $(this).val('');
           })
           $("StuID").val(stuColletion.length + 1);

       }
    });
    return stuAppView;

});