<template>
    <div id="contain">
        <div class="left-column">
            <Panel v-for="unit in heatPumpUnits" :key="unit.id" :title="unit.title" class="heat-pump-panel">
                <template #content>
                    <HeatPumpUnit :unit="unit" />
                </template>
            </Panel>
        </div>

        <div class="right-column">
  <PumpMonitor />
</div>
    </div>

</template>

<script setup>


import HeatPumpUnit from '@/components/charts/HeatPumpUnit.vue'
import { heatPumpUnits } from '@/stores/staticData'

import Panel from '@/components/Panel.vue';
import PumpMonitor from '@/components/PumpMonitor.vue'

</script>

<style lang="scss" scoped>
#contain {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    grid-template-columns:
        minmax(0, 0.7fr) minmax(0, 1.5fr) minmax(0, 0.7fr);
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
