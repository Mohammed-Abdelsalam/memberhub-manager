import React from "react";

// translate
import { useTranslation } from "react-i18next";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => toggleLanguage("en")}
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          i18n.language === "en" ? "opacity-100" : "opacity-50"
        }`}
      >
        English
      </button>
      <button
        onClick={() => toggleLanguage("ar")}
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          i18n.language === "ar" ? "opacity-100" : "opacity-50"
        }`}
      >
        العربية
      </button>
    </div>
  );
};

export default SwitchLanguage;
