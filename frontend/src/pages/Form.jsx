import React from "react";
import FormInfo from "../components/Form/FormInfo";
import FormContent from "../components/Form/FormContent";

const Form = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-stretch lg:items-start p-4 sm:p-8 md:p-12 lg:p-16 gap-8 lg:gap-0 bg-[#F9F2E0] overflow-x-hidden">
      <FormInfo />
      <FormContent />
    </div>
  );
};

export default Form;
