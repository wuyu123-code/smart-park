<template>
  <div class="cost-share">
    <div class="chart-wrapper">
      <div ref="chartRef" class="cost-chart"></div>

      <div class="chart-center">
        <span class="center-title">费用占比</span>
        <img :src="costIcon" alt="" class="cost-icon" />
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, watch, onMounted,} from 'vue'
import * as echarts from 'echarts'
import costIcon from '@/assets/img/fy.png'
import {unitCost} from'@/stores/staticData';

const chartRef = ref(null)
let chart
let resizeObserver

function createOption() {
  return {
    backgroundColor: 'transparent',
     legend: {
  orient: 'vertical',
  right: 30,
  top: 'center',
  icon: 'roundRect',
  itemWidth: 24,
  itemHeight: 14,
  itemGap: 12,
  textStyle: {
    color: '#eee',
    fontSize: 13,
  },
  data: unitCost.map(item => item.name),
},
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(12, 25, 45, 0.95)',
      borderColor: '#436782',
      textStyle: {
        color: '#fff',
      },
      formatter: '{b}<br/>费用：{c} 元<br/>占比：{d}%',
    },

    series: [
      {
        name: '各类型费用占比',
        type: 'pie',
        center: ['29%', '50%'],
        radius: ['62%', '88%'],
        startAngle: 90,
        clockwise: true,
        stillShowZeroSum: false,
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
        data: unitCost.map(item => ({
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

<style scoped>
.cost-share {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 20px 12px;
  color: #fff;
}

.chart-wrapper {
  position: relative;
  flex: 1;
  min-width: 0;
  height: 190px;
}

.cost-chart {
  width: 100%;
  height: 100%;
}
.chart-center {
  position: absolute;
  left: 29%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  white-space: nowrap;
  pointer-events: none;
}

.center-title {
  color: #589bc2;
  font-size: 15px;
  font-weight: bold;
}

.cost-icon {
  display: block;
  width: 40px;
  height: 40px;

}


</style>