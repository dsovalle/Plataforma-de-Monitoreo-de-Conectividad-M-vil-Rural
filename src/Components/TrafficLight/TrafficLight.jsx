import { useContext } from "react";
import { FormIncidents } from "../../Context/FormIncidents";
import { useNavigate } from "react-router-dom";

export default function TrafficLight() {

    const {rsrpsign} = useContext(FormIncidents);
      const navigate = useNavigate();

  return (
    <>
    <div className="content-trafficlight">
      <figure className="circle circle1"><p>{rsrpsign <= -111 ? "Mala" : ""}</p></figure>
      <figure className="circle circle2"><p>{rsrpsign <= -81 && rsrpsign >= -110 ? "Regular" : ""}</p></figure>
      <figure className="circle circle3"><p>{rsrpsign >= -80 ? "Excelente" : ""}</p></figure>
    </div>
    <a className="button" href="" onClick={(e) => {
      e.preventDefault();
      navigate('/')
    }}>
      Nuevo Reporte
    </a>
    </>
  );
}