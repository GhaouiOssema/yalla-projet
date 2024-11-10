import React, { useState } from "react";
import InputField from "../components/InputField";
import IndexPage from "../components/LoginWith/index";
import Separator from "../components/Separator";
import Boutton from "../components/boutton";
import img from "../assets/1.jpeg";
import logo from "../assets/logo1.png";

const Login = () => {
  const [showContent, setShowContent] = useState(true);

  const handleClickEmail = () => {
    setShowContent(false);
  };

  return (
    <>
      <div className="h-[100vh] relative">
        <div className=" lg:grid grid-cols-3 w-full h-full">
          <div className="  col-span-2 h-full w-full lg:block hidden ">
            <div className="w-full h-screen sticky top-0 bg-black text-white">
              <img src={img} className="h-full w-full object-cover" />
            </div>
          </div>
          {showContent && (
            <div
              id="content-wraper"
              className="col-span-1 bg-white h-full w-full   "
            >
              <div className="">
                <div className="ml-5 mt-5 w-max">
                  <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer text-yellow-500">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="ml-3  text-yellow-500 font-bold">Acceuil</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-12 ">
                <div id="main-content" className=" max-w-sm h-full ">
                  <div className=" flex items-center justify-center p-10">
                    <img
                      src={logo}
                      className="block btn- h-[50px]  w-auto "
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-gray-800 font-semibold text-2xl mb-5 text-center ">
                      {" "}
                    </h6>
                  </div>
                  <div className="mb-5">
                    {" "}
                    <IndexPage />
                    <Separator text="ou" />
                    <Boutton
                      onClick={handleClickEmail}
                      IconSrc="https://img.icons8.com/material-outlined/24/new-post.png"
                      Text="Utuliser votre adresse E-mail"
                    />
                  </div>
                  <div className="mb-5">
                    <p className=" font-light text-gray-400 text-center w-full text-sm">
                      En continuant, vous acceptez les{" "}
                      <a className="font-medium ">Conditions d'Utilisation</a>{" "}
                      et la{" "}
                      <a className="font-medium ">
                        Politique de Confidentialité{" "}
                      </a>{" "}
                      de Yialla .
                    </p>
                  </div>
                  <div className=" flex flex-col justify-center items-center text-sm">
                    <p className="font-medium text-gray-800 ">
                      Vous n'êtes pas encore inscrit ?
                    </p>
                    <a
                      href="/auth/sign-up/default"
                      className=" font-medium text-yellow-500  "
                    >
                      Créer un compte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!showContent && (
            <div id="content-wraper" className="col-span-1 bg-white h-full    ">
              <div className="">
                <div className="ml-5 mt-5 w-max">
                  <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer text-yellow-500">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="ml-3  text-yellow-500 font-bold">Acceuil</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center px-10">
                <div id="main-content" className=" max-w-sm h-full ">
                  <div className=" flex items-center justify-center p-10">
                    <img
                      src={logo}
                      className="block btn- h-[50px]  w-auto "
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className=" text-gray-700 font-semibold text-xl mb-5 text-center ">
                      {" "}
                      Connexion
                    </h6>
                  </div>
                  <p className="mb-5  text-sm text-gray-500 text-center">
                    Entrez votre email et votre mot de passe pour vous connecter
                    !{" "}
                  </p>
                  <div className="h-px w-full bg-gray-200  mb-5" />
                  {/* Email */}
                  <InputField
                    variant="auth"
                    extra="mb-3 text-gray-500"
                    label="E-mail :"
                    placeholder="mail@simmmple.com"
                    id="email"
                    type="text"
                  />
                  {/* Password */}
                  <InputField
                    variant="auth"
                    extra="mb-3 text-gray-500"
                    label="Mot de passe :"
                    placeholder="Min. 8 characters"
                    id="password"
                    type="password"
                  />
                  {/* Checkbox */}
                  <div className="mb-4 flex items-center justify-between px-2">
                    <div className="mt-2 flex items-center"></div>
                    <a
                      className="text-sm font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
                      href=" "
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <button className="mb-5 w-full rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
                    Connexion
                  </button>
                  <div className=" flex flex-col justify-center items-center text-sm">
                    <p className="font-medium text-gray-800 ">
                      Vous n'êtes pas encore inscrit ?
                    </p>
                    <a
                      href="/auth/sign-up/default"
                      className=" font-medium text-yellow-500  "
                    >
                      Créer un compte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
