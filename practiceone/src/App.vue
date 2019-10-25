<template>
  <div id="app">
    <Keep-alive include="Address">
      <router-view/>
    </Keep-alive>
  </div>
</template>

<script>
export default {
    // props:{

    // },
    // components:{

    // },
    // data(){
    //     return {

    //     }
    // },
    // computed:{

    // },
    // methods:{
     
    // },
    // created(){

    // },
    // mounted(){

    // }
}
</script>
<style lang="scss">
*{
  list-style: none;
  margin:0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>