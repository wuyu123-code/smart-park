<template>
  <div class="home">
    <v-scale-screen width="1920" height="1080">
      <BackGround />
      <Top />
      <RouterView v-slot="{ Component, route }">
        <!-- 页面切换动画效果 -->
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
      <Footer />
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
.home {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
</style>
<style>
/* 页面进入 */
.page-enter-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

/* 页面退出 */
.page-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

/* 新页面进入前的位置 */
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

/* 旧页面退出后的位置 */
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>