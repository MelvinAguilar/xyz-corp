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
      className="my-8 flex w-fit items-center gap-2 rounded-md border border-[#363749]/[.3] bg-gray-100 px-4 py-2 shadow-md hover:bg-gray-300/50 dark:border-[#363749]/[.3]  dark:bg-secondary dark:hover:bg-secondary-hover"
      onClick={handleGoBack}
    >
      <ArrowLeftIcon width={16} height={16} fill="currentColor" />
      <span>{title}</span>
    </button>
  );
};

export default BackButton;
