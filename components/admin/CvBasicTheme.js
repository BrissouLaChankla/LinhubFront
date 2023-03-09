import Pdf from "react-to-pdf";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useRef } from "react";
import styles from "@/styles/cv.module.scss"
import Image from "next/image";
import { Balloon, Briefcase, Linkedin, Mailbox, Phone, Pin, Quote } from "react-bootstrap-icons";

const BACKEND_ADDRESS = "https://linhub-back.vercel.app";

export default function CvBasicTheme() {
  const ref = useRef();
  const user = useSelector((state) => state.user.value);

  const generalInfo = useQuery({
    queryKey: ["generalInfos"],
    queryFn: async () => {
      const generalData = await fetch(`${BACKEND_ADDRESS}/apis/${user.token}`);
      const res = generalData.json();
      return res;
    },
  });

  if (generalInfo.isLoading) return "Chargement...";
  if (generalInfo.isError) return "Erreur";

  const calculate_age = dob => {
    const birthDate = new Date(dob); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
  
    return Math.abs(age.getUTCFullYear() - 1970);
  }
  
  return (
    <>
            <Pdf targetRef={ref} filename={`CV_${generalInfo.data.user.firstname}_${generalInfo.data.user.lastname}.pdf`}  className="my-4" scale={0.736}>
              {({ toPdf }) => (
                <button onClick={toPdf} className="button btn btn-primary mt-3">
                  Télécharger mon CV
                </button>
              )}
            </Pdf>
      <div ref={ref} scale={0.1} style={{ width: "1080px", height: "1527px" }} className="bg-light position-relative">

        <div className={styles.sidebar}>

          <Image
            src={generalInfo.data.general.profilePicture}
            width={250} height={220}
            className="rounded mt-4"
            style={{ marginLeft: "35px", objectFit: "cover", objectPosition: "center" }}
            alt="photo de profil"
          />

          <div className={`${styles.contact} ps-4 pt-1 `}>
            <h5 >Info</h5>
            {/* <div className="mt-4 me-3 fs-3">
              <Phone className="me-2" /> 06 06 06 06 06
            </div> */}
            <div className="mt-2 me-3 fs-3 pb-2 d-flex">
              <Mailbox className="me-2 text-primary" style={{fontSize:"25px"}}/> 
              <small>
                {generalInfo.data.user.email}
              </small>
            </div>
            <div className="mt-2 me-3 fs-3 pb-2 ">
              <Pin className="me-2 text-primary" style={{fontSize:"25px"}}/>
              <small>
                {generalInfo.data.general.address}
              </small>
            </div>
            <div className="mt-2 me-3 fs-3 pb-2">
              <Balloon className="me-2 text-primary" style={{fontSize:"25px"}}/>
              <small>
                {
                  calculate_age(generalInfo.data.general.birthday)
                } ans
              </small>
            </div>
            <div className="mt-2 me-3 fs-3 pb-2">
              <Briefcase className="me-2 text-primary" style={{fontSize:"25px"}}/>
              <small>
                {
                  generalInfo.data.general.experience
                } d'années d'xp
              </small>
            </div>
            {/* <div className="mt-2 me-3 fs-3">
              <Pin className="me-2" /> {generalInfo.data.general.address}
            </div> */}
            {/* <div className="mt-2 me-3 fs-3">
              <Linkedin className="me-2" /> 06 06 06 06 06
            </div> */}
          </div>

          <div className={`${styles.contact} ps-4 pt-1 `}>
            <h5 className="mb-3">Compétences</h5>
            {generalInfo.data.skills[0].name.map((e, i) =>
              <span class="badge position-relative rounded-pill px-3 py-2 m-1 text-bg-primary" >
                {e}
              </span>
            )}
          </div>
          <div className={`${styles.languages} ps-4 pt-1 `}>
            <h5 className="mb-3">Langues</h5>
            {generalInfo.data.languages.map((e, i) =>
              <span class="badge position-relative rounded-pill px-3 py-2 m-1 border-primary border text-primary" >
                {e.name} - {e.proficiency}
              </span>
            )}
          </div>
          <div className={`${styles.languages} ps-4 pt-1 d-flex align-items-center`}>
               <em  className="position-relative"> 
            <Quote className={`${styles.firstQuote} text-primary`} />
                {generalInfo.data.general.headline}</em>
          </div>


        </div>
        <div className={`${styles.rightSection} py-4 px-5`}>

          <div style={{fontSize:"80px", fontWeight:"bold"}} className="text-center text-primary">{generalInfo.data.user?.firstname} {generalInfo.data.user?.lastname}</div>
          <div className="text-center fw-bold" style={{fontSize:"30px",marginTop:"-20px"}}>{generalInfo.data.general?.currentJob}</div>

          <div className={`${styles.borderSep} fw-bold text-center mt-5`} style={{fontSize:"30px"}}>
            A propos
          </div>
          <p className="mt-4">
            {generalInfo.data.general.description}
          </p>

          <div className={`${styles.borderSep} fw-bold text-center mt-5`} style={{fontSize:"30px"}}>
            Expériences
          </div>
          {generalInfo.data.experiences.map((e,i) => 
          <>
            <div key={i} className="d-flex justify-content-between mt-4">
                <div className="text-uppercase text-primary" style={{fontSize:"24px"}}>
                  {e.title}
                </div>
                <div className="text-muted">
                  {new Date(e.startMonthYear).toISOString().split("T")[0]} - {new Date(e.endMonthYear).toISOString().split("T")[0]}
                </div>
            </div>
            <em>{e.company}</em>  <small className="text-muted ms-2">| {e.typeOfContract}</small>
            <div>
              <strong>{e.description}</strong>
            </div>
            </>
          )}

<div className={`${styles.borderSep} fw-bold text-center mt-5`} style={{fontSize:"30px"}}>
            Formation
          </div>

          {generalInfo.data.educations.map((e,i) => 
          <>
            <div key={i} className="d-flex justify-content-between mt-4">
                <div className="text-uppercase text-primary" style={{fontSize:"24px"}}>
                  {e.degreeName}
                </div>
                <div className="text-muted">
                  {new Date(e.startDate).toISOString().split("T")[0]} - {new Date(e.endDate).toISOString().split("T")[0]}
                </div>
            </div>
            <em>{e.schoolName}</em>
            <div>
              <strong>{e.description}</strong>
            </div>
            </>
          )}

          <div className={`${styles.borderSep} fw-bold text-center mt-5`} style={{fontSize:"30px"}}>
            Infos supplémentaires
          </div>
        </div>
      </div>
      
    
    </>

  );
}
