<template>
    <ul class="alarm-list">
        <li v-for="item in alarmList" :key="item.id" class="alarm-item">
            <div class="alarm-info">
                <div class="alarm-name">
                    <div class="text">
                        监控{{ item.cameraId }}：{{ item.location }}
                    </div>
                    <span class="alarm-status" :class="statusMap[item.status].className">
                        {{ statusMap[item.status].label }}
                    </span>
                </div>
                <div class="alarm-time">{{ item.time }}</div>
            </div>


        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
import { alarmList } from '@/stores/staticData';
const statusMap = {
    pending: { label: '待派遣', className: 'pending' },
    processing: { label: '处理中', className: 'processing' },
    resolved: { label: '已消警', className: 'resolved' },
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

        .alarm-name {
            display: flex;
            justify-content: space-between;

            font-size: 18px;
            background: rgba(0, 0, 0, 0.3);
            padding: 5px 15px 5px 0px;
        }

        .alarm-time {
            margin-top: 5px;
            font-size: 18px;

        }
    }
}




.alarm-status {

    padding: 4px 8px;
    border-radius: 3px;
    color: #fff;
    font-size: 15px;

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