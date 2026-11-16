import videoDemo from '@/assets/img/videoDemo.mp4'
export const cameras = [
  { id: 1, name: '星关广场云台', src: videoDemo },
  { id: 2, name: '星关广场云台', src: videoDemo },
  { id: 3, name: '星关广场云台', src: videoDemo },
]
export const personcatogray = [
  { name: '业主人数', num: 2318 },
  { name: '访客人数', num: 880 },
  { name: '业主人数', num: 174 },
]
export const indicators = [
  { name: '室内空气', value: 32 },
  { name: '室内湿度', value: 53.685 },
]
export const energyData = [
  { name: '本月总能耗 (单位:kw.h)', value: 11787 },
  { name: '本年总能耗 (单位:kw.h)', value: 210688 },
  { name: '本日总负荷 (单位:kw.h)', value: 73779 },
  { name: '本年平均能耗 (单位:kw.h)', value: 10127 },
  { name: '本日总电费 (单位:元)', value: 5646 },
  { name: '本年总电费 (单位:元)', value: 203231 },
]
export const alarmList = [
  {
    cameraId: 1,
    location: '大西门云台',
    time: '07:12:18',
    status: 'pending',
  },
  {
    cameraId: 2,
    location: 'A楼南侧',
    time: '07:13:12',
    status: 'processing',
  },
  {
    cameraId: 3,
    location: 'T9北侧',
    time: '08:12:18',
    status: 'resolved',
  },
  {
    cameraId: 4,
    location: '大西门云台',
    time: '07:12:18',
    status: 'pending',
  },
  {
    cameraId: 5,
    location: 'A楼南侧',
    time: '07:13:12',
    status: 'processing',
  },
  {
    cameraId: 6,
    location: 'T9北侧',
    time: '08:12:18',
    status: 'resolved',
  },
  {
    cameraId: 7,
    location: '大西门云台',
    time: '09:12:18',
    status: 'pending',
  },
  {
    cameraId: 8,
    location: '大西门云台',
    time: '09:12:18',
    status: 'pending',
  },
  {
    cameraId: 9,
    location: '大西门云台',
    time: '09:12:18',
    status: 'pending',
  },
  {
    cameraId: 10,
    location: '大西门云台',
    time: '09:12:18',
    status: 'pending',
  },
]
export const chartData = [
  { date: '6-27', value: 20 },
  { date: '6-27', value: 27 },
  { date: '6-27', value: 40 },
  { date: '6-27', value: 34 },
  { date: '6-27', value: 67 },
  { date: '6-27', value: 55 },
  { date: '6-27', value: 43 },
  { date: '6-27', value: 32 },
  { date: '6-27', value: 10 },
]
export const units = [
  {
    id: 1,
    station: '1#冷站',
    name: '1#主机',
    enabled: true,
    status: 'running',
    temperatures: [
      { name: '蒸发器', outlet: -310, inlet:350 },
      { name: '冷凝器', outlet: -110, inlet: 150},
    ],
  },
  {
    id: 2,
    station: '1#冷站',
    name: '2#主机',
    enabled: true,
    status: 'standby',
    temperatures: [
      { name: '蒸发器', outlet: -300, inlet:310 },
      { name: '冷凝器', outlet: -110, inlet: 140},
    ],
  },
  {
    id: 3,
    station: '2#冷站',
    name: '1#主机',
    enabled: false,
    status: 'stopped',
    temperatures: [
      { name: '蒸发器', outlet: -300, inlet: 300 },
      { name: '冷凝器', outlet: -120, inlet: 120 },
    ],
  },
  {
    id: 4,
    station: '2#冷站',
    name: '2#主机',
    enabled: true,
    status: 'running',
    temperatures: [
      { name: '蒸发器', outlet: -310, inlet:320 },
      { name: '冷凝器', outlet: -110, inlet: 110},
    ],
  },
]
export const overtimevistor=[
      { date: '6-21', count: 8 },
      { date: '6-22', count: 50 },
      { date: '6-23', count: 200 },
      { date: '6-24', count: 335 },
      { date: '6-25', count: 390 },
      { date: '6-26', count: 330 },
      { date: '6-27', count: 220 },
    ]
  
