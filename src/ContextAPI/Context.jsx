import { createContext, useContext, useState } from "react"

const PageContext = createContext(null)

export function PageProvider({children}){
    const [type, setType] = useState('')
    return(
        <PageContext.Provider 
        value={
            {
                type,
                setType
            }
        }>
            {children}
        </PageContext.Provider>
    )
}

export function usePage(){
    return useContext(PageContext)
}