import {Flex, Text, Input, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from "react-icons/ri"
import { NotificationsNav } from './Header/NotificationsNav'
import { Profile } from './Header/Profile'
import { SearchBox } from './Header/SearchBox'
import {Logo} from './Header/Logo'

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
            <Logo/>
            <SearchBox/>
        
            <Flex
            align="center"
            ml="auto"
            >
              <NotificationsNav/>
            
               <Profile/>
            </Flex>
        </Flex>
    )
}