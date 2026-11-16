<template>
    <div class="contain">
        <div class="iconimg"></div>
        <div class="text">近一个月出现黑名单次数</div>
        <span>{{blacklist}}</span>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const blacklist =754
</script>

<style lang="scss" scoped>
.contain{
    display: flex;
    width: 90%;
    height: 80px;
    align-items: center;

    margin: 15px 20px;
    gap: 20px;
    .iconimg{
        width:70px;
        height: 70px;
        background-image: url('@/assets/img/user.png');
        background-repeat: no-repeat;
        background-size: cover;
        
    }
    .text{
        color: white;
        font-size: 18px;
       
    }
     span{
            font-size: 50px;
            color: #4fc0f4;
        }
}
</style>