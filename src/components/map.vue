<template>
  <div class="mapp">
    <h6>{{title}}</h6>
    <p>{{name}}</p>
    <ul v-html='dates'>
      {{dates}}
    </ul>
    <apply></apply>
  </div>
</template>
<script>
import Apply from './apply'
import axios from 'axios'
var jsonp = require('jsonp');
    export default {
        name: 'mapp',
        data:function() {
            return {
            title:'',
            name:'',
            dates:''
            }
       },
       components:{Apply},
       methods:{
              aaa:function(){jsonp('https://ss1.baidu.com/6Ls1aze90MgYm2Gp8IqW0jdnxx1xbK/v1/restserver/ting?method=baidu.ting.song.lry&fromat=jsonp&songid=87967607', null, function (err, data) {
                      if (err) {
                        console.error(err.message);
                      } else {
                        console.log(data);
                        this.title=data.title
                      }
                    });}

          },
       created:function(){this.aaa();},
      }
</script>
<style>
</style>