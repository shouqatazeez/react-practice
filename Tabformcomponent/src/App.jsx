import React, { useState } from "react";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";

const data = [
  {
    name: "profile",
    component: <Profile />,
  },
  {
    name: "Interests",
    component: <Interests />,
  },
  {
    name: "Settings",
    component: <Settings />,
  },
];
const App = () => {
  const [activeTab, SetActiveTab] = useState(0);
  const ActiveTab = data[activeTab].component;
  return (
    <div className="flex flex-col p-4">
      <div className="flex  mb-1 gap-0.5">
        {data.map((n, index) => (
          <div
            onClick={() => SetActiveTab(index)}
            className="border p-2 cursor-pointer rounded"
            key={index}
          >
            {n.name}
          </div>
        ))}
      </div>
      <div className=" border h-80 w-80 p-4 rounded">{ActiveTab} </div>
    </div>
  );
};

export default App;
