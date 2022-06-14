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
import { useTranslation, Trans } from "react-i18next";
const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
  ar: { nativeName: "Arabic" },
};

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("description.part2")}
      </a>
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
