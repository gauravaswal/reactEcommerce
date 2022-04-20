import { ReactNode } from 'react';
import { StarIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Heading
} from '@chakra-ui/react';
const Links = ['Home', 'Menu', 'About', 'Blog', 'Contact'];
function login() {
    return (

        <Box bg={"#d6d6d6"} w={"100%"} h={"500rem"}>
            <Box bg={"#f5f5f5"} w={"25%"} h={"40rem"} mx={"auto"} pl={"15px"} >
                <Heading>Login</Heading>
                <FormControl pt={"35px"} pl={"5px"}>
                    <FormLabel htmlFor='email' fontSize={"30px"}>Email*</FormLabel>
                    <Input width={"35rem"} id='email' p={"25px"} type='email' />
                    <FormLabel htmlFor='password' fontSize={"30px"} fontWeight={"500px"} pt={"15px"}>Password*</FormLabel>
                    <Input width={"35rem"} id='email' p={"25px"} type='password' />
                    <br></br>
                    <Button
                        mt={"40px"}
                        colorScheme='teal'
                        type='submit'
                        size='lg'
                    >
                        Login
                    </Button>
                    <br></br>
                    <Link mt={"115px"}>Forgot your password?</Link>
                </FormControl>
            </Box>


        </Box>
    );
}
export default login 