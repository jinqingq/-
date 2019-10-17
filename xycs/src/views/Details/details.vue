// 详情
<template>
    <div>
        <div v-html='html' class='detail'></div>
    </div>
</template>
<script>
export default {
    name:'details',
    // props:{

    // },
    // components:{

    // },
    data(){
        return {
            html:''
        }
    },
    // computed:{

    // },
    // methods:{

    // },
    created(){
        this.html=this.$route.query.obj
    },
    // mounted(){

    // }
}
</script>
<style scoped>
.detail{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
.detail p{
  height: 100%;
  width: 100%;
}
.detail img{
  width:100%;
  height: 50px;
}

</style>