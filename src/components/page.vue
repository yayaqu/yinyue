<template>
    <div id="page">
        <img :src="img" alt="">
        <div class='tip'>
            <h3>{{name}}</h3>
            <span>粉丝：{{fan}}</span>
        </div>
        <item v-bind:titlel='ti'></item>
    </div>
</template>
<script>
    import Item from './item'
    export default{
        name:'page',
        components:{Item},
        data:function(){
            return{
                img:require('../assets/image/xue.jpg'),
                name:'薛之谦',fan:'4277556',
                ti:[
                    {name:'火星人来过',gap:'火星人来过（《火星情报局2》主题曲）',href:'1'},
                    {name:'演员',gap:'演员',href:'2'},
                    {name:'丑八怪',gap:'《如果我爱你》主题曲',href:'3'},
                    {name:'绅士',gap:'绅士',href:'4'},
                    {name:'你还要我怎么样',gap:'演员',href:'5'}
                ]
            }
        }
    }
</script>
<style  rel="stylesheet/scss" lang="scss">
    @import '../assets/css/page.scss'
</style>