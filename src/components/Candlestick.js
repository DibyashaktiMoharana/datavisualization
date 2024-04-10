import { Chart } from "react-google-charts";

export const data = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

export const options = {
  legend: "none",
  bar: { groupWidth: "60%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#4D8FF5" }, 
    risingColor: { strokeWidth: 0, fill: "#DF5547" }, 
  },
  animation: {
    startup: true,
    duration: 1000,
    easing: 'out',
},
backgroundColor: '#f7f7f7',
  
};

export function Candlestick() {
  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
