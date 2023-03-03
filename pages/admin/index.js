import Banner from "@/components/admin/banner";
import styles from "../../styles/index.module.scss";

export default function Admin() {
  return (
    <>
      <h1 className="text-primary text-center">Admin 😳</h1>
      <div className={styles.banner}>
        <Banner />
      </div>
    </>
  );
}
