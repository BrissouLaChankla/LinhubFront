import FormUpdateExperience from "../forms/FormUpdateExperience";
import { useEffect, useState } from "react";

export default function LargeModalUpdateExperience(props) {
  const [experienceId, setExperienceId] = useState(undefined);

  useEffect(
    () => setExperienceId(props.experience._id),
    [props.experience._id]
  );

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
              Editer : {props.experience.company}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {experienceId && <FormUpdateExperience id={experienceId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
