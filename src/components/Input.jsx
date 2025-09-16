import React from "react";
import { useFormContext } from "react-hook-form";

// UTILS IMPORTS
import { BsExclamationCircle } from "react-icons/bs";

const Input = ({ name, label, placeholder, type }) => {
  // STATES AND VARIABLES
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return name !== "message" ? (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 font-medium text-gray-700 font-roboto">
          {label}
        </label>
      )}
      <div className="w-full relative">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          {...register(name)}
          className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-purple-500 transition font-roboto"
        />
        {errors[name] && (
          <>
            <InputError />
            <p className="text-red-500 text-sm mt-1 font-roboto">
              {errors[name]?.message}
            </p>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 font-medium text-gray-700 font-roboto">
          {label}
        </label>
      )}
      <div className="w-full relative">
        <textarea
          rows={5}
          placeholder={placeholder}
          name={name}
          {...register(name)}
          className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-purple-500 transition font-roboto resize-none"
        />
        {errors[name] && (
          <>
            <InputError />
            <p className="text-red-500 text-sm mt-1 font-roboto">
              {errors[name]?.message}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;

const InputError = ({ message }) => {
  return (
    <span className="absolute top-3 right-3 font-black text-xl">
      <BsExclamationCircle className="text-red-500" />
    </span>
  );
};

export const Select = ({ name, options, placeholder, defaultValue, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 font-medium text-gray-700 font-roboto">
          {label}
        </label>
      )}
      <div className="w-full relative">
        <select
          {...register(name)}
          defaultValue={defaultValue || ""}
          className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-purple-500 transition font-roboto"
        >
          <option value="">{placeholder}</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {errors[name] && (
          <>
            <InputError />
            <p className="text-red-500 text-sm mt-1 font-roboto">
              {errors[name]?.message}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
