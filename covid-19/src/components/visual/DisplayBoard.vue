<template>
    <div class="box-left-card">
        <section>
            <div>较上日
                <span class="point-text">{{ store.chinaTotal.today?.input }}</span>
            </div>
            <div>{{ store.chinaTotal.total?.input }}</div>
            <div>境外输入</div>
        </section>
        <section>
            <div>较上日
                <span class="point-text">{{ store.chinaTotal.extData?.incrNoSymptom || "待公布" }}</span>
            </div>
            <div>{{ store.chinaTotal.extData?.noSymptom }}</div>
            <div>无症状感染者</div>
        </section>
        <section>
            <div>较上日
                <span class="point-text">{{ store.chinaDayList.today?.confirm }}</span>
            </div>
            <div>{{ store.chinaDayList.total?.storeConfirm }}</div>
            <div>现有确诊</div>
        </section>
        <section>
            <div>较上日
                <span class="point-text">{{ store.chinaTotal.today?.confirm }}</span>
            </div>
            <div>{{ store.chinaTotal.total?.confirm }}</div>
            <div>累计确诊</div>
        </section>
        <section>
            <div>较上日
                <span class="point-text">{{ store.chinaTotal.today?.dead }}</span>
            </div>
            <div>{{ store.chinaTotal.total?.dead }}</div>
            <div>累计死亡</div>
        </section>
        <section>
            <div>较上日
                <span class="point-text">{{ store.chinaTotal.today?.heal }}</span>
            </div>
            <div>{{ store.chinaTotal.total?.heal }}</div>
            <div>累计治愈</div>
        </section>
    </div>
</template>

<script lang='ts' setup>
import { useStore } from '../../store';
import { onMounted } from 'vue';

onMounted(async () => {
    await store.getList();
})

const store = useStore();
</script>

<style lang='scss' scoped>
.box-left-card {
    color: #fff;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;

    section {
        background: #223651;
        border: 1px solid #212028;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div:nth-child(2) {
            color: #41b0db;
            padding: 10px 0;
            font-size: 20px;
            font-weight: bold;
        }

        .point-text {
            color: rgb(232, 109, 72);
        }
    }
}
</style>