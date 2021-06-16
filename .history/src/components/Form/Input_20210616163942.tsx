

interface InputProps{
    name: string;
    label?: string;
}

export function Input(){
    return (
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
    )
}