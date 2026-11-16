<template>
  <div class="camera-grid">
    <div
      v-for="camera in cameras"
      :key="camera.id"
      class="camera-item"
    >
      <video
        class="camera-video"
        :src="camera.src"
        :poster="cameraPoster"
        controls
       
      ></video>

      <div class="camera-name" :title="camera.name">
        {{ camera.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import videoDemo from '@/assets/img/videoDemo.mp4'
import cameraPoster from '@/assets/img/camera_bg.jpg'
// 暂时共用示例视频，后续分别替换为对应的视频地址
const cameras = [
  { id: 1, name: '星关广场云台', src: videoDemo },
  { id: 2, name: '底商北侧', src: videoDemo },
  { id: 3, name: '后山艺术空间', src: videoDemo },
  { id: 4, name: 'T9后面', src: videoDemo },
  { id: 5, name: '门口', src: videoDemo },
  { id: 6, name: 'T9北侧', src: videoDemo },
  { id: 7, name: 'T9北侧', src: videoDemo },
  { id: 8, name: 'T9北侧', src: videoDemo },
]
</script>

<style scoped>
.camera-grid {
  display: grid;

  /* 两列，每列平分可用宽度 */
  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: 12px;
  row-gap: 14px;
  padding: 10px 16px;
  box-sizing: border-box;
  pointer-events: auto;
}

.camera-item {
  min-width: 0;
}

.camera-video {
  display: block;
  width: 100%;

  /* 按截图设置为接近正方形的视频框 */
  aspect-ratio: 1 / 1;

  /* 完整显示画面，比例不同时保留黑边 */
  object-fit: contain;
  background: #111;
}

.camera-name {
  margin-top: 5px;
  color: #eee;
  font-size: 14px;
  line-height: 20px;
  text-align: center;


}
</style>