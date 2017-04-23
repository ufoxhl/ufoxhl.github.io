define(function(require, exports, module) {
  // // 通过 require 引入依赖
  // var app = require('jlkb3');
  var vuePub = require('filter');
  require('vue');
  /**
        DOM 操作
  */
    var P = {
        _init:function(){
            vuePub.filter();
            P.render();
            if(!P.getitem('huancun')){
                P.render();
            }else{
                var cfg = P.getitem();
                P.ojx(cfg);
            }
        },
        render:function(){
            $.ajax({
                url:'/html/data/data.json',
                dataType:"JSON",
                type:"get"
            }).done(function(cfg){
                P.ojx(cfg);
            })
        },
        setitem:function(hccfg){
            var str = JSON.stringify(hccfg);
            localStorage.setItem('huancun',encodeURIComponent(str));
        },
        getitem:function(){
            var b = localStorage.getItem('huancun');//获取缓存数据
            return $.parseJSON(decodeURIComponent(b));//转为可用数据
        },
        ojx:function(cfg){
            function reC(obj,type,objs){
                obj[type].isA = objs.xxs;
                obj[type].isB = objs.xxk;
                obj[type].isC = objs.xxb;
                obj[type].isD = objs.xxf;
            };
            var vm = new Vue({
                el:'#jlkb',
                data:{
                    resume:cfg,
                    base:{
                        isA:true,
                        isB:false,
                        isD:false
                     },
                     gg:{
                        isA:true,
                        isB:false,
                        isD:false
                     },
                     gr:{
                        isA:true,
                        isB:false,
                        isC:false,
                        isD:true
                     },
                     gq:{
                        isA:true,
                        isB:false,
                        isC:false,
                        isD:true
                     },
                     gz:{
                        isA:true,
                        isB:false,
                        isC:false,
                        isD:true
                     },
                     jy:{
                        isA:true,
                        isB:false,
                        isC:false,
                        isD:true
                     },
                     zs:{
                        isA:true,
                        isB:false,
                        isC:false,
                        isD:true
                     },
                     wy:{
                        isA:true,
                        isB:false,
                        isC:false,
                        isD:true
                     },
                    link: {
                    },
                    model: {
                        lizhi:[],
                        chuchai:[],
                        sex:"男",
                        tel:"1376543210",
                        mail:"cl@1024.com"
                     },
                     nework:{}
                 },
                methods:{
                    baoc:function(obj,type,model){
                        var objs = {
                            "xxs":true,
                            "xxk":true,
                            "xxb":true,
                            "xxf":false
                        }
                        reC(this,type,objs)
                        // P.setitem(this.resume);
                    },
                    cancelWork:function(obj,type,model){
                        var objs = {
                            "xxs":true,
                            "xxk":true,
                            "xxb":true,
                            "xxf":false
                        }
                        reC(this,type,objs)
                        // P.setitem(this.resume);
                    },
                    bianji:function(obj,type,model){
                        var objs = {
                            "xxs":false,
                            "xxk":false,
                            "xxb":true,
                            "xxf":true
                        }
                        reC(this,type,objs)
                     },
                     bianjii:function(obj,type,model){
                        var objs = {
                            "xxs":false,
                            "xxk":true,
                            "xxb":true,
                            "xxf":true
                        }
                        reC(this,type,objs)
                     },
                     addWork:function(type,index,expItem){
                        this._index = index;
                        var objs = {
                            "xxs":false,
                            "xxk":false,
                            "xxb":true,
                            "xxf":true
                        }
                        this.nework = {}
                        reC(this,type,objs)
                    },
                    saveWork:function(type,model,ex){
                        var index = this._index;
                        if(index<0){
                            ex.push(model)
                        }else {
                            ex.splice(index,1,model)
                        }
                        var objs = {
                            "xxs":true,
                            "xxk":true,
                            "xxb":true,
                            "xxf":false
                        }
                        reC(this,type,objs)
                        P.setitem(this.resume);
                    },
                    editWork:function(type,model,index,item){;
                        var objs = {
                            "xxs":false,
                            "xxk":false,
                            "xxb":true,
                            "xxf":true
                        }
                        this.nework = model;
                        this._index = index;
                        reC(this,type,objs)
                    },
                    delWork:function(type,index,item){
                        item.splice(index,1)
                    }
                }
            });
         }
    };
    // 或者通过 module.exports 提供整个接口
    module.exports = {
        init:P._init
        // cc:P.cc,
    }

});