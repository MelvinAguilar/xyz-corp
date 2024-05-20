import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../Icons";

const BackButton = ({
  title = "Volver a la página anterior",
}: {
  title?: string;
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <button
      className="bg-secondary hover:bg-secondary-hover my-8 flex w-fit items-center gap-2 rounded-md border border-[#363749]/[.9] px-4 py-2 shadow-lg"
      onClick={handleGoBack}
    >
      <ArrowLeftIcon width={16} height={16} fill="currentColor" />
      <span>{title}</span>
    </button>
  );
};

export default BackButton;
