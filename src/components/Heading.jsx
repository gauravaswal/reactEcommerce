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
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
function heading() {
    return (
        <>
            <Box>
                <Box  display="flex" width="70%"justifyContent="space-between" mx="auto">
                    <Box>
                        <Image src='/logo_150x.png' alt='Dan Abrameov' mt={"50px"} pt="15px" />
                    </Box>
                    <Box>
                        <Input placeholder='Enter keyword here...' size='md' p="15px" w="370px"/>
                        <IconButton
                        p="19px"
                        w="120px"
                        backgroundColor="#41ade2"
                            colorScheme='#41ade2'
                            aria-label='Search database'
                            icon={<SearchIcon />}
                        />
                    </Box>
                    <Box>
                        <Button colorScheme='teal' variant='solid' backgroundColor="#41ade2" p="10px">
                            0 items(s)
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
export default heading