// import { createContext, useContext, useState } from "react"

// const PageContext = createContext(null)

// export function PageProvider({children}){
//     const [type, setType] = useState('')
//     const [search, setSearch] = useState('')
//     const [bool, setBool] = useState(false)
//     const [subj, setSubj] = useState('')
//     const [cart, setCart] = useState([])
//     return(
//         <PageContext.Provider 
//         value={
//             {
//                 type,
//                 setType,
//                 search,
//                 setSearch,
//                 bool,
//                 setBool,
//                 subj,
//                 setSubj,
//                 cart, 
//                 setCart
//             }
//         }>
//             {children}
//         </PageContext.Provider>
//     )
// }

// export function usePage(){
//     return useContext(PageContext)
// }


import { createContext, useContext, useState, useEffect } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [type, setType] = useState(() => localStorage.getItem("type") || "");
  const [search, setSearch] = useState(() => localStorage.getItem("search") || "");
  const [bool, setBool] = useState(() => JSON.parse(localStorage.getItem("bool")) || false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('crt'))||[])
  const [subj, setSubj] = useState(null);

  // persist changes
  useEffect(() => {
    localStorage.setItem("type", type);
    localStorage.setItem("search", search);
    localStorage.setItem("bool", JSON.stringify(bool));
    localStorage.setItem('crt',JSON.stringify(cart))
  }, [type, search, bool, cart]);

  return (
    <PageContext.Provider value={{ type, setType, search, setSearch, bool, setBool, subj, setSubj, cart, setCart}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
