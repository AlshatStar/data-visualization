leftFooter.vue<template>
    <div class="app-container">
      <div style="width:100%;height:100%; font-size: .75rem" id="map" ref="map"></div>
    </div>
</template>

<script>
    export default {

        methods:{
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
      mounted(){
          this.initMap()
      }
    }
</script>

<style scoped>

  .app-container{
    width: 100%;
    height: 100%;
  }

</style>
