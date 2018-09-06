<template>
  <div class="app-container">
    <div id="chart"></div>
    <icon path="/leftHeader"></icon>

  </div>
</template>

<script>
  import icon from './parts/icon'
  export default {
    components:{
      icon
    },
    data(){
      return{
        change: true

      }
    },
    methods: {
      init(){
        let myChart = this.$echarts.init(document.getElementById('chart'))
        let option = {
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              },
              axisLine:{
                lineStyle :{
                  color : '#fff'
                }
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLine:{
                lineStyle :{
                  color : '#fff'
                }
              }
            },

          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200, 334, 390, 330, 220]
            }
          ]
        };

        myChart.setOption(option)


        window.addEventListener("resize", myChart.resize);

      },
      changeRouter() {
        this.change = this.change ? false : true;

      }

    },
    mounted(){
      this.init()
      // console.log(this.$route);
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


</style>
