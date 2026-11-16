<template>
    <div class="owner-care">
        <div class="chart-wrapper">
            <div ref="chartRef" class="care-chart"></div>
            <div class="chart-center">
                <div class="center-title">业主关怀</div>
                <div class="iconimg"></div>
            </div>
        </div>

        <ul class="care-legend">
            <li v-for="item in ownerCare" :key="item.name">
                <span class="legend-color" :style="{ backgroundColor: item.color }"></span>
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { ownerCare } from '@/stores/staticData';


const chartRef = ref(null)
let chart
let resizeObserver
function createOption() {
    return {
        series: [
            {
                name: '业主关怀',
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['68%', '94%'],
                clockwise: true,
                avoidLabelOverlap: true,
                label: {
                    show: false,
                },

                labelLine: {
                    show: false,
                },

                itemStyle: {
                    borderWidth: 0,
                    borderRadius: 0,
                },

                emphasis: {
                    scale: false,
                    itemStyle: {
                        shadowBlur: 8,
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                    },
                },

                data: ownerCare.map(item => ({
                    name: item.name,
                    value: item.value,
                    itemStyle: {
                        color: item.color,
                    },
                })),
            },
        ],
    }
}



onMounted(() => {
    resizeObserver = new ResizeObserver(() => {
        const element = chartRef.value
        if (!chart) {
            chart = echarts.init(element)
            chart.setOption(createOption())
        } else {
            chart.resize()
        }
    })
    resizeObserver.observe(chartRef.value)
})

</script>

<style lang="scss" scoped>
.owner-care {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 16px;
    color: #eee;
}

.chart-wrapper {
    position: relative;
    flex: 0 0 44%;
    min-width: 0;
    height: 175px;
}

.care-chart {
    width: 100%;
    height: 100%;
}

.chart-center {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    pointer-events: none;
}

.center-title {
    color: #559bc3;
    font-size: 16px;
    font-weight: bold;
}

.iconimg {
    width: 50px;
    height: 50px;
    background-image: url('@/assets/img/yz.png');
    background-repeat: no-repeat;
    background-size: cover;
}


.care-legend {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        line-height: 20px;
    }

}
.legend-color {
    flex: 0 0 28px;
    height: 17px;
    border-radius: 3px;
}
</style>