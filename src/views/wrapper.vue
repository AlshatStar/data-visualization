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
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .con:before,.con:after{
    content: " ";
    display: block;
    position: absolute;
    width:98vw;
    height: 92vh;
    top: -1vh;
    left: -1vw;
    border:.2vw solid #66CCFF;
    z-index:10;
    box-sizing: border-box;
    -webkit-animation: clipAni 30s infinite linear;
  }
  .con:before{
    -webkit-animation-delay: -15s;
  }
  @keyframes  clipAni{
    0%,100%{
      clip:rect(0vw,98vw,92vh,95vw);
    }
    25%{
      clip:rect(0vw,98vw,3vh,0vw);
    }
    50%{
      clip:rect(0vw,3vw,92vh,0vw);
    }
    75%{
      clip:rect(89vh,98vw,92vh,0vw);
    }
  }


  .left-area, .right-area {
    width: 20%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main-area {
    width: 59%;
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
    cursor: pointer;

  }

  .left-header, .right-header, .left-main, .right-main, .right-footer, .left-footer, .main-footer {
    /*background: rebeccapurple;*/
    background: rgba(32, 32, 35, 0.5);
    width: 100%;
    height: 33%;
    cursor: pointer;
    position: relative;

  }

</style>
