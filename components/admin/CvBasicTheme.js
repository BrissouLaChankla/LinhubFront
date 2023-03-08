import Pdf from "react-to-pdf";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useRef } from "react";

const BACKEND_ADDRESS = "http://localhost:3000";

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

  return (
    <div className="App">
      {/* <Pdf targetRef={ref} filename="document.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="button">
            Generate PDF
          </button>
        )}
      </Pdf> */}

      {/* <div ref={ref}>
        <div>
          <h3>{generalInfo.data.user?.firstname}</h3>
          <h3>{generalInfo.data.user?.lastname}</h3>
          <img
            src={generalInfo.data.user?.profilePicture}
            alt="photo de profil"
          />
          <p>{generalInfo.data.user?.email}</p>
          <p>{generalInfo.data.general?.address}</p>
          <p>{generalInfo.data.general?.birthday}</p>
          <p>{generalInfo.data.general?.experience}</p>
          <p>{generalInfo.data.general?.headline}</p>
          <p>{generalInfo.data.general?.description}</p>
        </div>
        <div>
          <h3>Education</h3>
          {generalInfo.data.educations?.map((education) => (
            <div>
              <p>{education.school}</p>
              <p>{education.degree}</p>
              <p>{education.fieldOfStudy}</p>
              <p>{education.from}</p>
              <p>{education.to}</p>
              <p>{education.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h3>Experience</h3>
          {generalInfo.data.experiences.map((experience) => (
            <div>
              <p>{experience.company}</p>
              <p>{experience.title}</p>
              <p>{experience.typeOfContract}</p>
              <p>{experience.location}</p>
              <p>{experience.locationString}</p>
              <p>{experience.startMonthYear}</p>
              <p>{experience.EndMonthYear}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div> */}
        <div>
          {/* <h3>Skills</h3>
          {generalInfo.data.skills[0]?.name.map((skill) => (
            <div>
              <p>{skill}</p>
            </div>
          ))} */}
        </div>
        <div>
          <h3>Projects</h3>
          {/* {generalInfo.data.projects.map((project) => (
            <div>
              <p>{project.name}</p>
              <p>{project.description}</p>
              <p>{project.url}</p>
              <p>{project.startDate}</p>
              <p>{project.endDate}</p>
            </div>
          ))} */}
        </div>
        <div>
          <h3>website</h3>
          {/* {generalInfo.data.websites.map((website) => (
            <div>
              <p>{website.name}</p>
              <p>{website.url}</p>
            </div>
          ))} */}
          <div>
            <h3>languages</h3>
            {/* {generalInfo.data.languages.map((language) => (
              <div>
                <p>{language.name}</p>
                <p>{language.proficiency}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
  );
}
