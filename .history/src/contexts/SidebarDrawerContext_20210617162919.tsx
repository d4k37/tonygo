import { useDisclosure } from "@chakra-ui/hooks";
import { createContext, ReactNode } from "react";


interface SidebarDrawerProviderProps{
    children: ReactNode
}


const SidebarDrawerContext = createContext()

export function SidebarDrawerProvider({children}:SidebarDrawerProviderProps){

    const disclosure = useDisclosure()

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}