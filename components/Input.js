import styles from "@/styles/Input.module.scss";

function Input({ type, value, required, onChange, label, name }) {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default Input;
