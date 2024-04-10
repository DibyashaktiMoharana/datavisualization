import React, { useState } from "react";
import {
  GoogleChartEditor,
  GoogleChartWrapper,
  GoogleViz,
  Chart,
} from "react-google-charts";

export const data = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7],
];

export const options = {
    animation: {
        startup: true,
        duration: 1000,
        easing: 'out',
    },
    backgroundColor: '#f7f7f7',
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", minValue: 0, maxValue: 15 },
  vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
  legend: "none",
};

export function ChartEditor() {
  const [chartEditor, setChartEditor] = useState();
  const [chartWrapper, setChartWrapper] = useState();
  const [google, setGoogle] = useState();
  const onEditClick = () => {
    if (!chartWrapper || !google || !chartEditor) {
      return;
    }
  
    if (chartEditor && chartEditor.openDialog) {
      chartEditor.openDialog(chartWrapper);
    } else {
      console.error("chartEditor or openDialog method is not available.");
      return;
    }
  
    google.visualization.events.addListener(chartEditor, "ok", () => {
      const newChartWrapper = chartEditor.getChartWrapper();
  
      newChartWrapper.draw();
  
      const newChartOptions = newChartWrapper.getOptions();
      const newChartType = newChartWrapper.getChartType();
  
      console.log("Chart type changed to ", newChartType);
      console.log("Chart options changed to ", newChartOptions);
    });
  };
  

  return (
    <>
      <button onClick={onEditClick} className="Editchartbtn">Edit Chart</button>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        chartPackages={["corechart", "controls", "charteditor"]}
        getChartEditor={({ chartEditor, chartWrapper, google }) => {
          setChartEditor(chartEditor);
          setChartWrapper(chartWrapper);
          setGoogle(google);
        }}
      />
    </>
  );
}
