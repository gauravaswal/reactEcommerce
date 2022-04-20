import React from 'react'
import {
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Text,
    Heading,
    Image,
    StackDivider,
    VStack

} from '@chakra-ui/react'

export default function ReturnFocus(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    return (
        <>
            <Button onClick={onOpen}>ADD TO CART</Button>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent maxW={"1030px"}>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Box height="500px" bg="gray"> */}
                        <Box mx="auto" height="560px" >
                            <Box display="flex" pt="50px" gap={"31px"}>
                                <Box w="40%" bg="blue" h="450px">
                                <Image src="/donwload1.jpeg"  w="100%" h="480px"alt="test" />

                                </Box>
                                <Box w="70%" h="350px">
                                    <Text fontSize={"30px"} fontWeight={"15px!important"} color={"#222"}>SPICY JALAPE IRURE</Text>
                                    <VStack
                                        divider={<StackDivider borderColor="gray.200" />}
                                        spacing={4}
                                        align="stretch"
                                    >
                                        <Box h="40px">
                                            <Text color={"#222"}>AVAILABILITY: In stock</Text>
                                        </Box>
                                        <Box h="40px">
                                            <Text color={"#222"}>PRODUCT TYPE: Amazon</Text>
                                        </Box>
                                        <Box h="40px">
                                            <Text color={"#222"}>VENDOR: Furnicom</Text>
                                        </Box>
                                        <Box h="40px" >
                                            <Text color={"#222"}>$245.00</Text>
                                        </Box>
                                        <Box h="80px" >
                                            <Text color={"#222"}>
                                                Curabitur egestas malesuada volutpat. Nunc vel vestibulum
                                                odio, ac pellentesque lacus. Pellentesque dapibus nunc nec
                                                est imperdiet, a malesuada sem rutrum. Sed..
                                            </Text>
                                        </Box>
                                        <Button>
                                            ADD TO CART
                                        </Button>
                                    </VStack>
                                </Box>
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
