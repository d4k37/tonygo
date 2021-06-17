import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"


export default function UserList(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

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

                    <Button p="4" as="a" size="small" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>}>Criar Novo</Button>
                </Flex>
            
            <Table colorScheme="whiteAlpha">
                <Thead>
                    <Tr>
                        <Th px="6" color="gray.300" width="8" >
                            <Checkbox colorScheme="pink" />
                        </Th>
                        <Th>Usuário</Th>
                       {isWideVersion && <Th>Data de Cadastro</Th> }
                        <Th width="8"></Th>
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
                        {isWideVersion &&   <Td>16 de Junho de 2021</Td>}
                        <Td> <Button p="4" as="a" size="small" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine}/>}>Editar</Button></Td>
                    </Tr>
                </Tbody>
            </Table>


            <Pagination/>
            </Box>
        </Flex>
        </Box>
    )
}