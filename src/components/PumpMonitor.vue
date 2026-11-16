<template>
  <div class="pump-monitor">
    <select
      v-model="selectedPumpId"
      class="pump-select"
      aria-label="选择泵机"
    >
      <option
        v-for="pump in pumps"
        :key="pump.id"
        :value="pump.id"
      >
        {{ pump.name }}
      </option>
    </select>
    <Panel title="三相电压">
      <template #content>
        <PumpChart :option="voltageOption" />
      </template>
    </Panel>

    <Panel title="三相电流">
      <template #content>
        <PumpChart :option="currentOption" />
      </template>
    </Panel>

    <Panel title="超时访客数据">
      <template #content>
        <PumpChart :option="countOption" />
      </template>
    </Panel>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import * as echarts from 'echarts'
import Panel from '@/components/Panel.vue'
import PumpChart from '@/components/charts/PumpChart.vue'

// 演示数据：用于验证选择不同泵机时三张图同步切换
// voltage 暂按截图的七个采样点展示，尚未拆分 A/B/C 相
const pumps = ref([
  {
    id: 1,
    name: '1#天棚热泵主机',
    voltage: [120, 150, 50, 85, 130, 150, 320],
    current: [20, 27, 40, 34, 67, 55, 10],
    counts: [8, 50, 200, 335, 390, 330, 220],
  },
  {
    id: 2,
    name: '2#天棚热泵主机',
    voltage: [160, 120, 80, 110, 170, 200, 290],
    current: [15, 30, 45, 38, 58, 42, 25],
    counts: [30, 80, 170, 280, 350, 260, 180],
  },
  {
    id: 3,
    name: '3#天棚热泵主机',
    voltage: [90, 130, 65, 100, 140, 180, 260],
    current: [10, 20, 35, 25, 48, 36, 18],
    counts: [20, 60, 130, 240, 300, 210, 150],
  },
  {
    id: 4,
    name: '4#天棚热泵主机',
    voltage: [180, 160, 100, 150, 210, 250, 340],
    current: [25, 35, 50, 43, 70, 60, 32],
    counts: [40, 100, 220, 320, 400, 360, 260],
  },
])

const dates = ['6-21', '6-22', '6-23', '6-24', '6-25', '6-26', '6-27']

// 默认选择第一台；option 的 :value 保持 ID 为数字
const selectedPumpId = ref(pumps.value[0].id)
const currentPump = computed(() =>
  pumps.value.find(pump => pump.id === selectedPumpId.value),
)

// 三张图共用的坐标轴样式
function categoryAxis(data, boundaryGap = true) {
  return {
    type: 'category',
    data,
    boundaryGap,
    axisLine: {
      lineStyle: { color: '#7892aa' },
    },
    axisTick: { show: false },
    axisLabel: {
      color: '#a9bfd2',
      fontSize: 12,
    },
  }
}

function valueAxis() {
  return {
    type: 'value',
    min: 0,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: '#a9bfd2',
      fontSize: 12,
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(170, 192, 215, 0.4)',
        type: 'dashed',
      },
    },
  }
}

function baseOption() {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(12, 25, 45, 0.95)',
      borderColor: '#436782',
      textStyle: { color: '#fff' },
    },
    grid: {
      top: 12,
      left: 12,
      right: 18,
      bottom: 12,
      containLabel: true,
    },
  }
}

// 第一张：横向渐变柱形图
const voltageOption = computed(() => ({
  ...baseOption(),
  xAxis: valueAxis(),
  yAxis: categoryAxis(
    currentPump.value.voltage.map((_, index) => String(index + 1)),
  ),

  series: [
    {
      name: '电压示例',
      type: 'bar',
      barWidth: '70%',
      data: currentPump.value.voltage,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 1, 0,
          [
            { offset: 0, color: '#38bdd8' },
            { offset: 1, color: '#a34bd3' },
          ],
        ),
      },
    },
  ],
}))

// 第二张：折线和渐变面积
const currentOption = computed(() => ({
  ...baseOption(),

  xAxis: categoryAxis(dates, false),
  yAxis: valueAxis(),

  series: [
    {
      name: '电流示例',
      type: 'line',
      data: currentPump.value.current,
      symbol: 'circle',
      symbolSize: 5,
      smooth: false,

      lineStyle: {
        color: '#aa6bbd',
        width: 2,
      },

      itemStyle: {
        color: '#ffe2b5',
        borderColor: '#b86fa8',
        borderWidth: 1,
      },

      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            { offset: 0, color: 'rgba(155, 50, 185, 0.7)' },
            { offset: 1, color: 'rgba(30, 155, 190, 0.45)' },
          ],
        ),
      },
    },
  ],
}))

// 第三张：蓝绿交替柱形图
const countOption = computed(() => ({
  ...baseOption(),
  xAxis: categoryAxis(dates),
  yAxis: {
    ...valueAxis(),
    minInterval: 1,
  },
  series: [
    {
      name: '超时人数',
      type: 'bar',
      barWidth: '80%',
      barMaxWidth: 40,

      data: currentPump.value.counts.map((value, index) => ({
        value,
        itemStyle: {
          color: index % 2 === 0 ? '#587fda' : '#4ed1ca',
        },
      })),
    },
  ],
}))
</script>

<style scoped>
.pump-monitor {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.pump-select {
  height: 45px;
  margin: 20px 12px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #56699c;
  border-radius: 3px;
  background: rgba(20, 25, 40, 0.8);
  color: #dce6f5;
  font-size: 14px;
  cursor: pointer;
}
.pump-select option {
  background: #202a40;
  color: #fff;
}
.pump-select:focus-visible {
  outline: 1px solid #4c9ff1;
}


</style>