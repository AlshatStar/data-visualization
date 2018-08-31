<template>
  <div class="app-container">
    <div id="chart"></div>
    <i class="iconfont icon-fangda icon"></i>
  </div>
</template>

<script>
  export default {
    name: "line",
    methods: {
      init(){
        let myChart = this.Echarts.init(document.getElementById('chart'))

        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });

        window.addEventListener("resize", myChart.resize);

      }
    },
    mounted(){
      this.init()

    }
  }
</script>

<style scoped>
  .app-container{
    width: 100%;
    height: 100%;
    position: relative;

  }
  #chart {
    width: 100%;
    height: 100%;
  }
  .icon{
    color: #fff;
    position: absolute;
    top: .5rem;
    right: .5rem;
    cursor: pointer;
  }



</style>
