import LargeModalRegisterExperience from "@/components/admin/largeModalRegisterExperience";
import LargeModalUpdateExperience from "@/components/admin/largeModalUpdateExperience";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function Experience() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const user = useSelector((state) => state.user.value);
  const [chosedExperience, setChosedExperience] = useState({});

  const { isLoading, error, data } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const ExperienceData = await fetch(
        "http://localhost:3000/experiences/" + user.token
      );
      const res = ExperienceData.json();
      console.log(res);

      return res;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => {
      console.log("id", id);
      fetch(`${BACKEND_ADDRESS}/experiences/delete/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["experiences"] }),
  });

  if (isLoading) return "Chargement...";
  if (error) return "Aïe, il y a eu un pb: " + error.message;

  console.log(data);

  const myExperiences = data?.data.map((e, i) => (
    <div
      key={i}
      className="col-12 flex-fill col-lg-3 d-flex flex-column card text-white bg-secondary mb-3 mx-2 btn"
    >
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn-close btn-close-white "
          aria-label="Close"
          onClick={() => {
            console.log("click");
            deleteMutation.mutate(e._id);
          }}
        />
      </div>
      <div
        key={i}
        className=" ms-3 "
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#modalUpdate"
        onClick={() => setChosedExperience(e)}
      >
        <div className="card-header ms-4 ">Mon expérience</div>
        <div className="card-body">
          <h5 className="card-title">{e.company}</h5>
          <h5 className="card-title">{e.location}</h5>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div>
          <h1 className="text-primary mb-5 text-center">
            Toutes mes expériences
          </h1>
        </div>
        <div>
          <button
            type="submit"
            className="btn mb-4 btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalRegister"
          >
            Ajouter une expérience
          </button>
          <LargeModalRegisterExperience />
        </div>
        <div className="row justify-content-between ">{myExperiences}</div>
      </div>
      <LargeModalUpdateExperience experience={chosedExperience} />
    </div>
  );
}
