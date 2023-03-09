import Link from "next/link";
import styles from "@/styles/onboarding.module.scss";
import Image from "next/image";
import noImage from "../public/no_image.jpeg";
import Scooter from "@/public/illustrations/scooter.svg";

import { ChevronRight } from "react-bootstrap-icons";

export default function Onboarding() {
  return (
    <div>
      <div className="col-lg-6">
        <h1 className="mb-5">Quelle est votre situation ?</h1>
        <div>
          <Link
            className="border rounded text-decoration-none d-flex align-items-center p-3 justify-content-between"
            href="/onboardJob"
          >
            <div className="d-flex align-items-center">
              <div className="fs-1">👨‍💻</div>
              <div className="ps-4">
                <h3>Je suis un développeur</h3>
                <span>Je crée mon profil</span>
              </div>
            </div>
            <ChevronRight />
          </Link>
          <Link
            style={{ cursor: "not-allowed" }}
            className="opacity-25 border rounded text-decoration-none d-flex align-items-center p-3 mt-4 justify-content-between "
            // href="/onboardRecruteur"
            href=""
          >
            <div className="d-flex align-items-center">
              <div className="fs-1">🔍</div>
              <div className="ps-4">
                <h3>Je suis un recruteur</h3>
                <span>
                  Je recherche <u>LE</u> dev
                </span>
              </div>
            </div>
            <ChevronRight />
          </Link>
        </div>
      </div>
      <Image
        src={Scooter}
        alt="Scooter"
        className={`d-none d-lg-block ${styles.halfBg}`}
      />
    </div>
  );
}
