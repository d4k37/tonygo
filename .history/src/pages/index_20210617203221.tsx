import {Flex, Button, Stack} from '@chakra-ui/react'
import {useForm} from "react-hook-form"
import {Input} from "../components/Form/Input"

export default function SignIn() {

  const {register, handleSubmit}= useForm()

  function handleSignIn(values){
    console.log(values);
  }

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
      onSubmit={handleSubmit(handleSignInz)}
      >
      <Stack spacing="4">

      <Input type="email" name="email" label="E-mail" {...register("email")}/>
        
      <Input type="password" name="password" label="Senha" {...register("password")}/>

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
