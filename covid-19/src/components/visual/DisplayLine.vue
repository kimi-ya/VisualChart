<template>
    <div id="pie" class="box-left-line"></div>
</template>

<script lang='ts' setup>
import { useStore } from '../../store';
import { onMounted } from 'vue';
import * as echarts from 'echarts';
const store = useStore()

onMounted(async () => {
    await store.getList()
    initLine()
})

const initLine = () => {
    const charts = echarts.init(document.querySelector('.box-left-line') as HTMLElement)
    charts.setOption({
        backgroundColor: '#223651',
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: store.cityDetail.map(v => v.name),
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                formatter: function (value:any, index:any) {
                    // value大于1000时除以1000并拼接k，小于1000按原格式显示
                    if (value >= 1000) {
                        value = value / 1000 + 'k';
                    } else if (value < 1000) {
                        value;
                    }
                    return value;
                },
            },
        },
        label: {
            show: true
        },
        series: [
            {
                data: store.cityDetail.map(v => v.today.confirm),
                type: 'line',
                smooth: true
            }
        ]
    })
}
</script>

<style lang='scss' scoped>
.box-left-line {
    height: 320px;
    margin-top: 20px;
}
</style>