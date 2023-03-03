import FormationFormUpdate from "../forms/FormationFormUpdate";
import { useEffect, useState } from "react";

export default function LargeModalUpdate(props) {
  const [formationId, setFormationId] = useState(undefined);

  useEffect(() => setFormationId(props.formation._id), [props.formation._id]);

  return (
    <div
      className="modal fade"
      id="modalUpdate"
      tabIndex="-1"
      aria-labelledby="modalUpdate"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Editer : {props.formation.schoolName}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {formationId && <FormationFormUpdate id={formationId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
