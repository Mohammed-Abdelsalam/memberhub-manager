import React from "react";

// translate
import { useTranslation } from "react-i18next";

const Button = ({ type, title, children, className, onClick }) => {
  const { t } = useTranslation();
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
      {t(title)}
    </button>
  );
};

export default Button;
