import React from "react";
import FormInfo from "../components/Form/FormInfo";
import FormContent from "../components/Form/FormContent";

const Form = () => {
  return (
    <div className="h-screen w-screen flex">
      <FormInfo />
      <FormContent />
    </div>
  );
};

export default Form;
