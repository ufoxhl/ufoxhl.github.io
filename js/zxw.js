define(function(require,exports,module){
	var P = {
		_init:function(){
            var data = {
                per: "",
                jc:"百度有限公司",
                qc:"百度在线有限责任公司",
                kh:"莆田系医院推广企业",
                isB:true,
                isA:false,
                bq: [
                    {
                        biaoq:'用户信息'
                    },
                    {
                        biaoq:'卖贴吧主'
                    },
                    {
                        biaoq:'扶植医院'
                    }
                ],
                bql: [
                    {
                        biaoq:'交通方便'
                    },
                    {
                        biaoq:'五险一金'
                    },
                    {
                        biaoq:'团队积极'
                    }
                ],
                "expItem":{},
                t : {
                    nr:"1999年底，身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于2000年1月1日在中关村创建了百度公司。从最初的不足10人发展至今，员工人数超过17000人。如今的百度，已成为中国最受欢迎、影响力最大的中文网站。百度拥有数千名研发工程师，这是中国乃至全球最为优秀的技术团队，全球仅有的4个拥有搜索引擎核心技术的国家之一。"
                }
            };
            Vue.filter('typeSelect',function(value,def){
                if(value==''){
                    return def;
                }else {
                    return value;
                }
            });
            var vm = new Vue({
                el:'#zxw',
                data:data,
                methods:{
                    subForm:function(){
                        this.isB = false,
                        this.isA = true
                    },
                    bianji:function(){
                        this.isB = true,
                        this.isA = false
                    },
                    del:function(index){
                        this.bq.splice(index,1);
                    },
                    add:function(obj,bqa){
                        this.expItem = {}
                        var bqa={biaoq:bqa}
                        this.bq.push(bqa)
                    },
                    addTodo: function (obj,bqa) {
                        this.expItem = {}
                        var bqa={biaoq:bqa}
                        this.bq.push(bqa)
                        }
                }
            });
            }
		}
	    module.exports = {
		init:P._init
	   }
})