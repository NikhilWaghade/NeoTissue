import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LuLoader } from "react-icons/lu";

// CONFIG IMPORTS
import { SERVER_DOMAIN, CONTACT_CONFIG } from "../config";
import PrimaryBtn from "./PrimaryBtn";

// COMPONENTS IMPORTS

const FormWrapper = ({
  setOpen,
  successMsg,
  submitBtn = "Submit",
  children,
  btnBg = "gradient",
  schema,
}) => {
  // STATES AND VARIABLES
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // FUNCTIONS
  const sendMail = async (formData) => {
    try {
      const response = await fetch(`${SERVER_DOMAIN}/email/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      return response.status;
    } catch (error) {
      console.log("Send Mail Error :: ", error);
      return 500;
    }
  };

  const onSubmit = methods.handleSubmit(async (data) => {
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await sendMail(data);

      if (response === 200) {
        methods.reset();
        setMessage({
          type: "success",
          text: successMsg || CONTACT_CONFIG.SUCCESS_MESSAGE,
        });
        if (setOpen) setOpen(false);
      } else {
        setMessage({
          type: "error",
          text: CONTACT_CONFIG.ERROR_MESSAGE,
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: CONTACT_CONFIG.ERROR_MESSAGE,
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} noValidate>
          {children}

          {/* Message Display */}
          {message.text && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm font-medium ${
                message.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {message.text}
            </div>
          )}

          <div className="mt-5 flex justify-center">
            <PrimaryBtn bg={btnBg} disabled={loading} className="w-full">
              {!loading ? (
                submitBtn
              ) : (
                <div className="flex items-center gap-2">
                  <LuLoader className="text-xl animate-spin" />
                  <span>Sending...</span>
                </div>
              )}
            </PrimaryBtn>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormWrapper;
