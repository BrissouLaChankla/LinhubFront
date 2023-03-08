import { useState } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const BACKEND_ADDRESS = "http://localhost:3000";

export default function ProjectFormUpdate({ closeModal }) {
  const user = useSelector((state) => state.user.value);

  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addMutation = useMutation({
    mutationFn: async () => {
      const data = await fetch(
        `${BACKEND_ADDRESS}/projects/create/${user.token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      console.log(data.json());
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addMutation.mutate();
      }}
    >
      <div className="mx-3 my-3">
        <div className="mb-3">
          <label htmlFor="formation_name" className="form-label">
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
            value={form.description}
            name="description"
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
          <label htmlFor="result" className="form-label">
            Url
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            name="url"
            value={form.url}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mt-5 d-flex justify-content-between">
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
