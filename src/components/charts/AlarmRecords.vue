<template>
  <div class="efficiency-chart" ref="chartRef"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { alarmData } from '@/stores/staticData'
import * as echarts from 'echarts'
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
      backgroundColor: 'rgba(12, 25, 45, 0.9)',
      textStyle: {
        color: '#fff',
      },
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#88b8d6',
          type: 'dashed',
        },
      },

    },
    graphic: [
      {
        type: 'text',
        right: 15,
        top: 8,
        style: {
          text: `单位：次数/天`,
          fill: '#ddd',
          fontSize: 13,
          fontWeight: 'bold',
        },
      },
    ],
    grid: {
      top: 30,
      left: 15,
      
      bottom: 1,
      
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: alarmData.map(item => item.date),
      axisLine: {
        lineStyle: {
          color: '#859aab',
        },
      },
      axisLabel: {
        color: '#b9cada',
        fontSize: 12,
      },
    },

    yAxis: {
      type: 'value',
    
      left:30,
      nameTextStyle: {
        color: '#587bcf',
        fontSize: 18,
        fontWeight: 'bold',
      },
      axisLabel: {
        color: '#a9bfd2',
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(185, 205, 225, 0.4)',
          type: 'dashed',
        },
      },
    },

    series: [
      {
        name: '次数',
        type: 'line',
        data: alarmData.map(item => item.value),
        smooth: false,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: {
          width: 2,
          color: '#9e69bd',
        },
        itemStyle: {
          color: '#ffe6bd',
          borderColor: '#ba6ca8',
          borderWidth: 1,
        },

        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {
                offset: 0,
                color: 'rgba(148, 48, 185, 0.6)',
              },
              {
                offset: 0.5,
                color: 'rgba(91, 65, 159, 0.45)',
              },
              {
                offset: 1,
                color: 'rgba(29, 147, 180, 0.5)',
              },
            ],
          ),
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
.efficiency-chart {
  width: 100%;
  height: 100%;
  min-height: 200px;
  
}
</style>