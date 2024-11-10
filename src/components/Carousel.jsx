import { useEffect, useState } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 5; // Update this according to the total number of slides

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Adjust autoplay interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative h-[300px] lg:h-[530px] w-full  flex justify-center z-300"
      data-carousel="slide"
    >
      <div className="relative w-full  overflow-hidden rounded-lg ">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              currentSlide === index ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <div className="absolute flex flex-col justify-center  items-center w-full h-full">
              <div className="bg-yellow-400 rounded-lg w-full h-full flex flex-col justify-center items-center">
                <p className="text-white font-medium text-xl ">
                  Contenu {index + 1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-25 flex -translate-x-1/2 bottom-[15%] left-1/2 space-x-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-6 h-1 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-yellow-300"
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
