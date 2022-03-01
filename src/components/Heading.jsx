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
function heading() {
	return (
		<>
			<Flex justifyContent="space-around" alignItems="center" py="2em">
				<Image src="/logo_150x.png" alt="Dan Abrameov" />
				<InputGroup size="md" w="30%">
					<Input placeholder="Enter keyword here..." />
					<InputRightElement w="5rem">
						<IconButton
							backgroundColor="#41ade2"
							colorScheme="#41ade2"
							aria-label="Search database"
							icon={<SearchIcon />}
							w="5rem"
						/>
					</InputRightElement>
				</InputGroup>
				<Box>
					<Button
						colorScheme="teal"
						variant="solid"
						backgroundColor="#41ade2"
						p="10px"
					>
						0 items(s)
					</Button>
				</Box>
			</Flex>
		</>
	);
}
export default heading;
