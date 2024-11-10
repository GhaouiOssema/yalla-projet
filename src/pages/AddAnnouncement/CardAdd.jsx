import { useState } from "react";
import AddCardItem from "./AddCardItem";
import StepsItems from "./StepsItems";
import Step4 from "./Step4";

function CardAdd() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // State to hold the form data for all steps
  const [formData, setFormData] = useState({
    cartItems: [], // Data from AddCardItem
    removalDetails: {}, // Data from StepsItems (Enlèvement)
    deliveryDetails: {}, // Data from StepsItems (Livraison)
  });

  // Function to handle the next button click
  const handleNext = (data) => {
    setFormData((prevData) => {
      if (currentStep === 1) {
        // Update cartItems for step 1
        return {
          ...prevData,
          cartItems: data, // Data from AddCardItem step
        };
      } else if (currentStep === 2) {
        // Update removalDetails for step 2
        return {
          ...prevData,
          removalDetails: data, // Data from Enlèvement step
        };
      } else if (currentStep === 3) {
        // Update deliveryDetails for step 3
        return {
          ...prevData,
          deliveryDetails: data, // Data from Livraison step
        };
      } else if (currentStep === 4) {
        // Update finalDetails for step 4
        return {
          ...prevData,
          finalDetails: data, // Data from Step4 (final step)
        };
      } else {
        return prevData;
      }
    });
    console.log("Updated formData:", {
      ...formData,
      cartItems: currentStep === 1 ? data : formData.cartItems,
      removalDetails: currentStep === 2 ? data : formData.removalDetails,
      deliveryDetails: currentStep === 3 ? data : formData.deliveryDetails,
    });
    // Proceed to the next step
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to handle the previous button click
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log("Form submitted with data:", formData); // Logs form data to the console
  };

  return (
    <>
      <div className="container w-full lg:w-full lg:px-[20%] md:w-[70%] p-5 mt-3">
        {/* Progress Bar */}
        <div className="flex items-center space-x-2 mb-10">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="relative w-30 h-1 flex-1">
              <div
                className={`absolute inset-0 h-full ${
                  currentStep > index ? "bg-yellow-500" : "bg-gray-200"
                } w-1/2 rounded-l-full`}
              />
              <div
                className={`absolute inset-0 h-full ${
                  currentStep > index + 1 ? "bg-yellow-500" : "bg-gray-200"
                } w-1/2 left-1/2 rounded-r-full`}
              />
            </div>
          ))}
        </div>

        {/* Step Components */}
        <form className="grid gap-4" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <AddCardItem
              cartItems={formData.cartItems}
              handleNextSteps={handleNext}
            />
          )}

          {currentStep === 2 && (
            <StepsItems
              name="Enlèvement"
              details={formData.removalDetails}
              handleNextSteps={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {currentStep === 3 && (
            <StepsItems
              name="Livraison"
              details={formData.deliveryDetails}
              handleNextSteps={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {currentStep === 4 && (
            <Step4
              formData={formData} // Pass the entire formData to Step4
              handlePrevious={handlePrevious}
            />
          )}
        </form>
      </div>
    </>
  );
}

export default CardAdd;
