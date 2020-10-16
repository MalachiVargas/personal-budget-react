import React from "react";
import { Pie } from "react-chartjs-2";

function ChartOne(props) {
  const dataSource = {
    datasets: [
      {
        data: props.budget,
        backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#fd6b19",
          "#ed6b19",
          "#cd6b19",
          "#bd6b19",
        ],
      },
    ],
    labels: props.title,
  };

  return (
    <div className='text-box'>
      <h3>ChartJS</h3>
      <Pie
        data={dataSource}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}

export default ChartOne;
