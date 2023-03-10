import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Onboarding() {
  const [experienceValue, setExperienceValue] = useState(null);
  const [jobValue, setJobValue] = useState("Développeur Fullstack");
  const user = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const experiences = [
    {
      yearsRange: "0-2 ans",
      name: "Newbie",
      value: "Junior",
    },
    {
      yearsRange: "2-5 ans",
      name: "Élémentaliste",
      value: "Intermédiaire",
    },
    {
      yearsRange: "5 ans et +",
      name: "Mage noir",
      value: "Senior",
    },
  ];

  const handleSubmit = () => {
    updateMutation.mutate();
  };

  const updateMutation = useMutation({
    mutationFn: async () => {
      const data = await fetch(
        "https://linhub-back.vercel.app/generalInfo/setup/" + user.value.token,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            currentJob: jobValue,
            experience: experienceValue,
          }),
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["generalsinfo"] });
    },
  });

  return (
    <div className="container-fluid ">
      <div className="row align-items-center">
        <div className="col-lg-7 px-md-5">
          <h1 className="mb-2">Bienvenue parmi nous !</h1>
          <h3 className="mb-5">
            On commence par un petit interrogatoire ... 🕵🏻
          </h3>
          <div>
            <em className="mb-3 text-muted">spartiate ...</em>
            <h3 className="mb-4">Quel est votre métier ?</h3>
            <select
              className="form-select form-select-lg mb-5"
              aria-label=".form-select-lg example"
              onChange={(e) => setJobValue(e.target.value)}
            >
              
              <option value="Développeur Fullstack">
                Développeur Fullstack
              </option>
              <option value="Développeur Front">Développeur Front</option>
              <option value="Développeur Back">Développeur Back</option>
              <option value="Développeur Mobile">Développeur Mobile</option>
              <option value="Devops">Devops</option>
              <option value="Data analyst">Data analyst</option>
            </select>
          </div>
          <div>
            <h3 className="mb-4">Quelle est votre expérience ?</h3>
            <div className="d-flex justify-content-between mb-3">
              {experiences.map((experience,i) => (
                <button key={i}
                  type="button"
                  className={
                    "btn btn-outline-primary rounded d-flex flex-column justify-content-center align-items-center p-4 w-25" +
                    (experience.value === experienceValue ? " active" : "")
                  }
                  onClick={() => setExperienceValue(experience.value)}
                >
                  <strong>{experience.yearsRange}</strong>
                  <em>{experience.name}</em>
                </button>
              ))}
            </div>
            <div className="text-end">
              <Link
                className={
                  jobValue && experienceValue
                    ? "btn btn-primary mt-5"
                    : "btn btn-primary mt-5 disabled"
                }
                onClick={() => handleSubmit()}
                href={{ pathname: "/onboardSkill", query: { job: jobValue } }}
              >
                Suivant
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-light d-none d-lg-block col-lg-5 vh-100"></div>
      </div>
    </div>
  );
}
