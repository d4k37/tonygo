import { Text } from "@chakra-ui/layout";


export function Logo(){
    return(
        <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        >TonyGo
        <Text as="span" ml="1" color="pink.700">.</Text>
        </Text>
    )
}