import LargeModalRegister from "@/components/admin/largeModalRegister";
import LargeModalUpdate from "@/components/admin/largeModalUpdate";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function Formation() {
  const queryClient = useQueryClient();

  const user = useSelector((state) => state.user.value);
  const [chosedFormation, setChosedFormation] = useState({});

  const { isLoading, error, data } = useQuery({
    queryKey: ["formations"],
    queryFn: async () => {
      const formationData = await fetch(
        "http://localhost:3000/education/" + user.token
      );
      const res = formationData.json();
      console.log(res);

      return res;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => {
      console.log("id", id);
      fetch(`${BACKEND_ADDRESS}/education/delete/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["formations"] }),
  });

  if (isLoading) return "Chargement...";
  if (error) return "Aïe, il y a eu un pb: " + error.message;

  const myFormations = data.data.map((e, i) => (
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
        className=" ms-3 "
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#modalUpdate"
        onClick={() => setChosedFormation(e)}
      >
        <div className="card-header ">Ma formation</div>
        <div className="card-body">
          <h5 className="card-title">{e.schoolName}</h5>
          <h5 className="card-title">{e.degreeName}</h5>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div>
          <h1 className="text-primary mb-5 mt-4 text-center">
            Toutes mes formations
          </h1>
        </div>
        <div>
          <button
            type="submit"
            className="btn mb-4 btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalRegister"
          >
            Ajouter une formation
          </button>
          <LargeModalRegister />
        </div>
        <div className="row justify-content-between ">{myFormations}</div>
      </div>
      <LargeModalUpdate formation={chosedFormation} />
    </div>
  );
}
