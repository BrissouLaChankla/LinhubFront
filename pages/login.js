import { login } from "@/reducers/user";
import Image from "next/image";
import noImage from "../assets/no_image.jpeg";
import { useState } from "react";
import { Google, Linkedin, Github } from "react-bootstrap-icons";
import Input from "@/components/Input";
import styles from "@/styles/onboarding.module.scss";

export default function Login() {
  const [inputValue, setInputValue] = useState({
    signInEmail: "",
    signInPassword: "",
  });

  const { signInEmail, signInPassword } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const handleSignIn = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.result &&
          dispatch(
            login({
              token: data.token,
              email: signInEmail,
            })
          );
        setInputValue({
          signInEmail: "",
          signInPassword: "",
        });
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <h1>Re ! 👋</h1>
        <div>
          <button>
            <Google />
            Google
          </button>
          <button>
            <Linkedin />
            Linkedin
          </button>
          <button>
            <Github />
            Github
          </button>
        </div>
        <p>ou</p>
        <div>
          <Input
            type="email"
            label="Email"
            required={true}
            name="signInEmail"
            value={signInEmail}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="Mot de passe"
            required={true}
            name="signInPassword"
            value={signInPassword}
            onChange={handleChange}
          />
        </div>
        <button onClick={() => handleSignIn()} className="btn btn-primary">
          Se connecter
        </button>
      </div>
      <Image src={noImage} className={styles.halfBg} alt="no-image" />
      <p>Pas encore de compte ?</p>
    </div>
  );
}
