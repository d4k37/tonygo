import {Flex, Text, Input, Icon, HStack, Box, Avatar, IconButton} from '@chakra-ui/react'
import {RiMenuLine, RiNotificationLine, RiSearchLine, RiUserAddLine} from "react-icons/ri"
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import {Logo} from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'


export function Header(){

    const {onOpen} = useSidebarDrawer()

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
            {!isWideVersion &&(
                <IconButton
                icon={<Icon as={RiMenuLine}/>}
                >

                </IconButton>
            )}

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