import { ReactNode } from 'react';
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
    Heading,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Image,
    Stack,
    Grid,
    Tabs,
    TabList,
    OrderedList,
    ListItem,
    List,
    Tab,
    Input,
    Text,
    Divider,
    SearchIcon,
} from '@chakra-ui/react';
const Links = ['Home', 'Menu', 'About', 'Blog', 'Contact'];

function Navbar() {
    return (
        <>
                <Box h="70px" display='flex' w='70%' p={4} justifyContent='space-between' mx={'auto'}  >
                    <Box >
                        <Text>Welcome to our online store!</Text>
                    </Box>

                    <HStack spacing='14px'>
                        <Link href='https://chakra-ui.com' textDecoration='none' borderRightColor="red" borderRightStyle="solid">
                            My Account
                        </Link>
                        <Link href='https://chakra-ui.com' textDecoration='none' borderRightColor="red" borderRightStyle="solid">
                            My Wishlist
                        </Link>
                        <Link href='https://chakra-ui.com' textDecoration='none' >
                            Site Setting
                        </Link>
                    </HStack>


                </Box>
                <Divider orientation='horizontal' borderColor='gray.200' />
        </>
    );
}
export default Navbar