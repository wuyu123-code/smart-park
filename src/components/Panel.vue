<!--
 * @Description: 
 * @Author: your name
 * @version: 
 * @Date: 2024-05-08 17:07:52
 * @LastEditors: your name
 * @LastEditTime: 2024-05-08 17:07:55
-->
<template>
    <div class="panel">
        <div class="head">
            <span class="icmg"></span>
            <span>{{ props.title }}</span>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>
<style lang="scss" scoped>
.panel {
    min-width: 0px;
    min-height: 0px;
    display: flex;
    flex-direction: column;
     /* 很淡的边框 */
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    .head {
        display: flex;
        height: 30px;
        align-items: center;
        background-size: cover;
        letter-spacing: 1px;//文字间距
        .icmg {
            width: 30px;
            height: 30px;
            background: url('@/assets/img/titleImg.png');
             margin-left: 20px;
        }
        span {
            font-size: 20px;
            height: 100%;
            line-height: 30px;
            margin-left: 10px;
            color: #92b4fd;
        }
    }
    .content {
        width: 100%;
        flex: 1;
        pointer-events: all;
         
      
    }
}
</style>