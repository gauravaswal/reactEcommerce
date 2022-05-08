import { ReactNode } from "react";
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
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
function footer() {
	return (
		<>
			<Box  h="500px" bg={"#1c242f"}>
				<Box mx="auto" pt={"15px"}  w="70%">
                 <Text color={"white"} mx="auto" >SUBSCRIBLE TO THE BEST OF G2SHOP</Text>
				 <InputGroup size="md" w="70%">
					<Input  padding={"32px"} placeholder="Enter keyword here..." />
					<InputRightElement w="9rem" h={"65px"} mr={"2px"}color={"white"}bg={"#41ade2"}>
						SUBSCRIBE
					</InputRightElement>
				</InputGroup>
				</Box>
            </Box>
		</>
	);
}
export default footer;
