<template>
    <div id="contain">
        <div class="left-column">
            <Panel title="安防概况">
                <template #content>
                    <SecurityOverview />
                </template>
            </Panel>
            <Panel title="摄像头视频监控">
                <template #content>
                    <VideoMonitoring />
                </template>
            </Panel>
            <Panel title="报警讯息列表">
                <template #content>
                    <AlarmList />
                </template>
            </Panel>
        </div>
 
        <div class="right-column">
            <Panel title="舒适度数据统计">
                <template #content>
                    <ComfortData />
                </template>
            </Panel>

            <Panel title="能源数据概况">
                <template #content>
                    <EnergyOverview />
                </template>
            </Panel>

            <Panel title="系统能效统计">
                <template #content>
                    <EfficiencyChart />
                </template>
            </Panel>

            <Panel title="机组运行情况">
                <template #content>
                    <UnitOperatingStatus />
                </template>
            </Panel>
        </div>
    </div>

</template>

<script setup>
import AlarmList from '@/components/charts/AlarmList.vue';
import ComfortData from '@/components/charts/ComfortData.vue';
import EfficiencyChart from '@/components/charts/EfficiencyChart.vue';
import EnergyOverview from '@/components/charts/EnergyOverview.vue';
import SecurityOverview from '@/components/charts/SecurityOverview.vue';
import UnitOperatingStatus from '@/components/charts/UnitOperatingStatus.vue';
import VideoMonitoring from '@/components/charts/VideoMonitoring.vue';
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
