<template>
    <div class="search">
        <input  v-model='message' placeholder="搜索音乐、歌词、电台">
        <p>{{aa}}</p>
    </div>
</template>
<script>
    export default{
        name:'search',
        data:function(){
            return{
                message:'',
                aa:'',
            }
        },
        methods:{
                say:function(){
                    
                this.aa='搜索:'+this.message
                 
            }
        },
        watch:{
            message:function (){
                this.say()
                },
            aa:function(){
                if(this.message==""){this.aa=''}
            }
        }
    }
</script>
<style lang='scss'>
    .search{position:fixed;background-color:gray;z-index:2;width:90%;top:0px;width:100%;height:70px;
        input{height:35px;margin:20px 30px 15px 30px;width:95%;border-radius:15px;border:0;outline:none;padding:0px 20px;}}
</style>