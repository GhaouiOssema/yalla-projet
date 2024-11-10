import "tailwindcss/tailwind.css";
import Button from "../components/forms/Button";
import Inpute from "../components/forms/Inpute";
import Icons from "../components/Icons/Icons";
import {  useState } from "react";
import { postData } from '../components/apiAndFunction/apiService';
import { API_ENDPOINTS } from '../components/apiAndFunction/apiEndpoints';
export default function Component() {
  const [PhoneNbr, setPhoneNbr] = useState({
    PhoneNbr:"",
  });
  const [CodeMail, setCodeMail] = useState({
    CodeMail:"",
  });
  const CodeMailhandleChange = (e) => {
    const { name, value } = e.target;
    setCodeMail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const PhoneNbrhandleChange = (e) => {
    const { name, value } = e.target;
    setPhoneNbr((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const PhonehandleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Post the card form data to the backend API
     await postData(API_ENDPOINTS.Verification_Phone, PhoneNbr);
      alert("Code Sended successfully!");
      // Reset form data after submission
      setPhoneNbr({
        PhoneNbr:"",
      }); 
       } catch (error) {
      console.error("Error Verification Phone Number:", error);
    }
  };
  const MailhandleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      // Post the card form data to the backend API
      await postData(API_ENDPOINTS.Verification_Mail, CodeMail);
      alert("Code Sended successfully!");
      // Reset form data after submission
      setCodeMail({
        CodeMail:"",
      }); 
      } catch (error) {
      console.error("Error Code:", error);
    }
  };
  return (
    <div className="flex w-full p-10 min-h-screen flex-col items-center   bg-white dark:bg-gray-950">
      <h1 className="mb-8 text-3xl font-bold">Verification</h1>
      <div className="w-full max-w-6xl space-y-6 px-4 sm:px-0 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-800">
                  <Icons.SmartphoneIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium">Mobile Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-500">
                  Completed
                </span>
              </div>
            </div>
            <form className="space-y-4 p-6" onSubmit={PhonehandleSubmit}>
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium">+1</span>
                </div>
                <Inpute 
                       placeholder="Enter your mobile number" 
                       type="tel" 
                       name="PhoneNbr"
                       value={PhoneNbr.PhoneNbr}
                       onChange={PhoneNbrhandleChange}
                />
              </div>
              <div className="flex justify-end">
                <Button buttonName="Verification Code" type="submit"/>
              </div>
            </form>
          </div>
          <div className="card bg-base-100 border rounded-lg dark:bg-gray-950">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-800">
                  <Icons.MailboxIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium">Email Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-500">
                  Completed
                </span>
              </div>
            </div>
            <form className="space-y-4 p-6" onSubmit={MailhandleSubmit}>
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium">Code</span>
                </div>
                <Inpute 
                        placeholder="Enter verification code" 
                        type="text" 
                        name="CodeMail"
                        value={CodeMail.CodeMail}
                        onChange={CodeMailhandleChange}
                />
              </div>
              <div className="flex justify-end">
                <Button buttonName="Verify Email"   type="submit" />
              
              </div>
            </form>
          </div>
        </div>
        <div className="card bg-base-100 border rounded-lg dark:bg-gray-950">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-800">
                <Icons.CreditCardIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium">Identity Verification</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-gray-400" />
              <span className="text-sm font-medium text-gray-400">Pending</span>
            </div>
          </div>
          <form className="space-y-4 p-6">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium">ID</span>
              </div>
              <div className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Icons.UploadIcon className="h-8 w-8 text-gray-400 dark:text-gray-600" />
                  <span className="text-sm font-medium text-gray-400 dark:text-gray-600">
                    Upload your ID
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <Button buttonName=" Verify Identity" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