export const ownerCare=[
      {
        name: '长期空置',
        value: 5,
        color: '#7059f5',
      },
      {
        name: '长期未外出',
        value: 20,
        color: '#53dfce',
      },
      {
        name: '小孩独自出门超时',
        value: 30,
        color: '#ae56df',
      },
      {
        name: '老人独自出门超时',
        value: 45,
        color: '#a3e66b',
      },
    ]
   export const alarmData = [
  { date: '6-27', value: 20 },
  { date: '6-27', value: 27 },
  { date: '6-27', value: 40 },
  { date: '6-27', value: 34 },
  { date: '6-27', value: 67 },
  { date: '6-27', value: 55 },
  { date: '6-27', value: 43 },
  { date: '6-27', value: 33 },
  { date: '6-27', value: 11 },
]
export const  cameraData = [
  { name: '人脸识别摄像头', num: 8},
  { name: '可控制摄像头', num: 20 },
  { name: '故障摄像头', num: 2 },
]
export const cameraOver = [
  { name: '人脸识别区域', value: 32 },
  { name: '可控摄像头区域', value: 53.685 },
]
export const heatPumpUnits = [
  {
    id: 1,
    title: '1#天棚热泵主机',
    power: 185.6,
    electricity: 198520.4,
    mode: 'heating',
    running: true,
    c1Auto: true,
    c2Auto: true,
  },
  {
    id: 2,
    title: '2#天棚热泵主机',
    power: 196.3,
    electricity: 215630.8,
    mode: 'cooling',
    running: true,
    c1Auto: true,
    c2Auto: false,
  },
  {
    id: 3,
    title: '3#天棚热泵主机',
    power: 0,
    electricity: 236780.5,
    mode: 'stopped',
    running: false,
    c1Auto: false,
    c2Auto: false,
  },
  {
    id: 4,
    title: '4#天棚热泵主机',
    power: 211.8,
    electricity: 272322.2,
    mode: 'heating',
    running: true,
    c1Auto: true,
    c2Auto: true,
  },
]
export const operationData = [
  {
    id: 1,
    name: '天棚主机',
    electricity: 10462.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
  {
    id: 2,
    name: '天棚水泵',
    electricity: 2345.7,
    electricityCost: 5230.3,
    load: 12.8,
    averageEnergy: 23.3,
  },
  {
    id: 3,
    name: '新风主机',
    electricity: 3344.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
  {
    id: 4,
    name: '天棚水泵',
    electricity: 2354.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
  {
    id: 5,
    name: '天棚主机',
    electricity: 13455.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
  {
    id: 6,
    name: '天棚主机',
    electricity: 3422.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
  {
    id: 7,
    name: '天棚主机',
    electricity: 3422.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
  {
    id: 8,
    name: '天棚主机',
    electricity: 3422.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
  {
    id: 9,
    name: '天棚主机',
    electricity: 3422.7,
    electricityCost: 5620.3,
    load: 1.8,
    averageEnergy: 2.3,
  },
]
export  const energylabel = [
  { name: '总负荷', value: 32 },
  { name: '总能耗', value: 53.685 },
]
export const systemCost=[
      { date: '6-21', count: 8 },
      { date: '6-22', count: 50 },
      { date: '6-23', count: 200 },
      { date: '6-24', count: 335 },
      { date: '6-25', count: 390 },
      { date: '6-26', count: 330 },
      { date: '6-27', count: 220 },
    ]
    export const unitCost=[
      { name: '天棚主机', value: 1000, color: '#5148ed' },
      { name: '天棚水泵', value: 1500, color: '#39c69a' },
      { name: '新风主机', value: 1800, color: '#51d2ce' },
      { name: '新风水泵', value: 2400, color: '#7356ff' },
      { name: '地源水泵', value: 1800, color: '#38afe5' },
      { name: '冷却水泵', value: 1500, color: '#c900f5' },
    ]