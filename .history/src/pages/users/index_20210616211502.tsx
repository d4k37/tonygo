import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"
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
                <Flex mp="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Usuários</Heading>

                    <Button as="a" size="small" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>}>Criar Novo</Button>
                </Flex>
            
            <Table colorScheme="whiteAlpha">
                <Thead>
                    <Tr>
                        <Th px="6" color="gray.300" width="8" >
                            <Checkbox colorScheme="pink" />
                        </Th>
                        <Th>Usuário</Th>
                        <Th>Data de Cadastro</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td px="6">
                        <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                            <Box>
                                <Text fontWeight="bold">Tony Correia</Text>
                                <Text fontSize="small" color="gray.300">luis.dhac@gmail.com</Text>
                            </Box>
                        </Td>
                        <Td>16 de Junho de 2021</Td>
                    </Tr>
                </Tbody>
            </Table>
            </Box>
        </Flex>
        </Box>
    )
}