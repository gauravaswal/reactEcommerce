import logo from "../logo.svg";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/navbar";
import Headings from "../components/Heading";
import Sliders from "../components/Slider";
import Subbody from "../Subbody";
import Model from "../components/Model";
import { Box, VStack, StackDivider, Text } from "@chakra-ui/react";
import SecondNavbar from "../components/SecondNavbar";
const settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 4,
	initialSlide: 0,
};
function Main() {
	return (
		<>
			<Navbar />
			<Headings />
			<SecondNavbar />
			<Sliders />
			<Subbody />
			<Box height="500px" bg="gray">
				<Box mx="auto" bg="red" height="560px" w="50%">
					<Box display="flex" pt="50px">
						<Box w="30%" bg="blue" h="350px"></Box>
						<Box w="70%" h="350px">
							<Text>SPICY JALAPE IRURE</Text>
							<VStack
								divider={<StackDivider borderColor="gray.200" />}
								spacing={4}
								align="stretch"
							>
								<Box h="40px" bg="yellow.200">
									<Text>AVAILABILITY: In stock</Text>
								</Box>
								<Box h="40px" bg="tomato">
									<Text>PRODUCT TYPE: Amazon</Text>
								</Box>
								<Box h="40px" bg="pink.100">
									<Text>VENDOR: Furnicom</Text>
								</Box>
								<Box h="40px" bg="pink.100">
									<Text>$245.00</Text>
								</Box>
								<Box h="40px" w="290px" bg="pink.100">
									<Text>
										Curabitur egestas malesuada volutpat. Nunc vel vestibulum
										odio, ac pellentesque lacus. Pellentesque dapibus nunc nec
										est imperdiet, a malesuada sem rutrum. Sed..
									</Text>
								</Box>
							</VStack>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default Main;
