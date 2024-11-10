import { useState } from "react";
import { data1 } from "../utils/DashboardData";
import SmallCardLayout from "./card/SmallCardLayout";

const AccordionSection = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid w-full mx-auto">
      <div className=" bg-white border-b border-gray-300">
        <details className={`group ${isOpen ? "open" : ""} p-3`}>
          <summary
            className="flex justify-between items-center font-medium cursor-pointer list-none"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span>
              <span className="text-primary font-semibold">{title}</span>
            </span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6" color="#050816"></path>
              </svg>
            </span>
          </summary>
          <div
            className={`mt-5 transition-opacity duration-500  ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="grid md:gap-6 grid-cols-1">
              {data1.map((elem, idx) => (
                <SmallCardLayout
                  key={idx}
                  text={elem.title}
                  title={elem.text}
                  Icon={elem.icon}
                  type="mobile"
                />
              ))}
            </div>
          </div>
          <div className="mt-5"></div>
        </details>
      </div>
    </div>
  );
};

export default AccordionSection;
