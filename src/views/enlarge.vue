<template>
    <div class="en-container">
        <bg></bg>
        <div class="contain">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import bg from '@/views/bg/background'

  export default {
        name: "enlarge",
        components:{
          bg
        }
    }
</script>

<style scoped>
  .en-container{
    height: 90%;
  }
  .contain{
    background: rgba(32,32,35,0.5);
    width: 96%;
    height: 100%;
    margin: 1rem auto 0;
  }

</style>
