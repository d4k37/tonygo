import Icon from "@chakra-ui/icon";
import { Link, Text, LinkProps as ChakraLinkProps  } from "@chakra-ui/layout";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";


interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
}


export function NavLink({icon, children, ...rest}: NavLinkProps){
    return(
        <Link  display="flex" align="center"{...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium" >{children}</Text>
    </Link>
    )
}