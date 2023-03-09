import { login } from "@/reducers/user";
import Image from "next/image";
import noImage from "../public/no_image.jpeg";
import Project from "@/public/illustrations/project.svg";
import google from "../public/google.svg";
import linkedin from "../public/linkedin.svg";
import github from "../public/github.svg";
import { useState, useEffect } from "react";
import Input from "@/components/Input";
import styles from "@/styles/onboarding.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

const BACKEND_ADDRESS = "http://localhost:3000";

export default function Login() {
  const token = useSelector((state) => state.user.value.token);

  const [inputValue, setInputValue] = useState({
    signInEmail: "",
    signInPassword: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();

  // Redirect if logged in
  useEffect(() => {
    if (token) {
      router.push("/admin");
    }
  }, [token]);

  const { signInEmail, signInPassword } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    addMutation.mutate({ email: signInEmail, password: signInPassword });
  };

  const addMutation = useMutation(
    async (data) => {
      const res = await fetch(`${BACKEND_ADDRESS}/users/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      return json;
    },
    {
      onSuccess: (data) => {
        if (data.result) {
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
        }
        router.push("/admin");
      },
    }
  );

  return (
    <div className="container-fluid px-md-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h2 py-3">Re ! 👋</h1>
            <Link href="/register">Pas encore de compte ?</Link>
          </div>
          <button className="w-100 rounded-5 btn btn-outline-dark btn-lg mb-3 shadow d-flex justify-content-between align-items-center">
            <Image
              src={google}
              alt="google"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="m-0">Connexion avec Google</p>
            <p></p>
          </button>
          <button className="w-100 rounded-5 btn btn-outline-dark btn-lg mb-3 shadow d-flex justify-content-between align-items-center">
            <Image
              src={linkedin}
              alt="linkedin"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="mb-0">Connexion avec Linkedin</p>
            <p></p>
          </button>
          <button
            className={`${styles.githubInput} w-100 rounded-5 btn btn-outline-dark btn-lg mb-3 shadow d-flex justify-content-between align-items-center`}
          >
            <Image
              src={github}
              alt="github"
              style={{ width: "40px", height: "40px" }}
            />
            <p className="mb-0">Connexion avec Github</p>
            <p></p>
          </button>
          <div className="d-flex justify-content-center align-items-center my-3">
            <div className="border-bottom w-25"></div>
            <div className="px-3">ou</div>
            <div className="border-bottom w-25"></div>
          </div>
          <form onSubmit={handleSignIn}>
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
            <div className="text-end mt-4">
              <button type="submit" className="btn btn-primary">
                Se connecter
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <Image
            src={Project}
            className={`d-none d-lg-block ${styles.halfBg}`}
            alt="Project"
          />
        </div>
      </div>
    </div>
  );
}
