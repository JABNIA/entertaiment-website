import {createContext, useContext} from "react";
import {GlobalType} from "../App"

export const GlobalContext = createContext<GlobalType | undefined>(undefined)

export default function useUserContext(){
    const data = useContext(GlobalContext)
    if(data === undefined){
        throw new Error()
    }else{
        return data
    }
}