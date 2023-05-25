import React from "react";

// BUG la estructura está invertida (import data en component y no en page)
// Importando componentes
import { ChartsHeader, LineChart } from "../../components";

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader
      category="2001 - 2021"
      title="Nro. de estudiantes matrículados en IES públicas y privadas"
    />
    <div className="w-full">
      <LineChart />
    </div>
    <p>Extraído de SNIES</p>
  </div>
);

export default Line;
