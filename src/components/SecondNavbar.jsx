import { Link, Flex } from "@chakra-ui/react";

function SecondNavbar() {
	return (
		<Flex bg="#41ade2" gridGap="20px" py="1em" px="8em">
			<Link
				href="https://chakra-ui.com"
				textDecoration="none"
				color="white"
				fontWeight="bold"
				fontSize="15px"
			>
				HOME
			</Link>
			<Link
				href="https://chakra-ui.com"
				textDecoration="none"
				color="white"
				fontWeight="bold"
				fontSize="15px"
			>
				FEATURES
			</Link>
			<Link
				href="https://chakra-ui.com"
				textDecoration="none"
				color="white"
				fontWeight="bold"
				fontSize="15px"
			>
				SHOP
			</Link>
			<Link
				href="https://chakra-ui.com"
				textDecoration="none"
				color="white"
				fontWeight="bold"
				fontSize="15px"
			>
				UNDER$30
			</Link>
			<Link
				href="https://chakra-ui.com"
				textDecoration="none"
				color="white"
				fontWeight="bold"
				fontSize="15px"
			>
				PAGES
			</Link>
			<Link
				href="https://chakra-ui.com"
				textDecoration="none"
				color="white"
				fontWeight="bold"
				fontSize="15px"
			>
				BLOG
			</Link>
		</Flex>
	);
}
export default SecondNavbar;
