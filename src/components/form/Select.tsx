import { useRef, useState } from "react";
import { useController, Control } from "react-hook-form";
import { FilterType } from "../../types/common";
import { ArrowMenu } from "../Icons";
import { useOuterClick } from "../../lib/utils";

interface SelectProps {
  control: Control<{
    name: string;
    email: string;
    gender: string;
    status: "active" | "inactive";
  }>;
  name: "gender" | "status";
  labelname: string;
  options: FilterType[];
}

const Select: React.FC<SelectProps> = ({
  control,
  labelname,
  name,
  options,
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menubarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  useOuterClick(menubarRef, closeMenu);

  const handleOptionClick = (optionValue: string) => {
    const selectedOption = options.find(
      (option) => option.name === optionValue,
    );
    field.onChange(selectedOption?.value);

    closeMenu();
  };

  return (
    <div className="relative" ref={menubarRef}>
      <input {...field} type="hidden" value={field.value} />
      <button
        type="button"
        className="bg-secondary hover:bg-secondary-hover flex w-full cursor-pointer items-center justify-between rounded-md border border-[#363749]/[.9] px-[1.5rem] py-[1.125rem] !pr-[1.125rem] text-left"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        {field.value ? (
          options.find((option) => option.value === field.value)?.name
        ) : (
          <span className="text-gray-400">{labelname}</span>
        )}
        <ArrowMenu width={12} height={12} />
      </button>
      {isMenuOpen && (
        <div className="bg-secondary absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md border border-[#363749]/[.9]">
          <ul>
            {options.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  onClick={() => handleOptionClick(option.name)}
                  className="w-full px-6 py-[0.5rem] text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
