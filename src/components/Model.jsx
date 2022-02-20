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
    Text

} from '@chakra-ui/react'

export default function ReturnFocus(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia omnis ipsa quod veritatis iusto hic corporis dolor unde voluptatum deserunt vero cumque quidem aut, doloremque, inventore quo veniam blanditiis non.
                        </Text>
                        {/* <Lorem count={2} /> */}
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
