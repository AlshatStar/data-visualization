<template>
  <div id="app">
    <div class="header">
      软林通监控中心
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-family: "microsoft yahei", arial, sans-serif;
  }
  #app{
    width: 100%;
    height: 100%;
  }

  .header {
    position: relative;

    height: 5%;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    font-size: 4vh;
    line-height: 7vh;
  }

</style>
