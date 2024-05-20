import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchIcon } from "./Icons";
import { formUrlQuery, removeKeysFromQuery } from "../lib/utils";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [search, setSearch] = useState(query || "");

  useEffect(() => {
    if (search) {
      const newUrl = formUrlQuery({
        params: location.search,
        key: "query",
        value: search,
      });

      navigate(newUrl, { replace: true });
    } else {
      const newUrl = removeKeysFromQuery({
        params: location.search,
        keysToRemove: ["query"],
      });

      navigate(newUrl, { replace: true });
    }
  }, [search, navigate, location.search]);

  return (
    <div className="relative w-full bg-gray-100 hover:bg-gray-300/50 sm:max-w-[30rem] dark:bg-secondary dark:hover:bg-secondary-hover">
      <input
        type="text"
        className="w-full rounded-lg bg-transparent py-5 pl-[4.6rem] pr-3 shadow-md ring-1 ring-[#363749]/[.2] dark:ring-[#363749]/[.9]"
        placeholder="Buscar un usuario"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Buscar un usuario"
      />
      <SearchIcon className="absolute left-[1.9375rem] top-[49%] -translate-y-1/2 transform" />
    </div>
  );
};

export default SearchBar;
