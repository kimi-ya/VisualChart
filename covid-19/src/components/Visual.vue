<template>
    <div class="visual-box">
        <div style="color:white;" class="box-left">
            <DisplayBoard />
            <DisplayPie />
            <DisplayLine />
        </div>
        <DisplayMap />
        <DisplayTable />
    </div>
</template>
  
<script lang='ts' setup>
import DisplayBoard from './visual/DisplayBoard.vue'
import DisplayPie from './visual/DisplayPie.vue';
import DisplayLine from './visual/DisplayLine.vue'
import DisplayMap from './visual/DisplayMap.vue'
import DisplayTable from './visual/DisplayTable.vue'
</script>
  
<style lang='scss' scoped>
.visual-box {
    height: 100%;
    display: flex;
    overflow: hidden;
    background: url(/bg.jpg) no-repeat center;
    background-size: cover;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .box-left {
        width: 400px;
    }
}
</style>