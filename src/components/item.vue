<template>
  <div class="item">
      <div >
        <ul >
            <li v-for='(item,index) in items' v-bind:titlel='items'>
                <!--a v-bind:href='item.href'-->
                <router-link to='fooii'>
                    <span class='indee'>{{index+1}} </span>
                    <span class='inde_n'>{{item.name}}</span>
                   <span class='inde_g'>{{item.gap}}</span>
                   <em class=''>···</em>
                   </router-link>
                <!--/a-->
            </li>
        </ul>
      </div>
  </div>
</template>
<script>
  //var cpp=['jgjgjg','dfdfd','jfdfdg'];
    export default{
        name:'item',
        props:['titlel'],
        data:function(){
            return{
                items:this.titlel
            }
        }
    }
</script>
<style scoped> 

</style>