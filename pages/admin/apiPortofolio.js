import LargeModalRegister from "@/components/admin/largeModalRegister";
import LargeModalUpdate from "@/components/admin/largeModalUpdate";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Eye } from "react-bootstrap-icons";
import Image from "next/image";
import noImage from "../../public/no_image.jpeg";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function ApiPortofolio() {
  const [tokenShown, setTokenShown] = useState(false);

  const toggleToken = () => {
    setTokenShown(!tokenShown);
  };

  return (
    <div className="container">
      <div>
        <h5>Votre token secret</h5>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="token"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            type={tokenShown ? "text" : "password"}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleToken}
          >
            <a className="d-block btn-outline-primary">
              <Eye className="fs-4" />
            </a>
          </button>
        </div>
      </div>
      <div className="col-12 flex-fill col-lg-6 col-md-12">
        <h5>Vos Endpoints</h5>
        <div className="form-control my-2">
          <a href="#" className="link">
            https://api.linhub.fr/get/allInfos
          </a>
        </div>
        <div className="form-control my-2">
          <a href="#" className="link">
            https://api.linhub.fr/get/allInfos
          </a>
        </div>
        <div className="form-control my-2">
          <a href="#" className="link">
            https://api.linhub.fr/get/allInfos
          </a>
        </div>
      </div>
      <div>
        <h5>Sélectionnez votre template</h5>
        <div className="container">
          <div className="row">
            <div className="col-12 flex-fill col-lg-2 col-md-4 vs d-flex flex-column mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
            <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
            <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column  mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
            <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
          </div>
        </div>
        <div className="text-end mt-4">
          <button type="submit" className="btn btn-primary ">
            Déployer
          </button>
        </div>
      </div>
      <div className="container">
        <h5>Générez votre CV professionnel</h5>
        <div>
          <div className="row">
            <div className="col-12 flex-fill col-lg-2 col-md-4 vs d-flex flex-column mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
            <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
            <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column  mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
            <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column mb-3 mx-2 ">
              <Image
                src={noImage}
                style={{ width: "250px", height: "250px" }}
                alt="no-image"
              />
            </div>
          </div>
        </div>
        <div className="text-end mt-4">
          <button type="submit" className="btn btn-primary ">
            Télécharger
          </button>
        </div>
      </div>
    </div>
  );
}
