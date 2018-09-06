<template>
    <div class="div">
      <router-link :to="path" v-if="$route.path === '/'">
        <i class="iconfont icon-fangda icon" ></i>
      </router-link>
      <router-link to="/" v-else>
        <i class="iconfont icon-suoxiao icon2"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "icon",
        props:["path"]
    }
</script>

<style scoped>

  .icon{
    color: #fff;
    position: absolute;
    top: .5vh;
    right: .5vw;
    cursor: pointer;
    font-size: 1.5vw;
  }
  .icon2{
    color: #fff;
    position: absolute;
    top: 1vh;
    right: 1vw;
    cursor: pointer;
    font-size: 2vw;
  }

</style>
