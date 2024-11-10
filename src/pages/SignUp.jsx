import { useState } from "react";
import InputField from "../components/InputField";
import img from "../assets/1.jpeg";
import logo from "../assets/logo1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const SignUp = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showContent, setShowContent] = useState(true);
  const [accountCreated, setAccountCreated] = useState(false); // Déclaration de l'état accountCreated
  const [ShowForm, setShowForm] = useState(true); // Déclaration de l'état accountCreated
  const [PassForm, setPassForm] = useState(false); // Déclaration de l'état accountCreated
  const [Final, setFinal] = useState(false); // Déclaration de l'état accountCreated

  const [selectedOption, setSelectedOption] = useState(null);

  const optionContents = {
    Particulier: <span></span>,
    Professionnel: (
      <div className="text-lg text-gray-500 w-full">
        <>
          <InputField
            variant="nom"
            extra="mt-3"
            label="Nom de l'entreprise :*"
            placeholder=""
            id="nomE"
            type="text"
          />
        </>
        <InputField
          variant="nom"
          extra="mt-3"
          label="Forme juridique:*"
          placeholder=""
          id="nomE"
          type="text"
        />
        <InputField
          variant="nom"
          extra="mt-3"
          label="Adresse :*"
          placeholder=""
          id="nomE"
          type="text"
        />
        <InputField
          variant="nom"
          extra="mt-3"
          label="Ville :*"
          placeholder=""
          id="nomE"
          type="text"
        />
        <InputField
          variant="nom"
          extra="mt-3 mb-4"
          label="Code Postale : :*"
          placeholder=""
          id="nomE"
          type="text"
        />
      </div>
    ),
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const handleClickEmail = () => {
    setShowContent(false);
    setShowForm(false);
    setPassForm(false);
    setFinal(false);
  };

  const handleCreateAccount = () => {
    // Logique pour créer le compte
    setAccountCreated(true);
    setShowContent(true);
    setShowForm(false);
    setPassForm(false);
    setFinal(false);
  };
  const handlePassForm = () => {
    // Logique pour créer le compte
    setPassForm(true);
    setAccountCreated(false);
    setShowContent(true);
    setShowForm(false);
    setFinal(false);
  };
  const handleFinal = () => {
    // Logique pour créer le compte
    setFinal(true);
    setPassForm(false);
    setAccountCreated(false);
    setShowContent(true);
    setShowForm(false);
  };

  return (
    <div className="lg:grid grid-cols-3 w-full h-screen   ">
      <div className="col-span-2 h-full  w-full  bg-black   ">
        <div
          className="h-full  bg-cover bg-center  bg-black"
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      </div>
      <div className="col-span-1 w-full md:w-sm sm:w-sm h-full  ">
        <div className="ml-5 pt-10 w-max">
          <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                fill="#A3AED0"
              />
            </svg>
            <p className="ml-3  text-gray-600">Acceuil</p>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-16  ">
          <img src={logo} className="block btn- h-[50px] w-auto" alt="" />
        </div>
        {ShowForm && (
          <div className="p-7 flex justify-center items-center h-fit sm:p-5 md:p-10 lg:p-5 xl:p-16 m-0 overflow-y-hidden  ">
            <div className="w-full max-w-full lg:pl-0 xl:max-w-[400px]   ">
              <h3 className="mb-2.5 text-xl font-bold text-gray-600 dark:text-white text-center  ">
                Inscription
              </h3>

              <div className="mb-6 flex items-center justify-around gap-3">
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700 " />
                <p className="text-base text-gray-600 w-full text-center">
                  {" "}
                  en un click{" "}
                </p>
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              </div>
              <div className="flex flex-col items-center justify-center  ">
                <div className="mb-6   flex w-full h-[50px] items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
                  <div className="rounded-full text-xl">
                    <img
                      width="23"
                      height="23"
                      src="https://img.icons8.com/color/48/google-logo.png"
                      alt="google-logo"
                    />
                  </div>
                  <p className="font-medium"> S'inscrire avec Google</p>
                </div>
                <div className="mb-6  vg- flex w-full h-[50px] items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
                  <div className="rounded-full text-xl">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/48/facebook-new.png"
                      alt="facebook-new"
                    />
                  </div>
                  <p className="font-medium"> S'inscrire avec Facebook</p>
                </div>
                <div className="mb-6  vg- flex w-full h-[50px] items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
                  <div className="rounded-full text-xl">
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/ios-filled/50/mac-os.png"
                      alt="mac-os"
                    />
                  </div>
                  <p className="font-medium"> S'inscrire avec Apple</p>
                </div>
              </div>
              <div className="mb-6 flex items-center  gap-3">
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
                <p className="text-base text-gray-600"> ou </p>
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              </div>
              {/* Étape 3 : Afficher le contenu email conditionnellement */}
              <div className="flex flex-col items-end">
                <div className="  w-full">
                  {" "}
                  {/* Ajoutez les classes nécessaires pour définir la largeur de l'InputField */}
                  <InputField
                    variant="auth"
                    extra=" text-gray-500"
                    label="E-mail :"
                    placeholder="mail@simmmple.com"
                    id="email"
                    type="text"
                  />
                </div>
                <button
                  className="texte-white  mt-4 w-[40%] rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200 "
                  onClick={handleClickEmail}
                >
                  {" "}
                  {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Checkbox */}
        {ShowForm && (
          <div className="mb-4 mt-0 flex items-center justify-between m-0  ">
            <div className=" flex items-start">
              <p className="mx-12 font-light text-gray-400 dark:text-white text-center">
                En continuant, vous acceptez les{" "}
                <a className="font-medium ">Conditions d'Utilisation</a> et la{" "}
                <a className="font-medium ">Politique de Confidentialité </a> de
                la société Yialla.
              </p>
            </div>
          </div>
        )}

        {ShowForm && (
          <div className="mt-6 flex flex-col items-center justify-center mb-5">
            <span className="font-medium text-navy-700 dark:text-gray-500">
              Êtes-vous déjà membre ?
            </span>
            <a
              href="/auth/sign-up/default"
              className=" font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
            >
              Se Connecter
            </a>
          </div>
        )}
        {!showContent && (
          <div className="p-7 flex justify-center items-center h-fit sm:p-5 md:p-10 lg:p-5 xl:p-16 m-0 overflow-y-hidden  ">
            <div className="w-full max-w-full  xl:max-w-[400px] ">
              <div>
                <h2 className="sr-only">Steps</h2>

                <div>
                  <p className="text-md font-bold text-gray-500">
                    1/4 - Status
                  </p>

                  <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-2 w-1/3 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-lg font-medium text-gray-500 ">
                  Sélectionnez le type de compte :{" "}
                </h1>
                <div className="mt-6 ">
                  <div className="flex items-center   border-gray-200 rounded dark:border-gray-700">
                    <input
                      type="checkbox"
                      id="react-option-1"
                      value=""
                      className="hidden peer"
                      required=""
                      onClick={() => setActiveButton("Transporteur")}
                      checked={activeButton === "Transporteur"}
                    />
                    <label
                      for="react-option-1"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-500 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <LocalShippingOutlinedIcon />
                        <div className="w-full text-lg font-semibold">
                          Transporteur
                        </div>
                      </div>
                    </label>
                  </div>
                  <div>
                    <div className="flex items-center w-full  border-gray-200 rounded dark:border-gray-700 mt-6">
                      <input
                        type="checkbox"
                        id="react-option-2"
                        value=""
                        className="hidden peer"
                        required=""
                        onClick={() => setActiveButton("expidateur")}
                        checked={activeButton === "expidateur"}
                      />
                      <label
                        for="react-option-2"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-500 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <div className="block">
                          <MarkunreadMailboxOutlinedIcon />
                          <div className="w-full text-lg font-semibold">
                            Expéditeur ou destinataire
                          </div>
                        </div>
                      </label>
                    </div>
                    {activeButton === "Transporteur" && (
                      <>
                        <div>
                          <h1 className="text-lg font-medium text-gray-500 mt-6">
                            Je suis :{" "}
                          </h1>
                          <div>
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                              <input
                                id="option1"
                                type="radio"
                                value="Particulier"
                                name="options"
                                className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-400 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-full focus:outline-none appearance-none checked:bg-yellow-400 checked:border-yellow-300"
                                onChange={() =>
                                  handleRadioChange("Particulier")
                                }
                              />
                              <label
                                htmlFor="option1"
                                className="w-full py-4 ms-2 text-lg font-semibold text-gray-500 dark:text-gray-300"
                              >
                                Particulier
                              </label>
                            </div>

                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mt-2">
                              <input
                                id="option2"
                                type="radio"
                                value="Professionnel"
                                name="options"
                                className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-400 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-full focus:outline-none appearance-none checked:bg-yellow-400 checked:border-yellow-300"
                                onChange={() =>
                                  handleRadioChange("Professionnel")
                                }
                              />
                              <label
                                htmlFor="option2"
                                className="w-full py-4 ms-2 text-lg font-semibold text-gray-500 dark:text-gray-300"
                              >
                                Professionnel
                              </label>
                            </div>

                            {selectedOption && (
                              <div className="mt-4">
                                <p className="text-gray-700">
                                  {optionContents[selectedOption]}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                    {activeButton === "expidateur" && (
                      <>
                        <div className="mt-6">
                          <h1 className="text-lg font-medium text-gray-500 mb-6">
                            Je suis :
                          </h1>
                          <div className="mt-6">
                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                              <input
                                id="option1"
                                type="radio"
                                value="Particulier"
                                name="options"
                                className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-400 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-full focus:outline-none appearance-none checked:bg-yellow-400 checked:border-yellow-300"
                                onChange={() =>
                                  setSelectedOption("Particulier")
                                }
                              />
                              <label
                                htmlFor="option1"
                                className="w-full py-4 ms-2 text-lg font-semibold text-gray-500 dark:text-gray-300"
                              >
                                Particulier
                              </label>
                            </div>

                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mt-2">
                              <input
                                id="option2"
                                type="radio"
                                value="Professionnel"
                                name="options"
                                className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-400 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 rounded-full focus:outline-none appearance-none checked:bg-yellow-400 checked:border-yellow-300"
                                onChange={() =>
                                  setSelectedOption("Professionnel")
                                }
                              />
                              <label
                                htmlFor="option2"
                                className="w-full py-4 ms-2 text-lg font-semibold text-gray-500 dark:text-gray-300"
                              >
                                Professionnel
                              </label>
                            </div>

                            {selectedOption === "Particulier" && (
                              <div className="mt-4 flex items-center justify-center"></div>
                            )}

                            {selectedOption === "Professionnel" && (
                              <InputField
                                variant="nom"
                                extra="mt-4 text-gray-500"
                                label="Nom de l'entreprise :*"
                                placeholder=""
                                id="nomE"
                                type="text"
                              />
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* button */}
              <div className=" flex">
                <button
                  className="text-yellow-500  mt-4 w-[50%] rounded-xl border  border-yellow-500 py-3 text-base font-medium text-white transition duration-200 m-3 "
                  onClick={handleClickEmail}
                >
                  {" "}
                  {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                  <ArrowBackIcon />
                </button>

                <button
                  className="texte-white  mt-4 w-[50%] rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200 m-3 "
                  onClick={handleCreateAccount}
                >
                  {" "}
                  {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                  <ArrowForwardIcon />
                </button>
              </div>
              <div className="mt-6 flex flex-col items-center justify-center mb-5">
                <span className="font-medium text-navy-700 dark:text-gray-500">
                  Êtes-vous déjà membre ?
                </span>
                <a
                  href="/auth/sign-up/default"
                  className=" font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
                >
                  Se Connecter
                </a>
              </div>
            </div>
          </div>
        )}
        {accountCreated && (
          <>
            <div className="p-7 flex justify-center items-center h-fit sm:p-5 md:p-10 lg:p-5 xl:p-16 m-0 overflow-y-hidden  ">
              <div className="w-full max-w-full  xl:max-w-[400px] ">
                <div>
                  <p className="text-md font-bold text-gray-500">
                    2/4 - Informations Personelle
                  </p>

                  <div class="mt-4 overflow-hidden rounded-full bg-gray-200">
                    <div class="h-2 w-2/4 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
                {/* user info */}
                <div className="mb-3 flex w-full items-center justify-center gap-4 mt-6 text-gray-500">
                  <div className="w-1/2 ">
                    <InputField
                      variant="auth"
                      extra="mb-3"
                      label="First Name*"
                      placeholder="yialla"
                      id="firstname"
                      type="text"
                    />
                  </div>

                  <div className="w-1/2">
                    <InputField
                      variant="auth"
                      extra="mb-3"
                      label="Last Name*"
                      placeholder="yialla"
                      id="lastname"
                      type="text"
                    />
                  </div>
                </div>
                <InputField
                  variant="auth"
                  extra="mb-3 text-gray-500"
                  label="Date de naissance*"
                  placeholder="JJ/MM/AA"
                  id="lastname"
                  type="text"
                />
                <InputField
                  variant="auth"
                  extra="mb-3 text-gray-500"
                  label="Pays*"
                  placeholder="....."
                  id="lastname"
                  type="text"
                />
                <InputField
                  variant="auth"
                  extra="mb-3 text-gray-500"
                  label="Numéro de téléphone"
                  placeholder="+XXX - XXXXXXX"
                  id="lastname"
                  type="text"
                />
                <div className=" flex">
                  <button
                    className="text-yellow-500  mt-4 w-[50%] rounded-xl border  border-yellow-500 py-3 text-base font-medium text-white transition duration-200 m-3 "
                    onClick={""}
                  >
                    {" "}
                    {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                    <ArrowBackIcon />
                  </button>

                  <button
                    className="texte-white  mt-4 w-[50%] rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200 m-3 "
                    onClick={handlePassForm}
                  >
                    {" "}
                    {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                    <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {PassForm && (
          <>
            <div className="p-7 flex justify-center items-center h-fit sm:p-5 md:p-10 lg:p-5 xl:p-16 m-0 overflow-y-hidden  ">
              <div className="w-full max-w-full  xl:max-w-[400px] ">
                <div>
                  <p className="text-md font-bold text-gray-500">
                    3/4 - Mot de passe
                  </p>

                  <div class="mt-4 overflow-hidden rounded-full bg-gray-200">
                    <div class="h-2 w-3/4 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <InputField
                    variant="auth"
                    extra="mb-3 text-gray-500"
                    label="mot de passe*"
                    placeholder="Min 8 characters"
                    id="password"
                    type="password"
                  />
                  <InputField
                    variant="auth"
                    extra="mb-3 text-gray-500"
                    label=" confirmez votre mot de passe*"
                    placeholder="confirmez votre mot de passe"
                    id="password"
                    type="password"
                  />
                </div>
                <div className=" flex">
                  <button
                    className="text-yellow-500  mt-4 w-[50%] rounded-xl border  border-yellow-500 py-3 text-base font-medium text-white transition duration-200 m-3 "
                    onClick={handleClickEmail}
                  >
                    {" "}
                    {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                    <ArrowBackIcon />
                  </button>

                  <button
                    className="texte-white  mt-4 w-[50%] rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200 m-3 "
                    onClick={handleFinal}
                  >
                    {" "}
                    {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                    <ArrowForwardIcon />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {Final && (
          <>
            <div className="p-7 flex justify-center items-center h-fit sm:p-5 md:p-10 lg:p-5 xl:p-16 m-0 overflow-y-hidden  ">
              <div className="w-full max-w-full  xl:max-w-[400px] ">
                <div>
                  <p className="text-md font-bold text-gray-500">
                    4/4 - Mot de passe
                  </p>

                  <div class="mt-4 overflow-hidden rounded-full bg-gray-200">
                    <div class="h-2 w-4/4 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
                <div className="mt-6">
                  <h1 className="w-full">
                    <span className="font-bold">Félicitations ! </span> Votre
                    compte est créé avec succès. Bienvenue dans notre communauté
                    ! 🎉
                  </h1>
                  <h3 className=" font-normal text-sm text-gray-400 underline mt-3 mb-3">
                    Un email de confirmation a été envoyé à votre boîte mail.
                    Merci de confirmer votre compte
                  </h3>
                </div>
                <div className=" flex items-center justify-center">
                  <button className="texte-white  mt-4 w-[50%] rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200 m-3 ">
                    {" "}
                    {/* Ajoutez les classes nécessaires pour définir la largeur du bouton */}
                    <a href="http://localhost:5173/seconnecter">YIALLA!</a>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
