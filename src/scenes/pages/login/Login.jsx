import React from "react";

// React hook form
import { useForm } from "react-hook-form";

// React Router
import { useNavigate } from "react-router-dom";

// Translator
import { useTranslation } from "react-i18next";

// components
import SwitchLanguage from "../../../components/SwitchLanguage";
import Button from "../../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // Function to login user and redirect to dashboard page if successful
  // (must use:admin@gmail.com || data.password === "Password123" )
  const onSubmit = (data) => {
    if (data.email === "admin@gmail.com" && data.password === "Password123") {
      const submitted = localStorage.getItem("submitted");
      console.log("submitted");

      if (submitted) {
        navigate("/members-list");
      } else {
        localStorage.setItem("submitted", "true");
        navigate("/members-list");
      }
    } else {
      console.log("error");
      setError("login", {
        type: "manual",
        message: t("loginFailed"),
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="absolute top-5">
        <SwitchLanguage />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`max-w-xl w-2/5 bg-white rounded-lg shadow-lg p-8 mx-auto mt-8 text-${
          t("direction") === "rtl" ? "right" : "left"
        }`}
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-500">
          {t("loginTitle")}
        </h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder={t("placeholdersEmail")}
            className={`mt-1 p-3 border rounded-md ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring focus:border-blue-300 block w-full dir-${t(
              "direction"
            )}`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            {...register("email", {
              required: t("errorMessagesEmailRequired"),
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/,
                message: t("errorMessagesEmailPattern"),
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            {t("passwordLabel")}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder={t("placeholdersPassword")}
            className={`mt-1 p-3 border rounded-md ${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring focus:border-blue-300 block w-full`}
            {...register("password", {
              required: t("passwordRequired"),
              minLength: {
                value: 8,
                message: t("errorminPasswordLength"),
              },
              maxLength: {
                value: 20,
                message: t("errormaxPasswordLength"),
              },
            })}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          title={t("btnTitle")}
          className="bg-blue-500 text-white hover:bg-blue-700 px-6 py-3 rounded-full transition duration-300"
        />

        {/* Error Message */}
        {errors.login && (
          <p className="mt-4 text-red-500 text-center">
            {errors.login.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
