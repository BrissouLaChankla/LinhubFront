import FormRegisterExperience from "../forms/FormRegisterExperience";

export default function LargeModalRegisterExperience() {
  return (
    <div
      className="modal fade"
      id="modalRegister"
      tabIndex="-1"
      aria-labelledby="modalRegister"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Mon expérience
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <FormRegisterExperience />
        </div>
      </div>
    </div>
  );
}
