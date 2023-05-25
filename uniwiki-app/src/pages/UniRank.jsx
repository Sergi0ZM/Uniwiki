import React from "react";

// Importando miscelanea de tablas desde syncfusion
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Filter,
} from "@syncfusion/ej2-react-grids";

// Importando datos
import { uniRankData, uniRankGrid } from "../data/unirank";

// importando componentes
import { Header } from "../components";

// Funcionalidaddes adicionales para tabla 
const UniRank = () => {
  const toolbarOptions = ["Search"];

  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowFiltering: true,
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header
        category="UniRank"
        title="Ranking de las Mejores Universidades de Colombia"
      />
      <GridComponent
        dataSource={uniRankData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {uniRankGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* BUG la barra ed búsqueda no sirve! */}
        <Inject services={[Search, Page, Filter]} />
      </GridComponent>
      <div className="p-8">
        <p>
          El Ranking universitario es la clasificación de las mejores
          universidades colombianas según indicadores de investigación. Se
          publica cada semestre desde 2011-1, y las variables que se analizan
          son tres: revistas indexadas (Rev), maestrías y doctorados (Pos), y
          grupos de investigación (Grp), tal como se explican en la metodología.
          En la versión 2022-2 clasificaron 71 IES (en 2017-2 llegaron a estar
          102). Un total de 52 IES permanecieron en el mismo puesto; 8 que
          subieron; y 11 que bajaron. Clasificaron 44 IES del sector privado y
          27 del público. El puntaje acumulado total de 2022-2 fue de 1.597 (el
          de 2022-1 fue de 1.577). En el reporte 2022-2 se resumen los
          principales resultados.
        </p>
      </div>
    </div>
  );
};
export default UniRank;
