<template>
    <div class="contain">
        <div class="energy-list" v-for="item in energyData" :key="item.name">
            <div class="title">{{ item.name }}</div>
            <div class="value">{{ item.value }}</div>
        </div>
    </div>
</template>

<script setup>
import { energyData } from '@/stores/staticData';
</script>

<style lang="scss" scoped>
.contain {
    width: 100%;
    height: 100%;
    display: grid;
     grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(3, 1fr);

    /* 两列 */
    .energy-list {
        margin-top: 15px;
        text-align: center;
        .title {
            color: white;
            font-size: 18px;
        }
        .value{
            color: #49b5e0;
            font-size: 30px;
        }
    }

}
</style>