define(function(require, exports, module) {
  
  /**
		DOM 操作
		添加标签

  */
  var rawData = {
          "_id" : "",
          "name":'',
          "sex" : "",
          "age" : "29",
          "avatar": "/asets/images/img.png",
          "birthday": "",
          "constellation":"",
          "zodiac":"",
          "city_live" : {
              "province" : "北京",
              "city" : "昌平"
          },
          "city_birth" : {
              "province":"北京",
              "city":"东城区"
          },
          "resigned" : "true",
          "telephone" : "13611171158",
          "email":"llqfront@gmail.com",
          "work_experience" : "10年以上",
          "intent": [
              {
                  industry: '请选期望行业',
                  position: '期望职位：',
                  area_province: 'area_province',
                  area_city: 'area_city',
                  salary: 'salary',
                  production: 'production',
                  sell_mode: ['arrMode','arrMode','arrMode'],
                  business_trip: '期望工作地区'
              }
          ],
          "language": [
              {
                  category:'英语',
                  listen: '听力',
                  speak: '口语',
                  read: '阅读',
                  write: '写作'
              },
              {
                  category:'英语',
                  listen: '听力',
                  speak: '口语',
                  read: '阅读',
                  write: '写作'
              }
          ],
          "work": [
             {
                 company:'新航路一',
                 position:'职位名称1'
             },
             {
                 company:'新航路第二个公司名称',
                 position:'职位名称2'

             }
          ],
          "edu_history": [
              {
                  school:'北京交通大学',
                  major:'计算机与科学技术',
                  level:'本科',
                  start_year:'开始时间',
                  end_year:'线束时间：'
              },
              {
                  school:'北京邮电大学',
                  major:'计算机与科学技术',
                  level:'硕士',
                  start_year:'开始时间',
                  end_year:'线束时间：'
              }
          ],
          "train":[
              {
                  name:'培训名称：',
                  rog:'培训机构：',
                  start_year:'开始时间',
                  end_year:'线束时间：'
              },
              {
                  name:'培训名称：',
                  rog:'培训机构：',
                  start_year:'开始时间',
                  end_year:'线束时间：'
              }
          ]
      };
    var arr = [];
	var P = {
		_init:function(){
		            P.bind();
		            P.view('#gzjl',null)
		        },
		        addFn:function(oParent){
		            var work = {
		                company:oParent.find('.input0').val(),
		                position:oParent.find('.input1').val(),
		            }
		            if(oParent.hasClass('bianji')){
		                var index = oParent.data('id');
		                arr[index] = work;
		            }else {
		                arr.push(work);
		            }
		            P.view('#gzjlidk',arr)
		            oParent.find('h3 span').removeClass('xsspan');
		        },
		        bind:function(){
		            var oParent = $('#gzjlidk');
		            // 添加
		            oParent.on('click','',function(){
		                $(this).parents('h3 span').addClass('xsspan');
		                var delwork = {
		                    company:'',
		                    position:'',
		                    start_year:'',
		                    end_year:'',
		                    sales_type:'',
		                    reportto:'',
		                    subordinate:'',
		                    desc:'',
		                    sales_year:'',
		                    finish_rate:'',
		                    productions:'',
		                    sell_target:'',
		                    sell_mode:'',
		                }
		                P.view('#bianji-tpl',delwork)
		            }).on('click','.job-qr',function(){
		                P.addFn(oParent)
		                oParent.removeClass('bianji')
		            }).on('click','.job-bj',function(){
		                var _index = $(this).parents('.list-02').data('index');
		                oParent.data('id',_index);
		                work = arr[_index]
		                P.view('#bianji-tpl',work);
		                oParent.addClass('bianji')
		            }).on('click','.job-del',function(){
		                var _index = $(this).parents('.list-02').data('index');
		                arr.splice(_index,1)
		                if(arr.length<=0){
		                    oParent.find('.j-pt').addClass('j-pt-s');
		                    P.view('#add-tpl',null)
		                }else {
		                    P.view('#show-tpl',arr)
		                }
		            })
		        },
		        view:function(id,context){
		            var source1   = $(id).html();
		            var template = Handlebars.compile(source1);
		            var html    = template(context);
		            $('#demo').html(html);
		        },
		cc:function(){

		},
	haha:function(){
     // 	    var sw = rawData.work;
	 	 	// $('#gzjlidv').click(function(){
	 	 	// 	$('#gzjlidb').show(),
	 	 	// 	$('#gzjlidk').hide();
	 	 	// })
	 	  //    $("#gzjlidbc").click(function(){
	 	  //    	$('#gzjlidf').show()
	 	  //    	$('#gzjlidb').hide()
	 	  //    	$('#gzjl').find('h3 span').addClass('xsspan')
	 	  //    	var index = $(this).parents('li').attr('index');
	 	  //    	var index2 = $('#gzjlidf').data('index')
	 	 	//     var wk ={
	 	 	//         company:$('#test6').val(),
	 	 	//  	    position:$('#test7').val()
	 	  //        };
	 	 	//      	if($("#gzjlidf").hasClass('pop-item-box')){
	 	  //     		    sw.splice(index2,1,wk)
	 	 	//         }else{
	 	 	//        		sw.push(wk);
	 	 	//         }
	 	 	//       showPage(sw)
	 	  //    })
	 	  //    $('#gzjlidf').on('click','var', function(){
	 	  //    	var index = $(this).parents('li').attr('index');
	 	  //        sw.splice(index,1)
	 	  //        showPage(sw)
	 	  //    })
	 	  //    $('#gzjl').on('click',"#gzjlids", function(){
	 	 	// 	$('#gzjlidb').show(),
	 	  //       $('#gzjlidf').hide();
	 	 	// 	$('#gzjlidf').removeClass('pop-item-box');
	 	 	// 	$('#gzjl').find('h3 span').removeClass('xsspan')
	 	  //    })
	 	  //    .on('click', 'ul span',function(){
	 	  //    	$('#gzjlidb').show(),
	 	 	// 	$('#gzjlidf').hide(),
	 	 	// 	$("#gzjlidf").addClass('pop-item-box')
	 	 	// 	$('#gzjl').find('h3 span').removeClass('xsspan')
	 	 	// 	var index = $(this).parents('li').attr('index')
	 	 	// 	$('#gzjlidf').data('index',index)
	 	 	// 	$('#test6').val(sw[index].company)
	 	  //        $('#test7').val(sw[index].position)
	 	  //    })
	 	  //    function showPage(sw){
	 	  //      var str3 ='';
	 	  //      $.each(sw,function(key,val){
	 	  //        str3 += '<li data-index="'+key+'" index="'+key+'">\
	 	  //        <b>'+val.company+'</b>\
	 	  //        <i>-</i>\
	 	  //        <b>'+val.position+'</b>\
	 	  //        <var>删除</var>\
	 	  //        <span>编辑</span>\
	 	  //        </li>';
	 	  //    })
	 	  //     $("#gzjlidf").find('ul').html(str3);
	 	  //    }
	 	  },
	 	kk:(function(){
	 	      var sj = rawData.edu_history;
	 	      $('#jypx').on('click','.tongyv', function(){
	 	      	var the = $(this).parents('#jypx');
	 	  		the.find('.tongyb').show(),
	 	  		the.find('.tongyk').hide();
	 	  	})
	 	  	.on('click','.baocs', function(){
	 	  		var the = $(this).parents('#jypx');
	 	      	the.find('.tongyf').show()
	 	      	the.find('.tongyb').hide()
	 	      	the.find('h3 span').addClass('xsspan')
	 	      	var index = $(this).parents('li').attr('index');
	 	      	var index2 = $(this).parents('#jypx').find('.tongyf').data('index')
	 	  	    var wkj = {
	 	  	        school:the.find('.input0').val(),
	 	  	 	    major:the.find('.input1').val()
	 	          };
	 	  	     	if($(this).parents('.box').find('.tongyf').hasClass('pop-item-box')){
	 	       		    sj.splice(index2,1,wkj)
	 	  	        }else{
	 	  	       		sj.push(wkj);
	 	  	        }
	 	  	      showPage(sj)
	 	      })
	 	      .on('click','.tongyf var', function(){
	 	      	var index = $(this).parents('li').attr('index');
	 	          sj.splice(index,1)
	 	          showPage(sj)
	 	      })
	 	      .on('click',".tongyhs", function(){
	 	      	var the = $(this).parents('.box');
	 	  		the.find('.tongyb').show(),
	 	          the.find('.tongyf').hide();
	 	  		the.find('.tongyf').removeClass('pop-item-box');
	 	  		$('#jypx').find('h3 span').removeClass('xsspan')
	 	      })
	 	      .on('click', 'ul span',function(){
	 	      	var the = $(this).parents('#jypx');
	 	      	the.find('.tongyb').show(),
	 	  		the.find('.tongyf').hide(),
	 	  		the.find('.tongyf').addClass('pop-item-box')
	 	  		the.find('h3 span').removeClass('xsspan')
	 	  		var index = $(this).parents('li').attr('index')
	 	  		the.find('.tongyf').data('index',index)
	 	  		the.find('.input0').val(sj[index].school)
 	            the.find('.input1').val(sj[index].major)
	 	      })
	 	      function showPage(sj){
	 	        var str2 ='';
	 	        $.each(sj,function(key,val){
	 	          str2 += '<li data-index="'+key+'" index="'+key+'">\
	 	          <b>'+val.school+'</b>\
	 	          <i>-</i>\
	 	          <b>'+val.major+'</b>\
	 	          <i>-</i>\
	 	          <b>'+val.level+'</b>\
	 	          <var>删除</var>\
	 	          <span>编辑</span>\
	 	          </li>';
	 	      })
	 	       $("#jypx").find('.tongyf ul').html(str2);
	 	      }
	 	   })

 	  }
  	// 或者通过 module.exports 提供整个接口
	module.exports = {
		init:P._init,
		// cc:P.cc,
		haha:P.haha,
		kk:P.kk
	}

});