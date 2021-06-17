import Icon from "@chakra-ui/icon";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";


interface NavSectionProps{
    title: string;
}

export function NavSection({title}: NavSectionProps){
    return(
        <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
        <Stack spacin="4" mt="8" align="stretch">
            <Link  display="flex" align="center">
                <Icon as={RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium" >Dashboard</Text>
            </Link>
            <Link  display="flex" align="center">
                <Icon as={RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium" >Usuários</Text>
            </Link>  
        </Stack>
    </Box>
    )
}