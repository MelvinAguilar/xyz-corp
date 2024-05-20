import React from "react";
import { useHistory } from "react-router-dom";
import { ArrowLeftIcon } from "../Icons";

const BackButton = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button
      className="interactive w-fit my-8 flex items-center gap-2 rounded-md px-4 py-2 shadow-lg"
      onClick={handleGoBack}
    >
      <ArrowLeftIcon width={16} height={16} fill="currentColor" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
