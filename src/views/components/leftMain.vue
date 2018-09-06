<template>
    <div class="app-container">
        <div id="lineChart"></div>
      <icon path="/leftMain"></icon>
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
          nums:[820, 932, 901, 934, 1290, 1330, 1320]
        }
      },
        methods:{
          init(){
            // let num = this.getCpuWarm();
            let myChart = this.$echarts.init(document.getElementById('lineChart'))

            let option = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine:{
                  lineStyle :{
                    color : '#fff'
                  }
                }
              },
              yAxis: {
                type: 'value',
                axisLine:{
                  lineStyle :{
                    color : '#fff'
                  }
                }
              },
              series: [{
                data: this.nums,
                type: 'line'
              }]
            };

            myChart.setOption(option)
            window.addEventListener("resize", myChart.resize);

          },

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

  #lineChart{
    width: 100%;
    height: 100%;
  }

</style>
