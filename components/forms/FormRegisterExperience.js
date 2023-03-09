import { useState, useRef, use, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const BACKEND_ADDRESS = "http://localhost:3000";

export default function FormUpdateExperience({ closeModal }) {
  const user = useSelector((state) => state.user.value);

  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    company: "",
    degreeName: "",
    description: "",
    location: "",
    locationString: "",
    title: "",
    startMonthYear: "",
    endMonthYear: "",
    typeOfContract: "",
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
        `${BACKEND_ADDRESS}/experiences/create/${user.token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["experiences"] });
      setForm({
        company: "",
        degreeName: "",
        description: "",
        location: "",
        locationString: "",
        title: "",
        startMonthYear: "",
        endMonthYear: "",
        typeOfContract: "",
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
          <label htmlFor="experience_company" className="form-label">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            className="form-control"
            id="experience_company"
            value={form.company}
            name="company"
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
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Localisation
          </label>
          <input
            type="text"
            className="form-control"
            value={form.location}
            name="location"
            id="location"
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
              value={form.startMonthYear}
              name="startMonthYear"
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
              value={form.endMonthYear}
              id="endMonthYear"
              name="endMonthYear"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Intitulé de poste
          </label>
          <input
            type="text"
            className="form-control"
            value={form.title}
            id="title"
            name="title"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="typeOfContract" className="form-label">
            Type de contrat
          </label>
          <input
            type="text"
            className="form-control"
            id="typeOfContract"
            value={form.typeOfContract}
            name="typeOfContract"
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
            Enregistrer l'expérience
          </button>
        </div>
      </div>
    </form>
  );
}
