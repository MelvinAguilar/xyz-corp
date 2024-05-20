import React, { useEffect, useState } from "react";
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
    <div className="bg-secondary hover:bg-secondary-hover relative w-full  sm:max-w-[30rem]">
      <input
        type="text"
        className="w-full rounded-lg ring-[#363749]/[.9] ring-1 bg-transparent py-5 pl-[4.6rem] pr-3 shadow-lg"
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
