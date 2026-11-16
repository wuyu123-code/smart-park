<template>
    <div class="top">
        <div class="left">
            <i></i>
            <span>智慧社区</span>
        </div>
        <div class="right">
          <span style="marginRight:15px;marginLeft:15px;letter-spacing:2px;">{{currentDate}}</span>
            <span style="marginRight:15px;marginLeft:15px;">{{currentWeek}}</span>
            <span style="marginRight:15px;marginLeft:15px;">{{currentSecond}}</span>
        </div>
    </div>
</template>

<script setup>
import {ref,onMounted,computed,onUnmounted} from 'vue'
import dayjs from 'dayjs'
const timer=ref(null)
const weekMap={
    'Monday':'星期一',
    'Tuesday':'星期二',
    'Wednesday':'星期三',
    'Thursday':'星期四',
    'Friday':'星期五',
    'Saturday':'星期六',
    'Sunday':'星期日',
}
let currentDate=ref(dayjs().format('YYYY/MM/DD'))
let currentWeek=ref(weekMap[dayjs().format('dddd')])
let currentSecond=ref(dayjs().format('hh:mm:ss'))
onMounted(async()=>{
    timer.value=setInterval(() => {
        currentDate.value=dayjs().format('YYYY/MM/DD')
        currentWeek.value=weekMap[dayjs().format('dddd')]
        currentSecond.value=dayjs().format('hh:mm:ss')
    }, 100);
})
</script>

<style lang="scss" scoped>
.top{
    display: flex;
    position: fixed;
    height: 62px;
    width: 100%;
    background-color: #192b4e;
    z-index: 100;
    justify-content: space-between;
    .left{

        display: flex;
        
        align-items: center;
        color: white;
        gap: 5px;
        i{
            width: 40px;
            height: 40px;
            background: url('@/assets/img/park.png') center/contain no-repeat;
            margin-left: 20px;
        }
        span{
            font-size:22px;
        }
    }
    .right{
        display: flex;
        color: white;
        align-items: center;
    }
}
</style>