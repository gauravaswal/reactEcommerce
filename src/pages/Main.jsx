import logo from "../logo.svg";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/navbar";
import Headings from "../components/Heading";
import Footers from "../components/Footer";

import Sliders from "../components/Slider";
import Subbody from "../Subbody";
import Model from "../components/Model";
import { Box, VStack, StackDivider, Text, background } from "@chakra-ui/react";
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
			<Box bg={"#f5f5f5;"}>
				<Navbar />
				<Headings />
				<SecondNavbar />
				<Sliders />
				<Subbody />
				<Footers />
			</Box>
		</>
	);
}

export default Main;
