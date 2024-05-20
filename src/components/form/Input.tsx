import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  innerRef: UseFormRegisterReturn;
  name: string;
  type?: string;
  inputType?: "input" | "textarea";
  placeholder: string;
  className?: string;
  ariaLabel?: string;
  errors: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  innerRef,
  name,
  type = "text",
  inputType = "input",
  placeholder,
  className = "",
  ariaLabel = undefined,
  errors,
}) => {
  const ariaInvalid = errors ? "true" : "false";
  const additionalProps = ariaLabel ? { "aria-label": ariaLabel } : {};

  const InputComponent = inputType === "textarea" ? "textarea" : "input";
  const inputTypeadditionalProps = inputType ? { rows: 8 } : {};

  return (
    <>
      <InputComponent
        {...innerRef}
        {...inputTypeadditionalProps}
        {...additionalProps}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-invalid={ariaInvalid}
        aria-describedby={`${name}-error`}
        className={` bg-secondary hover:bg-secondary-hover mt-8 w-full rounded-sm border border-[#363749]/[.9] px-5 py-4 ${className}`}
      />
      <div aria-live="polite" aria-atomic="true">
        {errors && errors.message && (
          <p
            id={`${name}-error`}
            role="alert"
            className="text-irresistible mx-5 mt-2 text-base text-red-300"
          >
            {errors.message || ""}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
