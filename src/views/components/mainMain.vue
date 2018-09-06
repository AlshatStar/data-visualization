leftFooter.vue<template>
    <div class="app-container">
      <div id="map"></div>
    </div>
</template>

<script>
  import busData from '@/data/busLine.json'
    export default {
    data(){
      return{
        data: busData
      }
    },

        methods:{
          initMap(){
            let self = this
            let myChart = this.$echarts.init(document.getElementById("map"));

              let option = {
                bmap: {
                  center: [116.46, 39.92],
                  zoom: 10,
                  roam: true,
                  mapStyle: {
                    'styleJson': [
                      // {
                      //   'featureType': 'water',
                      //   'elementType': 'all',
                      //   'stylers': {
                      //     'color': '#031628'
                      //   }
                      // },
                      {
                        'featureType': 'land',
                        'elementType': 'geometry',
                        'stylers': {
                          'color': '#000102'
                        }
                      },
                      {
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                          'visibility': 'off'
                        }
                      },
                      {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                          'color': '#000000'
                        }
                      },
                      // {
                      //   'featureType': 'arterial',
                      //   'elementType': 'geometry.stroke',
                      //   'stylers': {
                      //     'color': '#0b3d51'
                      //   }
                      // },
                      {
                        'featureType': 'local',
                        'elementType': 'geometry',
                        'stylers': {
                          'color': '#000000'
                        }
                      },
                      // {
                      //   'featureType': 'railway',
                      //   'elementType': 'geometry.fill',
                      //   'stylers': {
                      //     'color': '#000000'
                      //   }
                      // },
                      {
                        'featureType': 'railway',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                          'color': '#08304b'
                        }
                      },
                      {
                        'featureType': 'subway',
                        'elementType': 'geometry',
                        'stylers': {
                          'lightness': -70
                        }
                      },
                      {
                        'featureType': 'building',
                        'elementType': 'geometry.fill',
                        'stylers': {
                          'color': '#000000'
                        }
                      },
                      {
                        'featureType': 'all',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                          'color': '#857f7f'
                        }
                      },
                      {
                        'featureType': 'all',
                        'elementType': 'labels.text.stroke',
                        'stylers': {
                          'color': '#000000'
                        }
                      },
                      {
                        'featureType': 'building',
                        'elementType': 'geometry',
                        'stylers': {
                          'color': '#022338'
                        }
                      },
                      {
                        'featureType': 'green',
                        'elementType': 'geometry',
                        'stylers': {
                          'color': '#062032'
                        }
                      },
                      {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                          'color': '#465b6c'
                        }
                      },
                      {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                          'color': '#022338'
                        }
                      },
                      // {
                      //   'featureType': 'label',
                      //   'elementType': 'all',
                      //   'stylers': {
                      //     'visibility': 'off'
                      //   }
                      // }
                    ]
                  }
                }
            }

            myChart.setOption(option);

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
