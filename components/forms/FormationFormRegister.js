import { useState, useRef, use, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const BACKEND_ADDRESS = "https://linhub-back.vercel.app";

export default function FormationFormUpdate({ closeModal }) {
  const user = useSelector((state) => state.user.value);

  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    schoolName: "",
    degreeName: "",
    fieldOfStudyName: "",
    startDate: "",
    endDate: "",
    description: "",
    result: "",
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
        `${BACKEND_ADDRESS}/education/create/${user.token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      return data; //le onSuccess attend un return pour pouvoir etre enclenché et donc refresh automatiquement
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["formations"] });
      setForm({
        schoolName: "",
        degreeName: "",
        fieldOfStudyName: "",
        startDate: "",
        endDate: "",
        description: "",
        result: "",
      });
    },
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
            Nom de la formation
          </label>
          <input
            type="text"
            className="form-control"
            id="formation_name"
            value={form.schoolName}
            name="schoolName"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="degree" className="form-label">
            Diplôme
          </label>
          <input
            type="text"
            className="form-control"
            id="degree"
            name="degreeName"
            value={form.degreeName}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="field_of_study" className="form-label">
            Domaine d’études
          </label>
          <input
            type="text"
            className="form-control"
            value={form.fieldOfStudyName}
            name="fieldOfStudyName"
            id="field_of_study"
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
            Résultat obtenu
          </label>
          <input
            type="text"
            className="form-control"
            value={form.result}
            id="result"
            name="result"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descriptif
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
        <div className="d-flex justify-content-between mt-5">
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
            Enregistrer la formation
          </button>
        </div>
      </div>
    </form>
  );
}
