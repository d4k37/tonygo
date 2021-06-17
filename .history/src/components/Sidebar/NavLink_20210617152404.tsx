import Icon from "@chakra-ui/icon";
import { Link, Text } from "@chakra-ui/layout";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";


interface NavLinkProps{
    icon: ElementType;
    children: string;
}


export function NavLink({icon, children}: NavLinkProps){
    return(
        <Link  display="flex" align="center">
        <Icon as={RiDashboardLine} fontSize="20" />
        <Text ml="4" fontWeight="medium" >Dashboard</Text>
    </Link>
    )
}