import React from "react";

// Valores eje x
export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  // BUG interval: 1, COLLAPSA GRÁFICO
  labelFormat: 'y',
  intervalType: 'Years',    
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',      
};

// Valores eje y
export const LinePrimaryYAxis = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 0,
  maximum: 1400000,
  interval: 200000,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// datos de line chart ¿no se está llamando?
export const lineChartData = [
  [
    // TODO públicas: formato correcto de datos
    { x: new Date(2000, 0, 1), y: 342276 },
    { x: new Date(2001, 0, 1), y: 370888 },
    { x: new Date(2002, 0, 1), y: 416722 },
    { x: new Date(2003, 0, 1), y: 483302 },
    { x: new Date(2004, 0, 1), y: 565705 },
    { x: new Date(2005, 0, 1), y: 593509 },
    { x: new Date(2006, 0, 1), y: 659142 },
    { x: new Date(2007, 0, 1), y: 743483 },
    { x: new Date(2008, 0, 1), y: 775787 },
    { x: new Date(2009, 0, 1), y: 878558 },
    { x: new Date(2010, 0, 1), y: 927295 },
    { x: new Date(2011, 0, 1), y: 983369 },
    { x: new Date(2012, 0, 1), y: 1004459},
    { x: new Date(2013, 0, 1), y: 1106244 },
    { x: new Date(2014, 0, 1), y: 1134949 },
    { x: new Date(2015, 0, 1), y: 1147756 },
    { x: new Date(2016, 0, 1), y: 1194697 },
    { x: new Date(2017, 0, 1), y: 1241790 },
    { x: new Date(2018, 0, 1), y: 1242482 },
    { x: new Date(2019, 0, 1), y: 1218130 },
    { x: new Date(2020, 0, 1), y: 1203895 },
    { x: new Date(2021, 0, 1), y: 1334174 },
  ],
  [
    // privadas 
    { x: new Date(2000, 0, 1), y: 581228 },
    { x: new Date(2001, 0, 1), y: 597299 },
    { x: new Date(2002, 0, 1), y: 583426},
    { x: new Date(2003, 0, 1), y: 565217},
    { x: new Date(2004, 0, 1), y: 558059},
    { x: new Date(2005, 0, 1), y: 581023},
    { x: new Date(2006, 0, 1), y: 601744},
    { x: new Date(2007, 0, 1), y: 616345},
    { x: new Date(2008, 0, 1), y: 668758},
    { x: new Date(2009, 0, 1), y: 691889},
    { x: new Date(2010, 0, 1), y: 747125},
    { x: new Date(2011, 0, 1), y: 835935},
    { x: new Date(2012, 0, 1), y: 872919},
    { x: new Date(2013, 0, 1), y: 1002980},
    { x: new Date(2014, 0, 1), y: 1059520},
    { x: new Date(2015, 0, 1), y: 1134238},
    { x: new Date(2016, 0, 1), y: 1199737},
    { x: new Date(2017, 0, 1), y: 1204524},
    { x: new Date(2018, 0, 1), y: 1197885},
    { x: new Date(2019, 0, 1), y: 1178120},
    { x: new Date(2020, 0, 1), y: 1151708},
    { x: new Date(2021, 0, 1), y: 1114097},
  ],
 
];

// llamando desde  linechartjsx
export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'IES públicas',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'IES privadas',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },
];
