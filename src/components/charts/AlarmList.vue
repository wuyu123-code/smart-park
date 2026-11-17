<template>
    <ul class="alarm-list">
        <li v-for="item in alarmList" :key="item.id" class="alarm-item">
            <div class="alarm-info">
                <div class="alarm-name">
                    <div class="text">
                        监控{{ item.cameraId }}：{{ item.location }}
                    </div>
                    <button type="button" class="alarm-status" :class="statusMap[item.status].className"
                        :aria-label="`监控${item.cameraId}：${statusMap[item.status].label}，点击切换状态`"
                        @click="changeStatus(item)">
                        {{ statusMap[item.status].label }}
                    </button>
                </div>
                <div class="alarm-time">{{ item.time }}</div>
            </div>


        </li>
    </ul>
</template>
<script setup>
import { ref } from 'vue'
import { alarmList as initialAlarmList } from '@/stores/staticData'

// 创建响应式列表，复制每一项，避免直接修改导入的静态数据
const alarmList = ref(
    initialAlarmList.map(item => ({ ...item }))
)

const statusMap = {
    pending: { label: '待派遣', className: 'pending' },
    processing: { label: '处理中', className: 'processing' },
    resolved: { label: '已消警', className: 'resolved' },
}

const statusOrder = ['pending', 'processing', 'resolved']

function changeStatus(item) {
    const currentIndex = statusOrder.indexOf(item.status)
    const nextIndex = (currentIndex + 1) % statusOrder.length

    item.status = statusOrder[nextIndex]
}
</script>

<style lang="scss" scoped>
.alarm-list {
    max-height: 500px;
    margin-top: 15px;
    padding: 5px 18px;
    overflow-y: auto;
    scrollbar-width: none;

    .alarm-item {
        display: flex;
        height: 60px;
        padding: 5px 10px;
        margin-bottom: 5px;
        border-left: 15px solid #23588a;
    }

    .alarm-info {
        flex: 1;

        color: #eee;
        font-size: 14px;
        line-height: 20px;
        min-width: 0;

        .alarm-name {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            font-size: 18px;
            background: rgba(0, 0, 0, 0.3);
            padding: 5px 15px 5px 0px;

            .text {
                min-width: 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .alarm-time {
            margin-top: 5px;
            font-size: 18px;

        }
    }
}

.alarm-status {
    padding: 4px 8px;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-family: inherit;
    font-size: 15px;

    cursor: pointer;
    flex-shrink: 0;
    white-space: nowrap;

    &:hover {
        filter: brightness(1.15);
    }

    &:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 2px;
    }
}

.pending {
    background: #8246c8;
}

.processing {
    background: #4c9cf5;
}

.resolved {
    background: #5758bb;
}
</style>