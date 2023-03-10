import Banner from "@/components/admin/banner";
import styles from "../../styles/index.module.scss";
import requireAuth from "../middlewares/requireAuth";
import allSkills from "../../components/data/allSkills.json";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Input from "@/components/Input";
import { Trash } from "react-bootstrap-icons";

const BACKEND_ADDRESS = "https://linhub-back.vercel.app";

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
    return "A??e, il y a eu un pb: " + error.message;

  const mySkills = skillsData.data.data[0]?.name.map((e, i) => (
    <span
      key={i}
      className={`${styles.deletable} badge position-relative rounded-pill px-3 py-2 text-bg-primary`}
      onClick={() => deleteMutation.mutate(e)}
    >
      <Trash className={styles.deleteIcon} />
      {e}
    </span>
  ));

  const myLanguages = languagesData.data.data.map((e, i) => (
    <span
      key={i}
      className={`${styles.deletable} badge position-relative rounded-pill px-3 py-2 text-bg-primary mb-2`}
      onClick={() => deleteLanguageMutation.mutate(e._id)}
    >
      <Trash className={styles.deleteIcon} />

      {e.name} - {e.proficiency}
    </span>
  ));

  const myWebsites = websiteData.data.data.map((e, i) => (
    <span
      key={i}
      className={`${styles.deletable} badge position-relative rounded-pill px-3 py-2 text-bg-primary mb-2`}
      onClick={() => deleteWebsiteMutation.mutate(e._id)}
    >
      <Trash className={styles.deleteIcon} />
      {e.url}
    </span>
  ));

  return (
    <>
      <h1 className="text-primary text-center mb-5 mt-4">Dashboard</h1>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className="container">
        <h2 className="mt-5">Vos comp??tences</h2>
        <div className="border shadow p-5 mb-5">
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            styling={{ zIndex: 2 }}
            autoFocus
          />
          <div className="pt-5 d-flex flex-wrap gap-3">{mySkills}</div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-3">Vos langues</h2>
            <div className="border shadow p-5 ">
              <form onSubmit={handSubmit}>
                <div className="d-flex gap-3 flex-wrap
                ">

                <Input
                  type="text"
                  className="flex-grow-1"
                  name="valueLanguage"
                  label="Langue"
                  required={true}
                  value={valueLanguage}
                  onChange={handleLanguage}
                  />
                <Input
                  className="flex-grow-1"
                  type="text"
                  name="valueLevel"
                  label="Votre niveau"
                  required={true}
                  value={valueLevel}
                  onChange={handleLanguage}
                  />
                  </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-sm btn-outline-primary">
                    Ajouter
                  </button>
                </div>
              </form>
              {myLanguages}
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column">
            <h2 className="mb-3 mt-5 mt-lg-0">Vos sites internet</h2>
            <div className="border shadow p-5 h-100">
            <form onSubmit={handSubmitWebsite}>
              <Input
                type="text"
                name="valueUrl"
                label="Url"
                value={valueUrl}
                onChange={handleWebsite}
                required={true}
              />
                <div className="text-end">
                  <button type="submit" className="btn btn-outline-primary btn-sm">
                    Ajouter
                  </button>
                </div>
            </form>
            <div className="d-flex flex-wrap gap-3">{myWebsites}</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default requireAuth(Admin);
