import {Box, Stack, Text, Link, Icon} from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { NavSection } from "./NavSection"


export function Sidebar(){
    return(
        <Box
        as="aside"
        w="64"
        mr="8"
        >
            <Stack spacing="15" align="flex-start">

            <NavSection title="Geral">

            <Link  display="flex" align="center">
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium" >Usuários</Text>
            </Link>  
            </NavSection>

            <NavSection title="Automação">
            <Link  display="flex" align="center">
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Formulários</Text>
                        </Link>
                        <Link  display="flex" align="center">
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Automação</Text>
                        </Link>  
            </NavSection>
            </Stack>
        </Box>
    )
}