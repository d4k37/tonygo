import {Flex, Text} from '@chakra-ui/react'

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
            >TonyGo</Text>
        </Flex>
    )
}