import React from "react";
import { Link } from "react-router-dom";

interface CommonProps {
  className?: string;
  children: React.ReactNode;
  secondary?: boolean;
}

const baseStyles =
  "rounded-lg px-4 py-3 font-poly bg-black/80 font-semibold hover:bg-black/60 text-white dark:bg-white dark:text-primary dark:hover:bg-white/80 transition-all text-black transition-all w-full block text-center";
const primaryStyles = "bg-primary hover:bg-primary-light";
const secondaryStyles = "bg-auxiliary hover:bg-auxiliary-light";

const getStyles = (secondary?: boolean) =>
  `${baseStyles} ${secondary ? secondaryStyles : primaryStyles}`;

const Button: React.FC<
  CommonProps & React.ComponentPropsWithoutRef<"button">
> = ({ className = "", children, secondary, ...props }) => {
  const buttonStyles = getStyles(secondary) + " " + className;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

const LinkComponent: React.FC<
  CommonProps & React.ComponentPropsWithoutRef<"a">
> = ({ className = "", children, secondary, ...props }) => {
  const linkStyles = getStyles(secondary) + " " + className;

  return (
    <Link to={props.href || ""} className={linkStyles} {...props}>
      {children}
    </Link>
  );
};

export default Button;
export { LinkComponent };
