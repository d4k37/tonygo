import { Header } from "../components/Header";
import {Flex, SimpleGrid, Box, Text} from "@chakra-ui/react"
import { Sidebar } from "../components/Form/Sidebar";
import Chart from "react-apexcharts"

export default function Dashboard() {
    return(
        <Flex
        direction="column"
        h="100vh"
        >
        <Header/>

        <Flex w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        >
            <Sidebar/>

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flext-start">


                <Box
                p="8"
                bg="gray.800"
                borderRadius={8}
                >
                        <Text fontSize="large" mb="4">Inscritos da Semana</Text>
                        <Chart type="area" height={160} options={} series={} />
                </Box>


                <Box
                p="8"
                bg="gray.800"
                borderRadius={8}
                >
                        <Text fontSize="large" mb="4">Taxa de Abertura</Text>
                        <Chart/>
                </Box>


            </SimpleGrid>

        </Flex>

        </Flex>
    )
}