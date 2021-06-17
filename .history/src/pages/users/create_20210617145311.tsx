import { Box, Button, Checkbox, Divider, Flex, Heading, Icon, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Input } from "../../components/Form/Input"
import { Sidebar } from "../../components/Form/Sidebar"
import { Header } from "../../components/Header"


export default function CreateUser(){
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
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input name="name" label="nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%" >
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da Senha" />
                        </SimpleGrid>
                    </VStack>
            </Box>
        </Flex>
        </Box>
    )
}