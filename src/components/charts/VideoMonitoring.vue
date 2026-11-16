<template>
    <div class="camera-list">
        <div class="camera-item" v-for="item in cameras" :key="item.id">
            <video :src="item.src" controls :poster="cameraPoster"></video>
            <div class="camera-name">{{ item.name }}</div>
        </div>

    </div>
</template>

<script setup>
import { cameras } from '@/stores/staticData';
import cameraPoster from '@/assets/img/video_bg.jpg'
</script>

<style lang="scss" scoped>
.camera-list {
    padding: 5px 10px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    .camera-item {
        margin-top: 15px;
        min-width: 0;
        video {
            display: block;
            width: 100%;
            height: auto;

            
            background: #000;
        }
    }

    .camera-name {
        margin-top: 5px;
        color: white;
        font-size: 18px;
        text-align: center;
    }

}
</style>
