import React, { useEffect, useState } from "react";

// React hook form
import { useForm } from "react-hook-form";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addMember, editMember } from "../redux/memberReducer";
import { Link, useNavigate } from "react-router-dom";

// Translator
import { useTranslation } from "react-i18next";

// Components
import Button from "./Button";

const Form = ({ btnTitle, memberId }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const numberID = watch("numberID");
  const selectedGender = watch("gender");

  useEffect(() => {
    if (memberId && members) {
      const member = members.find((m) => m.id === parseInt(memberId, 10));
      if (member) {
        setValue("memberName", member.memberName);
        setValue("email", member.email);
        setValue("membershipType", member.membershipType);
        setValue("subMembership", member.subMembership);
        setValue("numberID", member.numberID);
        setValue("gender", member.gender);
        setValue("address", member.address);
        setValue("startOfMembership", member.startOfMembership);
        setValue("dateOfBirth", member.dateOfBirth);
        setValue("phoneNumber", member.phoneNumber);
        setPhoto(member.photo);
      }
    }
  }, [memberId, members, setValue]);

  // handle Birth Day
  const splitStringToDigits = (inputString) => {
    if (
      typeof inputString === "string" &&
      inputString.length === 14 &&
      /^\d+$/.test(inputString)
    ) {
      return inputString.split("").map(Number);
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (numberID) {
      const result = splitStringToDigits(numberID);
      let finalString = "";
      if (result !== null) {
        const stringGroups = [
          result[1].toString() + result[2],
          result[3].toString() + result[4],
          result[5].toString() + result[6],
        ];
        finalString = stringGroups.join("-");
      }
      setValue("dateOfBirth", finalString);
    }
  }, [numberID, setValue]);

  const onSubmit = (data) => {
    if (!data.gender) {
      setError("gender", {
        type: "manual",
        message: "Please Choose gender",
      });
      return;
    }

    // handle photo
    if (watch("photo")) {
      const photoBase64 = watch("photo");
      data.photo = photoBase64;
    }

    // Update
    if (memberId) {
      dispatch(
        editMember({
          id: parseInt(memberId, 10),
          ...data,
          photo,
          dateOfBirth: watch("dateOfBirth"),
        })
      );
    } else {
      dispatch(
        addMember({
          id: members[members.length - 1].id + 1,
          ...data,
          photo,
          dateOfBirth: watch("dateOfBirth"),
        })
      );
    }
    navigate("/members-list");
  };

  // set Photo file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 text-${
        t("direction") === "rtl" ? "right" : "left"
      }`}
    >
      <div>
        <label
          htmlFor="memberName"
          className="block text-sm font-medium text-gray-700"
        >
          Member Name
        </label>
        <input
          id="memberName"
          name="memberName"
          placeholder={
            i18n.language === "ar"
              ? "عنوان البريد الإلكتروني (مطلوب)"
              : "Email (required)"
          }
          type="text"
          className={`mt-1 p-2 border rounded-md ${
            errors.memberName ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring focus:border-blue-300 block w-full`}
          {...register("memberName", {
            required:
              i18n.language === "ar"
                ? "يرجى إدخال اسم العضو"
                : "Please enter the member's name",
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message:
                i18n.language === "ar"
                  ? "يرجى إدخال اسم صالح (أحرف أبجدية وأرقام فقط)"
                  : "Please enter a valid name (only alphanumeric characters)",
            },
          })}
        />
        {errors.memberName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.memberName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder={
            i18n.language === "ar"
              ? "عنوان البريد الإلكتروني (مطلوب)"
              : "Email (required)"
          }
          className={`mt-1 p-2 border rounded-md ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring focus:border-blue-300 block w-full`}
          {...register("email", {
            required:
              i18n.language === "ar"
                ? "يرجى إدخال عنوان البريد الإلكتروني"
                : "Please enter the email address",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/,
              message:
                i18n.language === "ar"
                  ? "يرجى إدخال عنوان بريد إلكتروني صالح"
                  : "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Select Membership Type */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="membershipType"
        >
          Membership Type
          <span className="text-red-500 pl-1">*</span>
        </label>
        <select
          id="membershipType"
          name="membershipType"
          {...register("membershipType", {
            required:
              i18n.language === "ar"
                ? "نوع العضوية مطلوب"
                : "Membership Type is required.",
          })}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">
            {i18n.language === "ar"
              ? "اختر نوع العضوية"
              : "Select Membership Type"}
          </option>
          <option value="Basic">
            {i18n.language === "ar" ? "أساسي" : "Basic"}
          </option>
          <option value="Premium">
            {i18n.language === "ar" ? "متميز" : "Premium"}
          </option>
          <option value="VIP">{i18n.language === "ar" ? "VIP" : "VIP"}</option>
        </select>
        {errors.membershipType && (
          <span className="text-red-500">{errors.membershipType.message}</span>
        )}
      </div>

      {/* Checkbox - Subscribe to Newsletter */}
      <div className="mb-4">
        <label className="flex items-center">
          <input
            id="subMembership"
            name="subMembership"
            type="checkbox"
            {...register("subMembership")}
            className="mr-2"
          />
          {i18n.language === "ar"
            ? "الاشتراك في النشرة الإخبارية"
            : "Subscribe to Newsletter"}
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          ID Number
        </label>
        <input
          id="numberID"
          name="numberID"
          type="number"
          className={`mt-1 p-2 border rounded-md ${
            errors.memberName ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring focus:border-blue-300 block w-full`}
          {...register("numberID", {
            required: "Please enter the ID number",

            minLength: {
              value: 14,
              message: "The ID number must be 14 digits",
            },
            maxLength: {
              value: 14,
              message: "The ID number must be 14 digits",
            },
          })}
        />
        {errors.numberID && (
          <p className="text-red-500">{errors.numberID.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender
          <span className="text-red-500 pl-1">*</span>
        </label>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              value="Male"
              {...register("gender", {
                required: "Please select the gender",
              })}
              defaultChecked={selectedGender === "Male"}
            />
            <label htmlFor="male" className="ml-2">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="female"
              value="Female"
              {...register("gender", {
                required: "Please select the gender",
              })}
              defaultChecked={selectedGender === "Female"}
            />
            <label htmlFor="female" className="ml-2">
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="other"
              value="Other"
              {...register("gender", {
                required: "Please select the gender",
              })}
              defaultChecked={selectedGender === "Other"}
            />
            <label htmlFor="other" className="ml-2">
              Other
            </label>
          </div>
        </div>
        {errors.gender && (
          <span className="text-red-500">{errors.gender.message}</span>
        )}
      </div>

      {/* Text Area - Address */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="address"
        >
          Address
          <span className="text-red-500 pl-1">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          {...register("address", { required: "Address is required." })}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
        {errors.address && (
          <span className="text-red-500">{errors.address.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date of Birth
        </label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="text"
          {...register("dateOfBirth", { disabled: true })}
          className="mt-1 p-2 border rounded-md block w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Start Membership date
        </label>
        <input
          id="startOfMembership"
          name="startOfMembership"
          type="date"
          onChange={(e) => setValue("startOfMembership", e.target.value)}
          className={`mt-1 p-2 border rounded-md ${
            errors.startOfMembership ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring focus:border-blue-300 block w-full`}
          {...register("startOfMembership", {
            required: "Please select the membership start date",
          })}
        />
        {errors.startOfMembership && (
          <span className="text-red-500">
            {errors.startOfMembership.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          placeholder="exp.: +971501234567"
          {...register("phoneNumber", {
            required: "Please enter the phone number",
            pattern: {
              value: /^(\+?\d{1,4}[\s-]?)?(\d{10,14})$/,
              message: "Please enter a valid phone number",
            },
          })}
          className={`mt-1 p-2 border rounded-md ${
            errors.phoneNumber ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring focus:border-blue-300 block w-full`}
        />
        {errors.phoneNumber && (
          <span className="text-red-500">{errors.phoneNumber.message}</span>
        )}
      </div>

      {/* Photo Upload */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="photo"
        >
          Photo Upload (Optional)
        </label>
        <div className="relative flex items-center gap-10">
          <div className="">
            <input
              id="photo"
              name="photo"
              type="file"
              className="sr-only"
              {...register("photo")}
              onChange={handleImageChange}
            />
            <label
              htmlFor="photo"
              className="cursor-pointer inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-blue-700"
            >
              Choose a Photo
            </label>
          </div>
          {photo && (
            <img
              src={photo}
              alt="Selected"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-between item-center">
        <Button
          type="submit"
          title={btnTitle}
          className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
        />
        <Link
          to="/members-list"
          className="flex items-center bg-gray-500 hover:bg-gray-600 transition duration-300 text-white px-6 py-3 rounded"
        >
          Back
        </Link>
      </div>
    </form>
  );
};
export default Form;
