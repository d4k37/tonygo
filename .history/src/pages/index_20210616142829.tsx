import {Flex, Input, Button, Stack, FormLabel, FormControl} from '@chakra-ui/react'


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

        <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input 
        name="email" 
        type="email"
        id="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.700"
        }}
        size="lg"
        /> 
        </FormControl>
        
        <FormControl>
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input 
        name="password" 
        type="password"
        id="password"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.700"
        }}
        size="lg"
        /> 
        </FormControl>
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
