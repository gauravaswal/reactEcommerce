import logo from './logo.svg';
import './App.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
    Box,
    Image,
    Tabs,
    TabList,
    OrderedList,
    ListItem,
    List,
    Tab,
    Heading,
    Input,
    Badge,
    TabPanel,
    Text,
} from '@chakra-ui/react';
import { Rating } from 'react-simple-star-rating'

import SecondNavbar from './components/SecondNavbar';
import Model from './components/Model'

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
};
function Subbody() {
    return (
        <>
            <Box bg="#fff" h="250px">
                <Box display="flex" justifyContent="center" gridGap="480px">
                    <Box>
                        <Text>
                            FREE SHIPPING
                        </Text>
                        <p>
                            Lorem Ipsum is simply dummy text
                        </p>
                    </Box>
                    <Box>
                        <Text>
                            SALE OF 30% ON EVERY SATURDAY
                        </Text>
                        <p>
                            Lorem Ipsum is simply dummy text
                        </p>
                    </Box>
                    <Box>
                        <Text>
                            KEEP SMILING FROM $1000
                        </Text>
                        <p>
                            Lorem Ipsum is simply dummy text
                        </p>
                    </Box>
                </Box>
            </Box>
            <Box height="2020px">
                <Box height="1200px" w="75%" mx="auto">
                    <Box height="550px" >
                        <Slider {...settings} >
                            <Box w="450px !important" h="450px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                {/* <Rating ratingValue={5}  fillColor='orange' size={22}   initialValue={2} /> */}
                                <Box w="358px" h={"35px"} border=" 2px solid black" pl="2px" mt={"9px"}
                                >
                                    <Text as="h1" fontSize={"20px"} fontWeight={"12px"}> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="450px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                {/* <Rating ratingValue={5}  fillColor='orange' size={22}   initialValue={2} /> */}
                                <Box w="358px" h={"35px"} border=" 2px solid black" pl="2px" mt={"9px"}
                                >
                                    <Text as="h1" fontSize={"20px"} fontWeight={"12px"}> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="450px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                {/* <Rating ratingValue={5}  fillColor='orange' size={22}   initialValue={2} /> */}
                                <Box w="358px" h={"35px"} border=" 2px solid black" pl="2px" mt={"9px"}
                                >
                                    <Text as="h1" fontSize={"20px"} fontWeight={"121px"}> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="450px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                {/* <Rating ratingValue={5}  fillColor='orange' size={22}   initialValue={2} /> */}
                                <Box w="290px" h={"35px"} border=" 2px solid black" pl="2px" mt={"9px"}
                                >
                                    <Text as="h1" fontSize={"20px"} fontWeight={"12px"}> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative">
                                <Image src="/accessories_3_618052cd-7abc-4c60-ab35-4cdb86413812_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Rating ratingValue={5} size={22}/* Available Props */ />
                                <Box w="250px" border=" 2px solid black" pl="2px"
                                >
                                    <Text> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative" >
                                <Image src="/fashion_5_7420671d-4419-4d03-9a42-f60b47ec1345_1024x1024.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Rating ratingValue={5} size={22}/* Available Props */ />
                                <Box w="250px" border=" 2px solid black" pl="2px"
                                >
                                    <Text> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative"
                            >
                                <Image src="/fashion_7_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Rating ratingValue={5} size={22}/* Available Props */ />

                                <Box w="250px" border=" 2px solid black" pl="2px"
                                >
                                    <Text> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative"  >
                                <Image src="/donwload1.jpeg" w="380 !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Rating ratingValue={5} size={22}/* Available Props */ />
                                <Box w="250px" border=" 2px solid black" pl="2px"
                                >
                                    <Text> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                            <Box w="450px !important" h="250px" bg="blue" mt="90px" position="relative" >
                                <Image src="/bucket.jpeg" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='solid' fontSize='50px' bg="#53d542" color="#53d542" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1"> $ 111</Heading>
                                <Rating ratingValue={5} size={22} readonly={true}/* Available Props */ />
                                <Box w="250px" border=" 2px solid black" pl="2px"
                                >
                                    <Text> 00Days:00Hours:00Mins:00Sec</Text>
                                </Box>

                            </Box>
                        </Slider>
                    </Box>
                    <Box h="220px" mt="35px" border="3px solid black">
                        <Heading as="h2">
                            Fashion
                        </Heading>
                        <Slider {...settings} >
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/donwload1.jpeg" w="250px !important" h="90px" alt="test" />
                                {/* <Badge variant='outline' colorScheme='green'>
                                    Default
                                </Badge> */}
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                                {/* <Badge variant='outline' colorScheme='green' >
                                    Default
                                </Badge> */}
                            </Box>
                            <Box w="90px !important" h="90px" mt="15px" >
                                <Image src="/donwload1.jpeg" w="250px !important" h="90px" alt="test" />
                                <Badge ml='1' colorScheme='green'>
                                    New
                                </Badge>
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                        </Slider>
                    </Box>


                    <Box height="540px" mt="15px" >

                        <Slider {...settings} >
                            <Box w="450px !important" h="350px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                <Model />

                            </Box>
                            <Box w="450px !important" h="450px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                <Model />

                            </Box>
                            <Box w="450px !important" h="450px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                <Model />

                            </Box>
                            <Box w="450px !important" h="450px" mt="90px" ml={"26px"} position="relative" >
                                <Image src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text fontSize={"25px"}>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1" fontSize={"35px"} mt={"7px"}> $ 111</Heading>
                                <Model />


                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative">
                                <Image src="/accessories_3_618052cd-7abc-4c60-ab35-4cdb86413812_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Model />


                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative" >
                                <Image src="/fashion_5_7420671d-4419-4d03-9a42-f60b47ec1345_1024x1024.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Model />

                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative"
                            >
                                <Image src="/fashion_7_270x.png" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Model />


                            </Box>
                            <Box w="450px !important" h="250px" mt="90px" position="relative"  >
                                <Image src="/donwload1.jpeg" w="380 !important" h="290px" alt="test" />
                                <Badge ml='1' variant='subtle' color="green" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1">$ 111</Heading>
                                <Model />


                            </Box>
                            <Box w="450px !important" h="250px" bg="blue" mt="90px" position="relative" >
                                <Image src="/bucket.jpeg" w="380px !important" h="290px" alt="test" />
                                <Badge ml='1' variant='solid' fontSize='50px' bg="#53d542" color="#53d542" position="absolute" top="14px" left="14px">
                                    New
                                </Badge>
                                <Text>BOUDIN ANDOU BUALO</Text>
                                <Heading as="h1"> $ 111</Heading>

                            </Box>
                        </Slider>
                    </Box>

                    <Box h="220px" mt="35px" border="3px solid black">
                        <Heading as="h2">
                            Top Collection
                        </Heading>
                        <Slider {...settings} >
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/donwload1.jpeg" w="250px !important" h="90px" alt="test" />
                                <Badge variant='outline' colorScheme='green'>
                                    Default
                                </Badge>
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                                <Badge variant='outline' colorScheme='green' >
                                    Default
                                </Badge>
                            </Box>
                            <Box w="90px !important" h="90px" mt="15px" >
                                <Image src="/donwload1.jpeg" w="250px !important" h="90px" alt="test" />
                                <Badge ml='1' colorScheme='green'>
                                    New
                                </Badge>
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                            <Box w="250px !important" h="250px" mt="15px" >
                                <Image src="/bucket.jpeg" w="250px !important" h="90px" alt="test" />
                            </Box>
                        </Slider>
                    </Box>
                    <Box h="450px" mt="35px" border="3px solid black">

                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Subbody;
