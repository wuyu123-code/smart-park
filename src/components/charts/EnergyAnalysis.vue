<template>
  <div ref="chartRef" class="energy-analysis"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  data: {
    type: Array,
    // 根据截图近似设置的示例数据
    default: () => [
      { name: '初始', geothermal: 85, environmental: 33 },
      { name: '最高', geothermal: 48, environmental: 67 },
      { name: '最低', geothermal: 150, environmental: 98 },
      { name: '当前', geothermal: 130, environmental: 105 },
    ],
  },
})

const chartRef = ref(null)
let chart
let resizeObserver

function createOption() {
  return {
    backgroundColor: 'transparent',

    legend: {
      top: 4,
      left: 'center',
      icon: 'roundRect',
      itemWidth: 24,
      itemHeight: 12,
      itemGap: 18,
      textStyle: {
        color: '#eee',
        fontSize: 13,
      },
      data: ['地热平衡', '节能环保'],
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(140, 180, 220, 0.1)',
        },
      },
      backgroundColor: 'rgba(12, 25, 45, 0.95)',
      borderColor: '#436782',
      textStyle: {
        color: '#fff',
      },
    },

    grid: {
      top: 36,
      left: 12,
      right: 20,
      bottom: 10,
      containLabel: true,
    },

    xAxis: {
      type: 'value',
      min: 0,
      // 示例数据下为 180，实际值更大时扩展刻度
      max: ({ max }) => Math.max(180, Math.ceil(max / 30) * 30),
      interval: 30,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#7892aa',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#a9bfd2',
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(170, 192, 215, 0.45)',
          type: 'dashed',
        },
      },
    },

    yAxis: {
      type: 'category',
      // 按数组顺序从上往下排列
      inverse: true,
      data: props.data.map(item => item.name),
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#b9cbd9',
        fontSize: 13,
        margin: 8,
      },
    },

    series: [
      {
        name: '地热平衡',
        type: 'bar',
        barWidth: 12,
        barGap: '30%',
        data: props.data.map(item => item.geothermal),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [
              { offset: 0, color: '#35bdd7' },
              { offset: 1, color: '#a34bd2' },
            ],
          ),
        },
      },
      {
        name: '节能环保',
        type: 'bar',
        barWidth: 12,
        data: props.data.map(item => item.environmental),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [
              { offset: 0, color: '#37b2db' },
              { offset: 1, color: '#32c59d' },
            ],
          ),
        },
      },
    ],
  }
}

watch(
  () => props.data,
  () => {
    chart?.setOption(createOption(), { notMerge: true })
  },
  { deep: true },
)

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    const element = chartRef.value

    if (!element || !element.clientWidth || !element.clientHeight) {
      return
    }

    if (!chart) {
      chart = echarts.init(element)
      chart.setOption(createOption())
    } else {
      chart.resize()
    }
  })

  resizeObserver.observe(chartRef.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  chart?.dispose()
})
</script>

<style scoped>
.energy-analysis {
  width: 100%;
  height: 230px;
}
</style>