import { createContext, useContext, useState, useEffect } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [type, setType] = useState(() => localStorage.getItem("type") || "");
  const [search, setSearch] = useState(() => localStorage.getItem("search") || "");
  const [bool, setBool] = useState(() => JSON.parse(localStorage.getItem("bool")) || false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('crt'))||[])
  const [subj, setSubj] = useState(JSON.parse(localStorage.getItem('subj')) || null);

  useEffect(() => {
    localStorage.setItem("type", type);
    localStorage.setItem("search", search);
    localStorage.setItem("bool", JSON.stringify(bool));
    localStorage.setItem('crt',JSON.stringify(cart))
    localStorage.setItem('subj',JSON.stringify(subj))
  }, [type, search, bool, cart, subj]);

  return (
    <PageContext.Provider value={{ type, setType, search, setSearch, bool, setBool, subj, setSubj, cart, setCart}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
