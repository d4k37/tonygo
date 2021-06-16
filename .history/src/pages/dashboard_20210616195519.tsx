import { Header } from "../components/Header";
import dynamic from 'next/dynamic'
import {Flex, SimpleGrid, Box, Text} from "@chakra-ui/react"
import { Sidebar } from "../components/Form/Sidebar";
import Chart from "react-apexcharts"

const Chart = dynamic(()=> import('react-apexcharts'), {
    ssr: false,
})
const options ={};
const series =[
    {name:'seriesone', data:[31,120,10,28,51,18,109,55]}
];


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
                        <Chart options={options} series={series} type="area" height={160}  />
                </Box>


                <Box
                p="8"
                bg="gray.800"
                borderRadius={8}
                >
                        <Text fontSize="large" mb="4">Taxa de Abertura</Text>
                        <Chart type="area" height={160} options={options} series={series} />
                </Box>


            </SimpleGrid>

        </Flex>

        </Flex>
    )
}