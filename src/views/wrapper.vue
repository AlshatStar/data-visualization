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

          </div>
          <div class="main-footer">

          </div>

        </div>

        <div class="right-area">
          <div class="right-header">

          </div>
          <div class="right-main">

          </div>
          <div class="right-footer">

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
    export default {
        name: "wrapper",
        components:{
          leftFooter,
          leftHeader,
          leftMain,
          bg
        }
    }
</script>

<style>

</style>

<style scoped>
  .left-area, .right-area {
    width: 25%;
    margin: 0 1rem 1rem;
    float: left;
  }

  .main-area{
    width: 45%;
    float: left;
  }
  .main-main{
    height: 39rem;
    /*background: rebeccapurple;*/
    background: rgba(32,32,35,0.7);
    margin-top: 1rem;
  }

  .left-header, .right-header,.left-main, .right-main, .right-footer, .left-footer,.main-footer {
    /*background: rebeccapurple;*/
    background: rgba(32,32,35,0.7);
    width: 100%;
    height: 19rem;
    margin-top: 1rem;

  }


</style>
