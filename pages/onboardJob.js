import { useState } from "react";
import Link from "next/link";

export default function Onboarding() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container-fluid px-md-5">
      <div className="row">
        <div className="col-lg-7">
          <h1 className="mb-2">Bienvenue parmi nous !</h1>
          <h3 className="mb-5">
            On commence par un petit interrogatoire ... 🕵🏻
          </h3>
          <div>
            <em className="mb-3 text-muted">spartiate ...</em>
            <h3 className="mb-4">Quel est votre métier ?</h3>
            <select
              class="form-select form-select-lg mb-5"
              aria-label=".form-select-lg example"
            >
              <option selected disabled>
                Ahou! Ahou!
              </option>
              <option value="1">Développeur Fullstack</option>
              <option value="2">Développeur Front</option>
              <option value="3">Développeur Back</option>
              <option value="4">Développeur Mobile</option>
              <option value="5">Devops</option>
              <option value="6">Data analyst</option>
            </select>
          </div>
          <div>
            <h3 className="mb-4">Quelle est votre expérience ?</h3>
            <div className="d-flex justify-content-between mb-3">
              <button
                type="button"
                className="btn btn-outline-primary rounded d-flex flex-column justify-content-center align-items-center p-4 w-25"
                data-bs-toggle="button"
                onClick={handleChange}
              >
                <strong>0-2 ans</strong>
                <em>Newbie</em>
              </button>
              <button
                type="button"
                className="btn btn-outline-primary rounded d-flex flex-column justify-content-center align-items-center p-4 w-25"
                data-bs-toggle="button"
                onClick={handleChange}
              >
                <strong>2-5 ans</strong>
                <em>Elementalist</em>
              </button>
              <button
                type="button"
                className="btn btn-outline-primary rounded d-flex flex-column justify-content-center align-items-center p-4 w-25"
                data-bs-toggle="button"
                onClick={handleChange}
              >
                <strong>5 ans et +</strong>
                <em>Mage Noir</em>
              </button>
            </div>
            <div className="text-end">
              <Link href="/onboardSkill">
                <button className="btn btn-primary"> Suivant</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-light d-none d-lg-block col-lg-5 vh-100"></div>
      </div>
    </div>
  );
}
