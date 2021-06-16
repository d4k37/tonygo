

interface InputProps{
    name: string;
    label?: string;
}

export function Input({name, label}: InputProps){
    return (
        <FormControl>
        <FormLabel htmlFor={name}>Email</FormLabel>
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
    )
}