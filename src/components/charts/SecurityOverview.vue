<template>
    <div class="contain">
        <div class="sumperson">
            <div class="left"></div>
            <div class="right">
                <div class="community_per">当前社区总人数</div>
                <div class="community_numper">12530</div>
            </div>
        </div>
        <div class="personcategory">
            <div class="category" v-for="item in personcatogray" :key="item.name">
                <div class="catnum">{{ item.name }}</div>
                <div class="pernum">{{ item.num }}</div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { personcatogray } from '@/stores/staticData';
</script>

<style lang="scss"  scoped>
.contain{
    .sumperson{
        display: flex;
        gap: 10px;
        margin-left: 35px;
        margin-top: 18px;

        align-items: center;
        .left{
            width: 70px;
            height: 70px;
            background-image: url("@/assets/img/title.png");
            background-size: cover;
        }
        .right{
            .community_per{
                font-size: 16px;
                color: #4370e2;
            }
            .community_numper{
                color: #98ccff;
                font-size: 30px;
            }
        }
    }
    .personcategory{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
        padding: 0px 12px;
        .category{
            text-align: center;
            .catnum{
                color: white;
                font-size: 18px;
                background: linear-gradient(to right, #087b9a, #57459d);
                padding: 5px 15px;
            }
            .pernum{
                color: #98ccff;
                font-size: 23px;
                margin-top: 5px;
            }
        }
    }
}
</style>