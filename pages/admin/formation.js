import LargeModalRegister from "@/components/admin/largeModalRegister";
import LargeModalUpdate from "@/components/admin/largeModalUpdate";
import {
  loadFormation,
  addFormation,
  deleteFormation,
} from "@/reducers/formation";
import { useEffect } from "react";
import { useState, useRef } from "react";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function Formation() {
  // const handleNewFormation = () => {
  //   fetch(`${BACKEND_ADDRESS}/create/token`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       schoolName: req.body.schoolName,
  //       degreeName: req.body.degreeName,
  //       fieldOfStudyName: req.body.fieldOfStudyName,
  //       startDate: req.body.startDate,
  //       endDate: req.body.endDate,
  //       description: req.body.description,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.result) {
  //         dispatch(addFormation(token));
  //       }
  //     });
  // };

  const handleFormation = () => {
    fetch(`${BACKEND_ADDRESS}/token`)
      .then((response) => response.json())
      .then((data) => {
        data.result;
      });
  };

  const handleDelete = () => {
    fetch(`${BACKEND_ADDRESS}/education/${educationId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        data.result && dispatch(deleteFormation(educationId));
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div>
          <h1 className="text-primary mb-5 text-center">
            Toutes mes formations
          </h1>
        </div>
        <div>
          <button
            type="submit"
            className="btn mb-4 btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalRegister"
          >
            Ajouter une formation
          </button>
          {/* <button
            type="submit"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalUpdate"
          >
            Modifier une formation
          </button> */}
          <LargeModalRegister />
        </div>
        <div className="row justify-content-between ">
          <div
            className="col-12 col-lg-3 flex-fill card text-white bg-secondary mb-2 mx-2 btn  "
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#modalUpdate"
            // data-bs-trigger="#modalUpdate"
          >
            <div className="card-header ms-4">
              Ma formation
              <button
                type="button"
                className="btn-close btn-close-white float-end"
                aria-label="Close"
                onClick={() => handleDelete()}
              ></button>
            </div>
            <div className="card-body">
              <h5 className="card-title">La Capsule</h5>
            </div>
          </div>
          <LargeModalUpdate />
          <div
            className="col-12 col-lg-3 flex-fill card text-white bg-secondary mb-2 mx-2 btn "
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#modalUpdate"
          >
            <div className="card-header ms-4">
              Ma formation
              <button
                type="button"
                className="btn-close btn-close-white float-end"
                aria-label="Close"
                onClick={() => handleDelete()}
              ></button>
            </div>
            <div className="card-body">
              <h5 className="card-title">La Capsule</h5>
            </div>
          </div>
          <div
            className="col-12 col-lg-3 flex-fill card text-white bg-secondary mb-2 mx-2 btn "
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#modalUpdate"
          >
            <div className="card-header ms-4 ">
              Ma formation
              <button
                type="button"
                className="btn-close btn-close-white float-end "
                aria-label="Close"
                onClick={() => handleDelete()}
              ></button>
            </div>
            <div className="card-body">
              <h5 className="card-title">La Capsule</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
