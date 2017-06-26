<template>

    <div class="nav0">
        <search></search>
        <div class="fouce f1">
                <ul class="showing" v-bind:style='{left:widt+"px"}'>
                        <li  v-for="(sd,index) in sdddi" >
                                <a href="sd.src" class='aa'>
                                    <img :src="sd.url" alt="">
                                </a>
                                <h5>{{sd.title}}</h5>
                        </li>
                </ul>
                <div class="ditt">
                    <a href=""></a>
                </div>
                <div>
                    <span class="left"></span>
                    <span class="right"></span>
                </div>
        </div>
         <rank></rank>
         
    </div>
   
</template>
<script>
import Search from './search'
import Rank from './rank'

   export default{
       name:'nav0',
       components:{Rank,Search},
       data:function(){
           return {
               sdddi:[
          {
               src:'gfdgd',
               url:require('../assets/image/a.jpg'),
               title:'jjkkkjk1'
           },
           {
               src:'dfgdgd',
               url:require('../assets/image/b.jpg'),
               title:'jjkkkjjk2'
           },
           {
               src:'sgfdgdg',
               url:require('../assets/image/c.jpg'),
               title:'jjkkkjk3'
           },
           {
               src:'gfdgd',
               url:require('../assets/image/a.jpg'),
               title:'jjkkkjk1'
           }],
           widt:'0',
           auto:'',
          }
      },
       mounted(){
            this.autoplay();
        },
        methods:{
            next:function(){
                this.auto=window.document.body.clientWidth;
                if(this.widt==0||this.widt>(-this.auto*(this.sdddi.length-1))){this.widt=this.widt-this.auto}
                else{this.widt=0}
        },
        autoplay:function(){
           this.auto=setInterval(this.next,2000);
        }
   },
  
   }
</script>

<style lang="scss" rel="stylesheet/scss">
//@import '../assets/css/index.scss';
.nav0{height:470px;margin-top:70px;
    .f1{height:400px;width:100%;overflow:hidden;margin:auto;position:relative;}
    .showing{ height:400px;float:left;width:400%;position:absolute;
        li{float:left;height:400px;position:relative;width:25%}
        .aa{display:inline-block;height:400px;width:100%;
          img{width:100%;height:400px;}
        }
        h5{position:relative;z-index:2;text-align:center;bottom:30px;}
    }
}
</style>

