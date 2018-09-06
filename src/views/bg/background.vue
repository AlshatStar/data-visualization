<template>
    <div class="app-container">
      <vue-particles
        color="#00CCFF"
        :particleOpacity="1"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#00CCFF"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="1"
        :linesDistance="200"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
</template>

<script>
    export default {
        name: "background"
    }
</script>

<style>
  #particles-js{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    background: url("../../img/bd.jpg") no-repeat;
    background-size: 100% 100%;
  }
</style>
