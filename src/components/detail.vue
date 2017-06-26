<template>
	<div class="detail">
		<p>{{anthor}}</p>
		<ul v-bind:style="{top:title + 'px'}">
			<li v-for='item in dates' v-bind:class="{ red: item.ac }">{{item.text}}</li>
		</ul>
		<audio id='#audio' src="http://52cik.github.io/media/audio/%E4%B8%91%E5%85%AB%E6%80%AA.m4a" v-on:timeupdate='acc'></audio>
		<em>{{time1}}</em><span></span><em>{{time2}}</em>
		<div class='apply'>
			<p class='ti0'>
	            <a href="javascript:void(0)"><img src="../assets/image/prev.png" alt=""></a>
	            <a href="javascript:void(0)"><img :src="dong1" alt="" @click='playing()' :paly='dong'></a>
	            <a href="javascript:void(0)"><img src="../assets/image/next.png" alt=""></a>
	        </p>
	    </div>
		<!--apply></apply  autoplay loop-->		
	</div>
</template>
<script>
import Apply from './apply'
import axios from 'axios'
var jsonp = require('jsonp');
	export default{
        name:'detail',
		data:function(){
			return{
				title:'',
				anthor:'',
				dates:'',
				time1:'',
				time2:'',
				dong:'false',
				dong1:require('../assets/image/run.png')
			}
		},
		components:{Apply},
		methods:{
			aaa:function(){
				jsonp('https://ss1.baidu.com/6Ls1aze90MgYm2Gp8IqW0jdnxx1xbK/v1/restserver/ting?method=baidu.ting.song.lry&fromat=jsonp&songid=87967607', null, 
					
					(err, data)=> {
				        
						if (err) {
                        	console.error(err.message);
                        } else {
                        	this.title=data.title;
                        	var rows=[];
                        	rows=data.lrcContent.replace(/\[(\d+):(\d+)\.(\d+)\]([^\n]*)/g, (all, m,s,ms,txt) => {
                        		rows.push({
									time: m*60*100 + s*100 + +ms, 
									text: txt ,
                                });
                                var someObject = rows.map(it=>(it.ac=false,it))
                                this.dates=someObject;
                        		})
                        		
                    }
                }
				);
			},
			acc:function(){
				//var currentIndex = 0;
				var audio =this.$el.getElementsByTagName('audio')[0];
                for (let i = 0, l = this.dates.length; i < l; i++) {
                        	 if (this.dates[i].time > audio.currentTime*100) {
                        	 	var currentIndex=0;
							    if (currentIndex === i - 1) { // 防止重复渲染
							       break;
							    }currentIndex = i - 1;
							    if (currentIndex > 5) {
							      var  scrollTop = 28 * (currentIndex - 5); // 第6行开始滚动
							      } else {
							       var scrollTop = 0;
							      }
							      this.dates.forEach((it)=>(it.ac=false));
							      this.dates[currentIndex].ac=true;
							      this.title=scrollTop;
							      break;
		    			}}
			},
			playing:function(){
		        var audio =this.$el.getElementsByTagName('audio')[0]
		        if(this.dong){
		        	audio.play();
		        	this.dong=!this.dong;
		        	this.dong1=require('../assets/image/stop.png')
		        }
		        else{audio.pause();this.dong=!this.dong;
		        	this.dong1=require('../assets/image/run.png')
		        }
		    }
		},
		created:function(){this.aaa();},
		watch:function(){},
		mounted:function(){this.playing();},
		
	
}
</script>
<style lang="scss">

.detail{text-align:center;overflow:hidden;position:relative;
	ul{position:relative;}
li{list-style:none;}}
.apply{width:100%;height:50px;position:fixed;background-color:gray;left:0px;bottom:0px;text-align:center;
  
  .ti0{height:50px;margin:6px;
  a{display:inline-block;width:20px;height:20px;margin:11px 5%;}
  }
}
.red{color:red;}
</style>







