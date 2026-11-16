<template>
    <div id="contain">
        <div class="left-column">
            <Panel title="安防概况">
                <template #content>
                    <SecurityOverview />
                </template>
            </Panel>
            
            <Panel title="报警讯息列表">
                <template #content>
                    <AlarmList style="max-height: 650px"/>
                </template>
            </Panel>
        </div>
 
        <div class="right-column">
            <Panel title="黑名单数据">
                <template #content>
                    <Blacklist />
                </template>
            </Panel>
            <Panel title="超时访客数">
                <template #content>
                <OvertimeVisitors />
                </template>
            </Panel>
            <Panel title="业主关怀">
                <template #content>
                    <OwnerCare />
                </template>
            </Panel>
            <Panel title="报警数据">
                <template #content>
                   <AlarmRecords />
                </template>
            </Panel>
        </div>
    </div>

</template>

<script setup>
import AlarmList from '@/components/charts/AlarmList.vue';
import AlarmRecords from '@/components/charts/AlarmRecords.vue';
import Blacklist from '@/components/charts/Blacklist.vue';
import ComfortData from '@/components/charts/ComfortData.vue';
import OvertimeVisitors from '@/components/charts/OvertimeVisitors.vue';
import OwnerCare from '@/components/charts/OwnerCare.vue';
import SecurityOverview from '@/components/charts/SecurityOverview.vue';


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
