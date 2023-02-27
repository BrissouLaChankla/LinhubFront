import styles from "@/styles/Input.module.scss"

function Input(props) {
    return (
        <div className={styles.inputGroup}>
            <input type={props.type} required={props.required} />
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    )
}

export default Input;