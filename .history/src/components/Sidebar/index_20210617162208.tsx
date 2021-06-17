import {Box, Stack, Text, Link, Icon, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody} from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"
import { SidebarNav } from "./SidebarNav"


export function Sidebar(){


    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar){
        <Drawer isOpen={true} placement="left" onClose={()=>{}} >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton mt="6"/>
                    <DrawerHeader>Navegação</DrawerHeader>

                    <DrawerBody>
                        <SidebarNav/>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    }

    return(
        <Box
        as="aside"
        w="64"
        mr="8"
        >
            <SidebarNav/>
        </Box>
    )
}