import { useState } from "react";
import { Eye, QuestionCircle } from "react-bootstrap-icons";
import Image from "next/image";
import noImage from "../../public/no_image.jpeg";
import { useSelector } from "react-redux";
import tooltip from "@/styles/TooltipApiPortofolio.module.scss";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function ApiPortofolio() {
  const [tokenShown, setTokenShown] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickedCV, setClickedCV] = useState(false);

  const user = useSelector((state) => state.user.value);

  const imagesForTemplate = [
    { src: noImage },
    { src: noImage },
    { src: noImage },
    { src: noImage },
  ];
  const imagesForCV = [
    { src: noImage },
    { src: noImage },
    { src: noImage },
    { src: noImage },
  ];

  const toggleToken = () => {
    setTokenShown(!tokenShown);
  };

  const handleClick = (i) => {
    setClicked(i);
  };

  const handleClickForCV = (e) => {
    setClickedCV(e);
  };

  return (
    <div className="container">
      <div className="pt-5">
        <h5>Votre token secret</h5>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="token"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            type={tokenShown ? "text" : "password"}
            disabled="disabled"
            defaultValue={user.token}
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
      <div className="col-12 flex-fill col-lg-6 col-md-12 pb-4 pt-5">
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
        <div className=" d-flex mb-3 pt-5">
          <div className="p-2">
            <h5>Sélectionnez votre template</h5>
          </div>
          <span className={tooltip.tooltip}>
            <span className={tooltip.tooltiptext}>
              Si vous ne voulez pas perdre de temps à réaliser votre site
              portfolio vous même, vous pouvez sélectionner un de nos modèles
              qui utiliseront vos données Linhub.
            </span>
            <QuestionCircle />
          </span>
        </div>
        <div className="container">
          <div className="row">
            {imagesForTemplate.map((image, i) => (
              <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column mb-3 mx-2 ">
                <Image
                  src={image.src}
                  style={{
                    width: "250px",
                    height: "250px",
                    border:
                      clicked === i || (clicked === 0) === i
                        ? "3px solid #B3522D"
                        : "",
                  }}
                  onClick={() => handleClick(i)}
                  alt="no-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-end mt-4">
          <button
            type="submit"
            className={
              `btn btn-primary ` + (clicked || clicked === 0 ? "" : "disabled")
            }
          >
            Déployer
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h5>Générez votre CV professionnel</h5>
        <div>
          <div className="row">
            {imagesForCV.map((imageCV, e) => (
              <div className="col-12 flex-fill col-lg-2 col-md-4 d-flex flex-column mb-3 mx-2 ">
                <Image
                  src={imageCV.src}
                  style={{
                    width: "250px",
                    height: "250px",
                    border:
                      clickedCV === e || (clickedCV === 0) === e
                        ? "3px solid #B3522D"
                        : "",
                  }}
                  onClick={() => handleClickForCV(e)}
                  alt="no-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-end mt-4">
          <button
            type="submit"
            className={
              `btn btn-primary ` +
              (clickedCV || clickedCV === 0 ? "" : "disabled")
            }
          >
            Télécharger
          </button>
        </div>
      </div>
    </div>
  );
}
