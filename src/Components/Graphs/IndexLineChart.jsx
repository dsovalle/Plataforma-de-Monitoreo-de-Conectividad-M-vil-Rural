import { useContext } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";
import { FormIncidents } from "../../Context/FormIncidents";

// Graph one- signdata
export default function IndexLineChart() {

  const {rsrpDate1, rsrpDate2, rsrpDate3, rsrpDate4, rsrpDate5, rsrpDate6} = useContext(FormIncidents);

const datagraph1 = [
  {
    name: "5",
    uv: -80,
    pv: rsrpDate1,
    amt: 2400,
  },
  {
    name: "10",
    uv: -84,
    pv: rsrpDate2,
    amt: 2400,
  },
  {
    name: "15",
    uv: -83,
    pv: rsrpDate3,
    amt: 2400,
  },
  {
    name: "20",
    uv: -85,
    pv: rsrpDate4,
    amt: 2400,
  },
  {
    name: "25",
    uv: -84,
    pv: rsrpDate5,
    amt: 2400,
  },
  {
    name: "30",
    uv: -83,
    pv: rsrpDate6,
    amt: 2400,
  },
];

  return (
    <LineChart
      style={{
        width: "95%",
        aspectRatio: 2.618,
        maxWidth: 800,
        margin: "auto",
      }}
      responsive
      data={datagraph1}
    >
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
}