import Banner from "@/components/admin/banner";
import styles from "../../styles/index.module.scss";
import requireAuth from "../middlewares/requireAuth";
import allSkills from "../../components/data/allSkills.json";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const BACKEND_ADDRESS = "http://localhost:3000";

const Admin = () => {
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.user.value);
  const items = allSkills;

  const handleOnSelect = (item) => {
    addMutation.mutate(item.name);
  };

  //route get skills
  const { isLoading, error, data } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const skillData = await fetch(`${BACKEND_ADDRESS}/skills/${user.token}`);
      const res = skillData.json();
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

  if (isLoading) return "Chargement...";
  if (error) return "Aïe, il y a eu un pb: " + error.message;

  const mySkills = data.data[0].name.map((e, i) => (
    <span
      key={i}
      className="badge rounded-pill px-3 py-2 text-bg-primary"
      onClick={() => deleteMutation.mutate(e)}
    >
      {e}
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
        <h2>Vos compétences</h2>
        <div className="border shadow p-5">
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            styling={{ zIndex: 4 }}
            autoFocus
          />

          <div className="pt-5 d-flex flex-wrap gap-3">{mySkills}</div>
        </div>
      </div>
    </>
  );

  // contenu de la page d'administration
};

export default requireAuth(Admin);
