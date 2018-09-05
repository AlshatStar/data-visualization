<template>
  <div class="container">
    <bg></bg>
    <div class="con">
      <div class="left-area">
        <div class="left-header">
          <left-header></left-header>
        </div>
        <div class="left-main">
          <left-main></left-main>
        </div>
        <div class="left-footer">
          <left-footer></left-footer>
        </div>

      </div>

      <div class="main-area">

        <div class="main-main">
          <main-main></main-main>
        </div>
        <div class="main-footer">
          <main-footer></main-footer>
        </div>

      </div>

      <div class="right-area">
        <div class="right-header">
          <right-header></right-header>
        </div>
        <div class="right-main">
          <right-main></right-main>
        </div>
        <div class="right-footer">
          <right-footer></right-footer>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
  import bg from '@/views/bg/background'
  import leftFooter from '@/views/components/leftFooter'
  import leftHeader from '@/views/components/leftHeader'
  import leftMain from '@/views/components/leftMain'
  import mainMain from '@/views/components/mainMain'
  import mainFooter from '@/views/components/mainFooter'
  import rightHeader from '@/views/components/rightHeader'
  import rightMain from '@/views/components/rightMain'
  import rightFooter from '@/views/components/rightFooter'

  export default {
    name: "wrapper",
    components: {
      leftFooter,
      leftHeader,
      leftMain,
      mainMain,
      mainFooter,
      rightHeader,
      rightMain,
      rightFooter,
      bg
    },
    methods:{
      // test(){
      //
      // }
    },
    mounted(){
      // this.test()
    }
  }
</script>

<style scoped>
  .container{
    height: 90%;
  }
  .con{
    height: 100%;
    width: 96%;
    margin: 1% auto;
    display: flex;
    justify-content: space-between;

  }
  .left-area, .right-area {
    width: 27%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main-area {
    width: 45%;
    float: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .main-main {
    height: 66.5%;
    /*background: rebeccapurple;*/
    background: rgba(32, 32, 35, 0.5);
  }

  .left-header, .right-header, .left-main, .right-main, .right-footer, .left-footer, .main-footer {
    /*background: rebeccapurple;*/
    background: rgba(32, 32, 35, 0.5);
    width: 100%;
    height: 33%;

  }


</style>
