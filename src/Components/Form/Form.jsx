import React, { useContext } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { FormIncidents } from "../../Context/FormIncidents";

function Form() {
  const { numberIncident, setNumberIncident, setRsrpSign, setRsrpDate1, setRsrpDate2, 
    setRsrpDate3, setRsrpDate4, setRsrpDate5, setRsrpDate6
   } = useContext(FormIncidents);
  const navigate = useNavigate();

  return (
    <div className="background-form">
      <section className="content-form">
        <label htmlFor="">Fecha del evento:</label>
        <input type="date" />

        <label htmlFor="">Incidencias (día):</label>
        <input type="number" onChange={(e) => {
          setNumberIncident(parseInt(e.target.value) + numberIncident)
        }} />

        <label htmlFor="">Señal Actual (día):</label>
        <input type="number" onChange={(e) => {
          setRsrpSign(e.target.value);
        }} />

        <label htmlFor="">Datos de señal cada 5 minutos</label>
        <input type="number" onChange={(e) => {
          setRsrpDate1(e.target.value)
        }} />
        <input type="number" onChange={(e) => {
          setRsrpDate2(e.target.value)
        }} /><input type="number" onChange={(e) => {
          setRsrpDate3(e.target.value)
        }} /><input type="number" onChange={(e) => {
          setRsrpDate4(e.target.value)
        }} /><input type="number" onChange={(e) => {
          setRsrpDate5(e.target.value)
        }} />
        <input type="number" onChange={(e) => {
          setRsrpDate6(e.target.value)
        }} />

        <label htmlFor=""></label>
        <a
        href=""
          className="submit"
          onClick={(e) => {
            e.preventDefault(); 
            navigate("/dashboard");
          }}
        >
          ENVIAR
        </a>
      </section>
    </div>
  );
}

export default Form;
