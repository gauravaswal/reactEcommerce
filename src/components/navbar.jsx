import { ReactNode } from "react";
import { Flex, HStack, Link, Text, Divider } from "@chakra-ui/react";
const Links = ["Home", "Menu", "About", "Blog", "Contact"];

function Navbar() {
	return (
		<>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				px="8em"
				py="0.5em"
				borderBottom="1px solid"
				borderColor="gray.100"
			>
				<Text>Welcome to our online store!</Text>
				<HStack spacing="14px">
					<Link href="https://chakra-ui.com" textDecoration="none">
						My Account
					</Link>
					<Divider orientation="vertical" h="15px" w="1px" bg="gray.300" />
					<Link href="https://chakra-ui.com" textDecoration="none">
						My Wishlist
					</Link>
					<Divider orientation="vertical" h="15px" w="1px" bg="gray.300" />
					<Link href="https://chakra-ui.com" textDecoration="none">
						Site Setting
					</Link>
				</HStack>
			</Flex>
			<Divider orientation="horizontal" borderColor="gray.200" />
		</>
	);
}
export default Navbar;
