import { createContext, useContext, useState, useEffect } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [type, setType] = useState(() => localStorage.getItem("type") || "");
  const [search, setSearch] = useState(() => localStorage.getItem("search") || "");
  const [bool, setBool] = useState(() => JSON.parse(localStorage.getItem("bool")) || false);
  const [subj, setSubj] = useState(null);

  useEffect(() => {
    localStorage.setItem("type", type);
    localStorage.setItem("search", search);
    localStorage.setItem("bool", JSON.stringify(bool));
  }, [type, search, bool]);

  return (
    <PageContext.Provider value={{ type, setType, search, setSearch, bool, setBool, subj, setSubj }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
