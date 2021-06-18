import {FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'
import { forwardRef } from 'react'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
} 
 const InputBase=({name, label, ...rest}: InputProps, ref)=>{
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
        ref={ref}
        {...rest}
        /> 
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)