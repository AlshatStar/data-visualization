<template>
  <div class="test">
    test
    <div id="chart"></div>
    <div style="width:700px;height:550px;border:#ccc solid 1px;" id="map" ref="map"></div>
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

</style>
