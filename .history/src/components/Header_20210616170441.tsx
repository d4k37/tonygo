import {Flex, Text, Input} from '@chakra-ui/react'
import {RiUserSearchLine} from "react-icons/ri"

export function Header(){
    return(
        <Flex
        w="100%"
        as="header"
        maxWidth={1480}
        h="20"
        marginX="auto"
        mt="4"
        align="center"
        px="6"
        >
            <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            >TonyGo
            <Text as="span" ml="1" color="pink.700">.</Text>
            </Text>
            <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
            >
                <Input color="gray.50" 
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na Plataforma"
                _placeholder={{color: 'gray.400'}}
                /> 
                <RiUserSearchLine/>
            </Flex>
        </Flex>
    )
}