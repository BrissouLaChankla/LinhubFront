import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const BACKEND_ADDRESS = "http://localhost:3000";

export default function ProjectFormUpdate({ id }) {
  const user = useSelector((state) => state.user.value);

  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    url: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id + "/" + user.token)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          const keys = ["name", "description", "startDate", "endDate", "url"];
          for (let field of keys) {
            if (data.data[field]) {
              if (field === "startDate" || field === "endDate") {
                data.data[field] = data.data[field].slice(0, 7);
                console.log(data.data[field]);
              }
              setForm((prev) => ({
                ...prev,
                [field]: data.data[field],
              }));
            }
          }
        }
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateMutation = useMutation({
    mutationFn: () => {
      fetch(`${BACKEND_ADDRESS}/projects/${id}/${user.token}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["generalInfos"] }),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateMutation.mutate();
      }}
    >
      <div className="mx-3 my-3">
        <div className="mb-3">
          <label htmlFor="project_name" className="form-label">
            Nom du projet
          </label>
          <input
            type="text"
            className="form-control"
            id="project_name"
            value={form.name}
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={form.description}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="d-flex gap-4">
          <div className="mb-3 flex-grow-1">
            <label htmlFor="start_date" className="form-label">
              Date de début
            </label>
            <input
              type="month"
              className="form-control"
              id="start_date"
              value={form.startDate}
              name="startDate"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3 flex-grow-1">
            <label htmlFor="end_date" className="form-label">
              Date de fin
            </label>
            <input
              type="month"
              className="form-control"
              value={form.endDate}
              id="end_date"
              name="endDate"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Url
          </label>
          <input
            type="text"
            className="form-control"
            id="uel"
            value={form.url}
            name="url"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fermer
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Enregistrer le projet
          </button>
        </div>
      </div>
    </form>
  );
}
