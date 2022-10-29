export interface TodayTotal {
	confirm: number;
	dead: number;
	heal: number;
	input: number;
	severe?: any;
	suspect?: any;
	storeConfirm: number;
}

export interface TotalTotal {
	confirm: number;
	dead: number;
	heal: number;
	input: number;
	severe: number;
	suspect: number;
}

export interface ExtDataTotal {
	noSymptom: number;
    incrNoSymptom:number;
}

export interface ChinaTotal {
	today: TodayTotal;
	total: TotalTotal;
	extData: ExtDataTotal;
}

export interface TodayDayList {
	confirm: number;
	dead: number;
	heal: number;
	input: number;
	severe?: any;
	suspect: number;
	storeConfirm: number;
}

export interface TotalDayList {
	confirm: number;
	dead: number;
	heal: number;
	input: number;
	severe?: any;
	storeConfirm: number;
	suspect: number;
}

export interface ChinaDayList {
	date: string;
	today: TodayDayList;
	total: TotalDayList;
	extData?: any;
	lastUpdateTime?: any;
}

export interface Today {
	confirm: number;
	dead: number;
	heal: number;
    input: number;
	severe?: any;
	storeConfirm: number;
	suspect?: any;
}

export interface Total {
	confirm: number;
	dead: number;
	heal: number;
	input: number;
	severe: number;
	suspect: number;
}

export interface ExtData {
    incrNoSymptom:number;
    noSymptom:number;
}

export interface AreaTree {
	children: any[];
    extData: ExtData;
	id: string;
	lastUpdateTime: string;
	name: string;
	today: Today;
    total: Total;
}

export interface Data {
	chinaTotal: ChinaTotal;
	chinaDayList: ChinaDayList[];
	lastUpdateTime: string;
	overseaLastUpdateTime: string;
	areaTree: AreaTree[];
}

export interface RootObject {
	reqId: number;
	code: number;
	msg: string;
	data: Data;
	timestamp: number;
}