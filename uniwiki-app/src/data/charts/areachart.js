import React from "react";

// llamando desde area.jsx
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

// llamando desde area.jsx
export const areaPrimaryYAxis = {
  labelFormat: '{value}',
  lineStyle: { width: 0 },
  maximum: 1400000,
  interval: 200000,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },
};

// ¿area.jsx? no se etá usando (no hay componente)
const areaChartData = [
  [
    // Datos Mujeres
    { x: new Date(2000, 0, 1), y: 581288 },
    { x: new Date(2001, 0, 1), y: 597299 },
    { x: new Date(2002, 0, 1), y: 583426 },
    { x: new Date(2003, 0, 1), y: 565217 },
    { x: new Date(2004, 0, 1), y: 558059 },
    { x: new Date(2005, 0, 1), y: 581023 },
    { x: new Date(2006, 0, 1), y: 601744 },
    { x: new Date(2007, 0, 1), y: 616345 },
    { x: new Date(2008, 0, 1), y: 668758 },
    { x: new Date(2009, 0, 1), y: 691889 },
    { x: new Date(2010, 0, 1), y: 747125 },
    { x: new Date(2011, 0, 1), y: 835935 },
    { x: new Date(2012, 0, 1), y: 872919 },
    { x: new Date(2013, 0, 1), y: 1002980 },
    { x: new Date(2014, 0, 1), y: 1059520 },
    { x: new Date(2015, 0, 1), y: 1134238 },
    { x: new Date(2016, 0, 1), y: 1266120 },
    { x: new Date(2017, 0, 1), y: 1294554 },
    { x: new Date(2018, 0, 1), y: 1292480 },
    { x: new Date(2019, 0, 1), y: 1262509 },
    { x: new Date(2020, 0, 1), y: 1247839 },
    { x: new Date(2021, 0, 1), y: 1307376 },
  ],
  [
    // Datos Hombres
    { x: new Date(2000, 0, 1), y: 342276 },
    { x: new Date(2001, 0, 1), y: 370888 },
    { x: new Date(2002, 0, 1), y: 416772 },
    { x: new Date(2003, 0, 1), y: 483302 },
    { x: new Date(2004, 0, 1), y: 565705 },
    { x: new Date(2005, 0, 1), y: 593509 },
    { x: new Date(2006, 0, 1), y: 659142 },
    { x: new Date(2007, 0, 1), y: 743483 },
    { x: new Date(2008, 0, 1), y: 775787 },
    { x: new Date(2009, 0, 1), y: 878558 },
    { x: new Date(2010, 0, 1), y: 927295 },
    { x: new Date(2011, 0, 1), y: 983369 },
    { x: new Date(2012, 0, 1), y: 1004459 },
    { x: new Date(2013, 0, 1), y: 1106244 },
    { x: new Date(2014, 0, 1), y: 1134949 },
    { x: new Date(2015, 0, 1), y: 1147756 },
    { x: new Date(2016, 0, 1), y: 1128314 },
    { x: new Date(2017, 0, 1), y: 1151760 },
    { x: new Date(2018, 0, 1), y: 1147887 },
    { x: new Date(2019, 0, 1), y: 1133741 },
    { x: new Date(2020, 0, 1), y: 1107764 },
    { x: new Date(2021, 0, 1), y: 1140895 },
  ],  
];

// llamando dese area jsx
export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Mujeres',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },  
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Hombres',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];