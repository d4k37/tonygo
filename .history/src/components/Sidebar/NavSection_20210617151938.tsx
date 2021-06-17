import Icon from "@chakra-ui/icon";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";


interface NavSectionProps{
    title: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps){
    return(
        <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
        <Stack spacin="4" mt="8" align="stretch">

        </Stack>
    </Box>
    )
}