import Image from "next/image";
import styles from '@/styles/imgInputs.module.scss'
import defaultBanner from "@/assets/default/banner.jpg";
import defaultProfile from "@/assets/default/profile.jpg";
import { PencilFill } from "react-bootstrap-icons";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

export default function GeneralInfos() {
  const user = useSelector((state) => state.user.value);

  const [profilePicture, setProfilePicture] = useState(defaultProfile)
  const [bannerPicture, setBannerPicture] = useState(defaultBanner)
  const profileField = useRef(null);
  const bannerField = useRef(null);
  
  const firstname = useRef(null);
  const lastname = useRef(null);
  const address = useRef(null);
  const headline = useRef(null);
  const description = useRef(null);
  const hasAcceptedToBeShown = useRef(null);

  // Change the src of profile/banner images with uploaded img
  const handleChangeProfile = e => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]))
  }
  const handleChangeBanner = e => {
    setBannerPicture(URL.createObjectURL(e.target.files[0]))
  }

  // Submit 
  const editGeneral = (e) => {
    e.preventDefault();
    const data = {
      firstname:firstname.current.value,
      lastname:lastname.current.value,
      address:address.current.value,
      headline:headline.current.value,
      description:description.current.value,
      hasAcceptedToBeShown:hasAcceptedToBeShown.current.value,
    }
    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    formData.append('bannerPicture', bannerPicture);
    formData.append('data', data)

    console.log(formData);
    fetch("http://localhost:3000/update/"+user.token, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <input type="file" ref={profileField} id="img" name="profilePicture" accept="image/*" className="d-none" onChange={(e) => handleChangeProfile(e)} />
      <input type="file" ref={bannerField} id="img" name="backgroundPicture" accept="image/*" className="d-none" onChange={(e) => handleChangeBanner(e)} />
      <form onSubmit={editGeneral} className="container mb-5">
        <div className="d-flex justify-content-center">

          <div className="position-relative">
            <div className={`position-relative overflow-hidden ${styles.editable}`}>
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
            <div className="position-absolute bottom-0 start-0" style={{ transform: 'translate(30px, 30px)' }}>
              <div className={`position-relative ${styles.editable}`}>
                <Image
                  src={profilePicture}
                  className={`img-thumbnail rounded-circle  `}
                  style={{ width: 150, height: 150 }}
                  onClick={() => profileField.current.click()}
                  width={150}
                  height={150}
                  alt="Photo de profile" />
                <PencilFill className={styles.editPen} />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <div className="d-flex gap-4 flex-wrap mt-3">
            <div className="flex-grow-1 ">
              <label htmlFor="firstname" className="form-label">Prénom</label>
              <input type="text" className="form-control" ref={firstname} id="firstname" />
            </div>
            <div className="flex-grow-1 ">
              <label htmlFor="lastname" className="form-label">Nom</label>
              <input type="text" className="form-control" ref={lastname} id="lastname" />
            </div>
          </div>
          <div className="d-flex gap-4 flex-wrap mt-3">
            <div className="mb-3 flex-grow-1 ">
              <label htmlFor="address" className="form-label">Localisation</label>
              <input type="text" className="form-control" ref={address} id="address" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="headline" className="form-label">Headline</label>
            <input type="text" className="form-control" ref={headline} id="headline" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" ref={description} rows="3"></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <input className="form-check-input" type="checkbox" value="" id="hasAcceptedToBeShown" />
              <label className="form-check-label ms-2" ref={hasAcceptedToBeShown} htmlFor="hasAcceptedToBeShown">
                J'accepte être mis en avant par Linhub
              </label>
            </div>
            <input type="submit" value="Enregistrer" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </>
  );
}
