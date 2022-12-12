import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart({ dataPoints }) {
  const dataPointValue = dataPoints.map((ex) => ex.value);
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {dataPoints.map((ex) => (
        <ChartBar
          key={ex.label}
          value={ex.value}
          maxValue={totalMaximum}
          label={ex.label}
        />
      ))}
    </div>
  );
}

export default Chart;
