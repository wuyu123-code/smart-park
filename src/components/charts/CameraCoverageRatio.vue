<template>
    <div class="contain">
        <div class="temp-pie" ref="chartRef">
        </div>
        <div class="graphic">
             <div class="coverage-control">
            <span id="coverage-label">覆盖区域显示</span>

    <button
      type="button"
      class="switch"
      :class="{ active: showCoverage }"
      @click="showCoverage = !showCoverage"
    >
      <span class="switch-thumb"></span>
    </button>
  </div>
            <div class="indoor-data" v-for="item in cameraOver" :key="item.name">
                <div class="text">{{ item.name + ":" + item.value + "%" }}</div>
                <div class="progress-bar">

                    <div class="true-len" :style="{ width: item.value + '%' }"></div>
                </div>

            </div>

        </div>
    </div>

</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as echarts from 'echarts';
import { cameraOver } from '@/stores/staticData';
import { color } from 'echarts';
const chartRef = ref(null)
const indoorval = ref(80)
const showCoverage = ref(false)
let chart

const gradient = new echarts.graphic.LinearGradient(
    0, 0, 0, 1,
    [
        { offset: 0, color: '#24647a' },
        { offset: 1, color: '#13e3c9' }
    ]
)
function createOption(value) {
   
    const emptyValue = 100 - value

    return {
        series: [
            {
                type: 'pie',
                radius: ['65%', '100%'],
                // 根据空白占比，自动让缺口朝上对称
                startAngle: 90 + (emptyValue / 100) * 180,
                emphasis: { scale: false },
                data: [
                    {
                        value: emptyValue,
                        name: '空值',
                        itemStyle: {
                            color: 'transparent',
                        },

                    },
                    {
                        value,
                        name: '覆盖区域',
                        itemStyle: { color: gradient },
                        label: {
                            show: true,
                            position: 'center',
                            // 从当前数据读取名称和百分比
                            formatter: '{b}\n{c}%',
                            color: '#13e3c9',
                            fontSize: 16,
                            lineHeight: 20
                        }
                    }
                ]
            }
        ]
    }
}
let resizeObserver

onMounted(() => {
  resizeObserver = new ResizeObserver(() => {
    const el = chartRef.value
    if (!chart) {
      chart = echarts.init(el)
      chart.setOption(createOption(indoorval.value))
    } else {
      // 容器尺寸改变后重新调整画布
      chart.resize()
    }
  })

  resizeObserver.observe(chartRef.value)
})


</script>

<style lang="scss" scoped>
.contain {
   
   
    display: flex;
    align-items: center;
    margin-left: 40px;
    gap: 40px;
    margin-bottom: 20px;
    .temp-pie {
        width: 130px;
        height: 130px;
    }

    .graphic {
        margin-left: 20px;
        .indoor-data {
            margin-top: 10px;
            .text {
                color: white;
            }

            .progress-bar {
                margin-top: 10px;
                width: 200px;
                height: 20px;
                background: rgba(0, 0, 0, 0);
                .true-len {
                    height: 100%;
                    background: #318f89;
                }

            }
        }
    }
}
.coverage-control {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 14px;

}

.switch {
  position: relative;
  flex-shrink: 0;
  width: 48px;
  height: 26px;
  padding: 0;
  border: none;
  border-radius: 13px;
  background: #343c65;
  cursor: pointer;
  transition: background-color 0.2s;
}

.switch-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
  transition: transform 0.2s;
}

.switch.active {
  background: #22bfb3;
}

.switch.active .switch-thumb {
  transform: translateX(22px);
}

.switch:focus-visible {
  outline: 2px solid #91dfff;
  outline-offset: 3px;
}
</style>