import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/reducers/user";
import Image from "next/image";
import noImage from "../public/no_image.jpeg";
import google from "../public/google.svg";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import Input from "@/components/Input";
import styles from "@/styles/onboarding.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleSignUp = (e) => {
    e.preventDefault();

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
        router.push("/onboarding");
      });
  };

  return (
    <div className="container-fluid px-md-5">
      <div className="col-lg-6">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h2 py-3">Créer mon compte Linhub</h1>
          <Link href="/login">Déjà un compte ?</Link>
        </div>
        <div className="row">
          <button className="rounded-5 btn btn-outline-dark btn-lg mb-3 shadow d-flex justify-content-between align-items-center">
            <Image
              src={google}
              alt="google"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="m-0">S'incrire avec Google</p>
            <p></p>
          </button>
          <button className="rounded-5 btn btn-outline-dark btn-lg mb-3 shadow d-flex justify-content-between align-items-center">
            <Image
              src={linkedin}
              alt="linkedin"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="mb-0">S'incrire avec Linkedin</p>
            <p></p>
          </button>
          <button
            className={`${styles.githubInput} rounded-5 btn btn-outline-dark btn-lg mb-3 shadow d-flex justify-content-between align-items-center`}
          >
            <Image
              src={github}
              alt="github"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="mb-0">S'incrire avec Github</p>
            <p></p>
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center my-3">
          <div className="border-bottom w-25"></div>
          <div className="px-3">ou</div>
          <div className="border-bottom w-25"></div>
        </div>
        <form onSubmit={handleSignUp}>
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
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              S'inscrire
            </button>
          </div>
        </form>
      </div>

      <Image
        src={noImage}
        alt="no-image"
        className={`d-none d-lg-block ${styles.halfBg}`}
      />
    </div>
  );
}
