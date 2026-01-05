import { useContext } from "react";
import { CartesianGrid, Bar, BarChart, Legend, Tooltip, XAxis, YAxis} from "recharts";
import { FormIncidents } from "../../Context/FormIncidents";

// Graph second-faillightdata
export default function CustomizeLegendAndTooltipStyle() {

    const {numberIncident} = useContext(FormIncidents);
  
    //Incidents every month
    const IncidentsMonths2 = 0;
    const IncidentsMonths3 = 0;
    const IncidentsMonths4 = 0;
    const IncidentsMonths5 = 0;
    const IncidentsMonths6 = 0;



  const datagraph2 = [
  {
    name: "Ene",
    Month: numberIncident,
    pv: 100,
    amt: 2400,
  },
  {
    name: "Feb",
    Month: IncidentsMonths2,
    pv: 100,
    amt: 2400,
  },
  {
    name: "Mar",
    Month: IncidentsMonths3,
    pv: 100,
    amt: 2400,
  },
  {
    name: "Abr",
    Month: IncidentsMonths4,
    pv: 100,
    amt: 2400,
  },
  {
    name: "May",
    Month: IncidentsMonths5,
    pv: 100,
    amt: 2400,
  },
  {
    name: "Jun",
    Month: IncidentsMonths6,
    pv: 100,
    amt: 2400,
  },
];
  
  const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 0,
  };
  
  return (
    <BarChart height={450}  data={datagraph2} margin={margin}
    style={{
      width: "100%",
      maxWidth: 1000,
    }}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc",}} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 18,
          right: 20,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="Month" fill="#8884d8" barSize={30} />
    </BarChart>
  );
}
