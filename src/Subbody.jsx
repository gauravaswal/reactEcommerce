import logo from "./logo.svg";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  VStack,
  Image,
  Tabs,
  TabList,
  Tab,
  Heading,
  Badge,
  TabPanel,
  Text,
  TabPanels,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";
import truck from "./assets/truck.png";
import SecondNavbar from "./components/SecondNavbar";
import Model from "./components/Model";
import ProductCard from "./components/ProductCard";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
};

const features = [
  {
    title: "Free Shipping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: truck,
  },
  {
    title: "Sale of 30% on Every Saturday",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: truck,
  },
  {
    title: "Keep smiling from $1000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: truck,
  },
];

const FeatureCard = (props) => {
  const { title, description, image } = props;
  return (
    <HStack maxW="360px" cursor="pointer">
      <Flex bg="twitter.500" maxW="full" p="12px">
        <Image src={image} alt="image" />
      </Flex>
      <VStack spacing={2} alignItems="flex-start">
        <Heading size="xs" _hover={{ color: "twitter.500" }}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
};

function Subbody() {
  return (
    <>
      <Wrap bg="#fff" spacing="30px" w="full" justify="center" mt="30px">
        {(features || []).map((feature) => {
          return (
            <WrapItem>
              <FeatureCard
                title={feature?.title}
                image={feature?.image}
                description={feature?.description}
              />
            </WrapItem>
          );
        })}
      </Wrap>
      <ProductCard image="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png" />
      <Box height="2020px">
        <Box height="1200px" w="75%" mx="auto">
          <Box height="550px" border="3px solid black">
            <Slider {...settings}>
              <Box w="250px !important" h="450px" mt="90px" position="relative">
                <Image
                  src="/accessories_2_1204518a-1f1c-4966-a1d1-ad3b350dfdd2_270x.png"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge
                  ml="1"
                  variant="subtle"
                  color="green"
                  position="absolute"
                  top="14px"
                  left="14px"
                >
                  New
                </Badge>
                <Text>BOUDIN ANDOU BUALO</Text>
                <Heading as="h1"> $ 111</Heading>
                <Rating ratingValue={5} size={22} /* Available Props */ />
                <Box w="250px" border=" 2px solid black" pl="2px">
                  <Text> 00Days:00Hours:00Mins:00Sec</Text>
                </Box>
              </Box>
              <Box
                w="250px !important"
                h="250px"
                bg="blue"
                mt="90px"
                position="relative"
              >
                <Image
                  src="/accessories_3_618052cd-7abc-4c60-ab35-4cdb86413812_270x.png"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge
                  ml="1"
                  variant="subtle"
                  color="green"
                  position="absolute"
                  top="14px"
                  left="14px"
                >
                  New
                </Badge>
                <Text>BOUDIN ANDOU BUALO</Text>
                <Heading as="h1">$ 111</Heading>
                <Rating ratingValue={5} size={22} /* Available Props */ />
                <Box w="250px" border=" 2px solid black" pl="2px">
                  <Text> 00Days:00Hours:00Mins:00Sec</Text>
                </Box>
              </Box>
              <Box w="250px !important" h="250px" mt="90px" position="relative">
                <Image
                  src="/fashion_5_7420671d-4419-4d03-9a42-f60b47ec1345_1024x1024.png"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge
                  ml="1"
                  variant="subtle"
                  color="green"
                  position="absolute"
                  top="14px"
                  left="14px"
                >
                  New
                </Badge>
                <Text>BOUDIN ANDOU BUALO</Text>
                <Heading as="h1">$ 111</Heading>
                <Rating ratingValue={5} size={22} /* Available Props */ />
                <Box w="250px" border=" 2px solid black" pl="2px">
                  <Text> 00Days:00Hours:00Mins:00Sec</Text>
                </Box>
              </Box>
              <Box
                w="250px !important"
                h="250px"
                bg="blue"
                mt="90px"
                position="relative"
              >
                <Image
                  src="/fashion_7_270x.png"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge
                  ml="1"
                  variant="subtle"
                  color="green"
                  position="absolute"
                  top="14px"
                  left="14px"
                >
                  New
                </Badge>
                <Text>BOUDIN ANDOU BUALO</Text>
                <Heading as="h1">$ 111</Heading>
                <Rating ratingValue={5} size={22} /* Available Props */ />

                <Box w="250px" border=" 2px solid black" pl="2px">
                  <Text> 00Days:00Hours:00Mins:00Sec</Text>
                </Box>
              </Box>
              <Box w="250px !important" h="250px" mt="90px" position="relative">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge
                  ml="1"
                  variant="subtle"
                  color="green"
                  position="absolute"
                  top="14px"
                  left="14px"
                >
                  New
                </Badge>
                <Text>BOUDIN ANDOU BUALO</Text>
                <Heading as="h1">$ 111</Heading>
                <Rating ratingValue={5} size={22} /* Available Props */ />
                <Box w="250px" border=" 2px solid black" pl="2px">
                  <Text> 00Days:00Hours:00Mins:00Sec</Text>
                </Box>
              </Box>
              <Box
                w="250px !important"
                h="250px"
                bg="blue"
                mt="90px"
                position="relative"
              >
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge
                  ml="1"
                  variant="solid"
                  fontSize="50px"
                  bg="#53d542"
                  color="#53d542"
                  position="absolute"
                  top="14px"
                  left="14px"
                >
                  New
                </Badge>
                <Text>BOUDIN ANDOU BUALO</Text>
                <Heading as="h1"> $ 111</Heading>
                <Rating
                  ratingValue={5}
                  size={22}
                  readonly={true} /* Available Props */
                />
                <Box w="250px" border=" 2px solid black" pl="2px">
                  <Text> 00Days:00Hours:00Mins:00Sec</Text>
                </Box>
              </Box>
            </Slider>
          </Box>
          <Box h="220px" mt="35px" border="3px solid black">
            <Heading as="h2">Fashion</Heading>
            <Slider {...settings}>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
              </Box>
              <Box w="90px !important" h="90px" mt="15px">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
            </Slider>
          </Box>
          <Box height="440px" mt="35px" border="3px solid black">
            <Tabs>
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Slider {...settings}>
              <Box w="250px !important" h="250px" mt="90px">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
                <Model />
              </Box>
              <Box w="250px !important" h="250px" mt="90px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
              </Box>
              <Box w="250px !important" h="250px" mt="90px">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Box>
              <Box w="250px !important" h="250px" mt="90px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
              </Box>
              <Box w="250px !important" h="250px" mt="90px">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
              </Box>
              <Box w="250px !important" h="250px" mt="90px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="250px"
                  alt="test"
                />
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Box>
            </Slider>
          </Box>
          <Box h="220px" mt="35px" border="3px solid black">
            <Heading as="h2">Top Collection</Heading>
            <Slider {...settings}>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
                <Badge variant="outline" colorScheme="green">
                  Default
                </Badge>
              </Box>
              <Box w="90px !important" h="90px" mt="15px">
                <Image
                  src="/donwload1.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
              <Box w="250px !important" h="250px" mt="15px">
                <Image
                  src="/bucket.jpeg"
                  w="250px !important"
                  h="90px"
                  alt="test"
                />
              </Box>
            </Slider>
          </Box>
          <Box h="450px" mt="35px" border="3px solid black"></Box>
        </Box>
      </Box>
    </>
  );
}

export default Subbody;
