<template>
    <div id="contain">
        <div class="left-column">
            <Panel title="摄像头概述总览">
                <template #content>
                    <CameraInformation />
                </template>
            </Panel>
            <Panel title="摄像头覆盖占比">
                <template #content>
                    <CameraCoverageRatio />
                </template>
            </Panel>
            <Panel title="报警讯息列表">
                <template #content>
                    <AlarmList />
                </template>
            </Panel>
        </div>
 
        <div class="right-column">
            <Panel title="摄像头监控视频">
                <template #content>
                    <CameraVideoGrid />
                </template>
            </Panel>
           
        </div>
    </div>

</template>

<script setup>
import AlarmList from '@/components/charts/AlarmList.vue';

import Blacklist from '@/components/charts/Blacklist.vue';
import CameraCoverageRatio from '@/components/charts/CameraCoverageRatio.vue';
import CameraInformation from '@/components/charts/CameraInformation.vue';
import CameraVideoGrid from '@/components/charts/CameraVideoGrid.vue';



import Panel from '@/components/Panel.vue';

</script>

<style lang="scss" scoped>
#contain {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns:
    minmax(0, 0.7fr)
    minmax(0, 1.5fr)
    minmax(0, 0.7fr);
  grid-template-rows: minmax(0, 1fr);
  grid-template-areas: "left center right";

  margin-top: 70px;
  margin-bottom: 30px;
}

.left-column {
  grid-area: left;
}

.right-column {
  grid-area: right;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  pointer-events: auto;

  /* 隐藏滚动条，但保留滚动 */
  scrollbar-width: none;


}



</style>
