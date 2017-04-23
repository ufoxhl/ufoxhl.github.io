define(function (require, exports, module) {
    require('vue');
    var P = {
        zhengze:function(){
           var reg2 = /^1[3|4|5|7|8]{1}[0-9]{9}$/;
               var reg3 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
               $('#test2').blur(function(){
                   var val = $(this).val()
                   if(reg2.test(val)){
                       $('#span').html('')
                       $(this).removeClass('error');
                   }else {
                       $('#span').html('请输入正确')
                       $(this).addClass('error');
                   }
               })
               $('#test3').blur(function(){
                   var val = $(this).val()
                   if(reg3.test(val)){
                       $('#span1').html('')
                       $(this).removeClass('error');
                   }else {
                       $('#span1').html('请输入正确')
                       $(this).addClass('error');
                   }
               })
        }
    }

    module.exports = {
        zhengze: P.zhengze
    }
})