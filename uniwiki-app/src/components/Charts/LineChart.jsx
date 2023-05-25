import React from 'react';

// Importando miscelanea para gráficos, desde syncfusion
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject, 
  LineSeries, 
  DateTime, 
  Legend, 
  Tooltip 
} from '@syncfusion/ej2-react-charts';

// Importando datos
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/charts/linechart';

// Importando funcionalidad en contexto
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>        
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
