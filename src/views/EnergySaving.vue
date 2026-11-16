<template>
    <div id="contain">


        <div class="left-column">
            <Panel title="当代能效标识">
                <template #content>
                    <EfficiencyLabel />
                </template>
            </Panel>
            <Panel title="系统费用统计">
                <template #content>
                    <SystemCost />
                </template>
            </Panel>
            <Panel title="各类型费用占比" >
                <template #content>
                    <CostShare />
                </template>
            </Panel>
            <Panel title="能源分析">
                <template #content>
                    <EnergyAnalysis />
                </template>
            </Panel>
        </div>

        <div class="right-column">

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

            <Panel title="运行相关数据" style="flex-shrink: 0">
                <template #content>
                    <OperationData :rows="operationData" />
                </template>
            </Panel>

        </div>
    </div>

</template>

<script setup>

import CostShare from '@/components/charts/CostShare.vue';
import EfficiencyChart from '@/components/charts/EfficiencyChart.vue';
import EfficiencyLabel from '@/components/charts/EfficiencyLabel.vue';
import EnergyAnalysis from '@/components/charts/EnergyAnalysis.vue';
import EnergyOverview from '@/components/charts/EnergyOverview.vue';
import OperationData from '@/components/charts/OperationData.vue';
import SystemCost from '@/components/charts/SystemCost.vue';
import Panel from '@/components/Panel.vue';
import { operationData } from '@/stores/staticData';
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
