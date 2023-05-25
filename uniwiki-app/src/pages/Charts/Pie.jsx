import React from "react";

// BUG la estructura está invertida (import data en component y no en page)
// Iportando datos
import { pieChartData, pieChartData2 } from "../../data/charts/piechart";

// importando componentes
import { ChartsHeader, Pie as PieChart } from "../../components";

const Pie = () => {
  const chartData = [
    { data: pieChartData, title: "Universidad Nacional de Colombia" },
    { data: pieChartData2, title: "Universidad Javeriana" },
  ];

  return (
    <div>
      {chartData.map((chart, index) => (
        <div
          key={index}
          className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
        >
          <ChartsHeader category="2022 - 2" title={chart.title} />
          <div className="w-full">
            <PieChart
              id={`chart-pie-${index}`}
              data={chart.data}
              legendVisiblity
              height="full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pie;
