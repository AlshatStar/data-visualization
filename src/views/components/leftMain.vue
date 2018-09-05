<template>
    <div class="app-container">
        <div class="lineChart"></div>
    </div>
</template>

<script>
    export default {
        methods:{
          init(){
            // let num = this.getCpuWarm();
            let myChart = this.$echarts.init(document.getElementById('lineChart'))

            let data = [];
            let now = +(new Date() - 1000*10);
            let oneSec =  1000;
            for (let i = 0; i < 10; i++) {
              data.push();
            }

            let option = {
              tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                  params = params[0];
                  let date = new Date(params.name);
                  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                  animation: false
                }
              },
              xAxis: {
                type: 'time',
                splitLine: {
                  show: false
                }
              },
              yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                  show: false
                }
              },
              series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
              }]
            };

            setInterval(function () {
              now = new Date(+now + oneSec);
              data.shift();
              data.push();

              myChart.setOption({
                series: [{
                  data: data
                }]
              });
            }, 1000);


          },
          getCpuWarm(){
            let seif = this;
            this.$api.get('/cpu/warm')
              .then(function (response) {
                console.log(response);
                // return response.data.num;
              })
              .catch(function (error) {
                console.log(error);
              });

          }


        }
    }
</script>

<style scoped>
  .app-container{
    width: 100%;
    height: 100%;
  }

</style>
