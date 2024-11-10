import { useEffect, useState } from "react";
import { getData } from '../components/apiAndFunction/apiService';
import { API_ENDPOINTS } from '../components/apiAndFunction/apiEndpoints';
import Button from "../components/forms/Button";

function Accordion({ title, content, idx, isOpen, handleClick }) {
  return (
    <li className="bg-white my-2 border rounded-lg">
      <h2
        onClick={() => handleClick(idx)}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-yellow-500 h-6 w-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h2>
      <div
        className={`border-l-2 border-yellow-500 overflow-hidden max-h-0 duration-300 transition-all ${
          isOpen ? "max-h-screen" : ""
        }`}
      >
        <p className="p-3 text-gray-900">{content}</p>
      </div>
    </li>
  );
}

function App() {
  const [accordion, setAccordion] = useState([]); // State to store isOpen for each FAQ
  const [FAQ, setFAQ] = useState([]); // State to store FAQ data
  const [error, setError] = useState(null); // Error state to handle issues with data fetching
  const [loading, setLoading] = useState(true); // Loading state to handle the async nature of the request

  const fetchLivraisons = async () => {
    try {
      const response = await getData(API_ENDPOINTS.GET_FAQ); // Fetch the JSON data
      if (response && Array.isArray(response)) {
        setFAQ(response); // Assuming the API response is an array of FAQ items
        setAccordion(response.map(() => ({ isOpen: false }))); // Set initial accordion state based on FAQ length
      } else {
        setError("Invalid response format");
      }
    } catch (err) {
      setError(err.message); // Catching errors and updating state
    } finally {
      setLoading(false); // Setting loading to false after the request completes
    }
  };

  useEffect(() => {
    fetchLivraisons(); // Fetch data when component mounts
  }, []); // Empty dependency array to avoid multiple API calls

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div className="h-screen bg-white w-full">
    <main className="p-5 bg-light-blue">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">
            FAQ - Order, Shipping, Etc.
          </h2>
          <ul className="flex flex-col mt-10">

              <div>
                <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
                  Oups, tu n as pas encore de FAQ. Allons chercher une ?
                </h1>
                <div className="mt-5 text-center">
                  <Button buttonName="Add FAQ!" />
                </div>
              </div>
          </ul>
        </div>
      </div>
    </main>
  </div>
  }

  const handleClick = (idx) => {
    setAccordion((prevState) =>
      prevState.map((item, index) => ({
        ...item,
        isOpen: index === idx ? !item.isOpen : false, // Toggle only the clicked accordion item
      }))
    );
  };

  return (
    <div className="h-screen bg-white w-full">
      <main className="p-5 bg-light-blue">
        <div className="flex justify-center items-start my-2">
          <div className="w-full sm:w-10/12 md:w-1/2 my-1">
            <h2 className="text-xl font-semibold text-vnet-blue mb-2">
              FAQ - Order, Shipping, Etc.
            </h2>
            <ul className="flex flex-col mt-10">
              {FAQ.length > 0 ? (
                FAQ.map((item, idx) => (
                  <Accordion
                    key={idx}
                    title={item.question}
                    content={item.answer}
                    idx={idx}
                    isOpen={accordion[idx]?.isOpen || false} // Handle isOpen based on state
                    handleClick={handleClick}
                  />
                ))
              ) : (
                <div>
                  <h1 className="mt-5 text-md font-normal text-center max-w-300px mx-auto">
                    Oups, tu n as pas encore de FAQ. Allons chercher une ?
                  </h1>
                  <div className="mt-5 text-center">
                    <Button buttonName="Add FAQ!" />
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
