import { RefObject, useEffect } from "react";
import qs from "query-string";
import { UserType } from "../types/User";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function useOuterClick(
  dom: RefObject<HTMLElement>,
  callback: () => void,
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (dom.current && !dom.current.contains(event.target as Node)) {
        callback();
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [dom, callback]);
}

interface URLQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export const formUrlQuery = ({ params, key, value }: URLQueryParams) => {
  const currentURL = qs.parse(params);

  currentURL[key] = value;

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentURL },
    { skipNull: true },
  );
};

interface RemoveURLQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveURLQueryParams) => {
  const currentURL = qs.parse(params);

  keysToRemove.forEach((key) => delete currentURL[key]);

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentURL },
    { skipNull: true },
  );
};

export const getImageUrl = (user: UserType) => {
  const index = Number(user.id.toString().slice(-2));
  const urlimage = `https://randomuser.me/api/portraits/${user.gender === "female" ? "women" : "men"}/${index}.jpg`;
  return urlimage;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
