import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";


interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData= true}:ProfileProps){
    return(
        <Flex
        align="center"
        >
            {showProfileData && (
                            <Box marginRight="4" textAlign="right">
                            <Text>Tony Correia</Text>
                            <Text
                            color="gray.300"
                            fontSize="small"
                            >luis.dhac@gmail.com</Text>
                        </Box>
            )}

            <Avatar size="md" name="Tony Correia" src="https://scontent.fvag4-1.fna.fbcdn.net/v/t1.6435-9/182907515_2953772881569383_2707811664478623535_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8vx-R6YyWScAX9nDGlX&_nc_ht=scontent.fvag4-1.fna&oh=eaf6dc47a026fcc747e7437515f69485&oe=60CF779C"/>
        </Flex>
    )
}