<template> 
     <div class='rank'>
         <ul >
             <li v-for='todo in todos' class='lip'>
                 <router-link to="/fooi" class='link'>
                    <img v-bind:src="todo.img" alt="">
                    <ul class='lis'>
                        <span class='ran-ti'>{{todo.title}}</span>
                        <li v-for='(gg,index) in todo.name'>
                            {{index+1}} 
                            {{gg.na}}
                            <span> {{gg.autor}}</span>
                        </li>
                        <em></em>
                        <i>{{todo.num}}</i>
                    </ul>
                 </router-link>
             </li>
         </ul>
         
     </div>
</template>
<script>
import Page from './page'
//Vue.use(Router)
export default{
    name:'rank',
    //routes: [{path:'/foo',component:Page}
    //],
    components: {
            Page,
        },
    data:function(){
        return {
            todos:[
                {img:require('../assets/image/hot.jpg'),title:'巅峰榜-流行指数',
                name:[{na:'末班车(Live)',autor:'林俊杰'},{na:'刚好遇见你',autor:'李玉刚'},{na:'爱我你就抱抱我(Live)',autor:'萧敬腾'}],num:'2000万'},
                {img:require('../assets/image/hot.jpg'),title:'巅峰榜-热歌',
                name:[{na:'演员',autor:'薛之谦'},{na:'告白气球',autor:'周杰伦'},{na:'丑八怪',autor:'薛之谦'}],num:'1950万'},
                {img:require('../assets/image/hot.jpg'),title:'巅峰榜-梦想的声音',
                name:[{na:'末班车(Live)',autor:'林俊杰'},{na:'爱要怎么说出口',autor:'林俊杰'},{na:'爱我你就抱抱我',autor:'萧敬腾'}],num:'1140.3万'},
                {img:require('../assets/image/hot.jpg'),title:'巅峰榜-新歌',
                name:[{na:'过去了',autor:'黄渤'},{na:'挂彩',autor:'胡歌/华晨宇'},{na:'你好灰姑娘',autor:'胡夏'}],num:'1800万'}
            ]
        }
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
body,ul,li,div,a,img,p,h1,h2,h3,h4,h5,h6,span,em,i{margin:0;padding:0;font-family:Microsoft YaHei;color:black}
.rank{
    width:100%;height:100%;
    .lip{height:140px;margin:10px 0;background-color:gray}
    .link{display:block;width:100%;height:100%;}
    ul li{list-style-type:none;font-size:14px;
          img{width:140px;height:140px;float:left}
          em,i{font-style:normal;font-size:12px;margin:3px}
          .ran-ti{font-size:18px;font-weight:600;margin:7px 0 4px 0}
          .ran-ti,i{display:inline-block;}
          .lis{float:left;margin-left:15px;
          li{margin:5px;font-size:14px;}}
    }
}
</style>