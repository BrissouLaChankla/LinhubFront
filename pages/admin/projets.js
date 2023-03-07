import LargeModalRegisterProject from "../../components/admin/LargeModalRegisterProject";
import LargeModalUpdateProject from "../../components/admin/LargeModalUpdateProject";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function Projets() {
  const queryClient = useQueryClient();

  const user = useSelector((state) => state.user.value);
  const [chosedProject, setChosedProject] = useState({});

  const { isLoading, error, data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const projectData = await fetch(
        "http://localhost:3000/projects/" + user.token
      );
      const res = projectData.json();
      return res;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const data = await fetch(`${BACKEND_ADDRESS}/projects/delete/${id}`, {
        method: "DELETE",
      });
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });

  if (isLoading) return "Chargement...";
  if (error) return "Aïe, il y a eu un pb: " + error.message;

  const myProject = data.data.map((e, i) => (
    <div
      key={i}
      className="col-12 row-cols-1 flex-fill col-lg-3 d-flex flex-column card text-white bg-secondary mb-3 mx-2 btn"
    >
      <button
        type="button"
        className="btn-close btn-close-white justify-content-end flex-fill "
        aria-label="Close"
        onClick={() => {
          console.log("click");
          deleteMutation.mutate(e._id);
        }}
      />
      <div
        className=" ms-3 "
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#modalUpdate"
        onClick={() => setChosedProject(e)}
      >
        <div className="card-header ms-4 ">Mon projet</div>
        <div className="card-body">
          <h5 className="card-title">{e.name}</h5>
          <h5 className="card-title">{e.description}</h5>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div>
          <h1 className="text-primary mb-5 text-center">Tous mes projets</h1>
        </div>
        <div>
          <button
            type="submit"
            className="btn mb-4 btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalRegister"
          >
            Ajouter un projet
          </button>
          <LargeModalRegisterProject />
        </div>
        <div className="row justify-content-between ">{myProject}</div>
      </div>
      <LargeModalUpdateProject projets={chosedProject} />
    </div>
  );
}
