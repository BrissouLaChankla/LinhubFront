import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/reducers/user";
import Image from "next/image";
import noImage from "../assets/no_image.jpeg";
import { Google, Linkedin, Github } from "react-bootstrap-icons";
import Input from "@/components/Input";
import styles from "@/styles/onboarding.module.scss";

export default function Register() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    signUpEmail: "",
    signUpPassword: "",
    signUpLastname: "",
    signUpFirstname: "",
  });
  const { signUpEmail, signUpPassword, signUpFirstname, signUpLastname } =
    inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        lastname: signUpLastname,
        email: signUpEmail,
        password: signUpPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.result &&
          dispatch(
            login({
              token: data.token,
              email: signUpEmail,
            })
          );
        setInputValue({
          signUpEmail: "",
          signUpPassword: "",
          signUpLastname: "",
          signUpFirstname: "",
        });
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <h1>Créer mon compte Linhub</h1>
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
            type="text"
            label="Nom"
            required={true}
            value={signUpFirstname}
            onChange={handleChange}
            name="signUpFirstname"
          />
          <Input
            type="text"
            label="Prénom"
            required={true}
            value={signUpLastname}
            onChange={handleChange}
            name="signUpLastname"
          />
          <Input
            type="email"
            label="Email"
            value={signUpEmail}
            required={true}
            onChange={handleChange}
            name="signUpEmail"
          />
          <Input
            type="password"
            label="Mot de passe"
            required={true}
            value={signUpPassword}
            onChange={handleChange}
            name="signUpPassword"
          />
        </div>
        <button onClick={() => handleSignUp()} className="btn btn-primary">
          S'inscrire
        </button>
      </div>

      <Image src={noImage} alt="no-image" className={styles.halfBg} />
    </div>
  );
}
