<template>
    <div class="contain">
        <!-- 能效等级 -->
        <div class="grade-row">
            <span class="grade-text">低</span>

            <div class="grade-scale" aria-hidden="true">
                <span v-for="index in 5" :key="index"></span>
            </div>

            <span class="grade-text">高</span>
            <span class="grade-badge">{{efficiency}}</span>
        </div>
        <div class="bottom">
            <div class="temp-pie" ref="chartRef">
        </div>
        <div class="graphic">
            <div class="indoor-data" v-for="item in energylabel" :key="item.name">
                <div class="text">{{ item.name + ":" + item.value + "%" }}</div>
                <div class="progress-bar">

                    <div class="true-len" :style="{ width: item.value + '%' }"></div>
                </div>
            </div>
        </div>
        </div>
        
    </div>

</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as echarts from 'echarts';
import { energylabel } from '@/stores/staticData';
import { color } from 'echarts';
const chartRef = ref(null)
const indoorval = ref(65)
const efficiency =ref('一级')


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
                        name: '能效比',
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



    align-items: center;
    margin-left: 40px;
    gap: 40px;
    margin-bottom: 20px;
    /* 上方等级条 */
.grade-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.grade-text {
  flex-shrink: 0;
  color: #d0d7dc;
  font-size: 14px;
}

.grade-scale {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}

.grade-scale span {
  height: 18px;
  box-sizing: border-box;
  border: 1px solid #7c6bea;
  background: rgba(20, 23, 40, 0.35);
}

.grade-badge {
  flex-shrink: 0;
  min-width: 48px;
  padding: 1px 7px;
  box-sizing: border-box;
  background: #36afe2;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
}

.bottom{
    display: flex;
    margin-top: 20px;
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

}
</style>