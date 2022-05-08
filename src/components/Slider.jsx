import { ReactNode } from 'react';
import Slider from "react-slick";
import { StarIcon } from '@chakra-ui/icons'
import InputBox from './Input'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
    Badge,
    SearchIcon,
} from '@chakra-ui/react';
function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
                <Slider {...settings}>
                   <Box>
                   <Image src="/donwload1.jpeg"  w="100%" h="650px"alt="test" />
                   </Box>
                   <Box>
                   <Image src="/bucket.jpeg" w="100%" h="650px" alt="test" />
                   </Box>
                   <Box>
                   <Image src="/download.jpeg"  w="100%" h="650px" alt="test" />
                   </Box>
                </Slider>
        </>
    );
}
export default Sliders 