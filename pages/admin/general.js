import Image from "next/image";
import styles from "@/styles/imgInputs.module.scss";
import defaultBanner from "@/public/default/banner.jpg";
import defaultProfile from "@/public/default/profile.jpg";
import { PencilFill } from "react-bootstrap-icons";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default function GeneralInfos() {
  const user = useSelector((state) => state.user.value);

  const [profilePicture, setProfilePicture] = useState(defaultProfile);
  const [bannerPicture, setBannerPicture] = useState(defaultBanner);
  const [loading, setLoading] = useState(false);

  const profileField = useRef(null);
  const bannerField = useRef(null);
  const firstname = useRef(null);
  const lastname = useRef(null);
  const address = useRef(null);
  const birthday = useRef(null);
  const experience = useRef(null);
  const headline = useRef(null);
  const description = useRef(null);
  const hasAcceptedToBeShown = useRef(null);

  const { isLoading, error, isSuccess, data } = useQuery({
    queryKey: ["generalInfos"],
    queryFn: () =>
      fetch("http://localhost:3000/generalInfo/" + user.token).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (isSuccess && data) {
      if (data.res.bannerPicture) {
        setBannerPicture(data.res.bannerPicture);
      }
      console.log(data);
      if (data.res.profilePicture) {
        setProfilePicture(data.res.profilePicture);
      }
    }
  }, [isLoading, data]);

  if (isLoading) return "Chargement...";
  if (error) return "Aïe, il y a eu un pb: " + error.message;

  // Change the src of profile/banner images with uploaded img
  const handleChangeProfile = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeBanner = (e) => {
    setBannerPicture(URL.createObjectURL(e.target.files[0]));
  };

  // Submit
  const editGeneral = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      address: address.current.value,
      experience: experience.current.value,
      birthday: birthday.current.value,
      headline: headline.current.value,
      description: description.current.value,
      hasAcceptedToBeShown: hasAcceptedToBeShown.current.checked,
    };

    const formData = new FormData();
    formData.append("profilePicture", profileField.current.files[0]);
    formData.append("bannerPicture", bannerField.current.files[0]);
    formData.append("data", JSON.stringify(data));

    fetch("http://localhost:3000/generalInfo/update/" + user.token, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          Toast.fire({
            icon: "success",
            title: data.res,
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Une erreur s'est produite 🤔",
          });
        }
        setLoading(false);
      });
  };

  return (
    <>
      <form
        onSubmit={editGeneral}
        className="container mb-5"
        encType="multipart/form-data"
      >
        <input
          type="file"
          ref={profileField}
          id="profilePicture"
          name="profilePicture"
          accept="image/*"
          className="d-none"
          onChange={(e) => handleChangeProfile(e)}
        />
        <input
          type="file"
          ref={bannerField}
          id="bannerPicture"
          name="bannerPicture"
          accept="image/*"
          className="d-none"
          onChange={(e) => handleChangeBanner(e)}
        />
        <div className="d-flex justify-content-center">
          <div className="position-relative">
            <div
              className={`position-relative overflow-hidden ${styles.editable}`}
            >
              <Image
                src={bannerPicture}
                className="object-fit-cover rounded img-fluid"
                onClick={() => bannerField.current.click()}
                alt="Image de Background"
                style={{ width: 900, height: 220 }}
                width={900}
                height={220}
              />
              <PencilFill className={styles.editPen} />
            </div>
            <div
              className="position-absolute bottom-0 start-0"
              style={{ transform: "translate(30px, 30px)" }}
            >
              <div className={`position-relative ${styles.editable}`}>
                <Image
                  src={profilePicture}
                  className={`img-thumbnail rounded-circle  `}
                  style={{ width: 150, height: 150 }}
                  onClick={() => profileField.current.click()}
                  width={150}
                  height={150}
                  alt="Photo de profile"
                />
                <PencilFill className={styles.editPen} />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <div className="d-flex gap-4 flex-wrap mt-3">
            <div className="flex-grow-1 ">
              <label htmlFor="firstname" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                className="form-control"
                ref={firstname}
                id="firstname"
                defaultValue={data?.res.firstname}
              />
            </div>
            <div className="flex-grow-1 ">
              <label htmlFor="lastname" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                ref={lastname}
                id="lastname"
                defaultValue={data?.res.lastname}
              />
            </div>
          </div>
          <div className="d-flex gap-4 flex-wrap mt-3">
            <div className="mb-3 flex-grow-1 ">
              <label htmlFor="birthday" className="form-label">
                Date de naissance
              </label>
              <input
                type="date"
                className="form-control"
                ref={birthday}
                id="birthday"
                defaultValue={
                  data?.res.birthday
                    ? new Date(data?.res.birthday).toISOString().split("T")[0]
                    : new Date("1998-05-04T00:00:00.000+00:00")
                        .toISOString()
                        .split("T")[0]
                }
              />
            </div>
            <div className="mb-3 flex-grow-1 ">
              <label htmlFor="address" className="form-label">
                Adresse
              </label>
              <input
                type="text"
                className="form-control"
                ref={address}
                id="address"
                defaultValue={data?.res.address}
              />
            </div>
          </div>
          <div className="d-flex gap-4 flex-wrap mt-3">
            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
                Années d'expériences
              </label>
              <input
                type="number"
                className="form-control"
                ref={experience}
                id="experience"
                defaultValue={data?.res.experience}
              />
            </div>
            <div className="mb-3 flex-grow-1">
              <label htmlFor="headline" className="form-label">
                Headline
              </label>
              <input
                type="text"
                className="form-control"
                ref={headline}
                id="headline"
                defaultValue={data?.res.headline}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              ref={description}
              defaultValue={data?.res.description}
              rows="3"
            />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                ref={hasAcceptedToBeShown}
                defaultChecked={data?.res.hasAcceptedToBeShown}
                id="hasAcceptedToBeShown"
              />
              <label
                className="form-check-label ms-2"
                htmlFor="hasAcceptedToBeShown"
              >
                J'accepte être mis en avant par Linhub
              </label>
            </div>
            {loading ? (
              <button type="submit" className="btn btn-primary disabled">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                <span>Enregistrer</span>
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
