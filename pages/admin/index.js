import Banner from "@/components/admin/banner";
import styles from "../../styles/index.module.scss";
import requireAuth from '../middlewares/requireAuth';

const Admin = () => {
  return (
    <>
      <h1 className="text-primary text-center">Admin 😳</h1>
      <div className={styles.banner}>
        <Banner />
      </div>
    </>
  );

  // contenu de la page d'administration
};

export default requireAuth(Admin);