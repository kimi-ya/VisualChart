<template>
    <div class="box-bar"></div>
</template>

<script lang='ts' setup>
import { useStore } from '../../store';
import { onMounted } from 'vue';
import * as echarts from 'echarts';

const store = useStore();

onMounted(async () => {
    await store.getList();
    initBar();
})

const initBar = () => {
    const charts = echarts.init(document.querySelector('.box-bar') as HTMLElement);
    charts.setOption({
        backgroundColor: '#223651',
        title: {
            text: '境外输入情况',
            x: 'center',
            y: '15px',
            textStyle: {
                color: '#fff',
                fontSize: 16,
            }
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: store.chinaMonthData.map(v => v.date),
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            },
            axisLabel: {
                formatter: function (value: any, index: any) {
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
        series: [
            {
                name: '新增境外输入',
                type: 'bar',
                smooth: true,
                data: store.chinaMonthData.map(v => v.today.input),
            }
        ]
    })
}
</script>

<style lang='scss' scoped>
</style>