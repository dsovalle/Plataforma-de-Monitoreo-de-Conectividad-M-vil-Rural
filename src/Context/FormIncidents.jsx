import { createContext, useState } from "react";

export const FormIncidents = createContext();

export function FormIncidentsProvider(props) {

  //Incidents in the day
  const [numberIncident, setNumberIncident] = useState(0);

  //Dates sign
  const [rsrpsign, setRsrpSign] = useState(0);

  //Datos sign every 5 minutes
  const [rsrpDate1, setRsrpDate1] = useState(0);
  const [rsrpDate2, setRsrpDate2] = useState(0);
  const [rsrpDate3, setRsrpDate3] = useState(0);
  const [rsrpDate4, setRsrpDate4] = useState(0);
  const [rsrpDate5, setRsrpDate5] = useState(0);
  const [rsrpDate6, setRsrpDate6] = useState(0);

  return (
      <FormIncidents.Provider value={{
        numberIncident,
        setNumberIncident,
        rsrpsign,
        setRsrpSign,
        rsrpDate1,
        setRsrpDate1,
        rsrpDate2,
        setRsrpDate2,
        rsrpDate3,
        setRsrpDate3,
        rsrpDate4,
        setRsrpDate4,
        rsrpDate5,
        setRsrpDate5,
        rsrpDate6,
        setRsrpDate6,
      }}>
        {props.children}
      </FormIncidents.Provider>
    )
};