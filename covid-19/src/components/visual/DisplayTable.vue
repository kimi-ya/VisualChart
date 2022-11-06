<template>
    <div class="box-right">
        <table class="table" cellspacing="0" border="1">
            <thead>
                <tr>
                    <th>地区</th>
                    <!-- <th>更新时间</th> -->
                    <th>新增确诊</th>
                    <th>累计确诊</th>
                    <th>治愈</th>
                    <th>死亡</th>
                </tr>
            </thead>
            <TransitionGroup enter-active-class="animate__animated animate__flipInY" tag="tbody" class="content">
                <tr v-for="item in tableData" :key="item.id" >
                    <td  class="datas" align="center">{{ item?.name }}</td>
                    <!-- <td align="center">{{ item.lastUpdateTime }}</td> -->
                    <td align="center">{{ item.today?.confirm }}</td>
                    <td align="center">{{ item.total?.confirm }}</td>
                    <td align="center">{{ item.total?.heal }}</td>
                    <td align="center">{{ item.total?.dead }}</td>
                </tr>
            </TransitionGroup>
        </table>
    </div>
</template>

<script lang='ts' setup>
import 'animate.css';

const props = defineProps<{ tableData: any[] }>();
</script>

<style lang='scss' scoped>
.box-right {
    color: #fff;

    .table {
        background: #223651;
        border-color: #273345;

        tr {
            th {
                padding: 5px;
                white-space: nowrap;
            }

            td {
                padding: 5px 5px;
                width: 100px;
                white-space: nowrap;
            }
        }
    }
}
</style>