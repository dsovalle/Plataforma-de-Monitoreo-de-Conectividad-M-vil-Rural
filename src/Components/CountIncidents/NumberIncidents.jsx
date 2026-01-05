import { useContext } from "react";
import { FormIncidents } from "../../Context/FormIncidents";

export default function NumberIncidents() {
  const {numberIncident} = useContext(FormIncidents);

  return (
    <>
      <div className="content-incident">
        <figure className="fig1"></figure>
        <figure className="fig2">{numberIncident}</figure>
        <article></article>
      </div>
    </>
  );
}
