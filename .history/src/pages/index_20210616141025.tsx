import {Flex} from '@chakra-ui/react'


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
      >Teste
        
      </Flex>
    </Flex>
  )
}
