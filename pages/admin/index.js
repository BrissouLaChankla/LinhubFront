import Banner from "@/components/admin/banner";
import styles from "../../styles/index.module.scss";
import requireAuth from "../middlewares/requireAuth";
import allSkills from "../../components/data/allSkills.json";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Input from "@/components/Input";

const BACKEND_ADDRESS = "http://localhost:3000";

const Admin = () => {
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.user.value);
  const items = allSkills;
  const [inputValue, setInputValue] = useState({
    valueLanguage: "",
    valueLevel: "",
  });
  const [inputValueWebsite, setInputValueWebsite] = useState({
    valueUrl: "",
  });

  const { valueUrl } = inputValueWebsite;
  const { valueLanguage, valueLevel } = inputValue;

  const handleLanguage = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handSubmit = (e) => {
    e.preventDefault();
    addLanguageMutation.mutate({ valueLanguage, valueLevel });
  };

  const handleWebsite = (e) => {
    const { name, value } = e.target;
    setInputValueWebsite((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handSubmitWebsite = (e) => {
    e.preventDefault();

    addWebsiteMutation.mutate({ valueUrl });
  };

  //route get skills
  const skillsData = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const skillData = await fetch(`${BACKEND_ADDRESS}/skills/${user.token}`);
      const res = skillData.json();
      return res;
    },
  });

  //route get languages
  const languagesData = useQuery({
    queryKey: ["languages"],
    queryFn: async () => {
      const languageData = await fetch(
        `${BACKEND_ADDRESS}/languages/${user.token}`
      );
      const res = languageData.json();
      return res;
    },
  });

  //route get website
  const websiteData = useQuery({
    queryKey: ["website"],
    queryFn: async () => {
      const websiteData = await fetch(
        `${BACKEND_ADDRESS}/websites/${user.token}`
      );
      const res = websiteData.json();
      return res;
    },
  });

  //route add skills
  const addMutation = useMutation({
    mutationFn: async (skill) => {
      const data = await fetch(
        `${BACKEND_ADDRESS}/skills/create/${user.token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ skills: skill }),
        }
      );
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["skills"] }),
  });

  //route add languages
  const addLanguageMutation = useMutation({
    mutationFn: async (value) => {
      const data = await fetch(
        `${BACKEND_ADDRESS}/languages/create/${user.token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: value.valueLanguage,
            proficiency: value.valueLevel,
          }),
        }
      );
      console.log(data.json());
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["languages"] }),
  });

  //route add website
  const addWebsiteMutation = useMutation({
    mutationFn: async (value) => {
      const data = await fetch(
        `${BACKEND_ADDRESS}/websites/create/${user.token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: value.valueWebsite,
            url: value.valueUrl,
          }),
        }
      );
      console.log(data.json());
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["website"] }),
  });

  //route delete skills
  const deleteMutation = useMutation({
    mutationFn: async (e) => {
      const data = await fetch(
        `${BACKEND_ADDRESS}/skills/delete/${user.token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ skillname: e }),
        }
      );
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["skills"] }),
  });

  //route delete website
  const deleteWebsiteMutation = useMutation({
    mutationFn: async (id) => {
      const date = await fetch(`${BACKEND_ADDRESS}/websites/delete/${id}`, {
        method: "DELETE",
      });
      return date;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["website"] }),
  });

  //route delete languages
  const deleteLanguageMutation = useMutation({
    mutationFn: async (id) => {
      const date = await fetch(`${BACKEND_ADDRESS}/languages/delete/${id}`, {
        method: "DELETE",
      });
      return date;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["languages"] }),
  });

  const handleOnSelect = (item) => {
    addMutation.mutate(item.name);
  };

  if (skillsData.isLoading || languagesData.isLoading || websiteData.isLoading)
    return "Chargement...";
  if (skillsData.error || languagesData.error || websiteData.error)
    return "Aïe, il y a eu un pb: " + error.message;

  const mySkills = skillsData.data.data[0]?.name.map((e, i) => (
    <span
      key={i}
      className="badge rounded-pill px-3 py-2 text-bg-primary"
      onClick={() => deleteMutation.mutate(e)}
    >
      {e}
    </span>
  ));

  const myLanguages = languagesData.data.data.map((e, i) => (
    <span
      key={i}
      className="badge rounded-pill px-3 py-2 text-bg-primary mb-2"
      onClick={() => deleteLanguageMutation.mutate(e._id)}
    >
      {e.name} - {e.proficiency}
    </span>
  ));

  const myWebsites = websiteData.data.data.map((e, i) => (
    <span
      key={i}
      className="badge rounded-pill px-3 py-2 text-bg-primary mb-2"
      onClick={() => deleteWebsiteMutation.mutate(e._id)}
    >
      {e.url}
    </span>
  ));

  return (
    <>
      <h1 className="text-primary text-center">Admin 😳</h1>
      <div>
        <h2 className="text-center">
          Bienvenue sur votre espace d'administration
        </h2>
      </div>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className="container text-center">
        <h2 className="mb-3">Vos compétences</h2>
        <div className="border shadow p-5 mb-5">
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            styling={{ zIndex: 4 }}
            autoFocus
          />
          <div className="pt-5 d-flex flex-wrap gap-3">{mySkills}</div>
        </div>
        <div className="container text-start row">
          <h2 className="mb-3">Vos langues</h2>
          <div className="border shadow p-5 mb-5 col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <form onSubmit={handSubmit}>
                  <Input
                    type="text"
                    name="valueLanguage"
                    label="langue"
                    required={true}
                    value={valueLanguage}
                    onChange={handleLanguage}
                  />
                  <Input
                    type="text"
                    name="valueLevel"
                    label="Votre niveau"
                    required={true}
                    value={valueLevel}
                    onChange={handleLanguage}
                  />
                  <button type="submit" className="btn btn-outline-primary">
                    Ajouter
                  </button>
                </form>
              </div>
              <div className="col-lg-6">{myLanguages}</div>
            </div>
          </div>
          <div className="col-lg-6 text-start">
            <h2 className="mb-3">Vos websites</h2>
            <div className="border shadow p-5 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <form onSubmit={handSubmitWebsite}>
                    <Input
                      type="text"
                      name="valueUrl"
                      label="Url"
                      value={valueUrl}
                      onChange={handleWebsite}
                      required={true}
                    />
                    <button type="submit" className="btn btn-outline-primary">
                      Ajouter
                    </button>
                  </form>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex flex-wrap gap-3">{myWebsites}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default requireAuth(Admin);
