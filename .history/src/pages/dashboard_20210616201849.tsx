import { Header } from "../components/Header";
import dynamic from 'next/dynamic'
import {Flex, SimpleGrid, Box, Text, theme} from "@chakra-ui/react"
import { Sidebar } from "../components/Form/Sidebar";


const Chart = dynamic(()=> import('react-apexcharts'), {
    ssr: false,
})
const options ={
    chart:{
        toolbar:{
            show:false,
        },
        zoom:{
            enabled:false,
        },
        forecolor: theme.colors.gray[500],
    },
    grid:{
        show:false,
    },
    dataLabels:{
        enabled:false,
    },
    tooltip:{
        enabled:false,
    },
    xaxis:{
        type:'datetime',
        axisBorder:{
            color: theme.colors.gray[600]
        },
        axisTicks:{
            color: theme.colors.gray[600]
        },
        categories:[
            '2021-06-16T00:00.000z',
            '2021-06-17T00:00.000z',
            '2021-06-18T00:00.000z',
            '2021-06-19T00:00.000z',
            '2021-06-20T00:00.000z',
            '2021-06-21T00:00.000z',
            '2021-06-22T00:00.000z',
            '2021-06-23T00:00.000z',
        ]
    }
};
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