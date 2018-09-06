<template>
  <div class="app-container">
    <div id="gaugeCpu"></div>
    <div id="gaugeMemory"></div>
    <div id="gaugeDisk"></div>

    <div class="span-div">
      <span class="cpu-span">cpu占用率</span>
      <span class="memory-span">内存占用率</span>
      <span class="disk-span">磁盘占用率</span>
    </div>
    <icon path="/mainFooter"></icon>

  </div>
</template>

<script>
  import icon from './parts/icon'

  export default {
    components:{
      icon
    },
    data() {
      return {
      }
    },
    methods: {
      initCpu() {

        let self = this
        //添加gaugeCpu
        let myChart = this.$echarts.init(document.getElementById('gaugeCpu'))
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: 'cpu占用率',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: Math.ceil(Math.random() * 100)}]
            }
          ]
        };

        myChart.setOption(option, true);
        setInterval(function () {
          self.$api.get('/cpu/occupy')
            .then(function (response) {
              option.series[0].data[0].value = response.data.num;
            })
            .catch(function (error) {
              console.log(error);
            });


          myChart.setOption(option, true);
        }, 1000);


        window.addEventListener("resize", myChart.resize);


      },
      initMemory() {

        let self = this
        //添加gaugeCpu
        let myChart = this.$echarts.init(document.getElementById('gaugeMemory'))
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: 'cpu占用率',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: Math.ceil(Math.random() * 100)}]
            }
          ]
        };

        myChart.setOption(option, true);
        setInterval(function () {
          self.$api.get('/cpu/occupy')
            .then(function (response) {
              option.series[0].data[0].value = response.data.num;
            })
            .catch(function (error) {
              console.log(error);
            });


          myChart.setOption(option, true);
        }, 1000);


        window.addEventListener("resize", myChart.resize);


      },
      initDisk() {

        let self = this
        //添加gaugeCpu
        let myChart = this.$echarts.init(document.getElementById('gaugeDisk'))
        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              name: 'cpu占用率',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: Math.ceil(Math.random() * 100)}]
            }
          ]
        };

        myChart.setOption(option, true);
        setInterval(function () {
          self.$api.get('/cpu/occupy')
            .then(function (response) {
              option.series[0].data[0].value = response.data.num;
            })
            .catch(function (error) {
              console.log(error);
            });


          myChart.setOption(option, true);
        }, 1000);


        window.addEventListener("resize", myChart.resize);


      }

    },
    mounted() {
      this.initCpu();
      this.initDisk();
      this.initMemory();

    }
  }
</script>

<style scoped>
  .app-container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  #gaugeCpu {
    width: 33%;
    height: 90%;
  }
  #gaugeMemory{
    width: 33%;
    height: 90%;
  }
  #gaugeDisk{
    width: 33%;
    height: 90%;

  }

  .span-div{
    height: 10%;
    width: 100%;
    position: absolute;
    bottom: 0;
    /*line-height: 200%;*/
    color: #fff;
    font-size: 3vh;
  }
  .span-div span {
    width: 33%;
    /*width: 33%;*/
    display: block;
    float: left;
    text-align: center;
    line-height: 10%;
    margin-top: 0;
  }


</style>
