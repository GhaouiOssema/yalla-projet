import { useState } from "react";
import { Link } from "react-router-dom";

const MidumeCardLayout = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="text-center w-full bg-white p-4 rounded-lg  h-full border">
      <div className="mb-[15px] flex flex-col">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap text-sm font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            {tabs?.map((tab) => (
              <li role="presentation" key={tab.id}>
                <button
                  className={`inline-block p-2 border-b-2 rounded-t-lg ${
                    activeTab === tab.id
                      ? "border-[#FF9800]"
                      : "border-transparent"
                  }`}
                  id={`${tab.id}-tab`}
                  data-tabs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="default-tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                activeTab === tab.id ? "" : "hidden"
              }`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tab.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidumeCardLayout;
