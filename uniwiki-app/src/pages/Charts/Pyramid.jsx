import React from "react";

// Importando miscelanea para gráficos, desde syncfusion
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

// Importando datos
import { PyramidData } from "../../data/charts/pyramidchart";

// Importando componentes
import { ChartsHeader } from "../../components";

// Importando funcionalidad en contexto
import { useStateContext } from "../../contexts/ContextProvider";

const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        category="2021"
        title="Clasificación Internacional Normalizada de la Educación"
      />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: "white" }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              // FIXME ¿cuál es el título?
              name="Matriculados"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
      <span>Total de matriculados: 2.448.271</span>
      <p>Extraido de SNIES</p>
    </div>
  );
};

export default Pyramid;
