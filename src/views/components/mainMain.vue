leftFooter.vue<template>
    <div class="app-container">
      <div id="map"></div>
    </div>
</template>

<script>

  // import data from '@/data/bmap.min'
    export default {
    data(){
      return{
        // data: busData
      }
    },

        methods:{
          initMap(){
            let self = this
            let myChart = this.$echarts.init(document.getElementById("map"));

            // myChart.setOption({
            //   bmap: {
            //     center: [118.8029140176, 32.0647517242],
            //     zoom: 14,
            //     roam: true,
            //     mapStyle: {
            //       styleJson: [
            //         {
            //           'featureType': 'land',     //调整土地颜色
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'color': '#081734'
            //           }
            //         },
            //         {
            //           'featureType': 'building',   //调整建筑物颜色
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'color': '#04406F'
            //           }
            //         },
            //         {
            //           'featureType': 'building',   //调整建筑物标签是否可视
            //           'elementType': 'labels',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'highway',     //调整高速道路颜色
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'color': '#015B99'
            //           }
            //         },
            //         {
            //           'featureType': 'highway',    //调整高速名字是否可视
            //           'elementType': 'labels',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'arterial',   //调整一些干道颜色
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'color':'#003051'
            //           }
            //         },
            //         {
            //           'featureType': 'arterial',
            //           'elementType': 'labels',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'green',
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'water',
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'color': '#044161'
            //           }
            //         },
            //         {
            //           'featureType': 'subway',    //调整地铁颜色
            //           'elementType': 'geometry.stroke',
            //           'stylers': {
            //             'color': '#003051'
            //           }
            //         },
            //         {
            //           'featureType': 'subway',
            //           'elementType': 'labels',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'railway',
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'railway',
            //           'elementType': 'labels',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'all',     //调整所有的标签的边缘颜色
            //           'elementType': 'labels.text.stroke',
            //           'stylers': {
            //             'color': '#313131'
            //           }
            //         },
            //         {
            //           'featureType': 'all',     //调整所有标签的填充颜色
            //           'elementType': 'labels.text.fill',
            //           'stylers': {
            //             'color': '#FFFFFF'
            //           }
            //         },
            //         {
            //           'featureType': 'manmade',
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'manmade',
            //           'elementType': 'labels',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'local',
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'local',
            //           'elementType': 'labels',
            //           'stylers': {
            //             'visibility': 'off'
            //           }
            //         },
            //         {
            //           'featureType': 'subway',
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'lightness': -65
            //           }
            //         },
            //         {
            //           'featureType': 'railway',
            //           'elementType': 'all',
            //           'stylers': {
            //             'lightness': -40
            //           }
            //         },
            //         {
            //           'featureType': 'boundary',
            //           'elementType': 'geometry',
            //           'stylers': {
            //             'color': '#8b8787',
            //             'weight': '1',
            //             'lightness': -29
            //           }
            //         }]
            //     }
            //   },
            //   series: [{
            //     type: 'scatter',
            //     coordinateSystem: 'bmap',
            //     data: [ [120, 30, 1] ]
            //   }]
            //
            //
            // });

            var bmap = myChart.getModel().getComponent('bmap').getBMap();
            bmap.addControl(new BMap.MapTypeControl());

          }
        },
      mounted(){
          this.initMap()
        // console.log(busData);
      }
    }
</script>

<style scoped>

  .app-container{
    width: 100%;
    height: 100%;
    position: relative;
  }

  #map{
    width: 100%;
    height: 100%;

  }

</style>
