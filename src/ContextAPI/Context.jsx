import { createContext, useContext, useState } from "react"

const PageContext = createContext(null)

export function PageProvider({children}){
    const [type, setType] = useState('')
    const [search, setSearch] = useState('')
    const [bool, setBool] = useState(false)
    const [subj, setSubj] = useState('')
    return(
        <PageContext.Provider 
        value={
            {
                type,
                setType,
                search,
                setSearch,
                bool,
                setBool,
                subj,
                setSubj
            }
        }>
            {children}
        </PageContext.Provider>
    )
}

export function usePage(){
    return useContext(PageContext)
}