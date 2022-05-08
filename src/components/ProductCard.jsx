import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Rating } from "react-simple-star-rating";

const ProductCard = (props) => {
  const { image } = props;
  return (
    <Box
      maxW="272px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
    >
      <Image src={image} alt="image" />
      <Badge
        variant="subtle"
        color="green"
        position="absolute"
        top="14px"
        left="14px"
      >
        New
      </Badge>
      <VStack
        spacing="12px"
        alignItems="flex-start"
        cw="full"
        my="12px"
        mx="10px"
      >
        <Text fontSize="16px">Horem porch anim</Text>
        <Heading as="h1" fontSize="16px">
          $ 111
        </Heading>
        <Flex>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {34} reviews
            </Box>
          </Box>
          {/* <Rating ratingValue={5} size={22} /> */}
        </Flex>
        <Flex w="250px" mx="auto" borderWidth="1px" pl="2px">
          <Text mx="auto"> 00Days:00Hours:00Mins:00Sec</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProductCard;
