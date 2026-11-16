<template>
  <div ref="chartRef" class="pump-chart"></div>
</template>

<script setup>
import { ref, watch, onMounted} from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
})

const chartRef = ref(null)
let chart
let resizeObserver

// 泵机切换后，父组件传入新配置，更新现有图表
watch(
  () => props.option,
  option => {
    chart?.setOption(option, { notMerge: true })
  },
  { deep: true },
)

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    const element = chartRef.value

    if (!chart) {
      chart = echarts.init(element)
      chart.setOption(props.option)
    } else {
      chart.resize()
    }
  })

  resizeObserver.observe(chartRef.value)
})


</script>

<style scoped>
.pump-chart {
  width: 100%;
  height: 220px;
}
</style>