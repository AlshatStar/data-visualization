<template>
    <div class="app-container">
        <bg></bg>
        <div class="contain">

        </div>
    </div>
</template>

<script>
  import bg from '@/views/bg/background'

  export default {
        name: "enlarge",
        components:{
          bg
        }
    }
</script>

<style scoped>
  .contain{
    background: rgba(32,32,35,0.7);
    width: 90%;
    height: 59rem;
    margin: 1rem auto 0;
  }

</style>
