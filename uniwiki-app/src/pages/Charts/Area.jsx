import React from "react";

// Importando miscelanea para gráficos, desde syncfusion
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

// Importando componentes
import { ChartsHeader } from "../../components";

// Importando datos
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/charts/areachart";

// Importando funcionalidad en contexto
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        category="2000 - 2020"
        title="Estudiantes, por sexo, matriculados en IES colombianas"
      />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{ background: "white" }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <p>Extraído de SNIES</p>
    </div>
  );
};

export default Area;
