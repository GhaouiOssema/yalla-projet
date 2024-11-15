import React, { useState, useEffect } from "react";
import {
  Smartphone,
  RefreshCcw,
  CheckCircle,
  XCircle,
  ChevronLeft,
} from "lucide-react";

const PhoneVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [prefix, setPrefix] = useState("+33");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState("");
  const [cooldownTime, setCooldownTime] = useState(0);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendCount, setResendCount] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const storedVerificationStatus = localStorage.getItem("isVerified");
    if (storedVerificationStatus === "true") {
      setIsVerified(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isVerified", isVerified);
  }, [isVerified]);

  const toggleAccordion = () => {
    if (!isVerified) {
      setIsOpen(!isOpen);
    }
  };

  const handleNextStep = () => {
    if (phoneNumber.length >= 8) {
      setStep(2);
    } else {
      setError("Veuillez entrer un numéro de téléphone valide.");
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setError("");
    }
  };

  const handleCodeChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleResendCode = () => {
    setVerificationCode(["", "", "", "", "", ""]);
    setError("");
    setResendCount((prevCount) => prevCount + 1);

    if (resendCount >= 2) {
      setCooldownTime(60);
      setIsResendDisabled(true);
    }
  };

  const verifyCode = () => {
    const enteredCode = verificationCode.join("");
    const correctCode = "000000";
    if (enteredCode === correctCode) {
      setStep(3);
      setError("");
      setIsVerified(true);
    } else {
      setError("Code erroné. Veuillez réessayer.");
    }
  };

  useEffect(() => {
    if (verificationCode.every((digit) => digit !== "")) {
      verifyCode();
    }
  }, [verificationCode]);

  useEffect(() => {
    let timer;
    if (cooldownTime > 0) {
      timer = setInterval(() => {
        setCooldownTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
      setResendCount(0);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [cooldownTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Phone Verification
      </h2>
      <div>
        <button
          onClick={toggleAccordion}
          className={`w-full px-4 py-2 text-left font-medium focus:outline-none border h-16 rounded-lg flex items-center ${
            isVerified
              ? "text-green-600 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          disabled={isVerified}
        >
          <Smartphone />
          {isVerified ? "Done" : "Show Details"}
        </button>
        {isOpen && !isVerified && (
          <div className="p-6 space-y-6 text-gray-700">
            {step === 2 && (
              <button
                onClick={handlePreviousStep}
                className="mb-4 p-0 h-auto flex items-center text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Retour
              </button>
            )}
            {step === 1 && (
              <>
                <p className="text-center font-semibold">
                  Step 1: Enter Phone Number
                </p>
                <div className="flex space-x-2">
                  <select
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    className="w-[100px] border rounded p-2"
                  >
                    <option value="+33">+33</option>
                    <option value="+216">+216</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-grow border rounded p-2"
                  />
                </div>
                <button
                  onClick={handleNextStep}
                  className="w-full mt-2 bg-blue-500 text-white p-2 rounded"
                >
                  Vérifier
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <p className="text-lg font-semibold text-center">
                  Étape 2 : Entrez le code de vérification
                </p>
                <div className="flex justify-between space-x-3 mb-4">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-lg rounded-lg bg-gray-50"
                    />
                  ))}
                </div>
                {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
                <p className="text-sm text-gray-600 mb-2">
                  Vous n'avez pas reçu le code ?
                </p>
                <button
                  onClick={handleResendCode}
                  disabled={isResendDisabled}
                  className="w-full flex items-center justify-center bg-gray-200 p-2 rounded"
                >
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  {isResendDisabled
                    ? `Réessayer dans ${formatTime(cooldownTime)}`
                    : "Renvoyer"}
                </button>
                {isResendDisabled && (
                  <p className="text-sm text-orange-600 mt-2">
                    Veuillez attendre avant de demander un nouveau code.
                  </p>
                )}
              </>
            )}
            {step === 3 && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Phone Number Verified!
                </h2>
                <p className="text-gray-600">
                  Your phone number {phoneNumber} has been successfully
                  verified.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneVerification;
