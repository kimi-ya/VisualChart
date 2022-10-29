<template>
    <div id="pie" class="box-left-pie"></div>
</template>

<script lang='ts' setup>
import { useStore } from '../../store';
import { onMounted } from 'vue';
import * as echarts from 'echarts';

const store = useStore()

onMounted(async () => {
    await store.getList()
    initPie()
})

const initPie = () => {
    // 获取dom插入饼图
    const charts = echarts.init(document.querySelector('.box-left-pie') as HTMLElement)

    charts.setOption({
        backgroundColor: '#223651',
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                itemStyle: {
                    borderRadius: 4,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: true,
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                    }
                },
                data: store.cityDetail.map(v => {
                    return {
                        name: v.name,
                        value: v.today.confirm
                    }
                })
            }
        ]
    })
}
</script>

<style lang='scss' scoped>
.box-left-pie {
    height: 320px;
    margin-top: 20px;
}
</style>