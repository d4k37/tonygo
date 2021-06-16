import {FormControl, FormLabel, Input as ChakraInput} from '@chakra-ui/react'

interface InputProps{
    name: string;
    label?: string;
}

export function Input({name, label}: InputProps){
    return (
        <FormControl>
       {!!label&& <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput 
        name={name}
        type="email"
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.700"
        }}
        size="lg"
        /> 
        </FormControl>
    )
}