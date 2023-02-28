import LargeModalRegister from "@/components/admin/largeModalRegister";
import LargeModalUpdate from "@/components/admin/largeModalUpdate";
import { useEffect } from "react";

export default function Formation() {
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
