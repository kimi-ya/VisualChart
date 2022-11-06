<template>
    <div class="table-title">
        <table class="table" cellspacing="0" border="1">
            <thead>
                <tr>
                    <th>地区</th>
                    <th>新增确诊</th>
                    <th>累计确诊</th>
                    <th>治愈</th>
                    <th>死亡</th>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
.table-title {
    width: 100%;
    color: #fff;
    position: relative;

    .table {
        width: 100%;
        background: #223651;
        border-color: #273345;

        tr {
    
            th {
                padding: 5px;
                white-space: nowrap;

                &:nth-child(1) {
                    width: 160px;
                }
                &:nth-child(2) {
                    width: 60px;
                }
                &:nth-child(3) {
                    width: 75px;
                }
                &:nth-child(4) {
                    width: 75px;
                }
            }
        }
    }
}
</style>