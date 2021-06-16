import {Flex, Input, Button, Stack, FormLabel} from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex 
    w="100vw" 
    h="100vh" 
    alignItems="center" 
    justifyContent="center"
    >
      <Flex
      width="100%"
      maxWidth={360} 
      as="form"
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      >
        <Stack spacing="4">
        <FormLabel htmlFor="email"></FormLabel>
        <Input 
        name="email" 
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.700"
        }}
        size="lg"
        /> 
        <FormLabel htmlFor="password"></FormLabel>

        <Input 
        name="password" 
        type="password"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.700"
        }}
        size="lg"
        /> 
        </Stack>
        <Button 
        type="submit" 
        marginTop="6" 
        colorScheme="pink"
        size="lg"
        >Entrar</Button>
      </Flex>
    </Flex>
  )
}
