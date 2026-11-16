<template>
  <div class="heat-pump-unit">
    <div class="metrics">
      <div class="metric">
        <img :src="powerIcon"class="metric-icon" />

        <div class="metric-info">
          <div class="metric-label">功率</div>
          <div class="metric-value">{{ unit.power }}</div>
        </div>
      </div>

      <div class="metric">
        <img :src="electricityIcon"class="metric-icon" />

        <div class="metric-info">
          <div class="metric-label">电量</div>
          <div class="metric-value">{{ unit.electricity }}</div>
        </div>
      </div>
    </div>

    <div class="status-grid">
      <div
        v-for="item in statusItems"
        :key="item.label"
        class="status-item"
      >
        <span class="status-label">{{ item.label }}</span>
        <span class="status-tag" :class="item.type">
          {{ item.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import powerIcon from '@/assets/img/gl.png'
import electricityIcon from '@/assets/img/dl.png'

const props = defineProps({
  unit: {
    type: Object,
    required: true,
  },
})

const modeText = {
  heating: '制热',
  cooling: '制冷',
  stopped: '停机',
}

const statusItems = computed(() => [
  {
    label: '机组运行工况',
    text: modeText[props.unit.mode] ?? '未知',
    type: props.unit.mode,
  },
  {
    label: '机组运行状态',
    text: props.unit.running ? '运行' : '停止',
    type: props.unit.running ? 'enabled' : 'disabled',
  },
  {
    label: 'C1自动状态',
    text: props.unit.c1Auto ? '启动' : '关闭',
    type: props.unit.c1Auto ? 'enabled' : 'disabled',
  },
  {
    label: 'C2自动状态',
    text: props.unit.c2Auto ? '启动' : '关闭',
    type: props.unit.c2Auto ? 'enabled' : 'disabled',
  },
])
</script>

<style scoped>
.heat-pump-unit {
    height: 160px;
  padding: 12px 20px 16px;
  color: #fff;
 
  
}

/* 第一行：功率、电量 */
.metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.metric {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.metric-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.metric-info {
  min-width: 0;

}

.metric-label {
  margin-bottom: 3px;
  color: #8dc8e6;
  font-size: 14px;
}

.metric-value {
  font-size: 26px;
  line-height: 32px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* 下方：两列、两行状态 */
.status-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 14px;
  row-gap: 12px;
  margin-top: 15px;
}

.status-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.status-label {
   font-size: 20px;
}

.status-tag {
  flex-shrink: 0;
 
  padding: 5px 10px;

  color: #fff;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
}

.heating {
  background: #dfa238;
}

.cooling {
  background: #428ed0;
}

.enabled {
  background: #38c9b4;
}

.disabled,
.stopped {
  background: #687783;
}
</style>