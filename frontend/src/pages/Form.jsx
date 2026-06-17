import React from "react";
import FormInfo from "../components/Form/FormInfo";
import FormContent from "../components/Form/FormContent";

const Form = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <FormInfo />
      <FormContent />
    </div>
  );
};

export default Form;
