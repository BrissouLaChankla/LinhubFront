import LargeModalRegister from "@/components/admin/largeModalRegister";
import LargeModalUpdate from "@/components/admin/largeModalUpdate";
import {
  loadFormation,
  addFormation,
  deleteFormation,
} from "@/reducers/formation";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function Formation() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const user = useSelector((state) => state.user.value);
  const [chosedFormation, setChosedFormation] = useState({});

  const { isLoading, error, data } = useQuery({
    queryKey: ["generalInfos"],
    queryFn: async () => {
      const formationData = await fetch(
        "http://localhost:3000/education/" + user.token
      );
      const res = formationData.json();
      console.log(res);

      return res;
    },
  });

  console.log(data);

  const deleteMutation = useMutation({
    mutationFn: (id) => {
      console.log("id", id);
      fetch(`${BACKEND_ADDRESS}/education/delete/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["generalInfos"] }),
  });

  if (isLoading) return "Chargement...";
  if (error) return "Aïe, il y a eu un pb: " + error.message;

  // const handleFormation = () => {
  //   fetch(`${BACKEND_ADDRESS}/token`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.result;
  //     });
  // };

  // const handleDelete = () => {
  //   fetch(`${BACKEND_ADDRESS}/education/${educationId}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // data.result && dispatch(deleteFormation(educationId));
  //       data.result &&
  //     });

  // };

  const myFormations = data.data.map((e, i) => (
    <div className="col-12 row-cols-1 flex-fill col-lg-3 d-flex flex-column card text-white bg-secondary mb-3 mx-2 btn">
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
        key={i}
        className=" ms-3 "
        type="submit"
        data-bs-toggle="modal"
        data-bs-target="#modalUpdate"
        onClick={() => setChosedFormation(e)}
      >
        <div className="card-header ms-4 ">Ma formation</div>
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
          <h1 className="text-primary mb-5 text-center">
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
