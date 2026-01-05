import "./Dashboard.css";
import NumberIncidents from "../CountIncidents/NumberIncidents";
import TrafficLight from "../TrafficLight/TrafficLight";
import CustomizeLegendAndTooltipStyle from "../Graphs/CustomizeLegendAndTooltipStyle";
import IndexLineChart from "../Graphs/IndexLineChart";

export default function Dashboard() {
  return (
    <div className="content">
      <NumberIncidents />
      <TrafficLight />
      <CustomizeLegendAndTooltipStyle />
      <IndexLineChart />
    </div>
  );
}
