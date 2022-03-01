import logo from "./logo.svg";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar";
import Heading from "./components/Heading";
import Sliders from "./components/Slider";
import Main from "./pages/Main";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SecondNavbar from "./components/SecondNavbar";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
		</Routes>
	);
}

export default App;
