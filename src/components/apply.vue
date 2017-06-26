<template>
    <div id="apply">
        <!--img :src="ate" alt="" class='ti'>
        <div class='tii'>
            <h5>演员</h5>
            <p>薛之谦</p>
        </div-->
        <div class='ti0'>
            <a href="javascript:void(0)"><img src="../assets/image/prev.png" alt=""></a>
            <a href="javascript:void(0)"><img src="../assets/image/run.png" alt=""></a>
            <a href="javascript:void(0)"><img src="../assets/image/next.png" alt=""></a>
        </div>
    </div>
</template>
<script>
    export default{
        name:'apply',
        data:function(){
            return{
                ate:require('../assets/image/xu.jpg')
            }
        }
    }
</script>
<style rel='stylesheet/scss' lang='scss'>
    #apply{width:100%;height:50px;position:fixed;background-color:gray;left:0px;bottom:0px;
  
  .ti0{margin:auto;height:50px;width:300px;
  a{display:inline-block;width:20px;height:20px;margin:11px 5%;}
  }
}
</style>