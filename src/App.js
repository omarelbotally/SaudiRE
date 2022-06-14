import React from "react";
import { Routes, Route } from "react-router-dom";

import Analyst from "./Pages/Analyst/Analyst";
import Overview from "./Pages/Overview/Overview";
import Profile from "./Pages/Profile/Profile";
import Mergers from "./Pages/Mergers/Mergers";
import Subscription from "./Pages/Subscription/Subscription";
import Investors from "./Pages/Investors/Investors";
import FinancialStatements from "./Pages/Financial-statements/FinancialStatements";
import FinancialRatios from "./Pages/Financial-ratios/FinancialRatios";
import Corporate from "./Pages/Corporate/Corporate";
import Chart from "./Pages/Chart/Chart";
import Business from "./Pages/Business/Business";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/analyst" element={<Analyst />} />
        <Route path="/mergers" element={<Mergers />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/financialstatments" element={<FinancialStatements />} />
        <Route path="/financialratios" element={<FinancialRatios />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/Business" element={<Business />} />
      </Routes>
    </div>
  );
};

export default App;
