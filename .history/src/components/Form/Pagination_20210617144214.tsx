import { Button, Stack } from "@chakra-ui/react";



export function Pagination(){
    return(
        <Stack>
            <Button size="sm"
            fontSize="xs"
            width="4"
            colorScheme="pink"
            disabled
            _disabled={{
                bgcolor:'pink.500',
                cursor:'default'
            }}
            >
                1
            </Button>

            <Button size="sm"
            fontSize="xs"
            width="4"
            bgColor="gray.700"
            _hover={{
                bg:'gray.500'
            }}
            >
                1
            </Button>
        </Stack>
    )
}