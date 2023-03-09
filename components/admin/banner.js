import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const BACKEND_ADDRESS = "https://linhub-back.vercel.app";
function Banner() {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const bannerInfo = useQuery({
    queryKey: ["bannerInfos"],
    queryFn: async () => {
      const data = await fetch(
        `${BACKEND_ADDRESS}/users/completion/${user.token}`
      );
      const res = data.json();
      return res;
    },
  });

  if (bannerInfo.isLoading) return "Chargement...";
  if (bannerInfo.isError) return "Erreur";
  const percentage = bannerInfo.data.percent;

  const missingProfile = bannerInfo.data.noComplete.map((e, i) => (
    <p key={i}>-{e}</p>
  ));
  return (
    <div
      className="container alert alert-secondary alert-dismissible fade show"
      role="alert"
    >
      <div className="row align-items-center">
        <div className="col-2 col-md-1">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",

              // Text size
              textSize: "25px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Colors
              pathColor: `rgba(38, 50, 56, ${percentage / 100})`,
              textColor: "#D36135",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          ></CircularProgressbar>
        </div>
        <div className="col-10 col-md-11">
          <span>
            Welcome back<span> </span>
            <strong>
              {bannerInfo.data.firstname}-{bannerInfo.data.lastname}
            </strong>
            ! Tu as complété {percentage}% de ton profil.{" "}
            <p>
              tu n'as pas complété le/les champ(s) suivant(s): {missingProfile}
            </p>
          </span>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
