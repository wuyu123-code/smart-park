<template>
    <div id="footer">
        <ul class="navigation">
            <li v-for="item in menus" :key="item.path">
                <router-link :to="item.path" class="nav-item"
                    :class="[item.isActive ? 'active-item' : '', item.name === '首页' ? 'home' : '']">
                    <span class="nav-label">{{ item.name }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref,  watch } from 'vue'
import router from '@/router';
import menuData from '@/stores/menuData'
const menus = ref(menuData)
watch(router.currentRoute, (value) => {
    menus.value = menus.value.map(n => {
        if (n.path === value.path) {
            console.log(n);
            n.isActive = true
        } else {
            n.isActive = false
        }
        return n
    })
})
</script>

<style lang="scss" scoped>
#footer {
    width: 100%;
    height: 73px;
    position: absolute;
    bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
    z-index: 1000;
    .navigation {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        margin-top: 24px;
        position: relative;
        .active-item.nav-item {
            color: #4abebe;
            border-color: #4abebe;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        li {
            color: #fff;
            cursor: pointer;
            
            list-style: none;
            .nav-item {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                padding: 12px 24px;
                font-size: 15px;
                transform: skewX(var(--angle));
                border: 2px solid #6366da;
                .nav-label {
                    display: inline-block;
                    /* 抵消按钮的倾斜，保持文字端正。 */
                    transform: skewX(calc(0deg - var(--angle)));
                }
            }
             
            .nav-item:hover{
                background: rgba($color: #6366da, $alpha: 0.2);
            }
        }
        
        li:nth-child( 3) {
            .nav-item{
                    font-size: 17px;
                    font-weight: bold;
            }
            
        }

        li:nth-child(-n + 2) {
            --angle: 20deg;
            
        }

        li:nth-child(n + 4) {
            --angle: -20deg;
        }
    }

}
</style>
