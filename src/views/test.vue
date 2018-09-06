<template>
  <div class="test">
    test
    <div id="chart"></div>
    <div style="width:700px;height:550px;border:#ccc solid 1px;" id="map" ref="map"></div>

    <div class="center">test</div>
  </div>
</template>

<script>
  export default {
    name: "test",
    methods: {
      init() {

        let myChart = this.$echarts.init(document.getElementById('chart'))

        let option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },

          series: [
            {
              name: '业务指标',
              type: 'gauge',
              detail: {formatter: '{value}%'},
              data: [{value: 50, name: '完成率'}]
            }
          ]
        };

        setInterval(function () {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myChart.setOption(option, true);
        }, 2000);

      },
      initMap(){
        let map = new BMap.Map(this.$refs.map);
        map.centerAndZoom(new BMap.Point(118.736907,32.04513),16);

        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom();


        let scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
        map.addControl(scaleControl);
        let navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(navControl);
        let overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
        map.addControl(overviewControl);



      }
    },
    mounted() {
      this.init();
      this.initMap();
    }

  }
</script>

<style scoped>
  #chart {
    width: 300px;
    height: 300px;
  }

  .center{
    width: 100px;
    height: 100px;
    margin: 20px;
    position: relative;
  }
  .center::before, .center::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: center;
  }

  .center::before {
    border-top: .25vh solid #6477b9;
    border-bottom: .25vh solid #6477b9;
    transform: scale3d(0, 1, 1);
  }
  .center::after {
    border-left: .25vh solid #6477b9;
    border-right: .25vh solid #6477b9;
    transform: scale3d(1, 0, 1);
  }
  .center:hover::before, .center:hover::after {
    transform: scale3d(1, 1, 1);
    transition: transform 0.5s;
  }



</style>
