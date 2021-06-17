import { Box, Flex } from "@chakra-ui/react"
import { Sidebar } from "../../components/Form/Sidebar"
import { Header } from "../../components/Header"


export default function UserList(){
    return(
        <Box>
            <Header/>
            <Flex w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        >
            <Sidebar/>

            <Box
            flex="1"
            borderRadius="8"
            bg="gray.800"
            p="8"
            >

            </Box>
            </Flex>
        </Box>
    )
}