import { end } from "@popperjs/core";
import { useState, useRef, use } from "react";
import { useSelector } from "react-redux";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function LargeModalRegister() {
  const user = useSelector((state) => state.user.value);
  const schoolName = useRef(null);
  const degreeName = useRef(null);
  const fieldOfStudyName = useRef(null);
  const startDate = useRef(null);
  const endDate = useRef(null);
  const description = useRef(null);
  const result = useRef(null);

  const editFormation = (e) => {
    e.preventDefault();
    const data = {
      schoolName: schoolName.current.value,
      degreeName: degreeName.current.value,
      fieldOfStudyName: fieldOfStudyName.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value,
      description: description.current.value,
      result: result.current.value,
    };
    fetch(`${BACKEND_ADDRESS}/education/create/${user.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      className="modal fade"
      id="modalRegister"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ma formation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={editFormation}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="formation_name" className="form-label">
                  Nom de la formation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formation_name"
                  ref={schoolName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="degree" className="form-label">
                  Diplôme
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="degree"
                  ref={degreeName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="field_of_study" className="form-label">
                  Domaine d’études
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="field_of_study"
                  ref={fieldOfStudyName}
                />
              </div>
              <div className="d-flex gap-4">
                <div className="mb-3 flex-grow-1">
                  <label htmlFor="start_date" className="form-label">
                    Date de début
                  </label>
                  <input
                    type="month"
                    className="form-control"
                    id="start_date"
                    ref={startDate}
                  />
                </div>
                <div className="mb-3 flex-grow-1">
                  <label htmlFor="end_date" className="form-label">
                    Date de fin
                  </label>
                  <input
                    type="month"
                    className="form-control"
                    id="end_date"
                    ref={endDate}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="result" className="form-label">
                  Résultat obtenu
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="result"
                  ref={result}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descriptif
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  ref={description}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button type="submit" className="btn btn-primary">
                Enregistrer la formation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
