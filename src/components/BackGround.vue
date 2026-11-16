<template>
    <div id="contain">
    </div>
    <div class="scene-shader">
    </div>
</template>

<script setup>
import Panel from './Panel.vue';

</script>

<style lang="scss" scoped>
#contain{
    position: fixed;
    inset: 0;
    background-image: url('@/assets/main.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center center;
    // z-index: 100;

    
}
.scene-shader{
    position: fixed;
    inset: 0;
    background:linear-gradient(
      90deg,
      rgba(2, 7, 13, 0.86),
      rgba(2, 7, 13, 0.51) 20%,
      transparent 38%,
      transparent 62%,
      rgba(2, 7, 13, 0.51) 80%,
      rgba(2, 7, 13, 0.86)
    ),
    linear-gradient(
      0deg,
      rgba(1, 6, 12, 0.87),
      transparent 22%,
      rgba(3, 9, 17, 0.08) 67%,
      rgba(1, 6, 12, 0.88)
    );;
    // z-index: 100;
}
</style>