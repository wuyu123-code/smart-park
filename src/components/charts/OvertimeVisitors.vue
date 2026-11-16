<template>
  <div ref="chartRef" class="overtime-chart"></div>
</template>

<script setup>
import { ref,onMounted} from 'vue'
import * as echarts from 'echarts'
import { overtimevistor } from '@/stores/staticData';


const chartRef = ref(null)
let chart
let resizeObserver

function createOption() {
  return {

    title: {
      text: '近一周超时访客数量',
      left: 40,
      top: 4,
      textStyle: {
        color: '#65bef2',
        fontSize: 15,
        fontWeight: 'normal',
      },
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
      top: 38,
      left: 12,
      right: 18,
      bottom: 10,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: overtimevistor.map(item => item.date),
      axisLine: {
        lineStyle: {
          color: '#839aaf',
        },
      },
      axisLabel: {
        color: '#a9bfd2',
        fontSize: 12,
       
      },

    },

    yAxis: {
      type: 'value',
      min: 0,
      minInterval: 1,
      splitNumber: 4,
      // 示例数据下显示到 400，数据增加时自动扩大范围
      max: ({ max }) => Math.max(400, Math.ceil(max / 100) * 100),

      axisLabel: {
        color: '#8eabc4',
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(170, 192, 215, 0.5)',
          type: 'dashed',
        },
      },
    },

    series: [
      {
        name: '超时访客',
        type: 'bar',
        barWidth: '80%',
        barMaxWidth: 40,
        data:overtimevistor.map((item, index) => ({
          value: item.count,
          itemStyle: {
            color: index % 2 === 0 ? '#587fda' : '#4ed1ca',
          },
        })),
        emphasis: {
          itemStyle: {
            borderColor: '#c9f5ff',
            borderWidth: 1,
          },
        },
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

<style scoped>
.overtime-chart {
  width: 100%;
  height: 230px;
}
</style>