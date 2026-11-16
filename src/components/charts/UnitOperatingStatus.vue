<template>
    <div class="unit-operation">
        <div class="unit-body">
            <div ref="chartRef" class="unit-chart"></div>
            <div class="unit-info">
                <div class="unit-name">
                    <div>{{ currentUnit.station }}</div>
                    <div class="unit-subtitle">
                        ({{ currentUnit.name }})
                    </div>
                </div>
                <div class="status-group">
                    <div class="status-title">开启状态</div>
                    <span class="status-value" :class="{ inactive: !currentUnit.enabled }">
                        {{ currentUnit.enabled ? '启动' : '关闭' }}
                    </span>
                </div>

                <div class="status-group">
                    <div class="status-title">运行状态</div>
                    <span class="status-value" :class="currentUnit.status">
                        {{ statusText[currentUnit.status] }}
                    </span>
                </div>
            </div>
        </div>

        <div class="unit-pagination" aria-label="切换机组">
            <button v-for="(unit, index) in units" :key="unit.id" type="button" class="unit-dot"
                :class="{ active: currentIndex === index }" 
                @click="currentIndex = index"></button>
        </div>
    </div>
</template>

<script setup>
import {
    ref,
    computed,
    watch,
    onMounted,
    onBeforeUnmount,
} from 'vue'
import { units } from '@/stores/staticData'
import * as echarts from 'echarts'
const statusText = {
    running: '运行',
    standby: '待机',
    stopped: '停机',
}

const currentIndex = ref(0)
const currentUnit = computed(() => units[currentIndex.value])
const chartRef = ref(null)

let chart
let resizeObserver

function createOption() {
    const temperatures = currentUnit.value.temperatures

    return {
      
        legend: {
            top: 4,
            left: 'center',
            selectedMode: true,
            icon: 'roundRect',
            itemWidth: 22,
            itemHeight: 12,
            itemGap: 16,
            textStyle: {
                color: '#eee',
                fontSize: 13,
            },
            data: ['出水温度', '进水温度'],
        },
        grid: {
            top: 40,
            left: 8,
            right: 12,
            bottom: 8,
            containLabel: true,
        },

        xAxis: {
            type: 'value',
            min: -400,
            max: 400,
            axisLabel: {
                color: '#a9bfd2',
                fontSize: 11,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(170, 192, 215, 0.5)',
                    type: 'dashed',
                },
            },
        },

        yAxis: {
            type: 'category',
            inverse: true,
            data: temperatures.map(item => item.name),
         
            axisLabel: {
                color: '#a9bfd2',
                fontSize: 13,
            },
        },

        series: [
            {
                name: '出水温度',
                type: 'bar',
                stack: 'temperature',
                barWidth: 24,
                itemStyle: {
                    color: '#b509d1',
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: '#fff',
                    fontSize: 13,
                   
                },
                data: temperatures.map(item => ({
                    // 向左绘制，实际温度另行保存
                    value: -Math.abs(item.outlet),
                    actual: item.outlet,
                })),
            },
            {
                name: '进水温度',
                type: 'bar',
                stack: 'temperature',
                barWidth: 24,
                itemStyle: {
                    color: '#38afd2',
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: '#fff',
                    fontSize: 13,
                },
                data: temperatures.map(item => ({
                    value: Math.abs(item.inlet),
                    actual: item.inlet,
                })),
            },
        ],
    }
}

// 切换机组后更新图表
watch(currentIndex, () => {
    chart?.setOption(createOption(), { notMerge: true })
})

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

<style scoped>
.unit-operation {
    width: 100%;
    height: 100%;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px 12px;
    pointer-events: auto;
}

.unit-body {
    flex: 1;
    min-height: 0;
    display: flex;
    gap: 10px;
}

.unit-chart {
    flex: 1;
    min-width: 0;
    min-height: 170px;
}

.unit-info {
    flex: 0 0 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    text-align: center;
    color: #fff;
}

.unit-name {
    padding: 5px 2px;
    background: rgba(46, 45, 113, 0.85);
    font-size: 18px;
    line-height: 24px;
}

.unit-subtitle {
    font-size: 14px;
    line-height: 20px;
}

.status-title {
    margin-bottom: 3px;
    font-size: 15px;
}

.status-value {
    display: inline-block;
    min-width: 58px;
    padding: 2px 8px;
    box-sizing: border-box;
    background: #20c9af;
    font-size: 15px;
    line-height: 20px;
}

.status-value.standby {
    background: #c08b32;
}

.status-value.inactive,
.status-value.stopped {
    background: #5d6d7c;
}

.unit-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 6px;
}

.unit-dot {
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
}

.unit-dot::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #315b7d;
    transition: background-color 0.2s;
}

.unit-dot.active::before,
.unit-dot:hover::before {
    background: #4ca5ff;
}

.unit-dot:focus-visible {
    outline: 1px solid #4ca5ff;
    border-radius: 4px;
}
</style>