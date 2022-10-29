<template>
    <div class="center">
        <div class="title">
            <div class="text">新冠疫情最新数据展示</div>
            <div class="time">截止时间 {{ store.list.lastUpdateTime }}</div>
        </div>
        <div id="china" class="box-center"></div>
    </div>
</template>

<script lang='ts' setup>
import { useStore } from '../.././store';
import { onMounted } from 'vue';
import * as echarts from 'echarts'; //echarts5 导入方式
import '../.././assets/china';
import { geoCoordMap } from '../.././assets/geoMap';

const store = useStore()

onMounted(async () => {
    await store.getList()
    initCharts()
})

const initCharts = () => {
    const city = store.list.areaTree[2].children

    const data = city.map(v => {
        return {
            name: v.name, //省市
            value: geoCoordMap[v.name].concat(v.today.confirm), //经纬度
            children: v.children
        }
    })

    // 获取dom插入地图
    const charts = echarts.init(document.querySelector('#china') as HTMLElement)

    charts.setOption(
        {
            geo: {
                map: "china",
                aspectScale: 0.8,
                layoutCenter: ["50%", "50%"],
                layoutSize: "120%",
                itemStyle: {
                    areaColor: {
                        type: "linear-gradient",
                        x: 0,
                        y: 1200,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#152E6E", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#0673AD", // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                    shadowColor: "#0f5d9d",
                    shadowOffsetX: 0,
                    shadowOffsetY: 15,
                    opacity: 0.5,
                },
                emphasis: {
                    areaColor: "#0f5d9d",
                },

                regions: [
                    {
                        name: "南海诸岛",
                        itemStyle: {
                            areaColor: "rgba(0, 10, 52, 1)",
                            borderColor: "rgba(0, 10, 52, 1)",
                            opacity: 0,
                            label: {
                                show: false,
                                color: "#009cc9",
                            },
                        },
                        label: {
                            show: false,
                            color: "#FFFFFF",
                            fontSize: 12,
                        },
                    },
                ],
            },
            series: [
                {
                    type: "map",
                    selectedMode: "multiple",
                    map: "china",
                    aspectScale: 0.8,
                    layoutCenter: ["50%", "50%"], //地图位置
                    layoutSize: "120%",
                    zoom: 1, //当前视角的缩放比例
                    // roam: true, //是否开启平游或缩放
                    scaleLimit: {
                        //滚轮缩放的极限控制
                        min: 1,
                        max: 2,
                    },
                    label: {
                        show: true,
                        color: "#FFFFFF",
                        fontSize: 12,
                    },
                    itemStyle: {
                        areaColor: "#0c3653",
                        borderColor: "#1cccff",
                        borderWidth: 1.8,
                    },
                    emphasis: {
                        areaColor: "#56b1da",
                        label: {
                            show: true,
                            color: "#fff",
                        },
                    },
                    data: data,
                },
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: [45, 45],
                    label: {
                        show: true,
                        color: "#fff",
                        formatter(value: any) {
                            return value.data.value[2]
                        }
                    },
                    itemStyle: {
                        color: '#D8BC37', //标志颜色
                    },
                    data: data,
                },
            ],
        }
    )

    charts.on('click', (e: any) => {
        store.item = e.data.children //右边表格展示数据
    })
}
</script>

<style lang='scss' scoped>
.center {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.box-center {
    flex: 1;
    margin-top: -60px;
}

.title {
    margin-top: 50px;
    height: 100px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
        white-space: nowrap;
        font-size: 48px;
        margin-bottom: 5px;
    }

    .time {
        font-size: 20px;
    }
}
</style>