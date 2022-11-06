<template>
    <div class="screen-wrapper">
        <div class="screen" id="screen">
            <div class="screen-visual">
                <header>
                    <div class="title">
                        <div class="text">新冠疫情最新数据展示</div>
                        <div class="time">截止时间 {{ store.list.lastUpdateTime }}</div>
                    </div>
                </header>
                <main>
                    <div class="main-left">
                        <DisplayBoard class="board" />
                        <DisplayPie class="left-box" />
                        <DisplayLine class="left-box" />
                    </div>
                    <div class="main-center">
                        <DisplayMap class="map" />
                        <DisplayLines class="lines" />
                    </div>
                    <div class="main-right">
                        <DisplayTable :table-data="store.item" class="table" />
                        <DisplayTable :table-data="store.item" class="china-title" />
                        <DisplayTableTitle class="world-title" />
                        <DisplayTable :table-data="store.areaTree" class="table world" />
                    </div>
                </main>
                <footer>数据来源：网易，仅供学习使用、请勿商用</footer>
            </div>
        </div>
        
    </div>

</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import DisplayBoard from './visual/DisplayBoard.vue';
import DisplayPie from './visual/DisplayPie.vue';
import DisplayLine from './visual/DisplayLine.vue';
import DisplayMap from './visual/DisplayMap.vue';
import DisplayTable from './visual/DisplayTable.vue';
import DisplayLines from './visual/DisplayBar.vue';
import DisplayTableTitle from './visual/DisplayTableTitle.vue';
import { useStore } from '../store';

const store = useStore();
window.onresize = null;

onMounted(async() => {
    await store.getList();
})

onMounted(() => {
    //初始化自适应  ----在刚显示的时候就开始适配一次
    handleScreenAuto();
    //绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => handleScreenAuto();
})

//数据大屏自适应函数
const handleScreenAuto = (): void => {
    const designDraftWidth = 1920; //设计稿的宽度
    const designDraftHeight = 1080; //设计稿的高度

    //根据屏幕的变化适配的比例
    const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
        (document.documentElement.clientWidth / designDraftWidth) :
        (document.documentElement.clientHeight / designDraftHeight);

    //缩放比例
    (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
}
</script>

<style lang='scss' scoped>
.screen-wrapper {
    height: 100%;
    width: 100%;

    .screen {
        display: inline-block;
        width: 1920px;
        height: 1080px;
        transform-origin: 0 0;
        position: absolute;
        left: 50%;
        background: url(/bg.jpg) no-repeat center;
        background-size: cover;

        .screen-visual {

            header {
                width: 100%;
                height: 150px;

                .title {
                    color: #ffffff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .text {
                        margin-top: 30px;
                        white-space: nowrap;
                        font-size: 48px;
                        margin-bottom: 5px;
                    }

                    .time {
                        font-size: 20px;
                    }
                }
            }

            main {
                display: flex;
                height: 880px;

                div {
                    height: 100%;
                }

                .main-left {
                    width: 400px;

                    .board {
                        height: 220px;
                    }

                    .left-box {
                        height: 310px;
                        margin-top: 20px;
                    }
                }

                .main-center {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .map {
                        width: 100%;
                        height: 100%;
                        margin-bottom: 30px;
                    }

                    .lines {
                        width: 90%;
                        height: 240px;
                    }
                }

                .main-right {
                    position: relative;
                    width: 500px;

                    .table {
                        height: 432px;
                        overflow-y: auto;

                        &::-webkit-scrollbar {
                            display: none;
                        }
                    }

                    .china-title{
                        position: absolute;
                        top: 0;
                        height: 35px;
                        overflow: hidden;
                    }

                    .world-title {
                        position: absolute;
                        top: 50.9%;
                        height: 33px;
                        z-index: 999;
                    }

                    .world {
                        margin-top: 16px;
                    }
                }
            }

            footer{
                color: #fff;
                width: 100%;
                height: 50px;
                font-size: 18px;
                text-align: center;
                line-height: 50px;
            }
        }
    }
}
</style>