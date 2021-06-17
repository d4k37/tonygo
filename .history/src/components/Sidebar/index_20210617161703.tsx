import {Box, Stack, Text, Link, Icon} from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"
import { SidebarNav } from "./SidebarNav"


export function Sidebar(){
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