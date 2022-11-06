import { defineStore } from "pinia";
import { getApiList } from "../server";
import type { Data, AreaTree, ChinaTotal, ChinaDayList } from './type'

export const useStore = defineStore({
    id: 'counter',
    state: () => ({
        list: <Data>{},
        item: <AreaTree[]>[],
        chinaTotal: <ChinaTotal>{},
        chinaDayList: <ChinaDayList>{},
        cityDetail: <AreaTree[]>{},
        chinaMonthData: <ChinaDayList[]>{},
        areaTree: <AreaTree[]>[],
    }),
    actions: {
        async getList() {
            const result = await getApiList();
            this.list = result;
            this.item = this.list.areaTree[2].children[8].children;
            this.chinaDayList = this.list.chinaDayList[this.list.chinaDayList.length - 1];
            this.chinaTotal = this.list.chinaTotal;
            this.cityDetail = this.list.areaTree[2].children.slice(0, 10);
            this.chinaMonthData = this.list.chinaDayList.slice(-15);
            this.areaTree = this.list.areaTree;
        }
    }
})