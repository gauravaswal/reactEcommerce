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

function SecondNavbar() {
    return (
        <>
        <Box bg="#41ade2"> 
                <Box h="70px" display='flex' w='70%' p={4}  justifyContent='space-between' mx={'auto'}  >
                    <HStack spacing='54px'>
                        <Link href='https://chakra-ui.com' textDecoration='none'>
                            HOME
                        </Link>
                        <Link href='https://chakra-ui.com' textDecoration='none'>
                            FEATURES
                        </Link>
                        <Link href='https://chakra-ui.com' textDecoration='none' >
                            SHOP
                        </Link>
                        <Link href='https://chakra-ui.com' textDecoration='none'>
                            UNDER$30
                        </Link>
                        <Link href='https://chakra-ui.com' textDecoration='none' >
                            PAGES
                        </Link>
                        <Link href='https://chakra-ui.com' textDecoration='none' >
                            BLOG
                        </Link>
                    </HStack>


                    </Box>
                </Box>
                <Divider orientation='horizontal' borderColor='gray.200' />
        </>
    );
}
export default SecondNavbar