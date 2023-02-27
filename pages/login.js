import { login } from "@/reducers/user";
import Image from "next/image";
import noImage from "../assets/no_image.jpeg";
import { useState } from "react";
import { Google, Linkedin, Github } from "react-bootstrap-icons";
import Input from "@/components/Input";
import styles from "@/styles/onboarding.module.scss";
import Link from "next/link";

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
      <div className="container-fluid px-md-5">
        <div className="col-lg-6">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h2 py-3">Re ! 👋</h1>
            <Link href="/register">Pas encore de compte ?</Link>
          </div>
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
          <div className="d-flex justify-content-center align-items-center my-3">
            <div className="border-bottom w-25"></div>
            <div className="px-3">ou</div>
            <div className="border-bottom w-25"></div>
          </div>
          <form action="">
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
          <div className="text-end">
            <input onSubmit={() => handleSignIn()} type="submit" className="btn btn-primary" value="Se connecter" />
          </div>
          </form>
        </div>
        <Image src={noImage} className={`d-none d-lg-block ${styles.halfBg}`} alt="no-image" />

      </div>
    </div>
  );
}
