import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";


export function SearchBox(){

    const [search, setSearch] = useState('')

    return(
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
            value={search}
            onchange={event=>setSearch(event.target.value)}
            /> 
            <Icon as={RiSearchEyeLine} fontSize="20"/>
        </Flex>
    )
}