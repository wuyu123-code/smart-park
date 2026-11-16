

<template>
 <div class="home">
    <v-scale-screen width="1920" height="1080">
  <BackGround/>
    <Top/>
    <RouterView />
    <Footer/>
 
  
   </v-scale-screen>
 </div>
</template>


<script setup>
import VScaleScreen from 'v-scale-screen'
import BackGround from './components/BackGround.vue';
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Top from './components/Top.vue';

</script>


<style scoped>
.home{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
}
</style>
