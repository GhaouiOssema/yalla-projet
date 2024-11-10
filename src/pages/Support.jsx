import { TbLocation } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { BsMailboxFlag } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import Button from "../components/forms/Button";
import Inpute from "../components/forms/Inpute";

const Support = () => {
  return (
    <section className="bg-white flex justify-center lg:p-10 overflow-hidden w-full h-full">
      <div className="container ">
        <div className="flex flex-wrap lg:justify-between mx-4 ">
          <div className="w-full h-full lg:w-1/2 xl:w-6/12 px-5 ">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
                  Contactez-nous
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-[Poppins]">
                  PRENEZ CONTACT AVEC NOUS
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400 font-[Poppins]">
                  Notre équipe est là pour vous aider avec vos problèmes,
                  réclamations ou autres demandes. Nous répondons généralement
                  dans un délai de 1 à 3 heures.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <TbLocation className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <a
                      className="text-gray-500 hover:underline dark:text-gray-400 font-[Poppins]"
                      href="#"
                    >
                      123 Rue de la Paix, 75000 Paris, France
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoTimeOutline className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400 font-[Poppins]">
                      24/7
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BsMailboxFlag className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <a
                      className="text-gray-500 hover:underline dark:text-gray-400 font-[Poppins]"
                      href="#"
                    >
                      contact@example.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LuPhone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <a
                      className="text-gray-500 hover:underline dark:text-gray-400 font-[Poppins]"
                      href="#"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold font-[Poppins]">
                    Envoyez-nous un message sur les réseaux
                  </h3>
                  <div className="flex items-center space-x-4">
                    <a
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-[Poppins]"
                      href="#"
                    >
                      <FaInstagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-[Poppins]"
                      href="#"
                    >
                      <IoLogoTiktok className="h-6 w-6" />
                      <span className="sr-only">TikTok</span>
                    </a>
                    <a
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 font-[Poppins]"
                      href="#"
                    >
                      <FaFacebookF className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-5/12 mt-4">
            <div className="bg-gray-50  rounded-lg p-8 sm:p-12 border lg:m-0 m-0 ">
              <form>
                <div className="mb-3">
                  <Inpute placeholder="Your Name" type="text" />
                </div>
                <div className="mb-3">
                  <Inpute placeholder="Your Email" type="email" />
                </div>
                <div className="mb-3">
                  <Inpute placeholder="Your Phone" type="email" />
                </div>
                <div className="mb-3">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="w-full p-3 pr-4 border rounded text-sm focus:outline-none focus:shadow-outline-yellow"
                  ></textarea>
                </div>
                <div  className="flex mt-3 items-center justify-center">

                  <Button buttonName="Envoyer" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
