import ProjectFormUpdate from "../forms/ProjectFormUpdate";
import { useEffect, useState } from "react";

export default function LargeModalUpdateProject(props) {
  const [projectId, setProjectId] = useState(undefined);

  useEffect(() => setProjectId(props.projets._id), [props.projets._id]);

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
              Editer : {props.projets.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {projectId && <ProjectFormUpdate id={projectId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
